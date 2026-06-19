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
        },
        {
          "value": "zero",
          "label": "zero"
        },
        {
          "value": "categorical",
          "label": "categorical"
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
          "value": "weak linear pattern",
          "label": "weak linear pattern"
        },
        {
          "value": "strong linear pattern",
          "label": "strong linear pattern"
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
          "value": "no",
          "label": "No"
        },
        {
          "value": "yes",
          "label": "Yes"
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
    }
  ]
};
})();
