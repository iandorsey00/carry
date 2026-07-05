// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["statistics"] = window.CarryPractice.sections["statistics"] || {};
  window.CarryPractice.sections["statistics"]["statistics.binomial-distribution"] = {
  "id": "statistics.binomial-distribution",
  "topic": "Statistics",
  "title": "Binomial distribution",
  "type": "concept",
  "figure": "statistics-binomial",
  "intro": [
    "A binomial model counts successes in a fixed number of independent trials.",
    "Each trial has the same success probability.",
    "Binomial questions appear in quality control, surveys, games, and repeated yes/no events."
  ],
  "problems": [
    {
      "prompt": "A binomial trial has two outcomes or many measured values?",
      "answer": "two outcomes",
      "choices": [
        {
          "value": "two outcomes",
          "label": "two outcomes"
        },
        {
          "value": "many measured values",
          "label": "many measured values"
        }
      ],
      "hint": "Think success/failure.",
      "label": "binomial outcome type",
      "feedback": "Each binomial trial is usually described as success or failure."
    },
    {
      "prompt": "If a coin is flipped 5 times, what is n in the binomial model?",
      "answer": "5",
      "choices": [
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "10",
          "label": "10"
        },
        {
          "value": "1/2",
          "label": "1/2"
        }
      ],
      "hint": "n is the number of trials.",
      "label": "binomial n",
      "feedback": "Five flips means n = 5 trials."
    },
    {
      "prompt": "For a fair coin, what is p for heads?",
      "answer": "1/2",
      "answers": [
        "1/2",
        "0.5"
      ],
      "choices": [
        {
          "value": "1/2",
          "label": "1/2"
        },
        {
          "value": "1/5",
          "label": "1/5"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "5",
          "label": "5"
        }
      ],
      "hint": "p is the probability of success on one trial.",
      "label": "binomial p",
      "feedback": "Heads has probability 1/2 on each fair flip."
    },
    {
      "prompt": "In a binomial model, p should stay the same or change every trial?",
      "answer": "same",
      "choices": [
        {
          "value": "same",
          "label": "same"
        },
        {
          "value": "change every trial",
          "label": "change every trial"
        }
      ],
      "hint": "The usual binomial model uses the same success probability each time.",
      "label": "constant probability",
      "feedback": "A fixed p is one binomial condition."
    },
    {
      "prompt": "Rolling a die 10 times and counting sixes: is that a binomial setting?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Fixed trials, six-or-not outcomes, and the same p each roll.",
      "label": "binomial check",
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
      "prompt": "In a binomial model with n = 8 and p = 1/2, what is the expected number of successes?",
      "answer": "4",
      "answers": [
        "4",
        "four"
      ],
      "hint": "Expected successes are n times p.",
      "label": "np",
      "choices": [
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "8",
          "label": "8"
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
      "prompt": "In a binomial model, are the trials independent or dependent?",
      "answer": "independent",
      "answers": [
        "independent"
      ],
      "hint": "One trial's result never leans on another's.",
      "label": "independent trials",
      "choices": [
        {
          "value": "independent",
          "label": "independent"
        },
        {
          "value": "dependent",
          "label": "dependent"
        }
      ]
    },
    {
      "prompt": "A survey asks 20 people a yes-or-no question. What is n?",
      "answer": "20",
      "answers": [
        "20",
        "twenty"
      ],
      "hint": "n counts the trials.",
      "label": "survey n",
      "choices": [
        {
          "value": "20",
          "label": "20"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "10",
          "label": "10"
        },
        {
          "value": "40",
          "label": "40"
        }
      ]
    }

  ]
};
})();
