// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["precalculus"] = window.CarryPractice.sections["precalculus"] || {};
  window.CarryPractice.sections["precalculus"]["precalculus.polynomial-rational"] = {
  "id": "precalculus.polynomial-rational",
  "topic": "Precalculus",
  "title": "Polynomial and rational functions",
  "type": "concept",
  "figure": "precalc-polynomial-rational",
  "intro": [
    "Polynomials are built from powers of x with number coefficients.",
    "The degree is the highest power with a nonzero coefficient.",
    "Rational functions are ratios of polynomials and may have restrictions."
  ],
  "problems": [
    {
      "prompt": "What is the degree of p(x) = 4x^3 - x + 8?",
      "answer": "3",
      "hint": "Look for the highest exponent on x.",
      "label": "polynomial degree"
    },
    {
      "prompt": "What x-value makes x - 2 equal zero?",
      "answer": "2",
      "hint": "Solve x - 2 = 0.",
      "label": "linear factor zero"
    },
    {
      "prompt": "For r(x) = 1/(x - 4), what value is not allowed?",
      "answer": "4",
      "hint": "The denominator cannot equal zero.",
      "label": "rational restriction"
    }
  ]
};
})();
