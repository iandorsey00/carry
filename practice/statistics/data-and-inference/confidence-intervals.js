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
          "value": "range",
          "label": "range"
        },
        {
          "value": "single value",
          "label": "single value"
        },
        {
          "value": "category",
          "label": "category"
        },
        {
          "value": "proof",
          "label": "proof"
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
        },
        {
          "value": "same width",
          "label": "same width"
        },
        {
          "value": "not a range",
          "label": "not a range"
        }
      ],
      "hint": "More confidence requires a wider net.",
      "label": "confidence width",
      "feedback": "Higher confidence usually means a wider interval."
    }
  ]
};
})();
