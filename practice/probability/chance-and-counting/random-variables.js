// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["probability"] = window.CarryPractice.sections["probability"] || {};
  window.CarryPractice.sections["probability"]["probability.random-variables"] = {
  "id": "probability.random-variables",
  "topic": "Probability",
  "title": "Random variables",
  "type": "concept",
  "figure": "probability-random-variable",
  "intro": [
    "A random variable assigns a number to each outcome.",
    "A distribution lists the possible values and their probabilities.",
    "Expected value is the long-run average value."
  ],
  "problems": [
    {
      "prompt": "A random variable turns outcomes into numbers or angles?",
      "answer": "numbers",
      "answers": [
        "number",
        "numbers"
      ],
      "hint": "It assigns numerical values to outcomes.",
      "label": "random variable meaning",
      "choices": [
        {
          "value": "numbers",
          "label": "numbers"
        },
        {
          "value": "angles",
          "label": "angles"
        }
      ]
    },
    {
      "prompt": "For a fair coin where heads is 1 and tails is 0, what is the expected value?",
      "answer": "1/2",
      "answers": [
        "1/2",
        "0.5"
      ],
      "hint": "Average the two equally likely values 1 and 0.",
      "label": "coin expected value"
    },
    {
      "prompt": "A probability distribution lists values and what else?",
      "answer": "probabilities",
      "answers": [
        "probability",
        "probabilities"
      ],
      "hint": "Each value needs a chance attached to it.",
      "label": "distribution parts",
      "choices": [
        {
          "value": "probabilities",
          "label": "probabilities"
        },
        {
          "value": "standard deviations",
          "label": "standard deviations"
        },
        {
          "value": "raw units",
          "label": "raw units"
        },
        {
          "value": "percentiles",
          "label": "percentiles"
        }
      ]
    },
    {
      "prompt": "X is the value shown by one fair die. What is the expected value of X?",
      "answer": "3.5",
      "answers": [
        "3.5",
        "7/2"
      ],
      "hint": "Average the faces 1 through 6.",
      "label": "die expectation",
      "choices": [
        {
          "value": "3.5",
          "label": "3.5"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "6",
          "label": "6"
        },
        {
          "value": "2.5",
          "label": "2.5"
        }
      ]
    },
    {
      "prompt": "Can a random variable take negative values?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "A gambler's net winnings can be a loss.",
      "label": "negative values",
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
      "prompt": "The probabilities in a distribution must add up to what?",
      "answer": "1",
      "answers": [
        "1",
        "one"
      ],
      "hint": "The values cover everything that can happen.",
      "label": "distribution total",
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
          "value": "the mean",
          "label": "the mean"
        }
      ]
    },
    {
      "prompt": "X is 1 for heads, 0 for tails, and the coin lands heads with probability 0.7. Expected value?",
      "answer": "0.7",
      "answers": [
        "0.7",
        "7/10"
      ],
      "hint": "1 × 0.7 + 0 × 0.3.",
      "label": "biased coin",
      "choices": [
        {
          "value": "0.7",
          "label": "0.7"
        },
        {
          "value": "0.5",
          "label": "0.5"
        },
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "0.3",
          "label": "0.3"
        }
      ]
    },
    {
      "prompt": "Is the number of heads in 10 coin flips a random variable?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "It assigns a number to each possible outcome.",
      "label": "heads count",
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
