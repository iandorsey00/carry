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
    "A congruence is an equation for remainder worlds: <math>a ≡ b mod n</math> says a and b agree where it counts.",
    "Two equivalent readings: they leave the same remainder on division by n, or n divides their difference.",
    "Congruences can be added and multiplied like ordinary equations, which is what makes remainder algebra possible."
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
      "label": "congruence check",
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
