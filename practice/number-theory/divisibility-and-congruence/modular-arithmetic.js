// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["number-theory"] = window.CarryPractice.sections["number-theory"] || {};
  window.CarryPractice.sections["number-theory"]["number-theory.modular-arithmetic"] = {
  "id": "number-theory.modular-arithmetic",
  "topic": "Number Theory",
  "title": "Modular arithmetic",
  "type": "concept",
  "figure": "number-modular",
  "intro": [
    "Modular arithmetic tracks remainders after division.",
    "Working mod n means values that differ by n are treated as equivalent.",
    "Clock arithmetic is the everyday model for modular arithmetic."
  ],
  "problems": [
    {
      "prompt": "What is 14 mod 5?",
      "answer": "4",
      "hint": "14 = 5 × 2 + 4.",
      "label": "mod remainder"
    },
    {
      "prompt": "On a 12-hour clock, 10 + 5 lands on what hour?",
      "answer": "3",
      "hint": "15 wraps around to 3.",
      "label": "clock arithmetic"
    },
    {
      "prompt": "In mod 7 arithmetic, is 9 equivalent to 2?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "9 and 2 differ by 7.",
      "label": "mod equivalence"
    }
  ]
};
})();
