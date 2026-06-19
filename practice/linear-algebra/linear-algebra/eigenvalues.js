// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["linear-algebra"] = window.CarryPractice.sections["linear-algebra"] || {};
  window.CarryPractice.sections["linear-algebra"]["linear-algebra.eigenvalues"] = {
  "id": "linear-algebra.eigenvalues",
  "topic": "Linear Algebra",
  "title": "Eigenvalues",
  "type": "concept",
  "figure": "linear-eigenvalues",
  "intro": [
    "An eigenvector keeps its direction under a transformation.",
    "The eigenvalue tells how much that eigenvector is scaled.",
    "Eigenvectors reveal stable directions inside a linear transformation."
  ],
  "problems": [
    {
      "prompt": "If A v = 3v, what is the eigenvalue?",
      "answer": "3",
      "hint": "The eigenvalue is the scale factor multiplying v.",
      "label": "eigenvalue scale"
    },
    {
      "prompt": "For [[2, 0], [0, 5]], what eigenvalue belongs to the x-axis direction?",
      "answer": "2",
      "hint": "The x-coordinate is scaled by 2.",
      "label": "x-axis eigenvalue"
    },
    {
      "prompt": "If a vector changes direction after applying A, is it an eigenvector of A?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Eigenvectors keep direction, though they may scale or reverse.",
      "label": "eigenvector definition"
    }
  ]
};
})();
