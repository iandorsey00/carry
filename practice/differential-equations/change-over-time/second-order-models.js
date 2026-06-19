// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["differential-equations"] = window.CarryPractice.sections["differential-equations"] || {};
  window.CarryPractice.sections["differential-equations"]["differential-equations.second-order-models"] = {
  "id": "differential-equations.second-order-models",
  "topic": "Differential Equations",
  "title": "Second-order models",
  "type": "concept",
  "figure": "diff-eq-second-order",
  "intro": [
    "Second-order equations involve a second derivative.",
    "In motion, the second derivative of position is acceleration.",
    "Springs and oscillators are common second-order models."
  ],
  "problems": [
    {
      "prompt": "If <math>x(t)</math> is position, what does <math>x''(t)</math> represent?",
      "answer": "acceleration",
      "hint": "The first derivative is velocity; the second is acceleration.",
      "label": "second derivative meaning"
    },
    {
      "prompt": "A spring that repeats back and forth is called an oscillation or a limit?",
      "answer": "oscillation",
      "answers": [
        "oscillation",
        "oscillator"
      ],
      "hint": "Repeated back-and-forth motion is oscillation.",
      "label": "spring motion"
    },
    {
      "prompt": "Which derivative appears in a second-order equation: first or second?",
      "answer": "second",
      "answers": [
        "second",
        "2nd"
      ],
      "hint": "Second-order means the highest derivative is second.",
      "label": "order meaning"
    }
  ]
};
})();
