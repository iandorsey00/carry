const test = require("node:test");
const assert = require("node:assert/strict");
const lessonSpec = require("../../core/lesson-spec.js");
const { MAX_HISTORY, compileSource, normalizeState } = require("../../authoring/lesson-builder.js");

const catalog = require("../../authoring/catalogs/carry-v1.json");
const lesson = require("../../authoring/examples/arithmetic/long-addition.carry.json");

test("Lesson Studio compiles valid CLS without executing authored content", () => {
  const result = compileSource(JSON.stringify(lesson), { compiler: lessonSpec, catalog });
  assert.equal(result.ok, true);
  assert.equal(result.compiled.workspace.type, "addition");
  assert.equal(result.compiled.workspace.authoring.source, "Carry Lesson Studio");
});

test("Lesson Studio reports invalid JSON and schema issues", () => {
  assert.match(compileSource("{", { compiler: lessonSpec, catalog }).issues[0], /Invalid JSON/);
  const invalid = { ...lesson, practice: { ...lesson.practice, response: { ...lesson.practice.response, width: 900 } } };
  const result = compileSource(JSON.stringify(invalid), { compiler: lessonSpec, catalog });
  assert.equal(result.ok, false);
  assert.ok(result.issues.some((issue) => issue.includes("layout belongs to the responsive Carry renderer")));
});

test("Lesson Studio normalizes and caps local history", () => {
  const history = Array.from({ length: MAX_HISTORY + 5 }, (_, index) => ({
    id: String(index),
    lessonId: `lesson.${index}`,
    title: `Lesson ${index}`,
    compiledAt: "2026-07-19T12:00:00.000Z",
    source: "{}",
    output: "{}"
  }));
  const state = normalizeState({ version: 99, draft: "draft", history });
  assert.equal(state.version, 1);
  assert.equal(state.history.length, MAX_HISTORY);
});
