// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["algebra"] = window.CarryPractice.sections["algebra"] || {};
  window.CarryPractice.sections["algebra"]["algebra.polynomials"] = {
  "id": "algebra.polynomials",
  "topic": "Algebra",
  "title": "Polynomials",
  "type": "concept",
  "figure": "polynomial-terms",
  "intro": [
    "Polynomials are sums of terms with whole-number powers of a variable.",
    "Like terms have the same variable and exponent.",
    "The degree is the largest exponent after the polynomial is simplified."
  ],
  "problems": [
    {
      "prompt": "Combine like terms: 3x^2 + 2x + 5x^2.",
      "answer": "8x^2+2x",
      "answers": [
        "8x^2+2x",
        "2x+8x^2"
      ],
      "hint": "Combine the x^2 terms and keep the x term.",
      "label": "combined polynomial"
    },
    {
      "prompt": "What is the degree of 4x^3 - x + 7?",
      "answer": "3",
      "hint": "Look for the largest exponent.",
      "label": "polynomial degree"
    },
    {
      "prompt": "Evaluate x^2 + 2x when x = 3.",
      "answer": "15",
      "hint": "3^2 + 2(3) = 9 + 6.",
      "label": "polynomial value"
    }
  ]
};
})();
