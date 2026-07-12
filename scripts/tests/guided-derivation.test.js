const test = require("node:test");
const assert = require("node:assert/strict");
const { buildModel, slot } = require("../../courses/differential-equations/workspaces/guided-derivation.js");

test("builds ordered answer cells from staged equation rows", () => {
  const model = buildModel({
    id: "example",
    rows: [
      { id: "start", left: "y'", relation: "=", right: "xy" },
      { id: "separate", left: slot("dy/y", { hint: "Move y.", math: "\\frac{1}{y}dy" }), relation: "=", right: slot("x dx") }
    ]
  });

  assert.equal(model.cells.length, 2);
  assert.deepEqual(model.cells.map((cell) => cell.sequence), [0, 1]);
  assert.deepEqual(model.cells.map((cell) => cell.col), [2, 4]);
  assert.equal(model.rows[1].leftCellId, "example-separate-left");
  assert.equal(model.cells[0].math, "\\frac{1}{y}dy");
});
