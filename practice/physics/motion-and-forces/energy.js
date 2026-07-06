// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.energy"] = {
  "id": "physics.energy",
  "topic": "Mechanics",
  "title": "Energy",
  "type": "concept",
  "figure": "physics-energy",
  "intro": [
    "Energy is the capacity to do work or cause change.",
    "Kinetic energy is energy of motion.",
    "Gravitational potential energy depends on height."
  ],
  "problems": [
    {
      "prompt": "Kinetic energy belongs to motion or height?",
      "answer": "motion",
      "hint": "Kinetic means moving.",
      "label": "kinetic energy meaning",
      "choices": [
        {
          "value": "motion",
          "label": "motion"
        },
        {
          "value": "height",
          "label": "height"
        }
      ]
    },
    {
      "prompt": "What happens to gravitational potential energy when height increases?",
      "answer": "increases",
      "answers": [
        "increase",
        "goes up"
      ],
      "hint": "Greater height means greater mgh.",
      "label": "height energy",
      "choices": [
        {
          "value": "increases",
          "label": "increases"
        },
        {
          "value": "force",
          "label": "force"
        },
        {
          "value": "energy",
          "label": "energy"
        },
        {
          "value": "momentum",
          "label": "momentum"
        }
      ]
    },
    {
      "prompt": "Work transfers what quantity: energy or charge?",
      "answer": "energy",
      "hint": "Work is a way of transferring energy.",
      "label": "work transfer",
      "choices": [
        {
          "value": "energy",
          "label": "energy"
        },
        {
          "value": "charge",
          "label": "charge"
        }
      ]
    },
    {
      "prompt": "What is the SI unit of energy?",
      "answer": "joule",
      "answers": [
        "joule",
        "joules"
      ],
      "hint": "Work, heat, and kinetic energy all use it.",
      "label": "energy unit",
      "choices": [
        {
          "value": "joule",
          "label": "joule"
        },
        {
          "value": "watt",
          "label": "watt"
        },
        {
          "value": "newton",
          "label": "newton"
        },
        {
          "value": "volt",
          "label": "volt"
        }
      ]
    },
    {
      "prompt": "Kinetic energy depends on mass and what else?",
      "answer": "speed",
      "answers": [
        "speed",
        "velocity"
      ],
      "hint": "The formula squares it.",
      "label": "ke inputs",
      "choices": [
        {
          "value": "speed",
          "label": "speed"
        },
        {
          "value": "height",
          "label": "height"
        },
        {
          "value": "color",
          "label": "color"
        },
        {
          "value": "charge",
          "label": "charge"
        }
      ]
    },
    {
      "prompt": "Doubling an object's speed multiplies its kinetic energy by what?",
      "answer": "4",
      "answers": [
        "4",
        "four"
      ],
      "hint": "Kinetic energy grows with the square of speed.",
      "label": "ke squares",
      "choices": [
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "8",
          "label": "8"
        },
        {
          "value": "16",
          "label": "16"
        }
      ]
    },
    {
      "prompt": "In a closed system, the total energy does what?",
      "answer": "stays constant",
      "answers": [
        "stays constant",
        "is conserved"
      ],
      "hint": "Energy changes form but never total.",
      "label": "conservation",
      "choices": [
        {
          "value": "stays constant",
          "label": "stays constant"
        },
        {
          "value": "shrinks",
          "label": "shrinks"
        },
        {
          "value": "grows",
          "label": "grows"
        }
      ]
    },
    {
      "prompt": "A stretched spring stores which kind of energy?",
      "answer": "potential energy",
      "answers": [
        "potential energy",
        "elastic potential energy"
      ],
      "hint": "Elastic potential, waiting to be released.",
      "label": "spring energy",
      "choices": [
        {
          "value": "potential energy",
          "label": "potential energy"
        },
        {
          "value": "kinetic energy",
          "label": "kinetic energy"
        },
        {
          "value": "sound energy",
          "label": "sound energy"
        }
      ]
    }

  ]
};
})();
