// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["linear-algebra"] = window.CarryPractice.sections["linear-algebra"] || {};
  window.CarryPractice.sections["linear-algebra"]["linear-algebra.matrices"] = {
  "id": "linear-algebra.matrices",
  "topic": "Linear Algebra",
  "title": "Matrices",
  "type": "concept",
  "figure": "linear-matrices",
  "intro": [
    "A matrix is a rectangular array of numbers.",
    "Rows run horizontally and columns run vertically.",
    "Matrix-vector multiplication combines columns according to the vector entries."
  ],
  "problems": [
    {
      "prompt": "A matrix with 2 rows and 3 columns has what size?",
      "answer": "2x3",
      "answers": [
        "2x3",
        "2×3",
        "2by3"
      ],
      "hint": "Write rows by columns.",
      "label": "matrix size"
    },
    {
      "prompt": "For the matrix [[1, 2], [3, 4]], what is the entry in row 2, column 1?",
      "answer": "3",
      "hint": "Row 2 is [3, 4]; column 1 is the first entry.",
      "label": "matrix entry"
    },
    {
      "prompt": "Compute [[1, 0], [0, 1]] times (5, 7).",
      "answer": "(5,7)",
      "answers": [
        "(5,7)",
        "5,7"
      ],
      "hint": "The identity matrix leaves the vector unchanged.",
      "label": "identity matrix"
    }
  ]
};
})();
