// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["linear-algebra"] = window.CarryPractice.sections["linear-algebra"] || {};
  window.CarryPractice.sections["linear-algebra"]["linear-algebra.vectors"] = {
  "id": "linear-algebra.vectors",
  "topic": "Linear Algebra",
  "title": "Vectors",
  "type": "concept",
  "figure": "linear-vectors",
  "intro": [
    "A vector has both size and direction.",
    "In coordinates, vectors add component by component.",
    "Scalar multiplication stretches, shrinks, or reverses a vector."
  ],
  "problems": [
    {
      "prompt": "Add the vectors (2, 3) + (4, 1).",
      "answer": "(6,4)",
      "answers": [
        "(6,4)",
        "6,4"
      ],
      "hint": "Add x-components and y-components separately.",
      "label": "vector addition"
    },
    {
      "prompt": "Compute 3(2, -1).",
      "answer": "(6,-3)",
      "answers": [
        "(6,-3)",
        "6,-3"
      ],
      "hint": "Multiply each component by 3.",
      "label": "scalar multiplication"
    },
    {
      "prompt": "What is the length of the vector (3, 4)?",
      "answer": "5",
      "hint": "Use the distance formula: square, add, then take the square root.",
      "label": "vector length"
    }
  ]
};
})();
