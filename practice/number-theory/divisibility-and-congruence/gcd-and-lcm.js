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
    },
    {
      "prompt": "What is gcd(7, 13)?",
      "answer": "1",
      "answers": [
        "1",
        "one"
      ],
      "hint": "Two distinct primes share no factors.",
      "label": "prime gcd",
      "choices": [
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "7",
          "label": "7"
        },
        {
          "value": "13",
          "label": "13"
        },
        {
          "value": "91",
          "label": "91"
        }
      ]
    },
    {
      "prompt": "Numbers whose gcd is 1 are called what?",
      "answer": "coprime",
      "answers": [
        "coprime",
        "relatively prime"
      ],
      "hint": "They share no factor beyond 1.",
      "label": "coprime name",
      "choices": [
        {
          "value": "coprime",
          "label": "coprime"
        },
        {
          "value": "composite",
          "label": "composite"
        },
        {
          "value": "congruent",
          "label": "congruent"
        },
        {
          "value": "perfect",
          "label": "perfect"
        }
      ]
    },
    {
      "prompt": "What is lcm(3, 5)?",
      "answer": "15",
      "answers": [
        "15",
        "fifteen"
      ],
      "hint": "The first milestone both counts reach.",
      "label": "small lcm",
      "choices": [
        {
          "value": "15",
          "label": "15"
        },
        {
          "value": "8",
          "label": "8"
        },
        {
          "value": "30",
          "label": "30"
        },
        {
          "value": "5",
          "label": "5"
        }
      ]
    },
    {
      "prompt": "gcd(12, 18) × lcm(12, 18) equals what?",
      "answer": "216",
      "answers": [
        "216"
      ],
      "hint": "It always equals the product 12 × 18.",
      "label": "gcd lcm product",
      "choices": [
        {
          "value": "216",
          "label": "216"
        },
        {
          "value": "30",
          "label": "30"
        },
        {
          "value": "36",
          "label": "36"
        },
        {
          "value": "6",
          "label": "6"
        }
      ]
    },
    {
      "prompt": "What is gcd(8, 8)?",
      "answer": "8",
      "answers": [
        "8",
        "eight"
      ],
      "hint": "A number is its own greatest divisor.",
      "label": "self gcd",
      "choices": [
        {
          "value": "8",
          "label": "8"
        },
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "64",
          "label": "64"
        }
      ]
    }

  ]
};
})();
