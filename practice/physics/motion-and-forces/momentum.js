// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.momentum"] = {
  "id": "physics.momentum",
  "topic": "Mechanics",
  "title": "Momentum",
  "type": "concept",
  "figure": "physics-momentum",
  "intro": [
    "Momentum measures mass in motion.",
    "Momentum is p = mv.",
    "In an isolated system, total momentum is conserved."
  ],
  "problems": [
    {
      "prompt": "What is the momentum of a 3 kg object moving at 4 m/s?",
      "answer": "12",
      "hint": "Use p = mv: 3 times 4.",
      "label": "momentum"
    },
    {
      "prompt": "Momentum depends on mass and what?",
      "answer": "velocity",
      "hint": "p = mv.",
      "label": "momentum factor",
      "choices": [
        {
          "value": "velocity",
          "label": "velocity"
        },
        {
          "value": "prime",
          "label": "prime"
        },
        {
          "value": "composite",
          "label": "composite"
        },
        {
          "value": "factor",
          "label": "factor"
        }
      ]
    },
    {
      "prompt": "In an isolated collision, total momentum is conserved: yes or no?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Momentum conservation is the key collision rule.",
      "label": "momentum conservation",
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
      "prompt": "Momentum is measured in which units?",
      "answer": "kg·m/s",
      "answers": [
        "kg·m/s",
        "kg m/s"
      ],
      "hint": "Mass times velocity carries both units.",
      "label": "momentum unit",
      "choices": [
        {
          "value": "kg·m/s",
          "label": "kg·m/s"
        },
        {
          "value": "newtons",
          "label": "newtons"
        },
        {
          "value": "joules",
          "label": "joules"
        },
        {
          "value": "m/s²",
          "label": "m/s²"
        }
      ]
    },
    {
      "prompt": "Doubling velocity does what to momentum?",
      "answer": "doubles it",
      "answers": [
        "doubles it",
        "doubles"
      ],
      "hint": "Momentum is linear in velocity.",
      "label": "linear momentum",
      "choices": [
        {
          "value": "doubles it",
          "label": "doubles it"
        },
        {
          "value": "squares it",
          "label": "squares it"
        },
        {
          "value": "halves it",
          "label": "halves it"
        }
      ]
    },
    {
      "prompt": "Impulse equals force multiplied by what?",
      "answer": "time",
      "answers": [
        "time"
      ],
      "hint": "A small force applied long can match a big brief one.",
      "label": "impulse",
      "choices": [
        {
          "value": "time",
          "label": "time"
        },
        {
          "value": "mass",
          "label": "mass"
        },
        {
          "value": "distance",
          "label": "distance"
        },
        {
          "value": "area",
          "label": "area"
        }
      ]
    },
    {
      "prompt": "A truck and a bicycle move at the same speed. Which has more momentum?",
      "answer": "the truck",
      "answers": [
        "the truck",
        "truck"
      ],
      "hint": "More mass at equal velocity.",
      "label": "truck momentum",
      "choices": [
        {
          "value": "the truck",
          "label": "the truck"
        },
        {
          "value": "the bicycle",
          "label": "the bicycle"
        },
        {
          "value": "they match",
          "label": "they match"
        }
      ]
    },
    {
      "prompt": "A stationary object explodes into pieces. What is the total momentum afterward?",
      "answer": "0",
      "answers": [
        "0",
        "zero"
      ],
      "hint": "It started at zero and stays there.",
      "label": "explosion",
      "choices": [
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "huge",
          "label": "huge"
        },
        {
          "value": "equal to the mass",
          "label": "equal to the mass"
        }
      ]
    }

  ]
};
})();
