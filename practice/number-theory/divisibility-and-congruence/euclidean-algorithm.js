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
    "The Euclidean algorithm finds a GCD without factoring anything: divide, keep the remainder, repeat.",
    "Each round shrinks the problem — the pair (a, b) becomes (b, remainder) — and the answer never changes.",
    "When the remainder reaches 0, the last nonzero remainder is the GCD, after remarkably few steps."
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
    },
    {
      "prompt": "What is gcd(48, 18)?",
      "answer": "6",
      "answers": [
        "6",
        "six"
      ],
      "hint": "48 = 2 × 18 + 12, then 18 = 1 × 12 + 6, then the remainder hits 0.",
      "label": "run the algorithm",
      "choices": [
        {
          "value": "6",
          "label": "6"
        },
        {
          "value": "12",
          "label": "12"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "18",
          "label": "18"
        }
      ]
    },
    {
      "prompt": "Computing gcd(21, 6): 21 = 3 × 6 + 3. What pair comes next?",
      "answer": "(6, 3)",
      "answers": [
        "(6, 3)",
        "(6,3)"
      ],
      "hint": "The divisor and the remainder move up.",
      "label": "next pair",
      "choices": [
        {
          "value": "(6, 3)",
          "label": "(6, 3)"
        },
        {
          "value": "(21, 3)",
          "label": "(21, 3)"
        },
        {
          "value": "(3, 6)",
          "label": "(3, 6)"
        }
      ]
    },
    {
      "prompt": "What is gcd(n, 0) for a positive number n?",
      "answer": "n",
      "answers": [
        "n"
      ],
      "hint": "Everything divides 0, so n itself wins.",
      "label": "gcd with zero",
      "choices": [
        {
          "value": "n",
          "label": "n"
        },
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "1",
          "label": "1"
        }
      ]
    },
    {
      "prompt": "Does the Euclidean algorithm require factoring the numbers first?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "That is exactly why it is fast.",
      "label": "no factoring",
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
      "prompt": "For gcd(10, 3) the remainders run 1, then 0. What is the gcd?",
      "answer": "1",
      "answers": [
        "1",
        "one"
      ],
      "hint": "The last nonzero remainder — the numbers are coprime.",
      "label": "coprime result",
      "choices": [
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "3",
          "label": "3"
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
    }

  ]
};
})();
