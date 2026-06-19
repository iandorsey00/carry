// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["calculus"] = window.CarryPractice.sections["calculus"] || {};
  window.CarryPractice.sections["calculus"]["calculus.integrals"] = {
  "id": "calculus.integrals",
  "topic": "Calculus",
  "title": "Integrals",
  "type": "concept",
  "figure": "calc-integrals",
  "intro": [
    "An integral accumulates change.",
    "Definite integrals can measure area under a curve.",
    "Antiderivatives reverse derivatives and include a constant."
  ],
  "problems": [
    {
      "prompt": "What is an antiderivative of 2x?",
      "answer": "x^2+c",
      "answers": [
        "x^2+c",
        "x^2+C",
        "x^2 + C"
      ],
      "hint": "Differentiate x^2 and you get 2x. Add C for the constant.",
      "label": "basic antiderivative"
    },
    {
      "prompt": "What is the area under y = 2 from x = 0 to x = 3?",
      "answer": "6",
      "hint": "This is a rectangle: height 2 and width 3.",
      "label": "constant integral"
    },
    {
      "prompt": "What is an antiderivative of 4?",
      "answer": "4x+c",
      "answers": [
        "4x+c",
        "4x+C",
        "4*x+c",
        "4*x+C"
      ],
      "hint": "A derivative of 4x is 4.",
      "label": "constant antiderivative"
    }
  ]
};
})();
