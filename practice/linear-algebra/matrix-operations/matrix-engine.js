// Shared model engine for guided matrix arithmetic. The DOM renderer lives in app.js;
// this file owns dimensions, results, sequencing, and the mathematical context for each entry.
(function exposeMatrixOperations(root, factory) {
  const api = factory();
  root.CarryMatrixOperations = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis, function createMatrixOperationsEngine() {
  function dimensions(matrix) {
    return { rows: matrix.length, cols: matrix[0]?.length || 0 };
  }

  function assertRectangular(matrix, label) {
    const { rows, cols } = dimensions(matrix);
    if (!rows || !cols || matrix.some((row) => row.length !== cols)) {
      throw new Error(`${label} must be a nonempty rectangular matrix.`);
    }
  }

  function resultFor(problem) {
    const left = problem.left;
    const right = problem.right;
    assertRectangular(left, "Left matrix");
    assertRectangular(right, "Right matrix");
    const leftSize = dimensions(left);
    const rightSize = dimensions(right);

    if (problem.operation === "add" || problem.operation === "subtract") {
      if (leftSize.rows !== rightSize.rows || leftSize.cols !== rightSize.cols) {
        throw new Error("Matrix addition and subtraction require equal dimensions.");
      }
      const sign = problem.operation === "add" ? 1 : -1;
      return left.map((row, rowIndex) => row.map((value, colIndex) => (
        value + sign * right[rowIndex][colIndex]
      )));
    }

    if (problem.operation !== "multiply") throw new Error(`Unknown matrix operation: ${problem.operation}`);
    if (leftSize.cols !== rightSize.rows) {
      throw new Error("Matrix multiplication requires the left column count to match the right row count.");
    }
    return Array.from({ length: leftSize.rows }, (_, rowIndex) => (
      Array.from({ length: rightSize.cols }, (_, colIndex) => (
        left[rowIndex].reduce((sum, value, innerIndex) => sum + value * right[innerIndex][colIndex], 0)
      ))
    ));
  }

  function signed(value) {
    return value < 0 ? `(${value})` : String(value);
  }

  function entryContext(problem, row, col, answer) {
    if (problem.operation === "multiply") {
      const terms = problem.left[row].map((value, index) => `${signed(value)}\\cdot${signed(problem.right[index][col])}`);
      return {
        sourceLeft: problem.left[row].map((_, index) => [row, index]),
        sourceRight: problem.right.map((_, index) => [index, col]),
        calculation: `${terms.join("+")}=${answer}`,
        hint: `Multiply across row ${row + 1} and down column ${col + 1}, then add the products.`
      };
    }

    const leftValue = problem.left[row][col];
    const rightValue = problem.right[row][col];
    const operator = problem.operation === "add" ? "+" : "-";
    return {
      sourceLeft: [[row, col]],
      sourceRight: [[row, col]],
      calculation: `${signed(leftValue)}${operator}${signed(rightValue)}=${answer}`,
      hint: `${problem.operation === "add" ? "Add" : "Subtract"} the entries in row ${row + 1}, column ${col + 1}.`
    };
  }

  function buildModel(problem) {
    const result = resultFor(problem);
    const cells = [];
    let sequence = 0;

    result.forEach((row, rowIndex) => {
      row.forEach((answer, colIndex) => {
        const context = entryContext(problem, rowIndex, colIndex, answer);
        cells.push({
          id: `${problem.id}-result-${rowIndex}-${colIndex}`,
          row: rowIndex,
          col: colIndex,
          kind: "matrixEntry",
          expected: String(answer),
          answers: [String(answer)],
          sequence,
          label: `Find result entry in row ${rowIndex + 1}, column ${colIndex + 1}`,
          hint: context.hint,
          math: String(answer),
          inputMode: "text",
          capabilities: [
            `linear-algebra.matrix-${problem.operation}`,
            problem.operation === "multiply" ? "linear-algebra.row-column-product" : "linear-algebra.entrywise-operation"
          ],
          ...context
        });
        sequence += 1;
      });
    });

    return { ...problem, result, cells };
  }

  return { buildModel, dimensions, resultFor };
});
