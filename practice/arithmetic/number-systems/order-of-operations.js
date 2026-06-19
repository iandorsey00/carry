// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.order-of-operations"] = {
  "id": "arithmetic.order-of-operations",
  "topic": "Arithmetic",
  "title": "Order of operations",
  "type": "concept",
  "figure": "operation-order",
  "intro": [
    "Parentheses come before multiplication, division, addition, and subtraction.",
    "Multiplication and division are handled from left to right.",
    "Addition and subtraction are handled from left to right after that."
  ],
  "problems": [
    {
      "prompt": "Evaluate 3 + 4 x 5.",
      "answer": "23",
      "hint": "Multiply before adding.",
      "label": "expression value"
    },
    {
      "prompt": "Evaluate (3 + 4) x 5.",
      "answer": "35",
      "hint": "Parentheses go first.",
      "label": "parentheses value"
    },
    {
      "prompt": "Evaluate 18 / 3 + 2.",
      "answer": "8",
      "hint": "Divide first, then add.",
      "label": "division before addition"
    }
  ]
};
})();
