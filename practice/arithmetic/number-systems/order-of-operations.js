// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.order-of-operations"] = {
  "id": "arithmetic.order-of-operations",
  "topic": "Arithmetic",
  "title": "Order of operations",
  "type": "concept",
  "figure": "operation-order",
  "intro": [
    "Parentheses come before multiplication, division, addition, and subtraction.",
    "Multiplication and division are handled from left to right.",
    "Addition and subtraction are handled from left to right after that."
  ],
  "problems": [
    {
      "prompt": "Evaluate 3 + 4 x 5.",
      "answer": "23",
      "hint": "Multiply before adding.",
      "label": "expression value"
    },
    {
      "prompt": "Evaluate (3 + 4) x 5.",
      "answer": "35",
      "hint": "Parentheses go first.",
      "label": "parentheses value"
    },
    {
      "prompt": "Evaluate 18 / 3 + 2.",
      "answer": "8",
      "hint": "Divide first, then add.",
      "label": "division before addition"
    },
    {
      "prompt": "Evaluate 2 + 3².",
      "answer": "11",
      "answers": [
        "11"
      ],
      "hint": "The power comes before the addition.",
      "label": "power first",
      "choices": [
        {
          "value": "11",
          "label": "11"
        },
        {
          "value": "25",
          "label": "25"
        },
        {
          "value": "10",
          "label": "10"
        },
        {
          "value": "13",
          "label": "13"
        }
      ]
    },
    {
      "prompt": "Evaluate (8 - 3) × 2.",
      "answer": "10",
      "answers": [
        "10"
      ],
      "hint": "Parentheses first.",
      "label": "parens first",
      "choices": [
        {
          "value": "10",
          "label": "10"
        },
        {
          "value": "13",
          "label": "13"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "16",
          "label": "16"
        }
      ]
    },
    {
      "prompt": "Evaluate 20 - 2 × 5.",
      "answer": "10",
      "answers": [
        "10"
      ],
      "hint": "Multiply before subtracting.",
      "label": "multiply first",
      "choices": [
        {
          "value": "10",
          "label": "10"
        },
        {
          "value": "90",
          "label": "90"
        },
        {
          "value": "15",
          "label": "15"
        },
        {
          "value": "8",
          "label": "8"
        }
      ]
    },
    {
      "prompt": "Evaluate 16 ÷ (2 + 2).",
      "answer": "4",
      "answers": [
        "4"
      ],
      "hint": "Settle the parentheses before dividing.",
      "label": "divide after parens",
      "choices": [
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "10",
          "label": "10"
        },
        {
          "value": "8",
          "label": "8"
        },
        {
          "value": "2",
          "label": "2"
        }
      ]
    },
    {
      "prompt": "Evaluate 4 + 6 ÷ 2.",
      "answer": "7",
      "answers": [
        "7"
      ],
      "hint": "Division outranks addition.",
      "label": "divide first",
      "choices": [
        {
          "value": "7",
          "label": "7"
        },
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "10",
          "label": "10"
        },
        {
          "value": "8",
          "label": "8"
        }
      ]
    }

  ]
};
})();
