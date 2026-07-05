// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["probability"] = window.CarryPractice.sections["probability"] || {};
  window.CarryPractice.sections["probability"]["probability.basic-probability"] = {
  "id": "probability.basic-probability",
  "topic": "Probability",
  "title": "Basic probability",
  "type": "concept",
  "figure": "probability-basic",
  "intro": [
    "Probability compares favorable outcomes to all equally likely outcomes.",
    "A probability of 0 is impossible; a probability of 1 is certain.",
    "Probabilities can be written as fractions, decimals, or percents."
  ],
  "problems": [
    {
      "prompt": "A fair die has 6 outcomes. What is the probability of rolling a 3?",
      "answer": "1/6",
      "hint": "One favorable outcome out of six total outcomes.",
      "label": "single die probability"
    },
    {
      "prompt": "What is the probability of getting heads on a fair coin?",
      "answer": "1/2",
      "answers": [
        "1/2",
        "0.5",
        "50%"
      ],
      "hint": "One favorable outcome out of two.",
      "label": "coin probability"
    },
    {
      "prompt": "If an event is certain, what is its probability?",
      "answer": "1",
      "answers": [
        "1",
        "100%"
      ],
      "hint": "Certain means it always happens.",
      "label": "certain probability"
    },
    {
      "prompt": "What is the probability of rolling a number greater than 4 on a fair die?",
      "answer": "1/3",
      "answers": [
        "1/3",
        "2/6"
      ],
      "hint": "Two faces qualify: 5 and 6.",
      "label": "greater than four",
      "choices": [
        {
          "value": "1/3",
          "label": "1/3"
        },
        {
          "value": "1/2",
          "label": "1/2"
        },
        {
          "value": "1/6",
          "label": "1/6"
        },
        {
          "value": "2/3",
          "label": "2/3"
        }
      ]
    },
    {
      "prompt": "What is the probability of an impossible event?",
      "answer": "0",
      "answers": [
        "0",
        "zero"
      ],
      "hint": "The bottom of the probability scale.",
      "label": "impossible",
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
          "value": "1/2",
          "label": "1/2"
        },
        {
          "value": "-1",
          "label": "-1"
        }
      ]
    },
    {
      "prompt": "A bag holds 3 red and 2 blue marbles. What is P(red)?",
      "answer": "3/5",
      "answers": [
        "3/5",
        "0.6"
      ],
      "hint": "Favorable over total: 3 out of 5.",
      "label": "marble draw",
      "choices": [
        {
          "value": "3/5",
          "label": "3/5"
        },
        {
          "value": "2/5",
          "label": "2/5"
        },
        {
          "value": "1/2",
          "label": "1/2"
        },
        {
          "value": "3/2",
          "label": "3/2"
        }
      ]
    },
    {
      "prompt": "The probabilities of all outcomes in a sample space add up to what?",
      "answer": "1",
      "answers": [
        "1",
        "one"
      ],
      "hint": "Something must happen.",
      "label": "total one",
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
          "value": "100",
          "label": "100"
        },
        {
          "value": "1/2",
          "label": "1/2"
        }
      ]
    },
    {
      "prompt": "If P(rain) = 0.7, what is P(no rain)?",
      "answer": "0.3",
      "answers": [
        "0.3",
        "3/10"
      ],
      "hint": "An event and its complement add to 1.",
      "label": "complement",
      "choices": [
        {
          "value": "0.3",
          "label": "0.3"
        },
        {
          "value": "0.7",
          "label": "0.7"
        },
        {
          "value": "0.5",
          "label": "0.5"
        },
        {
          "value": "1.7",
          "label": "1.7"
        }
      ]
    }

  ]
};
})();
