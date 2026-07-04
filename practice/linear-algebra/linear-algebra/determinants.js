// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["linear-algebra"] = window.CarryPractice.sections["linear-algebra"] || {};
  window.CarryPractice.sections["linear-algebra"]["linear-algebra.determinants"] = {
  "id": "linear-algebra.determinants",
  "topic": "Linear Algebra",
  "title": "Determinants",
  "type": "concept",
  "figure": "linear-determinants",
  "intro": [
    "The determinant compresses a whole transformation into one number: the factor by which it scales area or volume.",
    "A negative value means the transformation also flips orientation; zero means space was flattened and information was lost.",
    "For a 2 × 2 matrix the number is ad - bc, and the matrix is invertible exactly when it is not zero."
],
  "problems": [
    {
      "prompt": "For [[2, 0], [0, 3]], what is the determinant?",
      "answer": "6",
      "hint": "The scaling factors are 2 and 3, so area scales by 2 times 3.",
      "label": "diagonal determinant"
    },
    {
      "prompt": "For [[1, 2], [3, 4]], compute ad - bc.",
      "answer": "-2",
      "hint": "Compute 1 times 4 minus 2 times 3.",
      "label": "two by two determinant"
    },
    {
      "prompt": "If a determinant is 0, is the matrix invertible?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Zero determinant means information is flattened.",
      "label": "invertibility check",
      "choices": [
        {
          "value": "yes",
          "label": "Yes"
        },
        {
          "value": "no",
          "label": "No"
        }
      ]
    }
  ]
};
})();
