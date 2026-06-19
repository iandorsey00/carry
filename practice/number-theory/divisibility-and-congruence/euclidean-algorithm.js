// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["number-theory"] = window.CarryPractice.sections["number-theory"] || {};
  window.CarryPractice.sections["number-theory"]["number-theory.euclidean-algorithm"] = {
  "id": "number-theory.euclidean-algorithm",
  "topic": "Number Theory",
  "title": "Euclidean algorithm",
  "type": "concept",
  "figure": "number-euclidean",
  "intro": [
    "The Euclidean algorithm finds a GCD by repeated division with remainder.",
    "Replace the larger number by the remainder and keep going.",
    "The last nonzero remainder is the GCD."
  ],
  "problems": [
    {
      "prompt": "In 18 = 12 × 1 + 6, what is the remainder?",
      "answer": "6",
      "hint": "The remainder is the leftover part after 12 × 1.",
      "label": "euclidean remainder"
    },
    {
      "prompt": "After 18 = 12 × 1 + 6, what pair comes next: (12, 6) or (18, 6)?",
      "answer": "(12,6)",
      "answers": [
        "(12,6)",
        "12,6"
      ],
      "hint": "Move to the old divisor and the remainder.",
      "label": "next euclidean pair"
    },
    {
      "prompt": "If the next remainder is 0, what was the GCD in this example?",
      "answer": "6",
      "hint": "The last nonzero remainder is 6.",
      "label": "euclidean gcd"
    }
  ]
};
})();
