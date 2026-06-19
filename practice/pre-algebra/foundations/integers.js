// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["prealgebra"] = window.CarryPractice.sections["prealgebra"] || {};
  window.CarryPractice.sections["prealgebra"]["prealgebra.integers"] = {
  "id": "prealgebra.integers",
  "topic": "Pre-Algebra",
  "title": "Integers",
  "type": "concept",
  "figure": "integer-line",
  "intro": [
    "Use integers to describe values above and below zero.",
    "Addition and subtraction can be tracked as movement on a number line.",
    "Multiplication and division use sign rules: same signs give positive, different signs give negative."
  ],
  "problems": [
    {
      "prompt": "What is -6 + 14?",
      "answer": "8",
      "hint": "Move 14 steps right from -6.",
      "label": "integer addition"
    },
    {
      "prompt": "What is -4 x 7?",
      "answer": "-28",
      "hint": "Different signs make a negative product.",
      "label": "integer product"
    },
    {
      "prompt": "What is -30 / -5?",
      "answer": "6",
      "hint": "Same signs make a positive quotient.",
      "label": "integer quotient"
    }
  ]
};
})();
