// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["precalculus"] = window.CarryPractice.sections["precalculus"] || {};
  window.CarryPractice.sections["precalculus"]["precalculus.complex-numbers"] = {
  "id": "precalculus.complex-numbers",
  "topic": "Precalculus",
  "title": "Complex numbers",
  "type": "concept",
  "figure": "precalc-complex",
  "intro": [
    "Complex numbers finish arithmetic: with them, every polynomial equation finally has a full set of solutions.",
    "One new ingredient does it all — the unit i with <math>i^2 = -1</math> — and a + bi mixes it with ordinary numbers.",
    "Geometrically, a + bi is the point (a, b), so complex arithmetic is plane geometry in disguise."
],
  "problems": [
    {
      "prompt": "What is i^2?",
      "answer": "-1",
      "hint": "This is the defining property of i.",
      "label": "imaginary unit"
    },
    {
      "prompt": "What is the real part of 3 + 4i?",
      "answer": "3",
      "hint": "The real part is the number without i.",
      "label": "real part"
    },
    {
      "prompt": "Compute (3 + 4i) + (1 - 2i).",
      "answer": "4+2i",
      "answers": [
        "4+2i",
        "4+2*i"
      ],
      "hint": "Add real parts and imaginary parts separately.",
      "label": "complex addition"
    },
    {
      "prompt": "Compute (2 + i)(2 - i).",
      "answer": "5",
      "answers": [
        "5",
        "five"
      ],
      "hint": "Conjugates multiply to 4 - i², and i² is -1.",
      "label": "conjugate product",
      "choices": [
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "4 - i",
          "label": "4 - i"
        }
      ]
    },
    {
      "prompt": "What is i³?",
      "answer": "-i",
      "answers": [
        "-i",
        "minus i"
      ],
      "hint": "i² is -1, times one more i.",
      "label": "i cubed",
      "choices": [
        {
          "value": "-i",
          "label": "-i"
        },
        {
          "value": "i",
          "label": "i"
        },
        {
          "value": "-1",
          "label": "-1"
        },
        {
          "value": "1",
          "label": "1"
        }
      ]
    },
    {
      "prompt": "What is the imaginary part of 7i?",
      "answer": "7",
      "answers": [
        "7",
        "seven"
      ],
      "hint": "The coefficient of i, not including i itself.",
      "label": "pure imaginary",
      "choices": [
        {
          "value": "7",
          "label": "7"
        },
        {
          "value": "7i",
          "label": "7i"
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
      "prompt": "Plotted as a point, 3 + 4i lands in which quadrant of the complex plane?",
      "answer": "I",
      "answers": [
        "I",
        "1",
        "first"
      ],
      "hint": "Both parts are positive.",
      "label": "complex quadrant",
      "choices": [
        {
          "value": "I",
          "label": "I"
        },
        {
          "value": "II",
          "label": "II"
        },
        {
          "value": "III",
          "label": "III"
        },
        {
          "value": "IV",
          "label": "IV"
        }
      ]
    },
    {
      "prompt": "What is the modulus of 6 + 8i?",
      "answer": "10",
      "answers": [
        "10",
        "ten"
      ],
      "hint": "Pythagoras on the parts: root of 36 + 64.",
      "label": "complex modulus",
      "choices": [
        {
          "value": "10",
          "label": "10"
        },
        {
          "value": "14",
          "label": "14"
        },
        {
          "value": "48",
          "label": "48"
        },
        {
          "value": "2",
          "label": "2"
        }
      ]
    }

  ]
};
})();
