import assert from "node:assert/strict";
import { cp, mkdtemp, readFile, rm, symlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { test } from "node:test";
import { validatePackage } from "./package.mjs";

const example = name => new URL(`../examples/${name}/`, import.meta.url);

async function fixture(t, name) {
  const sandbox = await mkdtemp(path.join(tmpdir(), "education-spec-"));
  t.after(() => rm(sandbox, { recursive: true, force: true }));
  const directory = path.join(sandbox, "course");
  await cp(example(name), directory, { recursive: true });
  return { sandbox, directory };
}

for (const name of ["recall", "astronomy", "guided-math"]) {
  test(`${name} validates independently of Carry`, async () => {
    const result = await validatePackage(example(name));
    assert.deepEqual(result.issues, []);
    assert.equal(result.valid, true);
  });
}

test("checks question references and scoring", async t => {
  const { directory } = await fixture(t, "astronomy");
  const file = path.join(directory, "questions.json");
  const bank = JSON.parse(await readFile(file, "utf8"));
  bank.items[0].explanationCard = "missing";
  bank.items[0].parts[0].correct = ["absent"];
  bank.items[0].parts[0].options[1].label = bank.items[0].parts[0].options[0].label.toUpperCase();
  await writeFile(file, JSON.stringify(bank));

  const result = await validatePackage(directory);
  assert.equal(result.valid, false);
  assert.match(result.issues.join("\n"), /Unknown explanation card "missing"/);
  assert.match(result.issues.join("\n"), /Unknown correct option "absent"/);
  assert.match(result.issues.join("\n"), /Duplicate option labels/);
});

for (const [source, expected] of [
  ["id: duplicate\nid: original\n", /unique/i],
  ["id: &name original\n", /anchors/i],
  ["id: !!str original\n", /explicit tags/i],
  ["id: *name\n", /aliases/i],
  ["id: .inf\n", /representable as JSON/i]
]) {
  test(`rejects YAML authoring input: ${source.trim()}`, async t => {
    const { directory } = await fixture(t, "recall");
    await writeFile(path.join(directory, "animals.yaml"), source);
    const result = await validatePackage(directory);
    assert.equal(result.valid, false);
    assert.match(result.issues.join("\n"), expected);
  });
}

test("rejects traversal and outside symlinks", async t => {
  const { sandbox, directory } = await fixture(t, "guided-math");
  const outside = path.join(sandbox, "outside.md");
  await writeFile(outside, "# Outside");
  await symlink(outside, path.join(directory, "linked.md"), "file");

  const file = path.join(directory, "course.json");
  const course = JSON.parse(await readFile(file, "utf8"));
  const blocks = course.lessons[0].cards[0].blocks;
  blocks[0].src = "../outside.md";
  blocks[1].fallback = "linked.md";
  await writeFile(file, JSON.stringify(course));

  const result = await validatePackage(directory);
  assert.equal(result.valid, false);
  assert.match(result.issues.join("\n"), /no traversal/);
  assert.match(result.issues.join("\n"), /outside the course directory/);
});
