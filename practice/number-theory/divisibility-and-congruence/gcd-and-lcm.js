// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["number-theory"] = window.CarryPractice.sections["number-theory"] || {};
  window.CarryPractice.sections["number-theory"]["number-theory.gcd-lcm"] = {
  "id": "number-theory.gcd-lcm",
  "topic": "Number Theory",
  "title": "GCD and LCM",
  "type": "concept",
  "figure": "number-gcd-lcm",
  "intro": [
    "The greatest common divisor is the largest number that divides both numbers.",
    "The least common multiple is the smallest positive number both numbers divide.",
    "GCD and LCM organize shared factors and shared multiples."
  ],
  "problems": [
    {
      "prompt": "What is gcd(12, 18)?",
      "answer": "6",
      "hint": "6 is the largest number that divides both 12 and 18.",
      "label": "gcd"
    },
    {
      "prompt": "What is lcm(4, 6)?",
      "answer": "12",
      "hint": "12 is the first positive multiple shared by 4 and 6.",
      "label": "lcm"
    },
    {
      "prompt": "Which is about shared factors: GCD or LCM?",
      "answer": "gcd",
      "answers": [
        "gcd",
        "greatest common divisor"
      ],
      "hint": "GCD looks downward at divisors.",
      "label": "shared factors"
    }
  ]
};
})();
