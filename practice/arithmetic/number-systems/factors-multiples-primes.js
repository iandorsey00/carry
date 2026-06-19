// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.factors-multiples-primes"] = {
  "id": "arithmetic.factors-multiples-primes",
  "topic": "Arithmetic",
  "title": "Factors, multiples, primes",
  "type": "concept",
  "figure": "factor-pairs",
  "intro": [
    "Factors divide a number evenly.",
    "Multiples are results of multiplying by whole numbers.",
    "A prime number has exactly two positive factors: 1 and itself."
  ],
  "problems": [
    {
      "prompt": "Is 29 prime? Answer yes or no.",
      "answer": "yes",
      "answers": [
        "yes",
        "y",
        "true"
      ],
      "hint": "29 is not divisible by 2, 3, or 5.",
      "label": "prime check",
      "choices": [
        {
          "value": "yes",
          "label": "Yes"
        },
        {
          "value": "no",
          "label": "No"
        }
      ]
    },
    {
      "prompt": "Give the missing factor: 6 x __ = 42.",
      "answer": "7",
      "hint": "42 divided by 6 is 7.",
      "label": "missing factor"
    },
    {
      "prompt": "What is the least common multiple of 4 and 6?",
      "answer": "12",
      "hint": "List multiples until they match.",
      "label": "least common multiple"
    }
  ]
};
})();
