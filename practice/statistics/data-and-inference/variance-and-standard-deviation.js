// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["statistics"] = window.CarryPractice.sections["statistics"] || {};
  window.CarryPractice.sections["statistics"]["statistics.variance-standard-deviation"] = {
  "id": "statistics.variance-standard-deviation",
  "topic": "Statistics",
  "title": "Variance and standard deviation",
  "type": "concept",
  "figure": "statistics-variance",
  "intro": [
    "Variance and standard deviation measure how far data values are from the mean.",
    "A deviation is one value minus the mean.",
    "Standard deviation returns spread to the original units, which makes it easier to interpret."
  ],
  "problems": [
    {
      "prompt": "For the data 2, 4, 6, the mean is 4. What is the deviation of 6?",
      "answer": "2",
      "choices": [
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "6",
          "label": "6"
        },
        {
          "value": "-2",
          "label": "-2"
        }
      ],
      "hint": "Deviation means value minus mean.",
      "label": "deviation",
      "feedback": "6 - 4 = 2."
    },
    {
      "prompt": "Which has more spread: 9, 10, 11 or 2, 10, 18?",
      "answer": "2,10,18",
      "choices": [
        {
          "value": "2,10,18",
          "label": "2, 10, 18"
        },
        {
          "value": "9,10,11",
          "label": "9, 10, 11"
        },
        {
          "value": "same",
          "label": "same"
        },
        {
          "value": "mean",
          "label": "mean"
        }
      ],
      "hint": "Compare distance from the center value 10.",
      "label": "spread comparison",
      "feedback": "2 and 18 are much farther from 10."
    },
    {
      "prompt": "Standard deviation is measured in original units or squared units?",
      "answer": "original units",
      "choices": [
        {
          "value": "original units",
          "label": "original units"
        },
        {
          "value": "squared units",
          "label": "squared units"
        }
      ],
      "hint": "Variance uses squared units; standard deviation takes the square root.",
      "label": "standard deviation units",
      "feedback": "Standard deviation is easier to interpret because it uses original units."
    },
    {
      "prompt": "If every value is the same, the standard deviation is what number?",
      "answer": "0",
      "choices": [
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "1",
          "label": "1"
        }
      ],
      "hint": "No value is away from the mean.",
      "label": "zero spread",
      "feedback": "No spread gives standard deviation 0."
    },
    {
      "prompt": "For the data 2, 4, 6 with mean 4, what is the deviation of 2?",
      "answer": "-2",
      "answers": [
        "-2"
      ],
      "hint": "Value minus mean can be negative.",
      "label": "negative deviation",
      "choices": [
        {
          "value": "-2",
          "label": "-2"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "4",
          "label": "4"
        }
      ]
    },
    {
      "prompt": "Variance is the average of which quantity?",
      "answer": "squared deviations",
      "answers": [
        "squared deviations",
        "the squared deviations"
      ],
      "hint": "Squaring keeps negatives from canceling positives.",
      "label": "variance definition",
      "choices": [
        {
          "value": "squared deviations",
          "label": "the squared deviations"
        },
        {
          "value": "absolute values",
          "label": "the absolute values"
        },
        {
          "value": "ranges",
          "label": "the ranges"
        }
      ]
    },
    {
      "prompt": "If the standard deviation is 3, what is the variance?",
      "answer": "9",
      "answers": [
        "9",
        "nine"
      ],
      "hint": "Variance is the standard deviation squared.",
      "label": "square it",
      "choices": [
        {
          "value": "9",
          "label": "9"
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
          "value": "1.5",
          "label": "1.5"
        }
      ]
    },
    {
      "prompt": "Can a standard deviation be negative?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "It is a square root of an average of squares.",
      "label": "never negative",
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
