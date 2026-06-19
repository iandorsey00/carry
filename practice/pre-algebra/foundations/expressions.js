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
    },
    {
      "prompt": "Simplify: 4y + 2y.",
      "answer": "6y",
      "hint": "Both terms are y terms.",
      "label": "combined expression",
      "feedback": "Only combine terms with the same variable part."
    },
    {
      "prompt": "Simplify: 8m - 3m + 2.",
      "answer": "5m+2",
      "answers": [
        "5m+2",
        "2+5m"
      ],
      "hint": "Combine the m terms and keep the constant.",
      "label": "combined expression",
      "feedback": "Constants and variable terms are different kinds of terms."
    },
    {
      "prompt": "Evaluate 2p + 5 when p = 6.",
      "answer": "17",
      "hint": "2 times 6 plus 5.",
      "label": "expression value",
      "feedback": "Substitute first, then follow order of operations."
    },
    {
      "prompt": "Simplify: 3a + 4 + a + 6.",
      "answer": "4a+10",
      "answers": [
        "4a+10",
        "10+4a"
      ],
      "hint": "Combine a terms, then constants.",
      "label": "combined expression",
      "feedback": "Group like terms before adding."
    }
  ]
};
})();
