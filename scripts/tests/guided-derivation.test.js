const test = require("node:test");
const assert = require("node:assert/strict");
const { buildModel, slot } = require("../../courses/differential-equations/workspaces/guided-derivation.js");

test("builds ordered answer cells from staged equation rows", () => {
  const model = buildModel({
    id: "example",
    capabilitiesByStage: { separate: ["differential-equations.separate"] },
    rows: [
      { id: "start", left: "y'", relation: "=", right: "xy" },
      {
        id: "separate",
        left: slot("dy/y", {
          hint: "Move y.",
          hints: ["Collect y terms.", "Divide by y."],
          math: "\\frac{1}{y}dy",
          feedback: "Keep y beside dy.",
          misconceptions: [{ matches: "y dy", feedback: "Divide by y instead." }],
          placeholder: "Separate",
          scaffold: { title: "Use smaller steps", steps: [{ prompt: "Divide by y", answer: "1/y" }] }
        }),
        relation: "=",
        right: slot("x dx")
      }
    ]
  });

  assert.equal(model.cells.length, 2);
  assert.deepEqual(model.cells.map((cell) => cell.sequence), [0, 1]);
  assert.deepEqual(model.cells.map((cell) => cell.col), [2, 4]);
  assert.equal(model.rows[1].leftCellId, "example-separate-left");
  assert.equal(model.cells[0].math, "\\frac{1}{y}dy");
  assert.equal(model.cells[0].feedback, "Keep y beside dy.");
  assert.deepEqual(model.cells[0].hints, ["Collect y terms.", "Divide by y.", "Move y."]);
  assert.equal(model.cells[0].misconceptions[0].matches, "y dy");
  assert.equal(model.cells[0].placeholder, "Separate");
  assert.equal(model.cells[0].scaffold.title, "Use smaller steps");
  assert.equal(model.cells[0].scaffold.steps[0].answer, "1/y");
  assert.deepEqual(model.cells[0].capabilities, ["differential-equations.separate"]);
});
