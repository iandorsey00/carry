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
          "value": "-2",
          "label": "-2"
        },
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "6",
          "label": "6"
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
          "value": "cannot tell",
          "label": "cannot tell"
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
        },
        {
          "value": "percent only",
          "label": "percent only"
        },
        {
          "value": "no units",
          "label": "no units"
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
    }
  ]
};
})();
