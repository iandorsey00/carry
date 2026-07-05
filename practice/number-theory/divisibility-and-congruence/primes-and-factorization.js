// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["number-theory"] = window.CarryPractice.sections["number-theory"] || {};
  window.CarryPractice.sections["number-theory"]["number-theory.primes"] = {
  "id": "number-theory.primes",
  "topic": "Number Theory",
  "title": "Primes and factorization",
  "type": "concept",
  "figure": "number-primes",
  "intro": [
    "Primes are the numbers that cannot be built by multiplying smaller ones — arithmetic's raw ingredients.",
    "The definition is strict: exactly two positive factors, 1 and the number itself.",
    "The fundamental theorem of arithmetic says every whole number above 1 is a product of primes in exactly one way."
],
  "problems": [
    {
      "prompt": "Is 17 prime?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "17 is not divisible by 2, 3, or 5.",
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
      "prompt": "Is 21 prime?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "21 = 3 × 7.",
      "label": "composite check",
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
      "prompt": "Write 12 as a product of primes.",
      "answer": "2*2*3",
      "answers": [
        "2*2*3",
        "2×2×3",
        "2^2*3",
        "2^2×3"
      ],
      "hint": "12 = 4 × 3, and 4 = 2 × 2.",
      "label": "prime factorization"
    },
    {
      "prompt": "Is 2 the only even prime?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Every other even number is divisible by 2.",
      "label": "even prime",
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
      "prompt": "Is 1 a prime number?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "It has only one positive factor, not two.",
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
    },
    {
      "prompt": "What is the prime factorization of 30?",
      "answer": "2 × 3 × 5",
      "answers": [
        "2 × 3 × 5",
        "2*3*5",
        "2x3x5"
      ],
      "hint": "Three small primes multiply to 30.",
      "label": "factor 30",
      "choices": [
        {
          "value": "2 × 3 × 5",
          "label": "2 × 3 × 5"
        },
        {
          "value": "2 × 15",
          "label": "2 × 15"
        },
        {
          "value": "3 × 10",
          "label": "3 × 10"
        },
        {
          "value": "5 × 6",
          "label": "5 × 6"
        }
      ]
    },
    {
      "prompt": "Is 91 prime?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Try 7: it goes in 13 times.",
      "label": "ninety one",
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
      "prompt": "How many prime numbers are there?",
      "answer": "infinitely many",
      "answers": [
        "infinitely many",
        "infinite"
      ],
      "hint": "Euclid proved the list never ends.",
      "label": "infinitude",
      "choices": [
        {
          "value": "infinitely many",
          "label": "infinitely many"
        },
        {
          "value": "exactly 25",
          "label": "exactly 25"
        },
        {
          "value": "finitely many",
          "label": "finitely many"
        }
      ]
    }

  ]
};
})();
