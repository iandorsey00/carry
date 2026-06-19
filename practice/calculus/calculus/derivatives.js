// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["calculus"] = window.CarryPractice.sections["calculus"] || {};
  window.CarryPractice.sections["calculus"]["calculus.derivatives"] = {
  "id": "calculus.derivatives",
  "topic": "Calculus",
  "title": "Derivatives",
  "type": "concept",
  "figure": "calc-derivatives",
  "intro": [
    "A derivative measures instantaneous rate of change.",
    "On a graph, the derivative is the slope of the tangent line.",
    "Power rules make many polynomial derivatives quick to compute."
  ],
  "problems": [
    {
      "prompt": "Find the derivative of x^2.",
      "answer": "2x",
      "answers": [
        "2x",
        "2*x"
      ],
      "hint": "Use the power rule: bring down 2 and reduce the exponent by 1.",
      "label": "power rule"
    },
    {
      "prompt": "What is the derivative of 5x?",
      "answer": "5",
      "hint": "The slope of a line y = 5x is 5.",
      "label": "linear derivative"
    },
    {
      "prompt": "For y = 3x + 2, what is the slope?",
      "answer": "3",
      "hint": "The coefficient of x is the slope.",
      "label": "line slope"
    }
  ]
};
})();
