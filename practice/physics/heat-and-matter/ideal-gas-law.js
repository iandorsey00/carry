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
    }
  ]
};
})();
