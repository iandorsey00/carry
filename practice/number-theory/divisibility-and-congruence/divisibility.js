// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["number-theory"] = window.CarryPractice.sections["number-theory"] || {};
  window.CarryPractice.sections["number-theory"]["number-theory.divisibility"] = {
  "id": "number-theory.divisibility",
  "topic": "Number Theory",
  "title": "Divisibility",
  "type": "concept",
  "figure": "number-divisibility",
  "intro": [
    "Divisibility is the whole numbers' idea of a perfect fit: a divides b when nothing is left over.",
    "Every divisibility fact is a multiplication fact in reverse: 4 divides 20 because 20 = 4 × 5.",
    "The bar notation <math>a | b</math> says a divides b — the quiet backbone of factors, primes, and remainders."
],
  "problems": [
    {
      "prompt": "Does 4 divide 20?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "20 = 4 × 5.",
      "label": "divides twenty",
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
    },
    {
      "prompt": "Does 6 divide 20?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "20 divided by 6 leaves a remainder.",
      "label": "does not divide twenty",
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
    },
    {
      "prompt": "If 3 | 18, what does the vertical bar mean?",
      "answer": "divides",
      "answers": [
        "divides",
        "divides evenly"
      ],
      "hint": "Read 3 | 18 as 3 divides 18.",
      "label": "divisibility symbol",
      "choices": [
        {
          "value": "divides",
          "label": "divides"
        },
        {
          "value": "≡",
          "label": "≡"
        },
        {
          "value": "≤",
          "label": "≤"
        },
        {
          "value": "≥",
          "label": "≥"
        }
      ]
    }
  ]
};
})();
