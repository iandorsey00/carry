// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.fractions"] = {
  "id": "arithmetic.fractions",
  "topic": "Arithmetic",
  "title": "Fractions",
  "type": "concept",
  "figure": "fraction-bar",
  "intro": [
    "A fraction names equal parts of a whole.",
    "The denominator tells how many equal parts make the whole.",
    "The numerator tells how many of those parts are being used."
  ],
  "problems": [
    {
      "prompt": "Simplify 6/8.",
      "answer": "3/4",
      "hint": "Divide the top and bottom by 2.",
      "label": "simplified fraction"
    },
    {
      "prompt": "What is 1/4 of 20?",
      "answer": "5",
      "hint": "Split 20 into 4 equal groups.",
      "label": "fraction of a number"
    },
    {
      "prompt": "Which is larger: 1/2 or 1/3?",
      "answer": "1/2",
      "hint": "With the same whole, thirds are smaller parts than halves.",
      "label": "larger fraction"
    }
  ]
};
})();
