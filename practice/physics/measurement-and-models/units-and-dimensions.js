// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.units"] = {
  "id": "physics.units",
  "topic": "Physics Foundations",
  "title": "Units and dimensions",
  "type": "concept",
  "figure": "physics-units",
  "intro": [
    "Physics quantities include a number and a unit.",
    "Units help check whether an equation can make sense.",
    "Dimensions describe the kind of quantity, such as length, time, mass, or force."
  ],
  "problems": [
    {
      "prompt": "Speed has units of distance divided by what?",
      "answer": "time",
      "hint": "Meters per second means meters divided by seconds.",
      "label": "speed unit denominator",
      "choices": [
        {
          "value": "time",
          "label": "time"
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
      "prompt": "Which is a unit of force: newton or joule?",
      "answer": "newton",
      "answers": [
        "newton",
        "n"
      ],
      "hint": "A joule is a unit of energy.",
      "label": "force unit",
      "choices": [
        {
          "value": "newton",
          "label": "newton"
        },
        {
          "value": "joule",
          "label": "joule"
        }
      ]
    },
    {
      "prompt": "What does the unit m/s measure: speed or mass?",
      "answer": "speed",
      "hint": "Meters per second compares distance to time.",
      "label": "meters per second meaning",
      "choices": [
        {
          "value": "speed",
          "label": "speed"
        },
        {
          "value": "mass",
          "label": "mass"
        }
      ]
    },
    {
      "prompt": "What is the SI unit of mass?",
      "answer": "kilogram",
      "answers": [
        "kilogram",
        "kg"
      ],
      "hint": "Not the gram — the kilogram is the base unit.",
      "label": "mass unit",
      "choices": [
        {
          "value": "kilogram",
          "label": "kilogram"
        },
        {
          "value": "pound",
          "label": "pound"
        },
        {
          "value": "newton",
          "label": "newton"
        },
        {
          "value": "gram",
          "label": "gram"
        }
      ]
    },
    {
      "prompt": "What is the SI unit of time?",
      "answer": "second",
      "answers": [
        "second",
        "seconds"
      ],
      "hint": "All rates lean on it.",
      "label": "time unit",
      "choices": [
        {
          "value": "second",
          "label": "second"
        },
        {
          "value": "minute",
          "label": "minute"
        },
        {
          "value": "hour",
          "label": "hour"
        },
        {
          "value": "hertz",
          "label": "hertz"
        }
      ]
    },
    {
      "prompt": "The joule is the unit of what?",
      "answer": "energy",
      "answers": [
        "energy"
      ],
      "hint": "Work and heat share it.",
      "label": "joule meaning",
      "choices": [
        {
          "value": "energy",
          "label": "energy"
        },
        {
          "value": "power",
          "label": "power"
        },
        {
          "value": "force",
          "label": "force"
        },
        {
          "value": "pressure",
          "label": "pressure"
        }
      ]
    },
    {
      "prompt": "The watt measures what?",
      "answer": "power",
      "answers": [
        "power"
      ],
      "hint": "Energy per second.",
      "label": "watt meaning",
      "choices": [
        {
          "value": "power",
          "label": "power"
        },
        {
          "value": "energy",
          "label": "energy"
        },
        {
          "value": "force",
          "label": "force"
        },
        {
          "value": "charge",
          "label": "charge"
        }
      ]
    },
    {
      "prompt": "How many meters are in 3 kilometers?",
      "answer": "3000",
      "answers": [
        "3000"
      ],
      "hint": "Kilo means one thousand.",
      "label": "km to m",
      "choices": [
        {
          "value": "3000",
          "label": "3000"
        },
        {
          "value": "300",
          "label": "300"
        },
        {
          "value": "30",
          "label": "30"
        },
        {
          "value": "30000",
          "label": "30000"
        }
      ]
    }

  ]
};
})();
