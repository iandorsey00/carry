// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["number-theory"] = window.CarryPractice.sections["number-theory"] || {};
  window.CarryPractice.sections["number-theory"]["number-theory.congruences"] = {
  "id": "number-theory.congruences",
  "topic": "Number Theory",
  "title": "Congruences",
  "type": "concept",
  "figure": "number-congruences",
  "intro": [
    "A congruence says two numbers have the same remainder.",
    "The notation a ≡ b mod n means n divides a - b.",
    "Congruences let equations be solved in remainder systems."
  ],
  "problems": [
    {
      "prompt": "Is 17 ≡ 2 mod 5?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "17 and 2 differ by 15, which is divisible by 5.",
      "label": "congruence check"
    },
    {
      "prompt": "If a ≡ b mod n, what divides a - b?",
      "answer": "n",
      "answers": [
        "n",
        "the modulus",
        "modulus"
      ],
      "hint": "That is the definition of congruence mod n.",
      "label": "congruence definition"
    },
    {
      "prompt": "What is the smallest nonnegative number congruent to 23 mod 6?",
      "answer": "5",
      "hint": "23 = 6 × 3 + 5.",
      "label": "least residue"
    }
  ]
};
})();
