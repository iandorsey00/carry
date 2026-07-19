const test = require("node:test");
const assert = require("node:assert/strict");
const { buildModel, resultFor } = require("../../practice/linear-algebra/matrix-operations/matrix-engine.js");

test("adds and subtracts matrices entry by entry", () => {
  assert.deepEqual(resultFor({ operation: "add", left: [[1, -2], [3, 4]], right: [[5, 2], [-1, 6]] }), [[6, 0], [2, 10]]);
  assert.deepEqual(resultFor({ operation: "subtract", left: [[1, -2], [3, 4]], right: [[5, 2], [-1, 6]] }), [[-4, -4], [4, -2]]);
});

test("multiplies compatible matrices with row-column products", () => {
  const model = buildModel({
    id: "matrix-test",
    operation: "multiply",
    left: [[1, 2, -1], [0, 3, 4]],
    right: [[2, 1], [-1, 5], [3, 0]]
  });

  assert.deepEqual(model.result, [[-3, 11], [9, 15]]);
  assert.equal(model.cells.length, 4);
  assert.deepEqual(model.cells.map((cell) => cell.sequence), [0, 1, 2, 3]);
  assert.deepEqual(model.cells[0].sourceLeft, [[0, 0], [0, 1], [0, 2]]);
  assert.deepEqual(model.cells[0].sourceRight, [[0, 0], [1, 0], [2, 0]]);
  assert.equal(model.cells[0].calculation, "1\\cdot2+2\\cdot(-1)+(-1)\\cdot3=-3");
});

test("rejects incompatible matrix dimensions", () => {
  assert.throws(
    () => resultFor({ operation: "add", left: [[1, 2]], right: [[1], [2]] }),
    /equal dimensions/
  );
  assert.throws(
    () => resultFor({ operation: "multiply", left: [[1, 2]], right: [[1, 2]] }),
    /left column count/
  );
});
