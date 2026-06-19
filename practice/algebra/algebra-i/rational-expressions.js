// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["algebra"] = window.CarryPractice.sections["algebra"] || {};
  window.CarryPractice.sections["algebra"]["algebra.rational-expressions"] = {
  "id": "algebra.rational-expressions",
  "topic": "Algebra",
  "title": "Rational expressions",
  "type": "concept",
  "figure": "rational-cancel",
  "intro": [
    "A rational expression is a fraction made from algebraic expressions.",
    "Factor first, then cancel common factors.",
    "Values that make the original denominator zero stay excluded."
  ],
  "problems": [
    {
      "prompt": "Simplify: (x^2 - 9) / (x - 3).",
      "answer": "x+3",
      "hint": "Factor the numerator as (x - 3)(x + 3).",
      "label": "simplified rational expression"
    },
    {
      "prompt": "For 1 / (x - 5), what value of x is not allowed?",
      "answer": "5",
      "hint": "The denominator cannot be zero.",
      "label": "excluded value"
    },
    {
      "prompt": "Simplify: 6x / 9.",
      "answer": "2x/3",
      "answers": [
        "2x/3",
        "(2x)/3"
      ],
      "hint": "Divide numerator and denominator by 3.",
      "label": "reduced rational expression"
    }
  ]
};
})();
