// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.forces"] = {
  "id": "physics.forces",
  "topic": "Mechanics",
  "title": "Forces",
  "type": "concept",
  "figure": "physics-forces",
  "intro": [
    "A force is a push or pull.",
    "Net force is the total force after combining directions.",
    "Newton's second law is F = ma."
  ],
  "problems": [
    {
      "prompt": "What is the net force on a 2 kg mass accelerating at 3 m/s^2?",
      "answer": "6",
      "hint": "Use F = ma: 2 times 3.",
      "label": "net force"
    },
    {
      "prompt": "Balanced forces give zero or nonzero net force?",
      "answer": "zero",
      "answers": [
        "zero",
        "0"
      ],
      "hint": "Balanced means they cancel.",
      "label": "balanced force",
      "choices": [
        {
          "value": "zero",
          "label": "zero"
        },
        {
          "value": "nonzero net force",
          "label": "nonzero net force"
        }
      ]
    },
    {
      "prompt": "Does friction usually oppose motion or cause no effect?",
      "answer": "oppose",
      "answers": [
        "opposes",
        "opposes motion",
        "oppose motion"
      ],
      "hint": "Friction acts against slipping or sliding.",
      "label": "friction direction",
      "choices": [
        {
          "value": "oppose",
          "label": "oppose motion"
        },
        {
          "value": "noeffect",
          "label": "cause no effect"
        }
      ]
    },
    {
      "prompt": "What is the SI unit of force?",
      "answer": "newton",
      "answers": [
        "newton",
        "newtons"
      ],
      "hint": "One kilogram meter per second squared.",
      "label": "force unit",
      "choices": [
        {
          "value": "newton",
          "label": "newton"
        },
        {
          "value": "joule",
          "label": "joule"
        },
        {
          "value": "watt",
          "label": "watt"
        },
        {
          "value": "pascal",
          "label": "pascal"
        }
      ]
    },
    {
      "prompt": "Weight equals mass times what?",
      "answer": "gravity",
      "answers": [
        "gravity",
        "g",
        "gravitational acceleration"
      ],
      "hint": "On Earth, about 9.8 m/s².",
      "label": "weight formula",
      "choices": [
        {
          "value": "gravity",
          "label": "gravity"
        },
        {
          "value": "speed",
          "label": "speed"
        },
        {
          "value": "volume",
          "label": "volume"
        },
        {
          "value": "height",
          "label": "height"
        }
      ]
    },
    {
      "prompt": "Newton's third law says forces always come in what?",
      "answer": "pairs",
      "answers": [
        "pairs",
        "action-reaction pairs"
      ],
      "hint": "Every push gets an equal push back.",
      "label": "third law",
      "choices": [
        {
          "value": "pairs",
          "label": "pairs"
        },
        {
          "value": "triples",
          "label": "triples"
        },
        {
          "value": "single acts",
          "label": "single acts"
        }
      ]
    },
    {
      "prompt": "If the net force on a moving object is zero, its velocity does what?",
      "answer": "stays constant",
      "answers": [
        "stays constant",
        "constant"
      ],
      "hint": "No net push means no change in motion.",
      "label": "first law",
      "choices": [
        {
          "value": "stays constant",
          "label": "stays constant"
        },
        {
          "value": "drops to zero",
          "label": "drops to zero"
        },
        {
          "value": "increases",
          "label": "increases"
        }
      ]
    },
    {
      "prompt": "Forces of 10 N right and 4 N left combine to what net force?",
      "answer": "6 N right",
      "answers": [
        "6 N right",
        "6"
      ],
      "hint": "Opposite directions subtract.",
      "label": "net force",
      "choices": [
        {
          "value": "6 N right",
          "label": "6 N right"
        },
        {
          "value": "14 N right",
          "label": "14 N right"
        },
        {
          "value": "6 N left",
          "label": "6 N left"
        },
        {
          "value": "40 N",
          "label": "40 N"
        }
      ]
    }

  ]
};
})();
