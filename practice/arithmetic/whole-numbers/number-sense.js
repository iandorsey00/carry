// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.number-sense"] = {
  "id": "arithmetic.number-sense",
  "topic": "Arithmetic",
  "title": "Number sense",
  "type": "concept",
  "figure": "number-line",
  "intro": [
    "Use position, size, and nearby friendly numbers to reason before calculating.",
    "Compare numbers by the largest place where they differ.",
    "Round only when an estimate is enough."
  ],
  "problems": [
    {
      "prompt": "Which is larger: 409 or 490?",
      "answer": "490",
      "hint": "Compare the tens digits after the hundreds match.",
      "label": "larger number",
      "choices": [
        {
          "value": "409",
          "label": "409"
        },
        {
          "value": "490",
          "label": "490"
        }
      ]
    },
    {
      "prompt": "What is 398 closest to: 300, 400, or 500?",
      "answer": "400",
      "hint": "398 is only 2 away from 400.",
      "label": "closest hundred",
      "choices": [
        {
          "value": "300",
          "label": "300"
        },
        {
          "value": "400",
          "label": "400"
        },
        {
          "value": "500",
          "label": "500"
        }
      ]
    },
    {
      "prompt": "Fill the missing number: 125, 150, 175, __.",
      "answer": "200",
      "hint": "Each step adds 25.",
      "label": "next number"
    },
    {
      "prompt": "Which is larger: 681 or 618?",
      "answer": "681",
      "hint": "The hundreds match, so compare the tens digits.",
      "label": "larger number",
      "feedback": "Compare from left to right.",
      "choices": [
        {
          "value": "681",
          "label": "681"
        },
        {
          "value": "618",
          "label": "618"
        }
      ]
    },
    {
      "prompt": "What is 241 closest to: 200, 300, or 400?",
      "answer": "200",
      "hint": "241 is 41 away from 200 and 59 away from 300.",
      "label": "closest hundred",
      "feedback": "Use distance from nearby friendly numbers.",
      "choices": [
        {
          "value": "200",
          "label": "200"
        },
        {
          "value": "300",
          "label": "300"
        },
        {
          "value": "400",
          "label": "400"
        }
      ]
    },
    {
      "prompt": "Fill the missing number: 210, 220, 230, __.",
      "answer": "240",
      "hint": "Each step adds 10.",
      "label": "next number",
      "feedback": "Find the repeated change between terms."
    },
    {
      "prompt": "Which number is between 500 and 600: 489, 531, or 604?",
      "answer": "531",
      "hint": "531 is greater than 500 and less than 600.",
      "label": "number between",
      "feedback": "Check both boundaries.",
      "choices": [
        {
          "value": "489",
          "label": "489"
        },
        {
          "value": "531",
          "label": "531"
        },
        {
          "value": "604",
          "label": "604"
        }
      ]
    },
    {
      "prompt": "Which is smallest: 234, 243, or 324?",
      "answer": "234",
      "answers": [
        "234"
      ],
      "hint": "Compare the tens once the hundreds tie.",
      "label": "smallest",
      "choices": [
        {
          "value": "234",
          "label": "234"
        },
        {
          "value": "243",
          "label": "243"
        },
        {
          "value": "324",
          "label": "324"
        }
      ]
    }

  ]
};
})();
