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
    },
    {
      "prompt": "Is 25 ≡ 4 mod 7?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Their difference is 21, a multiple of 7.",
      "label": "check congruence",
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
      "prompt": "If a ≡ b mod n and b ≡ c mod n, is a ≡ c mod n?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Congruence is transitive, like equality.",
      "label": "transitive",
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
      "prompt": "What is the smallest nonnegative number congruent to 100 mod 9?",
      "answer": "1",
      "answers": [
        "1",
        "one"
      ],
      "hint": "99 is a multiple of 9.",
      "label": "reduce 100",
      "choices": [
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "9",
          "label": "9"
        },
        {
          "value": "10",
          "label": "10"
        },
        {
          "value": "0",
          "label": "0"
        }
      ]
    },
    {
      "prompt": "If a ≡ b and c ≡ d mod n, is a + c ≡ b + d mod n?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Congruences add like equations.",
      "label": "add congruences",
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
      "prompt": "How many residue classes are there mod 4?",
      "answer": "4",
      "answers": [
        "4",
        "four"
      ],
      "hint": "One class per possible remainder: 0, 1, 2, 3.",
      "label": "residue count",
      "choices": [
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "8",
          "label": "8"
        }
      ]
    }

  ]
};
})();
