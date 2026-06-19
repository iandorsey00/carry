// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["prealgebra"] = window.CarryPractice.sections["prealgebra"] || {};
  window.CarryPractice.sections["prealgebra"]["prealgebra.exponents"] = {
  "id": "prealgebra.exponents",
  "topic": "Pre-Algebra",
  "title": "Exponents",
  "type": "concept",
  "figure": "exponent-stack",
  "intro": [
    "An exponent tells how many times to use the base as a factor.",
    "Powers of 10 shift place value.",
    "Keep the base and exponent roles distinct."
  ],
  "problems": [
    {
      "prompt": "Evaluate 2^5.",
      "answer": "32",
      "hint": "2 x 2 x 2 x 2 x 2 = 32.",
      "label": "power value"
    },
    {
      "prompt": "Write 10 x 10 x 10 as a power.",
      "answer": "10^3",
      "answers": [
        "10^3",
        "10³"
      ],
      "hint": "There are three factors of 10.",
      "label": "power notation"
    },
    {
      "prompt": "Evaluate 3^2 + 4.",
      "answer": "13",
      "hint": "Square 3 first, then add 4.",
      "label": "exponent expression value"
    }
  ]
};
})();
