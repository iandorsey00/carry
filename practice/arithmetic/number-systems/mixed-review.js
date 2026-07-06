// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.mixed-review"] = {
  "id": "arithmetic.mixed-review",
  "topic": "Arithmetic",
  "title": "Mixed review",
  "type": "concept",
  "figure": "mixed-review",
  "intro": [
    "Mixed review asks you to choose the operation and method.",
    "Estimate first when the numbers are large.",
    "Check whether the result is reasonable before moving on."
  ],
  "problems": [
    {
      "prompt": "What is 38 + 47?",
      "answer": "85",
      "hint": "Add ones, then tens.",
      "label": "mixed addition"
    },
    {
      "prompt": "What is 9 x 12?",
      "answer": "108",
      "hint": "9 x 10 plus 9 x 2.",
      "label": "mixed multiplication"
    },
    {
      "prompt": "Use long division for 144 / 12.",
      "answer": "12",
      "hint": "Open the long division workspace if you want the full written method.",
      "label": "mixed division",
      "workspaceId": "arithmetic.long-division.3x1",
      "top": 144,
      "bottom": 12
    },
    {
      "prompt": "What is 100 - 37?",
      "answer": "63",
      "answers": [
        "63"
      ],
      "hint": "Count up from 37 to 100.",
      "label": "subtract",
      "choices": [
        {
          "value": "63",
          "label": "63"
        },
        {
          "value": "73",
          "label": "73"
        },
        {
          "value": "63.5",
          "label": "63.5"
        },
        {
          "value": "67",
          "label": "67"
        }
      ]
    },
    {
      "prompt": "What is 7 × 8?",
      "answer": "56",
      "answers": [
        "56"
      ],
      "hint": "A classic times-table fact.",
      "label": "times table",
      "choices": [
        {
          "value": "56",
          "label": "56"
        },
        {
          "value": "54",
          "label": "54"
        },
        {
          "value": "48",
          "label": "48"
        },
        {
          "value": "64",
          "label": "64"
        }
      ]
    },
    {
      "prompt": "What is 91 ÷ 7?",
      "answer": "13",
      "answers": [
        "13"
      ],
      "hint": "7 × 13 lands on 91.",
      "label": "divide ninety one",
      "choices": [
        {
          "value": "13",
          "label": "13"
        },
        {
          "value": "12",
          "label": "12"
        },
        {
          "value": "14",
          "label": "14"
        },
        {
          "value": "11",
          "label": "11"
        }
      ]
    },
    {
      "prompt": "What is 250 + 175?",
      "answer": "425",
      "answers": [
        "425"
      ],
      "hint": "Add hundreds, then the rest.",
      "label": "add hundreds",
      "choices": [
        {
          "value": "425",
          "label": "425"
        },
        {
          "value": "415",
          "label": "415"
        },
        {
          "value": "425.5",
          "label": "425.5"
        },
        {
          "value": "435",
          "label": "435"
        }
      ]
    },
    {
      "prompt": "What is double 45?",
      "answer": "90",
      "answers": [
        "90"
      ],
      "hint": "Two 45s.",
      "label": "double",
      "choices": [
        {
          "value": "90",
          "label": "90"
        },
        {
          "value": "80",
          "label": "80"
        },
        {
          "value": "95",
          "label": "95"
        },
        {
          "value": "9",
          "label": "9"
        }
      ]
    }

  ]
};
})();
