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
          "value": "one variable",
          "label": "one variable"
        },
        {
          "value": "two quantitative variables",
          "label": "two quantitative variables"
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
    },
    {
      "prompt": "Which display shows a five-number summary at a glance?",
      "answer": "boxplot",
      "answers": [
        "boxplot",
        "box plot"
      ],
      "hint": "Median, quartiles, and extremes in one box.",
      "label": "five numbers",
      "choices": [
        {
          "value": "boxplot",
          "label": "a boxplot"
        },
        {
          "value": "bar chart",
          "label": "a bar chart"
        },
        {
          "value": "pie chart",
          "label": "a pie chart"
        }
      ]
    },
    {
      "prompt": "Measurements taken over time are best shown with which display?",
      "answer": "line graph",
      "answers": [
        "line graph",
        "a line graph"
      ],
      "hint": "Time flows left to right along the line.",
      "label": "over time",
      "choices": [
        {
          "value": "line graph",
          "label": "a line graph"
        },
        {
          "value": "bar chart",
          "label": "a bar chart"
        },
        {
          "value": "pie chart",
          "label": "a pie chart"
        }
      ]
    },
    {
      "prompt": "Should a histogram of continuous data have gaps between its bars?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "The bars touch because the intervals do.",
      "label": "touching bars",
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
      "prompt": "A pie chart only makes sense when the slices add up to what?",
      "answer": "a whole",
      "answers": [
        "a whole",
        "100%",
        "the whole"
      ],
      "hint": "Every slice is a share of one total.",
      "label": "pie total",
      "choices": [
        {
          "value": "a whole",
          "label": "one whole"
        },
        {
          "value": "the mean",
          "label": "the mean"
        },
        {
          "value": "any amount",
          "label": "any amount"
        }
      ]
    }

  ]
};
})();
