// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.decimals"] = {
  "id": "arithmetic.decimals",
  "topic": "Arithmetic",
  "title": "Decimals",
  "type": "concept",
  "figure": "decimal-grid",
  "intro": [
    "Decimals extend place value to the right of the ones place.",
    "Tenths are one place after the decimal point.",
    "Hundredths are two places after the decimal point."
  ],
  "problems": [
    {
      "prompt": "What is 0.4 + 0.7?",
      "answer": "1.1",
      "hint": "Four tenths plus seven tenths is eleven tenths.",
      "label": "decimal sum"
    },
    {
      "prompt": "Write 3 tenths as a decimal.",
      "answer": "0.3",
      "hint": "Tenths use one digit after the decimal point.",
      "label": "tenths decimal"
    },
    {
      "prompt": "Which is larger: 0.8 or 0.75?",
      "answer": "0.8",
      "hint": "0.8 is the same as 0.80.",
      "label": "larger decimal",
      "choices": [
        {
          "value": "0.8",
          "label": "0.8"
        },
        {
          "value": "0.75",
          "label": "0.75"
        }
      ]
    },
    {
      "prompt": "What is 0.25 + 0.50?",
      "answer": "0.75",
      "answers": [
        "0.75",
        ".75"
      ],
      "hint": "Add hundredths: 25 hundredths plus 50 hundredths.",
      "label": "decimal sum",
      "feedback": "Line up place values before adding."
    },
    {
      "prompt": "Write 7 hundredths as a decimal.",
      "answer": "0.07",
      "answers": [
        "0.07",
        ".07"
      ],
      "hint": "Hundredths use two places after the decimal point.",
      "label": "hundredths decimal",
      "feedback": "Hundredths need two decimal places."
    },
    {
      "prompt": "Which is larger: 0.62 or 0.7?",
      "answer": "0.7",
      "answers": [
        "0.7",
        "0.70"
      ],
      "hint": "0.7 is the same as 0.70.",
      "label": "larger decimal",
      "feedback": "Compare using the same number of decimal places.",
      "choices": [
        {
          "value": "0.62",
          "label": "0.62"
        },
        {
          "value": "0.7",
          "label": "0.7"
        }
      ]
    },
    {
      "prompt": "What is 3.4 - 1.2?",
      "answer": "2.2",
      "hint": "Subtract tenths from tenths and ones from ones.",
      "label": "decimal difference",
      "feedback": "Line up the decimal points."
    },
    {
      "prompt": "What is 0.9 × 10?",
      "answer": "9",
      "answers": [
        "9",
        "9.0"
      ],
      "hint": "Multiplying by ten shifts the decimal point right.",
      "label": "shift right",
      "choices": [
        {
          "value": "9",
          "label": "9"
        },
        {
          "value": "0.09",
          "label": "0.09"
        },
        {
          "value": "90",
          "label": "90"
        },
        {
          "value": "9.9",
          "label": "9.9"
        }
      ]
    }

  ]
};
})();
