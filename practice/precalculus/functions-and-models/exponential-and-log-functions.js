// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["precalculus"] = window.CarryPractice.sections["precalculus"] || {};
  window.CarryPractice.sections["precalculus"]["precalculus.exponential-log"] = {
  "id": "precalculus.exponential-log",
  "topic": "Precalculus",
  "title": "Exponential and log functions",
  "type": "concept",
  "figure": "precalc-exponential-log",
  "intro": [
    "Exponential growth is multiplication on a schedule: each step multiplies again, which is why it starts slow and ends enormous.",
    "The logarithm is the same relationship read backwards: it recovers the exponent from the result.",
    "In symbols they undo each other: <math>2^x = 8</math> exactly when <math>\\log_2 8 = x</math>."
],
  "problems": [
    {
      "prompt": "What is 2^3?",
      "answer": "8",
      "hint": "2 times 2 times 2 is 8.",
      "label": "evaluate exponential"
    },
    {
      "prompt": "If 2^x = 8, what is x?",
      "answer": "3",
      "hint": "2 to the third power is 8.",
      "label": "solve exponential"
    },
    {
      "prompt": "What is log 100 using base 10?",
      "answer": "2",
      "hint": "10 squared is 100.",
      "label": "common logarithm"
    },
    {
      "prompt": "What is log base 3 of 27?",
      "answer": "3",
      "answers": [
        "3",
        "three"
      ],
      "hint": "How many 3s multiply to 27?",
      "label": "log twenty seven",
      "choices": [
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "9",
          "label": "9"
        },
        {
          "value": "27",
          "label": "27"
        },
        {
          "value": "2",
          "label": "2"
        }
      ]
    },
    {
      "prompt": "What is 5⁰?",
      "answer": "1",
      "answers": [
        "1",
        "one"
      ],
      "hint": "Any nonzero base to the zero power.",
      "label": "zero exponent",
      "choices": [
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "undefined",
          "label": "1/5"
        }
      ]
    },
    {
      "prompt": "Solve 10^x = 1000.",
      "answer": "3",
      "answers": [
        "3",
        "three"
      ],
      "hint": "Count the tens in 1000.",
      "label": "solve exponent",
      "choices": [
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "100",
          "label": "100"
        },
        {
          "value": "10",
          "label": "10"
        },
        {
          "value": "2",
          "label": "2"
        }
      ]
    },
    {
      "prompt": "log(ab) expands to what?",
      "answer": "log a + log b",
      "answers": [
        "log a + log b",
        "loga+logb"
      ],
      "hint": "Logs turn multiplication into addition.",
      "label": "product rule",
      "choices": [
        {
          "value": "log a + log b",
          "label": "log a + log b"
        },
        {
          "value": "log a × log b",
          "label": "log a × log b"
        },
        {
          "value": "log(a + b)",
          "label": "log(a + b)"
        }
      ]
    },
    {
      "prompt": "Which eventually grows faster: 2^x or x¹⁰⁰?",
      "answer": "2^x",
      "answers": [
        "2^x",
        "2 to the x"
      ],
      "hint": "Exponentials outrun every polynomial in the end.",
      "label": "growth race",
      "choices": [
        {
          "value": "2^x",
          "label": "2^x"
        },
        {
          "value": "x^100",
          "label": "x¹⁰⁰"
        }
      ]
    }

  ]
};
})();
