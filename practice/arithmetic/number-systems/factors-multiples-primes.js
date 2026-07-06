// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.factors-multiples-primes"] = {
  "id": "arithmetic.factors-multiples-primes",
  "topic": "Arithmetic",
  "title": "Factors, multiples, primes",
  "type": "concept",
  "figure": "factor-pairs",
  "intro": [
    "Factors divide a number evenly.",
    "Multiples are results of multiplying by whole numbers.",
    "A prime number has exactly two positive factors: 1 and itself."
  ],
  "problems": [
    {
      "prompt": "Is 29 prime? Answer yes or no.",
      "answer": "yes",
      "answers": [
        "yes",
        "y",
        "true"
      ],
      "hint": "29 is not divisible by 2, 3, or 5.",
      "label": "prime check",
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
      "prompt": "Give the missing factor: 6 x __ = 42.",
      "answer": "7",
      "hint": "42 divided by 6 is 7.",
      "label": "missing factor"
    },
    {
      "prompt": "What is the least common multiple of 4 and 6?",
      "answer": "12",
      "hint": "List multiples until they match.",
      "label": "least common multiple"
    },
    {
      "prompt": "How many factors does 10 have?",
      "answer": "4",
      "answers": [
        "4",
        "four"
      ],
      "hint": "They are 1, 2, 5, and 10.",
      "label": "count factors",
      "choices": [
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "5",
          "label": "5"
        }
      ]
    },
    {
      "prompt": "Is 15 a multiple of 5?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "5 × 3 lands exactly on it.",
      "label": "multiple check",
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
      "prompt": "What is the greatest common factor of 8 and 12?",
      "answer": "4",
      "answers": [
        "4",
        "four"
      ],
      "hint": "List the shared factors and take the largest.",
      "label": "gcf",
      "choices": [
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "8",
          "label": "8"
        },
        {
          "value": "24",
          "label": "24"
        }
      ]
    },
    {
      "prompt": "What is the smallest prime number?",
      "answer": "2",
      "answers": [
        "2",
        "two"
      ],
      "hint": "It is also the only even one.",
      "label": "smallest prime",
      "choices": [
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "0",
          "label": "0"
        }
      ]
    },
    {
      "prompt": "Is 1 a prime number?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Primes need exactly two factors; 1 has only one.",
      "label": "one not prime",
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
