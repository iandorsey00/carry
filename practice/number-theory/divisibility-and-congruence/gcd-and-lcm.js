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
    "GCD and LCM answer two matching questions: the biggest piece that measures both numbers, and the first milestone both reach.",
    "The greatest common divisor looks down into shared factors; the least common multiple looks up along shared multiples.",
    "They cooperate: for positive numbers, gcd times lcm equals the product of the numbers themselves."
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
      "label": "shared factors",
      "choices": [
        {
          "value": "gcd",
          "label": "GCD"
        },
        {
          "value": "LCM",
          "label": "LCM"
        }
      ]
    }
  ]
};
})();
