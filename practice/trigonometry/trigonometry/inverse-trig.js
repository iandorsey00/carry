// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["trigonometry"] = window.CarryPractice.sections["trigonometry"] || {};
  window.CarryPractice.sections["trigonometry"]["trigonometry.inverse"] = {
  "id": "trigonometry.inverse",
  "topic": "Trigonometry",
  "title": "Inverse trig",
  "type": "concept",
  "figure": "trig-inverse",
  "intro": [
    "Inverse trig functions recover an angle from a ratio.",
    "arcsin answers the question: what angle has this sine value?",
    "Principal values keep inverse trig functions single-valued."
  ],
  "problems": [
    {
      "prompt": "What is arcsin 0?",
      "answer": "0",
      "hint": "sin 0 = 0.",
      "label": "arcsine zero"
    },
    {
      "prompt": "What is arccos 1?",
      "answer": "0",
      "hint": "cos 0 = 1.",
      "label": "arccosine one"
    },
    {
      "prompt": "What is arctan 1 in degrees?",
      "answer": "45",
      "answers": [
        "45",
        "45degrees"
      ],
      "hint": "tan 45 degrees = 1.",
      "label": "arctangent one"
    }
  ]
};
})();
