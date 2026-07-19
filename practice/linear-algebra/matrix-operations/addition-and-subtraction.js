// Carry practice lesson data. Matrix addition and subtraction share one entrywise workspace.
(function registerMatrixAdditionAndSubtraction() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  const section = window.CarryPractice.sections["linear-algebra"] = window.CarryPractice.sections["linear-algebra"] || {};

  section["linear-algebra.matrix-addition-subtraction"] = {
    id: "linear-algebra.matrix-addition-subtraction",
    topic: "Linear Algebra",
    title: "Matrix addition and subtraction",
    type: "matrix-operation",
    figure: "linear-matrix-addition",
    intro: [
      "Matrices can be added or subtracted only when their shapes match.",
      "Work entry by entry: the entry in row i, column j combines only with the entry in the same position.",
      "Addition and subtraction keep the same number of rows and columns."
    ],
    overview: {
      workedRows: [
        { math: "[[2,-1],[4,3]]+[[5,2],[-1,6]]", note: "Match entries by position." },
        { math: "[[2+5,-1+2],[4+(-1),3+6]]", note: "Do one small calculation in each position." },
        { math: "[[7,1],[3,9]]", note: "The result keeps the original 2 by 2 shape." }
      ],
      studio: ["Follow the highlighted pair of entries.", "Enter only their sum or difference, then continue."],
      applications: ["Combining datasets arranged in the same shape", "Adding forces or transformations component by component"]
    },
    problems: [
      { id: "matrix-add-2x2-a", prompt: "Add the matrices entry by entry.", operation: "add", left: [[2, -1], [4, 3]], right: [[5, 2], [-1, 6]] },
      { id: "matrix-subtract-2x2-a", prompt: "Subtract the second matrix from the first.", operation: "subtract", left: [[9, 4], [2, 7]], right: [[3, 6], [-1, 5]] },
      { id: "matrix-add-2x3", prompt: "Add the two 2 by 3 matrices.", operation: "add", left: [[1, 0, -2], [3, 5, 4]], right: [[6, -3, 2], [-1, 2, 7]] },
      { id: "matrix-subtract-2x3", prompt: "Find the entrywise difference.", operation: "subtract", left: [[8, -2, 5], [0, 3, 9]], right: [[1, 4, -3], [6, -2, 7]] },
      { id: "matrix-add-3x2", prompt: "Combine these matrices by addition.", operation: "add", left: [[2, 1], [-4, 3], [0, 5]], right: [[-2, 6], [7, -1], [8, 2]] },
      { id: "matrix-subtract-negatives", prompt: "Subtract carefully when entries are negative.", operation: "subtract", left: [[-3, 5], [7, -2]], right: [[4, -1], [-5, 6]] },
      { id: "matrix-add-zero", prompt: "Add the zero matrix.", operation: "add", left: [[6, -4], [1, 8]], right: [[0, 0], [0, 0]] },
      { id: "matrix-subtract-self", prompt: "Subtract a matrix from itself.", operation: "subtract", left: [[3, -7], [2, 5]], right: [[3, -7], [2, 5]] }
    ]
  };
})();
