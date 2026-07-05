// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["statistics"] = window.CarryPractice.sections["statistics"] || {};
  window.CarryPractice.sections["statistics"]["statistics.confidence-intervals"] = {
  "id": "statistics.confidence-intervals",
  "topic": "Statistics",
  "title": "Confidence intervals",
  "type": "concept",
  "figure": "statistics-confidence",
  "intro": [
    "A confidence interval gives a plausible range for a population value.",
    "Intervals combine an estimate with a margin of error.",
    "Higher confidence usually makes the interval wider."
  ],
  "problems": [
    {
      "prompt": "A confidence interval is a single value or a range?",
      "answer": "range",
      "choices": [
        {
          "value": "single value",
          "label": "single value"
        },
        {
          "value": "range",
          "label": "range"
        }
      ],
      "hint": "Intervals have lower and upper endpoints.",
      "label": "interval meaning",
      "feedback": "A confidence interval is a range of plausible values."
    },
    {
      "prompt": "If an estimate is 50 with margin of error 3, the interval is 47 to what?",
      "answer": "53",
      "choices": [
        {
          "value": "53",
          "label": "53"
        },
        {
          "value": "50",
          "label": "50"
        },
        {
          "value": "47",
          "label": "47"
        },
        {
          "value": "3",
          "label": "3"
        }
      ],
      "hint": "Add the margin of error to the estimate.",
      "label": "upper endpoint",
      "feedback": "50 + 3 = 53."
    },
    {
      "prompt": "A larger margin of error makes an interval wider or narrower?",
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
      "hint": "The margin extends both sides of the estimate.",
      "label": "margin width",
      "feedback": "A larger margin of error creates a wider interval."
    },
    {
      "prompt": "Higher confidence usually makes the interval wider or narrower?",
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
      "hint": "More confidence requires a wider net.",
      "label": "confidence width",
      "feedback": "Higher confidence usually means a wider interval."
    },
    {
      "prompt": "An interval runs from 47 to 53. What is the point estimate?",
      "answer": "50",
      "answers": [
        "50",
        "fifty"
      ],
      "hint": "The estimate sits in the middle.",
      "label": "point estimate",
      "choices": [
        {
          "value": "50",
          "label": "50"
        },
        {
          "value": "47",
          "label": "47"
        },
        {
          "value": "53",
          "label": "53"
        },
        {
          "value": "6",
          "label": "6"
        }
      ]
    },
    {
      "prompt": "For the interval 47 to 53, what is the margin of error?",
      "answer": "3",
      "answers": [
        "3",
        "three"
      ],
      "hint": "Half the width of the interval.",
      "label": "margin",
      "choices": [
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "6",
          "label": "6"
        },
        {
          "value": "50",
          "label": "50"
        },
        {
          "value": "1",
          "label": "1"
        }
      ]
    },
    {
      "prompt": "Does a 95% confidence interval guarantee the true value is inside it?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "95% describes how often the method succeeds in the long run.",
      "label": "no guarantee",
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
      "prompt": "To narrow an interval without lowering confidence, what helps most?",
      "answer": "a larger sample",
      "answers": [
        "a larger sample",
        "more data"
      ],
      "hint": "More data steadies the estimate.",
      "label": "narrow interval",
      "choices": [
        {
          "value": "a larger sample",
          "label": "a larger sample"
        },
        {
          "value": "a smaller sample",
          "label": "a smaller sample"
        }
      ]
    }

  ]
};
})();
