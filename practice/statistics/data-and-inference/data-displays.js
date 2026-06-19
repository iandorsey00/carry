// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["statistics"] = window.CarryPractice.sections["statistics"] || {};
  window.CarryPractice.sections["statistics"]["statistics.displays"] = {
  "id": "statistics.displays",
  "topic": "Statistics",
  "title": "Data displays",
  "type": "concept",
  "figure": "statistics-displays",
  "intro": [
    "A data display should match the type of data and the question being asked.",
    "Bar charts compare categories.",
    "Histograms show the shape of quantitative data by grouping values into intervals."
  ],
  "problems": [
    {
      "prompt": "Which display is best for comparing favorite colors: bar chart or histogram?",
      "answer": "bar chart",
      "choices": [
        {
          "value": "bar chart",
          "label": "bar chart"
        },
        {
          "value": "histogram",
          "label": "histogram"
        },
        {
          "value": "box plot",
          "label": "box plot"
        },
        {
          "value": "scatterplot",
          "label": "scatterplot"
        }
      ],
      "hint": "Favorite color is categorical.",
      "label": "categorical display",
      "feedback": "Bar charts compare categories."
    },
    {
      "prompt": "Which display groups numerical values into intervals?",
      "answer": "histogram",
      "choices": [
        {
          "value": "histogram",
          "label": "histogram"
        },
        {
          "value": "bar chart",
          "label": "bar chart"
        },
        {
          "value": "pie chart",
          "label": "pie chart"
        },
        {
          "value": "table",
          "label": "table"
        }
      ],
      "hint": "Histograms group quantitative values into bins.",
      "label": "histogram meaning",
      "feedback": "Histograms show distribution shape."
    },
    {
      "prompt": "A scatterplot is best for one variable or two quantitative variables?",
      "answer": "two quantitative variables",
      "choices": [
        {
          "value": "two quantitative variables",
          "label": "two quantitative variables"
        },
        {
          "value": "one category",
          "label": "one category"
        },
        {
          "value": "one total",
          "label": "one total"
        },
        {
          "value": "one label",
          "label": "one label"
        }
      ],
      "hint": "Scatterplots show pairs of numbers.",
      "label": "scatterplot variables",
      "feedback": "Scatterplots show relationships between two quantitative variables."
    },
    {
      "prompt": "In a histogram, taller bars mean more values or larger values?",
      "answer": "more values",
      "choices": [
        {
          "value": "more values",
          "label": "more values"
        },
        {
          "value": "larger values",
          "label": "larger values"
        }
      ],
      "hint": "Bar height counts how many observations are in the interval.",
      "label": "histogram bar height",
      "feedback": "Histogram height represents frequency."
    }
  ]
};
})();
