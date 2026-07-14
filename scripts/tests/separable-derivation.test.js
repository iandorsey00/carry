const test = require("node:test");
const assert = require("node:assert/strict");
const engine = require("../../courses/differential-equations/workspaces/guided-derivation.js");

function loadSeparableWorkspace() {
  const priorWindow = global.window;
  global.window = {
    CarryGuidedDerivation: engine,
    CarryPractice: {
      sections: {
        "differential-equations": {
          "differential-equations.separable": {
            id: "differential-equations.separable",
            title: "Separable equations"
          }
        }
      }
    }
  };
  const modulePath = require.resolve("../../courses/differential-equations/workspaces/separable.js");
  delete require.cache[modulePath];
  require(modulePath);
  const workspace = global.window.CarryPractice.sections["differential-equations"]["differential-equations.separable"];
  global.window = priorWindow;
  return workspace;
}

test("every guided separable problem declares a solvable contract and verification", () => {
  const workspace = loadSeparableWorkspace();
  assert.ok(workspace.problems.length >= 9);
  for (const problem of workspace.problems) {
    assert.ok(["explicit", "implicit"].includes(problem.solutionForm), problem.id);
    assert.ok(problem.integrationMethod, problem.id);
    assert.ok(problem.domain, problem.id);
    assert.ok(Array.isArray(problem.equilibriumSolutions), problem.id);
    assert.ok(problem.rows.some((row) => row.id === "verify"), problem.id);
  }
});

test("u-substitution is an optional five-step scaffold", () => {
  const workspace = loadSeparableWorkspace();
  const problem = workspace.problems.find((item) => item.id === "sep-u-sub-cosine");
  const model = engine.buildModel(problem);
  const integral = model.cells.find((cell) => cell.id === "sep-u-sub-cosine-evaluate-right");

  assert.equal(problem.integrationMethod, "u-substitution");
  assert.equal(integral.scaffold.title, "Use u-substitution");
  assert.deepEqual(integral.scaffold.steps.map((step) => step.answer), [
    "x^2",
    "2x dx",
    "int cos(u) du",
    "sin(u)+C",
    "sin(x^2)+C"
  ]);
});

test("initial condition is applied after converting to a multiplicative constant", () => {
  const workspace = loadSeparableWorkspace();
  const problem = workspace.problems.find((item) => item.id === "sep-initial-value");
  const rowIds = problem.rows.map((row) => row.id);

  assert.ok(rowIds.indexOf("family") < rowIds.indexOf("constant"));
  assert.ok(rowIds.indexOf("constant") < rowIds.indexOf("solve"));
  assert.equal(problem.rows.find((row) => row.id === "family").right.answer, "Ce^x");
  assert.equal(problem.rows.find((row) => row.id === "constant").right.answer, "3");
});
