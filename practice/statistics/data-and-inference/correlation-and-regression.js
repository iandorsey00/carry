// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["statistics"] = window.CarryPractice.sections["statistics"] || {};
  window.CarryPractice.sections["statistics"]["statistics.correlation-regression"] = {
  "id": "statistics.correlation-regression",
  "topic": "Statistics",
  "title": "Correlation and regression",
  "type": "concept",
  "figure": "statistics-correlation",
  "intro": [
    "Correlation describes the direction and strength of a linear relationship.",
    "Regression uses data to model or predict one quantitative variable from another.",
    "A strong relationship does not automatically prove causation."
  ],
  "problems": [
    {
      "prompt": "If taller people tend to weigh more, the association is positive or negative?",
      "answer": "positive",
      "choices": [
        {
          "value": "positive",
          "label": "positive"
        },
        {
          "value": "negative",
          "label": "negative"
        }
      ],
      "hint": "Both variables tend to increase together.",
      "label": "positive association",
      "feedback": "Increasing together gives a positive association."
    },
    {
      "prompt": "A correlation near 0 means strong linear pattern or weak linear pattern?",
      "answer": "weak linear pattern",
      "choices": [
        {
          "value": "strong linear pattern",
          "label": "strong linear pattern"
        },
        {
          "value": "weak linear pattern",
          "label": "weak linear pattern"
        }
      ],
      "hint": "Correlation measures linear direction and strength.",
      "label": "near zero correlation",
      "feedback": "Correlation near 0 means little linear pattern."
    },
    {
      "prompt": "Does correlation by itself prove causation?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "choices": [
        {
          "value": "yes",
          "label": "Yes"
        },
        {
          "value": "no",
          "label": "No"
        }
      ],
      "hint": "There may be lurking variables or reverse direction.",
      "label": "correlation causation",
      "feedback": "Correlation alone does not prove causation."
    },
    {
      "prompt": "A regression line is mainly used to summarize and predict or to list categories?",
      "answer": "summarize and predict",
      "choices": [
        {
          "value": "summarize and predict",
          "label": "summarize and predict"
        },
        {
          "value": "list categories",
          "label": "list categories"
        }
      ],
      "hint": "Regression models a quantitative relationship.",
      "label": "regression purpose",
      "feedback": "Regression gives a compact model for prediction."
    },
    {
      "prompt": "Correlation r always stays between which two values?",
      "answer": "-1 and 1",
      "answers": [
        "-1 and 1",
        "minus one and one"
      ],
      "hint": "The endpoints mean perfect linear relationships.",
      "label": "r range",
      "choices": [
        {
          "value": "-1 and 1",
          "label": "-1 and 1"
        },
        {
          "value": "0 and 100",
          "label": "0 and 100"
        },
        {
          "value": "0 and 1",
          "label": "0 and 1"
        }
      ]
    },
    {
      "prompt": "Ice cream sales and drownings rise together. What most likely explains it?",
      "answer": "a third factor",
      "answers": [
        "a third factor",
        "summer",
        "a lurking variable"
      ],
      "hint": "Hot weather drives both.",
      "label": "lurking variable",
      "choices": [
        {
          "value": "a third factor",
          "label": "a third factor, like summer"
        },
        {
          "value": "causation",
          "label": "ice cream causes drowning"
        }
      ]
    },
    {
      "prompt": "An r of -0.9 describes what kind of relationship?",
      "answer": "strong and negative",
      "answers": [
        "strong and negative",
        "strong negative"
      ],
      "hint": "Near the endpoint, sloping downward.",
      "label": "read r",
      "choices": [
        {
          "value": "strong and negative",
          "label": "strong and negative"
        },
        {
          "value": "weak and negative",
          "label": "weak and negative"
        },
        {
          "value": "strong and positive",
          "label": "strong and positive"
        }
      ]
    },
    {
      "prompt": "Regression predicts which variable: the explanatory or the response?",
      "answer": "response",
      "answers": [
        "response",
        "the response"
      ],
      "hint": "The line answers questions about the outcome.",
      "label": "predict response",
      "choices": [
        {
          "value": "response",
          "label": "the response variable"
        },
        {
          "value": "explanatory",
          "label": "the explanatory variable"
        }
      ]
    }

  ]
};
})();
