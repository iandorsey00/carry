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
  assert.equal(derivation.workspace.authoring.engine, "equation-transform");
  assert.equal(derivation.workspace.responseContract.kind, "transformation");
  assert.deepEqual(derivation.workspace.objectives, [
    "Recognize a separable differential equation.",
    "Collect each variable beside its differential.",
    "Write the two integrals before evaluating them."
  ]);
  assert.deepEqual(derivation.workspace.requires, ["calculus.integration", "calculus.chain-rule"]);
  assert.deepEqual(derivation.workspace.figureParams, { equation: "\\frac{dy}{dx}=3xy", coefficient: 3 });
  assert.equal(derivation.workspace.problems[0].difficulty, 2);
  assert.equal(derivation.workspace.problems[0].rows[1].transformation.operation, "separate-variables");
  assert.deepEqual(derivation.workspace.problems[0].rows[1].left.answers, ["dy/y", "(1/y)dy"]);
  assert.equal(derivation.workspace.problems[0].rows[1].left.math, "\\frac{1}{y}\\,dy");
  assert.equal(derivation.workspace.problems[0].rows[1].left.hints.length, 3);
  assert.equal(derivation.workspace.problems[0].rows[1].left.misconceptions[0].matches, "y dy");
});

test("CLS keeps earlier v1 derivation lessons valid", () => {
  const legacy = structuredClone(separable);
  delete legacy.objectives;
  delete legacy.requires;
  delete legacy.teaches;
  delete legacy.learn.figure.params;
  legacy.practice.engine = "guided-derivation";
  legacy.practice.response.kind = "derivation";
  delete legacy.practice.problems[0].difficulty;
  delete legacy.practice.problems[0].transformations;
  for (const row of legacy.practice.problems[0].givens.rows) {
    for (const side of [row.left, row.right]) {
      if (side.kind !== "slot") continue;
      if (typeof side.hint === "object") side.hint = side.hint.level1;
      delete side.misconceptions;
    }
  }

  const result = validateLesson(legacy, { catalog });
  assert.deepEqual(result.issues, []);
  const compiled = compileLesson(legacy, { catalog });
  assert.equal(compiled.workspace.authoring.engine, "guided-derivation");
  assert.equal(compiled.workspace.problems[0].rows[1].left.hints.length, 1);
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

test("CLS rejects unreviewed figure parameters and transformations", () => {
  const invalid = structuredClone(separable);
  invalid.learn.figure.params.unreviewed = true;
  invalid.learn.figure.params.coefficient = "3";
  invalid.practice.problems[0].transformations[0].operation = "teleport-terms";
  invalid.practice.problems[0].transformations[1].to = "missing-row";

  const result = validateLesson(invalid, { catalog });
  assert.equal(result.valid, false);
  assert.ok(result.issues.some((issue) => issue.includes("learn.figure.params.unreviewed")));
  assert.ok(result.issues.some((issue) => issue.includes("learn.figure.params.coefficient") && issue.includes("finite number")));
  assert.ok(result.issues.some((issue) => issue.includes("unknown transformation teleport-terms")));
  assert.ok(result.issues.some((issue) => issue.includes("must identify a derivation row")));
});

test("CLS enforces engine response and transformation boundaries", () => {
  const wrongResponse = structuredClone(separable);
  wrongResponse.practice.response.kind = "matrix";
  let result = validateLesson(wrongResponse, { catalog });
  assert.equal(result.valid, false);
  assert.ok(result.issues.some((issue) => issue.includes("expected transformation for this engine")));

  const missingTransformations = structuredClone(separable);
  delete missingTransformations.practice.problems[0].transformations;
  result = validateLesson(missingTransformations, { catalog });
  assert.equal(result.valid, false);
  assert.ok(result.issues.some((issue) => issue.includes("required for the equation-transform engine")));

  const wrongEngine = structuredClone(separable);
  wrongEngine.practice.engine = "guided-derivation";
  wrongEngine.practice.response.kind = "derivation";
  result = validateLesson(wrongEngine, { catalog });
  assert.equal(result.valid, false);
  assert.ok(result.issues.some((issue) => issue.includes("only allowed for the equation-transform engine")));
});

test("CLS requires a complete adjacent transformation chain", () => {
  const invalid = structuredClone(separable);
  invalid.practice.problems[0].transformations = [
    { operation: "integrate-both-sides", from: "start", to: "integrals" },
    { operation: "integrate-both-sides", from: "start", to: "integrals" }
  ];

  const result = validateLesson(invalid, { catalog });
  assert.equal(result.valid, false);
  assert.ok(result.issues.some((issue) => issue.includes("immediately before")));
  assert.ok(result.issues.some((issue) => issue.includes("duplicates an existing transformation edge")));
  assert.ok(result.issues.some((issue) => issue.includes("missing a transformation to row separate")));

  const selfReference = structuredClone(separable);
  selfReference.practice.problems[0].transformations[0].to = "start";
  const selfResult = validateLesson(selfReference, { catalog });
  assert.equal(selfResult.valid, false);
  assert.ok(selfResult.issues.some((issue) => issue.includes("must differ from from")));
});

test("CLS rejects justification aliases, unknown capabilities, unsafe strings, and missing required figure params", () => {
  const invalid = structuredClone(separable);
  invalid.requires = ["calculus.typo"];
  invalid.practice.problems[0].transformations[0] = {
    justification: "separate-variables",
    from: "start",
    to: "separate"
  };
  invalid.practice.problems[0].givens.rows[1].left.accepted = ["<b>dy/y</b>"];
  const strictCatalog = structuredClone(catalog);
  strictCatalog.figures["diff-eq-separable"].params.equation.required = true;
  delete invalid.learn.figure.params.equation;

  const result = validateLesson(invalid, { catalog: strictCatalog });
  assert.equal(result.valid, false);
  assert.ok(result.issues.some((issue) => issue.includes("unknown capability calculus.typo")));
  assert.ok(result.issues.some((issue) => issue.includes("justification") && issue.includes("not part")));
  assert.ok(result.issues.some((issue) => issue.includes("raw markup is not allowed in math source")));
  assert.ok(result.issues.some((issue) => issue.includes("learn.figure.params.equation") && issue.includes("required")));
});
