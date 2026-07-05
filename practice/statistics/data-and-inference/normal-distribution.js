// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["statistics"] = window.CarryPractice.sections["statistics"] || {};
  window.CarryPractice.sections["statistics"]["statistics.normal-distribution"] = {
  "id": "statistics.normal-distribution",
  "topic": "Statistics",
  "title": "Normal distribution",
  "type": "concept",
  "figure": "statistics-normal",
  "intro": [
    "A normal distribution is bell-shaped and symmetric.",
    "The mean marks the center of the curve.",
    "Standard deviation describes typical distance from the mean."
  ],
  "problems": [
    {
      "prompt": "In a normal distribution, the mean is at the center or an edge?",
      "answer": "center",
      "choices": [
        {
          "value": "center",
          "label": "at the center"
        },
        {
          "value": "edge",
          "label": "edge"
        }
      ],
      "hint": "A normal curve is symmetric around its mean.",
      "label": "normal center",
      "feedback": "The mean is the center of a normal distribution."
    },
    {
      "prompt": "A larger standard deviation makes the normal curve wider or narrower?",
      "answer": "wider",
      "choices": [
        {
          "value": "wider",
          "label": "wider"
        },
        {
          "value": "narrower",
          "label": "narrower"
        }
      ],
      "hint": "More spread makes the curve wider.",
      "label": "standard deviation spread",
      "feedback": "Standard deviation controls spread."
    },
    {
      "prompt": "About what percent of normal data lies within one standard deviation of the mean?",
      "answer": "68%",
      "answers": [
        "68%",
        "68"
      ],
      "choices": [
        {
          "value": "68%",
          "label": "68%"
        },
        {
          "value": "50%",
          "label": "50%"
        },
        {
          "value": "95%",
          "label": "95%"
        },
        {
          "value": "100%",
          "label": "100%"
        }
      ],
      "hint": "Use the 68-95-99.7 rule.",
      "label": "empirical rule one sd",
      "feedback": "The empirical rule starts with about 68% within one standard deviation."
    },
    {
      "prompt": "A z-score tells distance from the mean in what units?",
      "answer": "standard deviations",
      "choices": [
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
        },
        {
          "value": "observations",
          "label": "observations"
        }
      ],
      "hint": "z-scores measure standard deviations from the mean.",
      "label": "z score units",
      "feedback": "A z-score is measured in standard deviations."
    },
    {
      "prompt": "A z-score of -2 is below or above the mean?",
      "answer": "below",
      "choices": [
        {
          "value": "below",
          "label": "below"
        },
        {
          "value": "above the mean",
          "label": "above the mean"
        }
      ],
      "hint": "Negative z-scores are below the mean.",
      "label": "negative z score",
      "feedback": "The sign of a z-score gives direction from the mean."
    },
    {
      "prompt": "About what percent of normal data lies within two standard deviations?",
      "answer": "95%",
      "answers": [
        "95",
        "95%"
      ],
      "choices": [
        {
          "value": "95%",
          "label": "95%"
        },
        {
          "value": "68%",
          "label": "68%"
        },
        {
          "value": "50%",
          "label": "50%"
        },
        {
          "value": "10%",
          "label": "10%"
        }
      ],
      "hint": "Use the 68-95-99.7 rule.",
      "label": "empirical rule two sd",
      "feedback": "About 95% lies within two standard deviations."
    },
    {
      "prompt": "A z-score of 0 places a value where?",
      "answer": "at the mean",
      "answers": [
        "at the mean",
        "the mean"
      ],
      "hint": "Zero distance from the center.",
      "label": "z zero",
      "choices": [
        {
          "value": "at the mean",
          "label": "exactly at the mean"
        },
        {
          "value": "one above",
          "label": "one deviation above"
        },
        {
          "value": "at zero",
          "label": "at the value 0"
        }
      ]
    },
    {
      "prompt": "About what percent of normal data lies within three standard deviations?",
      "answer": "99.7%",
      "answers": [
        "99.7%",
        "99.7"
      ],
      "hint": "The last number of the 68-95-99.7 rule.",
      "label": "three sigma",
      "choices": [
        {
          "value": "99.7%",
          "label": "99.7%"
        },
        {
          "value": "95%",
          "label": "95%"
        },
        {
          "value": "68%",
          "label": "68%"
        },
        {
          "value": "100%",
          "label": "100%"
        }
      ]
    }

  ]
};
})();
