// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["differential-equations"] = window.CarryPractice.sections["differential-equations"] || {};
  window.CarryPractice.sections["differential-equations"]["differential-equations.separable"] = {
  "id": "differential-equations.separable",
  "topic": "Differential Equations",
  "title": "Separable equations",
  "type": "concept",
  "figure": "diff-eq-separable",
  "intro": [
    "A separable differential equation can move all y terms to one side and all x terms to the other.",
    "After separating variables, integrate both sides.",
    "A constant of integration appears after integrating."
  ],
  "problems": [
    {
      "prompt": "In <math>dy/dx = 3x y</math>, which factor belongs with <math>dy</math> when separating: <math>1/y</math> or <math>3x</math>?",
      "answer": "1/y",
      "answers": [
        "1/y",
        "\\frac{1}{y}",
        "one over y"
      ],
      "hint": "Move y to the left so the y terms stay with dy.",
      "label": "separable y side"
    },
    {
      "prompt": "After writing <math>(1/y)dy = 3x dx</math>, what operation comes next?",
      "answer": "integrate",
      "answers": [
        "integrate",
        "integration"
      ],
      "hint": "Separate first, then integrate both sides.",
      "label": "separable next move"
    },
    {
      "prompt": "What constant is usually added after indefinite integration?",
      "answer": "c",
      "answers": [
        "c",
        "+c",
        "C",
        "+C"
      ],
      "hint": "Use the constant of integration.",
      "label": "constant of integration"
    }
  ]
};
})();
