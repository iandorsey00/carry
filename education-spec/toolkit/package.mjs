import { readFile, realpath, stat } from "node:fs/promises";
import path from "node:path";
import Ajv from "ajv/dist/2020.js";
import { parseDocument, visit } from "yaml";

const FORMAT_SCHEMA = JSON.parse(await readFile(
  new URL("../schema/profile-0.1.schema.json", import.meta.url),
  "utf8"
));
const SCHEMA_ID = "urn:carry:education:profile:0.1";
const ajv = new Ajv({ allErrors: true, strictRequired: false });
ajv.addSchema(FORMAT_SCHEMA, SCHEMA_ID);
const checkCourse = ajv.compile({ $ref: `${SCHEMA_ID}#/$defs/course` });
const checkBank = ajv.compile({ $ref: `${SCHEMA_ID}#/$defs/bank` });
const MAX_TEXT_BYTES = 1024 * 1024;
const MEDIA_EXTENSIONS = {
  image: new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif"]),
  pdf: new Set([".pdf"]),
  audio: new Set([".mp3", ".ogg", ".wav", ".m4a"]),
  video: new Set([".mp4", ".webm"])
};

function parseBank(file, source) {
  if (file.endsWith(".json")) return JSON.parse(source);
  const document = parseDocument(source, {
    schema: "core",
    uniqueKeys: true,
    strict: true,
    stringKeys: true,
    version: "1.2"
  });
  if (document.errors.length || document.warnings.length) {
    throw new Error([...document.errors, ...document.warnings].map(issue => issue.message).join("\n"));
  }
  if (document.directives.yaml.version !== "1.2") throw new Error("Use YAML 1.2.");
  visit(document, {
    Node(_key, node) {
      if (node.anchor || node.tag) throw new Error("YAML anchors and explicit tags are not supported.");
    },
    Alias() {
      throw new Error("YAML aliases are not supported.");
    }
  });
  const data = document.toJS({ maxAliasCount: 0 });
  // YAML core permits values such as .inf and .nan that cannot be serialized as JSON.
  JSON.stringify(data, (_key, value) => {
    if (typeof value === "number" && !Number.isFinite(value)) {
      throw new Error("YAML values must be representable as JSON.");
    }
    return value;
  });
  return data;
}

export async function packageFile(root, relative) {
  const segments = relative.split("/");
  if (segments.some(segment => !/^[\w.-][\w. -]*$/.test(segment) ||
    segment === "." || segment === ".." || /[. ]$/.test(segment))) {
    throw new Error("Use a package-relative path with ordinary names and no traversal.");
  }
  const file = await realpath(path.join(root, ...segments));
  const fromRoot = path.relative(root, file);
  if (fromRoot === ".." || fromRoot.startsWith(`..${path.sep}`) || path.isAbsolute(fromRoot)) {
    throw new Error("File resolves outside the course directory.");
  }
  const info = await stat(file);
  if (!info.isFile()) throw new Error("Expected a regular file.");
  return { file, size: info.size };
}

async function readSource(root, relative) {
  const { file, size } = await packageFile(root, relative);
  if (size > MAX_TEXT_BYTES) throw new Error("Source file exceeds 1 MiB.");
  return (await readFile(file, "utf8")).replace(/^\uFEFF/, "");
}

function checkShape(validate, value, file, issue) {
  if (validate(value)) return true;
  for (const error of validate.errors) {
    const at = `${file}${error.instancePath}`;
    const property = error.params.additionalProperty ?? error.params.missingProperty;
    issue(at, property ? `${error.message}: ${property}` : error.message);
  }
  return false;
}

function byId(values, at, issue) {
  const records = new Map();
  for (const value of values) {
    if (records.has(value.id)) issue(at, `Duplicate ID "${value.id}".`);
    else records.set(value.id, value);
  }
  return records;
}

function matchKey(value, policy) {
  const trimmed = value.trim();
  return policy === "trim-ascii-case-insensitive"
    ? trimmed.replace(/[A-Z]/g, letter => letter.toLowerCase())
    : trimmed;
}

