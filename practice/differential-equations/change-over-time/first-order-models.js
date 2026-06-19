// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["differential-equations"] = window.CarryPractice.sections["differential-equations"] || {};
  window.CarryPractice.sections["differential-equations"]["differential-equations.first-order-models"] = {
  "id": "differential-equations.first-order-models",
  "topic": "Differential Equations",
  "title": "First-order models",
  "type": "concept",
  "figure": "diff-eq-first-order",
  "intro": [
    "First-order models use a first derivative to describe change.",
    "Exponential growth has rate proportional to the current amount.",
    "Equilibrium occurs when the derivative is zero."
  ],
  "problems": [
    {
      "prompt": "In <math>dP/dt = kP</math>, the rate is proportional to what quantity?",
      "answer": "p",
      "answers": [
        "p",
        "P",
        "population",
        "the population"
      ],
      "hint": "The right side is k times P.",
      "label": "growth proportional amount"
    },
    {
      "prompt": "If <math>dP/dt = 0</math>, is P changing at that instant?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "A zero derivative means no instantaneous change.",
      "label": "equilibrium change"
    },
    {
      "prompt": "In <math>dT/dt = -k(T - A)</math>, what value is the surrounding temperature?",
      "answer": "a",
      "answers": [
        "a",
        "A"
      ],
      "hint": "A is the ambient or surrounding temperature.",
      "label": "newton cooling ambient"
    }
  ]
};
})();
