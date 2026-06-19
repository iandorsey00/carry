// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["statistics"] = window.CarryPractice.sections["statistics"] || {};
  window.CarryPractice.sections["statistics"]["statistics.center-spread"] = {
  "id": "statistics.center-spread",
  "topic": "Statistics",
  "title": "Center and spread",
  "type": "concept",
  "figure": "statistics-center-spread",
  "intro": [
    "Center describes a typical value.",
    "Spread describes how far values vary from each other.",
    "Mean, median, range, and interquartile range answer different questions about the same data."
  ],
  "problems": [
    {
      "prompt": "Find the mean of 2, 4, 6.",
      "answer": "4",
      "hint": "Add to get 12, then divide by 3.",
      "label": "mean",
      "feedback": "Mean is total divided by number of values."
    },
    {
      "prompt": "Find the median of 3, 9, 10.",
      "answer": "9",
      "hint": "The median is the middle value after sorting.",
      "label": "median",
      "feedback": "Median is the middle ordered value."
    },
    {
      "prompt": "Find the range of 5, 8, 12.",
      "answer": "7",
      "hint": "Subtract smallest from largest: 12 - 5.",
      "label": "range",
      "feedback": "Range is largest minus smallest."
    },
    {
      "prompt": "Which summary is more resistant to one very large outlier: mean or median?",
      "answer": "median",
      "choices": [
        {
          "value": "mean",
          "label": "mean"
        },
        {
          "value": "median",
          "label": "median"
        }
      ],
      "hint": "The median depends on order, not the size of one extreme value.",
      "label": "resistant center",
      "feedback": "Median is resistant to outliers."
    },
    {
      "prompt": "Find the mean of 5, 5, 11.",
      "answer": "7",
      "hint": "Add to get 21, then divide by 3.",
      "label": "mean",
      "feedback": "Mean is the arithmetic balance point."
    },
    {
      "prompt": "Find the median of 2, 8, 20, 30.",
      "answer": "14",
      "hint": "Average the two middle values: 8 and 20.",
      "label": "median even count",
      "feedback": "With an even count, median is the average of the two middle values."
    },
    {
      "prompt": "Find the range of 10, 13, 19, 21.",
      "answer": "11",
      "hint": "Subtract 10 from 21.",
      "label": "range",
      "feedback": "Range measures the full spread from smallest to largest."
    }
  ]
};
})();
