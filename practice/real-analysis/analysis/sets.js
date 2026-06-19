// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["real-analysis"] = window.CarryPractice.sections["real-analysis"] || {};
  window.CarryPractice.sections["real-analysis"]["real-analysis.sets"] = {
  "id": "real-analysis.sets",
  "topic": "Real Analysis",
  "title": "Sets",
  "type": "concept",
  "figure": "real-sets",
  "intro": [
    "Real analysis uses sets to say exactly which numbers are under discussion.",
    "An interval contains every real number between its endpoints.",
    "Bounds describe whether a set stays below, above, or inside a range."
  ],
  "problems": [
    {
      "prompt": "Does the interval [2, 5] include 2?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "A square bracket means the endpoint is included.",
      "label": "closed endpoint",
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
      "prompt": "Does the interval (2, 5) include 2?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "A parenthesis means the endpoint is not included.",
      "label": "open endpoint",
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
      "prompt": "What is the smallest number in the set [2, 5]?",
      "answer": "2",
      "hint": "The left endpoint is included.",
      "label": "minimum of interval"
    }
  ]
};
})();
