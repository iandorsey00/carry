import { createHash } from "node:crypto";
import { readFile, realpath } from "node:fs/promises";
import path from "node:path";
import MarkdownIt from "markdown-it";
import { packageFile, validatePackage } from "../toolkit/package.mjs";
import { guidedAddition } from "./guided-addition.mjs";

const MAX_EMBEDDED_BYTES = 32 * 1024 * 1024;
const MAX_MARKDOWN_BYTES = 1024 * 1024;
const MEDIA_TYPES = new Map([
  [".png", "image/png"], [".jpg", "image/jpeg"], [".jpeg", "image/jpeg"],
  [".gif", "image/gif"], [".webp", "image/webp"], [".avif", "image/avif"],
  [".pdf", "application/pdf"], [".mp3", "audio/mpeg"], [".ogg", "audio/ogg"],
  [".wav", "audio/wav"], [".m4a", "audio/mp4"], [".mp4", "video/mp4"],
  [".webm", "video/webm"], [".vtt", "text/vtt"]
]);
const md = new MarkdownIt({ html: false });
const [script, style] = await Promise.all(
  ["interaction.js", "reader.css"].map(file => readFile(new URL(file, import.meta.url), "utf8"))
);
const hash = createHash("sha256").update(script, "utf8").digest("base64");
const escape = md.utils.escapeHtml;
const cardAnchor = id => `card-${id}`;

