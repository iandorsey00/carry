// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["trigonometry"] = window.CarryPractice.sections["trigonometry"] || {};
  window.CarryPractice.sections["trigonometry"]["trigonometry.graphs"] = {
  "id": "trigonometry.graphs",
  "topic": "Trigonometry",
  "title": "Graphs",
  "type": "concept",
  "figure": "trig-graphs",
  "intro": [
    "Sine and cosine repeat in waves.",
    "Amplitude is the distance from the midline to a peak.",
    "The basic sine and cosine period is 2π."
  ],
  "problems": [
    {
      "prompt": "What is the amplitude of y = 3 sin x?",
      "answer": "3",
      "hint": "Amplitude is the coefficient size in front of sin x.",
      "label": "sine amplitude"
    },
    {
      "prompt": "What is the period of y = sin x?",
      "answer": "2π",
      "answers": [
        "2π",
        "2pi",
        "2*pi"
      ],
      "hint": "Basic sine repeats every 2π.",
      "label": "sine period"
    },
    {
      "prompt": "What is cos 0?",
      "answer": "1",
      "hint": "The cosine graph starts at 1 when x = 0.",
      "label": "cos graph value"
    }
  ]
};
})();
