// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["prealgebra"] = window.CarryPractice.sections["prealgebra"] || {};
  window.CarryPractice.sections["prealgebra"]["prealgebra.expressions"] = {
  "id": "prealgebra.expressions",
  "topic": "Pre-Algebra",
  "title": "Expressions",
  "type": "concept",
  "figure": "expression-terms",
  "intro": [
    "An expression can contain numbers, variables, and operations.",
    "Like terms have the same variable part.",
    "Simplifying keeps the value the same while making the expression easier to read."
  ],
  "problems": [
    {
      "prompt": "Simplify: 2x + x.",
      "answer": "3x",
      "hint": "Both terms are x terms.",
      "label": "simplified expression"
    },
    {
      "prompt": "Evaluate 3n + 2 when n = 4.",
      "answer": "14",
      "hint": "Replace n with 4, then multiply before adding.",
      "label": "expression value"
    },
    {
      "prompt": "Simplify: 5a + 3 + 2a.",
      "answer": "7a+3",
      "answers": [
        "7a+3",
        "3+7a"
      ],
      "hint": "Combine the a terms and keep the constant.",
      "label": "combined expression"
    }
  ]
};
})();