function checkParts(item, at, issue) {
  const parts = byId(item.parts, at, issue);
  const markers = [...item.prompt.matchAll(/\{\{([^{}]*)\}\}/g)].map(match => match[1]);
  if (markers.length) {
    if (new Set(markers).size !== markers.length) issue(at, "Response markers must be unique.");
    for (const id of markers) {
      if (!parts.has(id)) issue(at, `Unknown response marker "{{${id}}}".`);
    }
    for (const id of parts.keys()) {
      if (!markers.includes(id)) issue(at, `Missing response marker "{{${id}}}".`);
    }
  }

  for (const part of parts.values()) {
    const where = `${at}/${part.id}`;
    if (part.kind === "exact-text") {
      const keys = part.accepted.map(answer => matchKey(answer, part.normalization));
      if (new Set(keys).size !== keys.length) issue(where, "Duplicate accepted text after normalization.");
      continue;
    }
    const options = byId(part.options, where, issue);
    const labels = part.options.map(option => matchKey(option.label, "trim-ascii-case-insensitive"));
    if (new Set(labels).size !== labels.length) issue(where, "Duplicate option labels.");
    for (const id of part.correct) {
      if (!options.has(id)) issue(where, `Unknown correct option "${id}".`);
    }
    if (part.correct.length >= options.size) issue(where, "Include at least one incorrect option.");
  }
}

async function checkAsset(root, relative, at, issue, kind) {
  try {
    if (kind && !MEDIA_EXTENSIONS[kind].has(path.extname(relative).toLowerCase())) {
      throw new Error(`Unsupported ${kind} file extension.`);
    }
    await packageFile(root, relative);
  } catch (error) {
    issue(at, `${relative}: ${error.code === "ENOENT" ? "File is missing." : error.message}`);
  }
}

export async function validatePackage(directory) {
  const issues = [];
  const issue = (at, message) => issues.push(`${at}: ${message}`);
  let root;
  let course;
  try {
    root = await realpath(directory);
    course = JSON.parse(await readSource(root, "course.json"));
  } catch (error) {
    issue("course.json", error.message);
    return { valid: false, issues };
  }
  if (!checkShape(checkCourse, course, "course.json", issue)) return { valid: false, issues };

  const objectives = byId(course.objectives ?? [], "objectives", issue);
  const lessons = byId(course.lessons, "lessons", issue);
  const cards = byId([...lessons.values()].flatMap(lesson => lesson.cards), "cards", issue);
  const banks = new Map();
  const checkObjectives = (ids, at) => {
    for (const id of ids ?? []) {
      if (!objectives.has(id)) issue(at, `Unknown objective "${id}".`);
    }
  };

  for (const file of course.banks ?? []) {
    try {
      const bank = parseBank(file, await readSource(root, file));
      if (!checkShape(checkBank, bank, file, issue)) continue;
      if (banks.has(bank.id)) {
        issue(file, `Duplicate bank ID "${bank.id}".`);
        continue;
      }
      const items = byId(bank.items, file, issue);
      banks.set(bank.id, items);
      for (const item of items.values()) {
        const at = `${file}/${item.id}`;
        checkObjectives(item.objectives, at);
        if (item.explanationCard && !cards.has(item.explanationCard)) {
          issue(at, `Unknown explanation card "${item.explanationCard}".`);
        }
        checkParts(item, at, issue);
      }
    } catch (error) {
      issue(file, error.message);
    }
  }

  for (const card of cards.values()) {
    checkObjectives(card.objectives, card.id);
    for (const [index, block] of card.blocks.entries()) {
      const at = `${card.id}/blocks/${index}`;
      switch (block.type) {
        case "markdown":
        case "media":
          await checkAsset(root, block.src, at, issue, block.kind);
          if (block.transcript) await checkAsset(root, block.transcript, at, issue);
          if (block.captions) await checkAsset(root, block.captions, at, issue);
          break;
        case "widget":
          await checkAsset(root, block.fallback, at, issue);
          try {
            const config = JSON.parse(await readSource(root, block.config));
            if (config === null || Array.isArray(config) || typeof config !== "object") {
              throw new Error("Expected a JSON object.");
            }
          } catch (error) {
            issue(at, `${block.config}: ${error.message}`);
          }
          break;
        case "questions": {
          const items = banks.get(block.bank);
          if (!items) {
            issue(at, `Unknown bank "${block.bank}".`);
            break;
          }
          for (const id of block.items) {
            if (!items.has(id)) issue(at, `Unknown item "${block.bank}/${id}".`);
          }
          break;
        }
      }
    }
  }

  return issues.length ? { valid: false, issues } : { valid: true, issues, course, banks };
}
