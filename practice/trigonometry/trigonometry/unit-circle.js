// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["trigonometry"] = window.CarryPractice.sections["trigonometry"] || {};
  window.CarryPractice.sections["trigonometry"]["trigonometry.unit-circle"] = {
  "id": "trigonometry.unit-circle",
  "topic": "Trigonometry",
  "title": "Unit circle",
  "type": "concept",
  "figure": "trig-unit-circle",
  "intro": [
    "The unit circle has radius 1 and center at the origin.",
    "A point on the unit circle has coordinates (cos θ, sin θ).",
    "Special angles give exact values that are used throughout trigonometry."
  ],
  "problems": [
    {
      "prompt": "On the unit circle, what is cos 0?",
      "answer": "1",
      "hint": "At angle 0, the point is (1, 0).",
      "label": "cosine at zero"
    },
    {
      "prompt": "On the unit circle, what is sin 0?",
      "answer": "0",
      "hint": "At angle 0, the y-coordinate is 0.",
      "label": "sine at zero"
    },
    {
      "prompt": "At π/2, what is the point on the unit circle?",
      "answer": "(0,1)",
      "answers": [
        "(0,1)",
        "0,1"
      ],
      "hint": "π/2 is the top of the circle.",
      "label": "unit circle point"
    }
  ]
};
})();
