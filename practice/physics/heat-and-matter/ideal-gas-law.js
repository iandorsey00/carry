// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.ideal-gas"] = {
  "id": "physics.ideal-gas",
  "topic": "Thermodynamics",
  "title": "Ideal gas law",
  "type": "concept",
  "figure": "physics-ideal-gas",
  "intro": [
    "The ideal gas law connects pressure, volume, amount, and temperature.",
    "The equation is PV = nRT.",
    "Temperature must be measured on an absolute scale."
  ],
  "problems": [
    {
      "prompt": "In PV = nRT, what letter represents pressure?",
      "answer": "p",
      "hint": "P is pressure.",
      "label": "pressure letter",
      "choices": [
        {
          "value": "p",
          "label": "P"
        },
        {
          "value": "v",
          "label": "V"
        },
        {
          "value": "n",
          "label": "n"
        },
        {
          "value": "t",
          "label": "T"
        }
      ]
    },
    {
      "prompt": "In PV = nRT, what letter represents volume?",
      "answer": "v",
      "hint": "V is volume.",
      "label": "volume letter",
      "choices": [
        {
          "value": "p",
          "label": "P"
        },
        {
          "value": "v",
          "label": "V"
        },
        {
          "value": "n",
          "label": "n"
        },
        {
          "value": "t",
          "label": "T"
        }
      ]
    },
    {
      "prompt": "For gas laws, temperature should be in kelvin or celsius?",
      "answer": "kelvin",
      "answers": [
        "kelvin",
        "k"
      ],
      "hint": "Kelvin is the absolute temperature scale.",
      "label": "absolute temperature",
      "choices": [
        {
          "value": "kelvin",
          "label": "kelvin"
        },
        {
          "value": "celsius",
          "label": "celsius"
        }
      ]
    },
    {
      "prompt": "In PV = nRT, what does n represent?",
      "answer": "the amount of gas",
      "answers": [
        "the amount of gas",
        "amount",
        "moles"
      ],
      "hint": "Counted in moles.",
      "label": "n meaning",
      "choices": [
        {
          "value": "the amount of gas",
          "label": "the amount of gas"
        },
        {
          "value": "the pressure",
          "label": "the pressure"
        },
        {
          "value": "a constant",
          "label": "a constant"
        },
        {
          "value": "the speed",
          "label": "the speed"
        }
      ]
    },
    {
      "prompt": "Halving the volume at constant temperature does what to the pressure?",
      "answer": "doubles it",
      "answers": [
        "doubles it",
        "doubles"
      ],
      "hint": "PV stays constant, so P and V trade.",
      "label": "boyle",
      "choices": [
        {
          "value": "doubles it",
          "label": "doubles it"
        },
        {
          "value": "halves it",
          "label": "halves it"
        },
        {
          "value": "leaves it alone",
          "label": "leaves it alone"
        }
      ]
    },
    {
      "prompt": "Heating a gas in a sealed rigid container does what to the pressure?",
      "answer": "raises it",
      "answers": [
        "raises it",
        "increases it"
      ],
      "hint": "T goes up with V fixed, so P must climb.",
      "label": "sealed heating",
      "choices": [
        {
          "value": "raises it",
          "label": "raises it"
        },
        {
          "value": "lowers it",
          "label": "lowers it"
        },
        {
          "value": "nothing",
          "label": "nothing"
        }
      ]
    },
    {
      "prompt": "In PV = nRT, what is R?",
      "answer": "a constant",
      "answers": [
        "a constant",
        "the gas constant"
      ],
      "hint": "The gas constant makes the units agree.",
      "label": "gas constant",
      "choices": [
        {
          "value": "a constant",
          "label": "a constant"
        },
        {
          "value": "the radius",
          "label": "the radius"
        },
        {
          "value": "a rate",
          "label": "a rate"
        },
        {
          "value": "the density",
          "label": "the density"
        }
      ]
    },
    {
      "prompt": "Absolute zero is approximately what in Celsius?",
      "answer": "-273",
      "answers": [
        "-273",
        "-273°C"
      ],
      "hint": "Zero kelvin sits far below freezing.",
      "label": "absolute zero",
      "choices": [
        {
          "value": "-273",
          "label": "-273"
        },
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "-100",
          "label": "-100"
        },
        {
          "value": "-460",
          "label": "-460"
        }
      ]
    }

  ]
};
})();
