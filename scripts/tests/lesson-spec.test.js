const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { compileLesson, validateLesson } = require("../../core/lesson-spec.js");

const root = path.resolve(__dirname, "../..");
const catalog = readJson("authoring/catalogs/carry-v1.json");
const matrixLesson = readJson("authoring/lessons/linear-algebra/matrix-multiplication.carry.json");
const longAddition = readJson("authoring/examples/arithmetic/long-addition.carry.json");
const separable = readJson("authoring/examples/differential-equations/separable-equation.carry.json");

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
}

test("CLS compiles rich lesson content into an existing matrix workspace", () => {
  const result = validateLesson(matrixLesson, { catalog });
  assert.deepEqual(result.issues, []);

  const compiled = compileLesson(matrixLesson, {
    catalog,
    source: "authoring/lessons/linear-algebra/matrix-multiplication.carry.json"
  });
  assert.deepEqual(compiled.target, { kind: "section", section: "linear-algebra" });
  assert.equal(compiled.workspace.type, "matrix-operation");
  assert.equal(compiled.workspace.responseContract.kind, "matrix");
  assert.match(compiled.workspace.intro[1], /<math>m\\times n<\/math>/);
  assert.equal(compiled.workspace.figureCaption, "Each product entry comes from one row-column dot product.");
  assert.equal(compiled.workspace.problems.length, 8);
  assert.deepEqual(compiled.workspace.problems[0].left, [[1, 2], [3, 4]]);
});

test("CLS supports digit-grid and derivation response contracts without layout data", () => {
  const addition = compileLesson(longAddition, { catalog });
  assert.deepEqual(addition.target, { kind: "long-operation", key: "additionWorkspace" });
  assert.equal(addition.workspace.type, "addition");
  assert.equal(addition.workspace.problem.top, 486);

  const derivation = compileLesson(separable, { catalog });
  assert.equal(derivation.workspace.type, "guided-derivation");
  assert.equal(derivation.workspace.responseContract.kind, "derivation");
  assert.deepEqual(derivation.workspace.problems[0].rows[1].left.answers, ["dy/y", "(1/y)dy"]);
  assert.equal(derivation.workspace.problems[0].rows[1].left.math, "\\frac{1}{y}\\,dy");
});

test("CLS rejects raw markup, unknown figures, and author-supplied responsive layout", () => {
  const unsafe = structuredClone(matrixLesson);
  unsafe.learn.core[0].runs[0].text = "<strong>Do this</strong>";
  unsafe.learn.figure.id = "invented-figure";
  unsafe.practice.response.width = 320;

  const result = validateLesson(unsafe, { catalog });
  assert.equal(result.valid, false);
  assert.ok(result.issues.some((issue) => issue.includes("raw markup is not allowed")));
  assert.ok(result.issues.some((issue) => issue.includes("unknown v1 figure")));
  assert.ok(result.issues.some((issue) => issue.includes("response.width")));
});

test("CLS rejects incompatible matrices before they reach the learner", () => {
  const invalid = structuredClone(matrixLesson);
  invalid.practice.problems[0].givens.right = [[1, 2, 3]];
  const result = validateLesson(invalid, { catalog });
  assert.equal(result.valid, false);
  assert.ok(result.issues.some((issue) => issue.includes("matching inner dimensions")));
});
