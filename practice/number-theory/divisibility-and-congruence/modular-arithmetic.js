// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["number-theory"] = window.CarryPractice.sections["number-theory"] || {};
  window.CarryPractice.sections["number-theory"]["number-theory.modular-arithmetic"] = {
  "id": "number-theory.modular-arithmetic",
  "topic": "Number Theory",
  "title": "Modular arithmetic",
  "type": "concept",
  "figure": "number-modular",
  "intro": [
    "Modular arithmetic keeps only what survives division: the remainder.",
    "Working mod n, numbers that differ by a multiple of n count as the same number.",
    "This remainder world has its own consistent addition and multiplication — small, closed, and everywhere in computing."
],
  "problems": [
    {
      "prompt": "What is 14 mod 5?",
      "answer": "4",
      "hint": "14 = 5 × 2 + 4.",
      "label": "mod remainder"
    },
    {
      "prompt": "On a 12-hour clock, 10 + 5 lands on what hour?",
      "answer": "3",
      "hint": "15 wraps around to 3.",
      "label": "clock arithmetic"
    },
    {
      "prompt": "In mod 7 arithmetic, is 9 equivalent to 2?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "9 and 2 differ by 7.",
      "label": "mod equivalence",
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
      "prompt": "What is 17 mod 6?",
      "answer": "5",
      "hint": "17 = 6 × 2 + 5.",
      "label": "mod remainder",
      "feedback": "Find the remainder after division."
    },
    {
      "prompt": "On a 12-hour clock, 8 + 7 lands on what hour?",
      "answer": "3",
      "hint": "15 wraps around to 3.",
      "label": "clock arithmetic",
      "feedback": "Subtract 12 after passing 12."
    },
    {
      "prompt": "In mod 5 arithmetic, is 12 equivalent to 2?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "12 and 2 differ by 10.",
      "label": "mod equivalence",
      "feedback": "Numbers are equivalent mod n when their difference is divisible by n.",
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
      "prompt": "What is (6 + 7) mod 10?",
      "answer": "3",
      "answers": [
        "3",
        "three"
      ],
      "hint": "13 wraps once around 10.",
      "label": "mod addition",
      "choices": [
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "13",
          "label": "13"
        },
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "7",
          "label": "7"
        }
      ]
    },
    {
      "prompt": "What is (4 × 5) mod 6?",
      "answer": "2",
      "answers": [
        "2",
        "two"
      ],
      "hint": "20 = 3 × 6 + 2.",
      "label": "mod multiplication",
      "choices": [
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "20",
          "label": "20"
        },
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "0",
          "label": "0"
        }
      ]
    }

  ]
};
})();
