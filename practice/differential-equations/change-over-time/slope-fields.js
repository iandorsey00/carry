// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["differential-equations"] = window.CarryPractice.sections["differential-equations"] || {};
  window.CarryPractice.sections["differential-equations"]["differential-equations.slope-fields"] = {
  "id": "differential-equations.slope-fields",
  "topic": "Differential Equations",
  "title": "Slope fields",
  "type": "concept",
  "figure": "diff-eq-slope-fields",
  "intro": [
    "A differential equation describes a relationship involving a function and its derivatives.",
    "A slope field draws the local slope at many points.",
    "A solution curve follows the small slope marks without crossing them sharply."
  ],
  "problems": [
    {
      "prompt": "For <math>dy/dx = x</math>, what slope appears when <math>x = 0</math>?",
      "answer": "0",
      "hint": "Substitute x = 0 into the right side.",
      "label": "slope field zero"
    },
    {
      "prompt": "For <math>dy/dx = y</math>, what slope appears when <math>y = 2</math>?",
      "answer": "2",
      "hint": "The slope equals the current y-value.",
      "label": "slope field y"
    },
    {
      "prompt": "A solution curve should follow the small slope marks or ignore them?",
      "answer": "follow",
      "answers": [
        "follow",
        "follows",
        "follow them"
      ],
      "hint": "The marks show the derivative at nearby points.",
      "label": "solution curve behavior"
    }
  ]
};
})();
