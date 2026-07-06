// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.integers"] = {
  "id": "arithmetic.integers",
  "topic": "Arithmetic",
  "title": "Integers",
  "type": "concept",
  "figure": "integer-line",
  "intro": [
    "Integers include positive numbers, zero, and negative numbers.",
    "On a number line, moving right increases the value and moving left decreases it.",
    "Subtraction can be understood as distance and direction."
  ],
  "problems": [
    {
      "prompt": "What is -3 + 8?",
      "answer": "5",
      "hint": "Start at -3 and move 8 steps right.",
      "label": "integer sum"
    },
    {
      "prompt": "What is 4 - 9?",
      "answer": "-5",
      "hint": "You move 9 steps left from 4.",
      "label": "integer difference"
    },
    {
      "prompt": "Which is greater: -2 or -7?",
      "answer": "-2",
      "hint": "The greater number is farther right on the number line.",
      "label": "greater integer",
      "choices": [
        {
          "value": "-2",
          "label": "-2"
        },
        {
          "value": "-7",
          "label": "-7"
        }
      ]
    },
    {
      "prompt": "What is -6 × -3?",
      "answer": "18",
      "answers": [
        "18"
      ],
      "hint": "Two negatives multiply to a positive.",
      "label": "double negative",
      "choices": [
        {
          "value": "18",
          "label": "18"
        },
        {
          "value": "-18",
          "label": "-18"
        },
        {
          "value": "9",
          "label": "9"
        },
        {
          "value": "-9",
          "label": "-9"
        }
      ]
    },
    {
      "prompt": "What is -15 ÷ 3?",
      "answer": "-5",
      "answers": [
        "-5"
      ],
      "hint": "Different signs divide to a negative.",
      "label": "signed division",
      "choices": [
        {
          "value": "-5",
          "label": "-5"
        },
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "-45",
          "label": "-45"
        },
        {
          "value": "12",
          "label": "12"
        }
      ]
    },
    {
      "prompt": "What is the absolute value of -7?",
      "answer": "7",
      "answers": [
        "7",
        "seven"
      ],
      "hint": "Distance from zero ignores direction.",
      "label": "absolute value",
      "choices": [
        {
          "value": "7",
          "label": "7"
        },
        {
          "value": "-7",
          "label": "-7"
        },
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "14",
          "label": "14"
        }
      ]
    },
    {
      "prompt": "What is 0 - 8?",
      "answer": "-8",
      "answers": [
        "-8"
      ],
      "hint": "Taking 8 from nothing goes below zero.",
      "label": "below zero",
      "choices": [
        {
          "value": "-8",
          "label": "-8"
        },
        {
          "value": "8",
          "label": "8"
        },
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "-80",
          "label": "-80"
        }
      ]
    },
    {
      "prompt": "What is -1 + -1?",
      "answer": "-2",
      "answers": [
        "-2"
      ],
      "hint": "Two steps left of zero.",
      "label": "add negatives",
      "choices": [
        {
          "value": "-2",
          "label": "-2"
        },
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "-1",
          "label": "-1"
        }
      ]
    }

  ]
};
})();
