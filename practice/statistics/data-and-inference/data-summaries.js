// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["statistics"] = window.CarryPractice.sections["statistics"] || {};
  window.CarryPractice.sections["statistics"]["statistics.data-summaries"] = {
  "id": "statistics.data-summaries",
  "topic": "Statistics",
  "title": "Data summaries",
  "type": "concept",
  "figure": "statistics-data-summaries",
  "intro": [
    "Statistics starts by turning data into summaries that can be compared.",
    "A variable is a measured feature, such as height, time, score, or category.",
    "A data set should keep the context: what was measured, from whom, and in what units."
  ],
  "problems": [
    {
      "prompt": "In the data set 4, 7, 9, how many observations are there?",
      "answer": "3",
      "hint": "Count the listed values.",
      "label": "observation count",
      "feedback": "Each listed value is one observation."
    },
    {
      "prompt": "A column labeled height in centimeters is categorical or quantitative?",
      "answer": "quantitative",
      "choices": [
        {
          "value": "quantitative",
          "label": "quantitative"
        },
        {
          "value": "categorical",
          "label": "categorical"
        },
        {
          "value": "sample",
          "label": "sample"
        },
        {
          "value": "outlier",
          "label": "outlier"
        }
      ],
      "hint": "Measurements with units are quantitative.",
      "label": "variable type",
      "feedback": "Quantitative variables measure amounts."
    },
    {
      "prompt": "A column labeled favorite color is categorical or quantitative?",
      "answer": "categorical",
      "choices": [
        {
          "value": "categorical",
          "label": "categorical"
        },
        {
          "value": "quantitative",
          "label": "quantitative"
        },
        {
          "value": "mean",
          "label": "mean"
        },
        {
          "value": "range",
          "label": "range"
        }
      ],
      "hint": "Color names are categories, not numerical measurements.",
      "label": "categorical variable",
      "feedback": "Categorical variables sort observations into groups."
    },
    {
      "prompt": "For 2, 5, 8, what is the total?",
      "answer": "15",
      "hint": "Add the values before finding many summaries.",
      "label": "data total",
      "feedback": "Totals are often the first step toward a mean."
    }
  ]
};
})();
