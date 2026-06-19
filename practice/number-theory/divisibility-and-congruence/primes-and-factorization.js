// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["number-theory"] = window.CarryPractice.sections["number-theory"] || {};
  window.CarryPractice.sections["number-theory"]["number-theory.primes"] = {
  "id": "number-theory.primes",
  "topic": "Number Theory",
  "title": "Primes and factorization",
  "type": "concept",
  "figure": "number-primes",
  "intro": [
    "A prime number has exactly two positive factors: 1 and itself.",
    "Composite numbers can be broken into prime factors.",
    "Prime factorization describes a number using prime building blocks."
  ],
  "problems": [
    {
      "prompt": "Is 17 prime?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "17 is not divisible by 2, 3, or 5.",
      "label": "prime check"
    },
    {
      "prompt": "Is 21 prime?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "21 = 3 × 7.",
      "label": "composite check"
    },
    {
      "prompt": "Write 12 as a product of primes.",
      "answer": "2*2*3",
      "answers": [
        "2*2*3",
        "2×2×3",
        "2^2*3",
        "2^2×3"
      ],
      "hint": "12 = 4 × 3, and 4 = 2 × 2.",
      "label": "prime factorization"
    }
  ]
};
})();