function safeReference(source, target) {
  try {
    const decoded = decodeURIComponent(target);
    const relative = path.posix.normalize(path.posix.join(path.posix.dirname(source), decoded));
    if (!decoded || /^[a-z][a-z\d+.-]*:/i.test(decoded) || /[\\:#?]/.test(decoded) ||
        decoded.startsWith("/") || relative === ".." || relative.startsWith("../")) return null;
    return relative;
  } catch {
    return null;
  }
}

function createRenderer(root, cardsByDocument) {
  const embedded = new Map();
  let embeddedBytes = 0;

  async function embed(src) {
    if (embedded.has(src)) return embedded.get(src);
    const type = MEDIA_TYPES.get(path.extname(src).toLowerCase());
    if (!type) throw new Error(`Unsupported asset type: ${src}`);
    const { file, size } = await packageFile(root, src);
    if (embeddedBytes + size > MAX_EMBEDDED_BYTES) {
      throw new Error("The offline reader can embed up to 32 MiB of media.");
    }
    const payload = await readFile(file);
    const url = `data:${type};base64,${payload.toString("base64")}`;
    embeddedBytes += payload.length;
    embedded.set(src, url);
    return url;
  }

  async function markdown(src, context) {
    const { file, size } = await packageFile(root, src);
    if (size > MAX_MARKDOWN_BYTES) throw new Error(`Markdown file exceeds 1 MiB: ${src}`);
    const tokens = md.parse(await readFile(file, "utf8"), {});
    if (context?.title && tokens[0]?.tag === "h1" && tokens[1]?.content === context.title) {
      tokens.splice(0, 3);
    }
    for (const token of tokens) {
      if (/^h[1-6]$/.test(token.tag)) token.tag = `h${Math.min(6, Number(token.tag[1]) + 2)}`;
    }
    for (const group of tokens) {
      if (!group.children) continue;
      const links = [];
      for (const token of group.children) {
        if (token.type === "link_open") {
          const href = token.attrGet("href");
          const relative = safeReference(src, href);
          const target = cardsByDocument.get(relative);
          const extension = relative && path.extname(relative).toLowerCase();
          const canDownload = extension && extension !== ".vtt" && MEDIA_TYPES.has(extension);
          if (target) token.attrSet("href", `#${target}`);
          else if (canDownload) {
            token.attrSet("href", await embed(relative));
            token.attrSet("download", path.posix.basename(relative));
          } else if (!/^https?:\/\//i.test(href)) {
            token.tag = "span";
            token.attrs = [];
          }
          links.push(token.tag);
        } else if (token.type === "link_close") {
          token.tag = links.pop();
        } else if (token.type === "image") {
          const relative = safeReference(src, token.attrGet("src"));
          if (relative && MEDIA_TYPES.get(path.extname(relative).toLowerCase())?.startsWith("image/")) {
            token.attrSet("src", await embed(relative));
          } else {
            token.type = "text";
            token.content = md.renderer.renderInlineAsText(token.children, md.options, {});
          }
        }
      }
    }
    const content = md.renderer.render(tokens, md.options, {});
    if (!context) return content;
    const target = cardsByDocument.get(src);
    const anchor = target === context.anchor ? ` id="${target}" tabindex="-1"` : "";
    return `<div class="reading"${anchor}>${content}</div>`;
  }

  async function media(block, language) {
    const url = await embed(block.src);
    const description = escape(block.description);
    if (block.kind === "image") return `<figure><img src="${url}" alt="${description}"></figure>`;
    if (block.kind === "pdf") {
      return `<p><a class="media-link" href="${url}" download="${escape(path.basename(block.src))}">${description} (PDF)</a></p>`;
    }
    const captions = block.captions
      ? `<track kind="captions" srclang="${escape(language)}" src="${await embed(block.captions)}" label="Captions">`
      : "";
    return `<figure>
  <figcaption>${description}</figcaption>
  <${block.kind} src="${url}" controls preload="metadata" aria-label="${description}">${captions}</${block.kind}>
  <details><summary>Transcript</summary>${await markdown(block.transcript)}</details>
</figure>`;
  }

  return { markdown, media };
}

function questionPart(part, id, inline, shuffle) {
  const feedback = escape(part.feedback ?? "");
  const hint = part.hint ? `<details><summary>Hint</summary><p>${escape(part.hint)}</p></details>` : "";
  const result = `<p class="result" role="status" id="${id}-result"></p>`;
  if (part.kind === "exact-text") {
    const control = `<input type="text" id="${id}" autocomplete="off" spellcheck="false" aria-describedby="${id}-result">`;
    const label = `<label class="${inline ? "sr-only" : "answer-label"}" for="${id}">${escape(part.label)}</label>`;
    return {
      control: label + control,
      attributes: `data-input="${id}" data-normalization="${part.normalization}" data-accepted="${escape(JSON.stringify(part.accepted))}"`,
      notes: hint + result,
      feedback
    };
  }
  const type = part.kind === "single-choice" ? "radio" : "checkbox";
  return {
    control: `<fieldset aria-describedby="${id}-result">
  <legend>${escape(part.label)}</legend>
  <div class="options"${shuffle ? " data-shuffle" : ""}>${part.options.map(option =>
    `<label class="option"><input type="${type}" name="${id}" value="${option.id}"><span>${escape(option.label)}</span></label>`
  ).join("")}</div>
</fieldset>`,
    attributes: `data-input="${id}" data-correct="${part.correct.join(" ")}"`,
    notes: hint + result,
    feedback
  };
}

function question(item, id, shuffle) {
  const parts = item.parts.map((part, index) => {
    const inline = part.kind === "exact-text" && item.prompt.includes(`{{${part.id}}}`);
    return { inline, part, ...questionPart(part, `${id}-${index}`, inline, shuffle) };
  });
  const controls = new Map(parts.map(part => [
    part.part.id,
    part.inline ? part.control : escape(`[${part.part.label}]`)
  ]));
  const prompt = item.prompt.split(/(\{\{[^{}]*\}\})/g).map(segment => {
    const id = segment.startsWith("{{") && segment.endsWith("}}") ? segment.slice(2, -2) : "";
    return controls.get(id) ?? escape(segment);
  }).join("");
  return `<form class="question" aria-labelledby="${id}-prompt">
  <p class="prompt" id="${id}-prompt">${prompt}</p>
  ${parts.map(part => `<div class="part" ${part.attributes} data-feedback="${part.feedback}">${part.inline ? "" : part.control}${part.notes}</div>`).join("")}
  <div class="question-actions">
    <button type="submit">Check</button>
    ${item.explanationCard ? `<a class="explanation" href="#${cardAnchor(item.explanationCard)}">Review explanation</a>` : ""}
  </div>
</form>`;
}

export async function renderCourse(directory) {
  const root = await realpath(directory);
  const { valid, issues, course, banks } = await validatePackage(root);
  if (!valid) throw new Error(issues.join("\n"));
  const cards = course.lessons.flatMap(lesson => lesson.cards.map(card => ({ lesson, card })));
  const documents = new Map();
  for (const [index, { card }] of cards.entries()) {
    for (const [blockIndex, block] of card.blocks.entries()) {
      const source = block.type === "markdown" ? block.src : block.fallback;
      if (source && !documents.has(source)) documents.set(source, `reading-${index}-${blockIndex}`);
    }
  }
  const renderer = createRenderer(root, documents);
  const sections = [];
  for (const [index, { card, lesson }] of cards.entries()) {
    const blocks = [];
    for (const [blockIndex, block] of card.blocks.entries()) {
      const context = { anchor: `reading-${index}-${blockIndex}`, title: card.title };
      switch (block.type) {
        case "markdown":
          blocks.push(await renderer.markdown(block.src, context));
          break;
        case "media":
          blocks.push(await renderer.media(block, course.language));
          break;
        case "widget": {
          const activity = await guidedAddition(root, block, `activity-${index}-${blockIndex}`);
          const fallback = `<section class="fallback">${await renderer.markdown(block.fallback, context)}</section>`;
          // Keep the reading target available to direct links even when the widget runs.
          blocks.push(activity + fallback);
          break;
        }
        case "questions":
          blocks.push(block.items.map((id, itemIndex) =>
            question(banks.get(block.bank).get(id), `q-${index}-${blockIndex}-${itemIndex}`, block.shuffleOptions)
          ).join("\n"));
          break;
      }
    }
    const previous = index > 0 ? `<a href="#${cardAnchor(cards[index - 1].card.id)}">Previous</a>` : "";
    const next = index < cards.length - 1
      ? `<a class="primary" href="#${cardAnchor(cards[index + 1].card.id)}">Next</a>` : "";
    sections.push(`<article class="card" id="${cardAnchor(card.id)}">
  <header class="card-header">
    <p class="eyebrow">${escape(lesson.title)} <span aria-hidden="true"> / </span> <span>${index + 1} of ${cards.length}</span></p>
    <h2 tabindex="-1">${escape(card.title)}</h2>
  </header>
  <div class="content">${blocks.join("\n")}</div>
  ${previous || next ? `<nav class="card-nav" aria-label="Course navigation">${previous}${next}</nav>` : ""}
</article>`);
  }
  const toc = cards.length > 1 ? `<details class="contents"><summary>Contents</summary>
  <nav aria-label="Contents"><ol>${cards.map(({ card }) =>
    `<li><a href="#${cardAnchor(card.id)}">${escape(card.title)}</a></li>`
  ).join("")}</ol></nav>
</details>` : "";
  return `<!doctype html>
<html lang="${escape(course.language)}">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'sha256-${hash}'; style-src 'unsafe-inline'; img-src data:; media-src data:; base-uri 'none'; form-action 'none'">
<title>${escape(course.title)}</title>
<style>${style}</style>
<body>
<header class="course-header wrap"><h1>${escape(course.title)}</h1>${toc}</header>
<main class="wrap">${sections.join("\n")}</main>
<script>${script}</script>
</body>
</html>
`;
}
