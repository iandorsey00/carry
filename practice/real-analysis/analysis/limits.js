// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["real-analysis"] = window.CarryPractice.sections["real-analysis"] || {};
  window.CarryPractice.sections["real-analysis"]["real-analysis.limits"] = {
  "id": "real-analysis.limits",
  "topic": "Real Analysis",
  "title": "Limits",
  "type": "concept",
  "figure": "real-limits",
  "intro": [
    "Real analysis takes the limit idea calculus relies on and makes it airtight enough to survive any challenge.",
    "The value at the point is deliberately ignored: only nearby behavior counts, which is why a hole cannot break a limit.",
    "Epsilon-delta is tolerance language: for every output tolerance ε, some input tolerance δ must deliver it."
],
  "problems": [
    {
      "prompt": "As x approaches 3, what does 2x approach?",
      "answer": "6",
      "hint": "Use the nearby input value: 2 times 3.",
      "label": "function limit"
    },
    {
      "prompt": "Can a limit exist even if the function is undefined at that point?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Limits depend on nearby values, not only the value at the point.",
      "label": "punctured limit",
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
      "prompt": "In epsilon-delta language, epsilon controls closeness of outputs or inputs?",
      "answer": "outputs",
      "answers": [
        "outputs",
        "output"
      ],
      "hint": "Epsilon measures vertical closeness to the limiting value.",
      "label": "epsilon role",
      "choices": [
        {
          "value": "outputs",
          "label": "outputs"
        },
        {
          "value": "inputs",
          "label": "inputs"
        }
      ]
    }
  ]
};
})();
