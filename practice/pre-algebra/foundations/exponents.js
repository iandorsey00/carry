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
    },
    {
      "prompt": "Evaluate 4^2.",
      "answer": "16",
      "hint": "4 squared means 4 x 4.",
      "label": "power value",
      "feedback": "The exponent counts repeated factors, not addition."
    },
    {
      "prompt": "Evaluate 10^4.",
      "answer": "10000",
      "hint": "Use four factors of 10.",
      "label": "power of ten",
      "feedback": "A power of 10 has as many zeros as the exponent."
    },
    {
      "prompt": "Write 5 x 5 x 5 as a power.",
      "answer": "5^3",
      "answers": [
        "5^3",
        "5³"
      ],
      "hint": "There are three factors of 5.",
      "label": "power notation",
      "feedback": "The repeated factor is the base; the count is the exponent."
    },
    {
      "prompt": "Evaluate 2^3 + 1.",
      "answer": "9",
      "hint": "2^3 is 8, then add 1.",
      "label": "exponent expression value",
      "feedback": "Evaluate the exponent before adding."
    }
  ]
};
})();
