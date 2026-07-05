// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["probability"] = window.CarryPractice.sections["probability"] || {};
  window.CarryPractice.sections["probability"]["probability.sample-spaces"] = {
  "id": "probability.sample-spaces",
  "topic": "Probability",
  "title": "Sample spaces",
  "type": "concept",
  "figure": "probability-sample-space",
  "intro": [
    "A sample space lists every possible outcome.",
    "An event is a subset of the sample space.",
    "Probability starts by naming what can happen."
  ],
  "problems": [
    {
      "prompt": "When flipping one coin, how many outcomes are in the sample space?",
      "answer": "2",
      "hint": "Heads and tails.",
      "label": "coin sample space size"
    },
    {
      "prompt": "For one die, is rolling an even number an outcome or an event?",
      "answer": "event",
      "hint": "It contains several outcomes: 2, 4, and 6.",
      "label": "event meaning",
      "choices": [
        {
          "value": "outcome",
          "label": "outcome"
        },
        {
          "value": "event",
          "label": "event"
        }
      ]
    },
    {
      "prompt": "For one die, how many outcomes are possible?",
      "answer": "6",
      "hint": "A standard die has faces 1 through 6.",
      "label": "die outcomes"
    },
    {
      "prompt": "Flipping two coins: how many outcomes are in the sample space?",
      "answer": "4",
      "answers": [
        "4",
        "four"
      ],
      "hint": "HH, HT, TH, TT.",
      "label": "two coins",
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
          "value": "8",
          "label": "8"
        }
      ]
    },
    {
      "prompt": "Rolling two dice: how many outcomes are in the sample space?",
      "answer": "36",
      "answers": [
        "36"
      ],
      "hint": "6 options for each die, multiplied.",
      "label": "two dice",
      "choices": [
        {
          "value": "36",
          "label": "36"
        },
        {
          "value": "12",
          "label": "12"
        },
        {
          "value": "6",
          "label": "6"
        },
        {
          "value": "11",
          "label": "11"
        }
      ]
    },
    {
      "prompt": "On one six-sided die, the event roll a 7 contains how many outcomes?",
      "answer": "0",
      "answers": [
        "0",
        "zero"
      ],
      "hint": "No face qualifies — the empty event.",
      "label": "empty event",
      "choices": [
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "7",
          "label": "7"
        },
        {
          "value": "6",
          "label": "6"
        }
      ]
    },
    {
      "prompt": "An event containing every outcome has what probability?",
      "answer": "1",
      "answers": [
        "1",
        "one"
      ],
      "hint": "It cannot fail to happen.",
      "label": "certain event",
      "choices": [
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "1/2",
          "label": "1/2"
        }
      ]
    },
    {
      "prompt": "Can an event contain exactly one outcome?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Single-outcome events are the elementary ones.",
      "label": "elementary event",
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
