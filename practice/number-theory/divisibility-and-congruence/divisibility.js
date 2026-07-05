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
    },
    {
      "prompt": "Does 7 divide 91?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "91 = 7 × 13.",
      "label": "seven divides",
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
      "prompt": "Does every positive number divide 0?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "0 = a × 0 with nothing left over.",
      "label": "divides zero",
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
      "prompt": "If a divides b and b divides c, does a divide c?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Chains of perfect fits stay perfect.",
      "label": "divisibility chain",
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
      "prompt": "Which fact shows 3 divides 123 without dividing?",
      "answer": "its digits sum to a multiple of 3",
      "answers": [
        "its digits sum to a multiple of 3",
        "digit sum"
      ],
      "hint": "1 + 2 + 3 = 6.",
      "label": "digit test",
      "choices": [
        {
          "value": "its digits sum to a multiple of 3",
          "label": "its digits sum to a multiple of 3"
        },
        {
          "value": "it is odd",
          "label": "it is odd"
        }
      ]
    },
    {
      "prompt": "Does 5 divide 5?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Every number divides itself.",
      "label": "self divides",
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
    }

  ]
};
})();
