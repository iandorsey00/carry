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
    "Analysis begins by saying exactly which numbers are on the table — and intervals are its favorite way of saying it.",
    "The brackets carry real information: [2, 5] owns its endpoints, while (2, 5) only approaches them.",
    "Bounds, suprema, and open versus closed all grow from this endpoint bookkeeping, and major theorems turn on it."
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
