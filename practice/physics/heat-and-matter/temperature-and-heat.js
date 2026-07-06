// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.temperature-heat"] = {
  "id": "physics.temperature-heat",
  "topic": "Thermodynamics",
  "title": "Temperature and heat",
  "type": "concept",
  "figure": "physics-heat",
  "intro": [
    "Temperature measures average microscopic kinetic energy.",
    "Heat is energy transferred because of temperature difference.",
    "Heat flows spontaneously from hotter to colder objects."
  ],
  "problems": [
    {
      "prompt": "Heat flows naturally from hot to cold or cold to hot?",
      "answer": "hottocold",
      "answers": [
        "hot to cold",
        "hotter to colder"
      ],
      "hint": "Thermal energy flows from higher temperature to lower temperature.",
      "label": "heat direction",
      "choices": [
        {
          "value": "hottocold",
          "label": "hot to cold"
        },
        {
          "value": "cold to hot",
          "label": "cold to hot"
        }
      ]
    },
    {
      "prompt": "Temperature is related to average kinetic energy: yes or no?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Microscopic motion is tied to temperature.",
      "label": "temperature meaning",
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
      "prompt": "Heat is energy transfer caused by what difference?",
      "answer": "temperature",
      "hint": "A temperature difference drives heat transfer.",
      "label": "heat cause",
      "choices": [
        {
          "value": "temperature",
          "label": "temperature"
        },
        {
          "value": "pressure",
          "label": "pressure"
        },
        {
          "value": "volume",
          "label": "volume"
        },
        {
          "value": "mass",
          "label": "mass"
        }
      ]
    },
    {
      "prompt": "What is the SI unit of energy, including heat?",
      "answer": "joule",
      "answers": [
        "joule",
        "joules"
      ],
      "hint": "The same unit work uses.",
      "label": "heat unit",
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
          "value": "kelvin",
          "label": "kelvin"
        },
        {
          "value": "newton",
          "label": "newton"
        }
      ]
    },
    {
      "prompt": "Which temperature scale starts at absolute zero?",
      "answer": "kelvin",
      "answers": [
        "kelvin"
      ],
      "hint": "Its zero really means zero.",
      "label": "absolute scale",
      "choices": [
        {
          "value": "kelvin",
          "label": "kelvin"
        },
        {
          "value": "celsius",
          "label": "celsius"
        },
        {
          "value": "fahrenheit",
          "label": "fahrenheit"
        }
      ]
    },
    {
      "prompt": "A metal bench feels colder than a wooden one at the same temperature because metal does what?",
      "answer": "conducts heat away faster",
      "answers": [
        "conducts heat away faster",
        "conducts faster"
      ],
      "hint": "Your hand loses heat quicker to a good conductor.",
      "label": "conduction feel",
      "choices": [
        {
          "value": "conducts heat away faster",
          "label": "conducts heat away faster"
        },
        {
          "value": "is actually colder",
          "label": "is actually colder"
        },
        {
          "value": "reflects light",
          "label": "reflects light"
        }
      ]
    },
    {
      "prompt": "Two objects in thermal equilibrium share the same what?",
      "answer": "temperature",
      "answers": [
        "temperature"
      ],
      "hint": "Heat has finished flowing between them.",
      "label": "equilibrium",
      "choices": [
        {
          "value": "temperature",
          "label": "temperature"
        },
        {
          "value": "mass",
          "label": "mass"
        },
        {
          "value": "volume",
          "label": "volume"
        },
        {
          "value": "color",
          "label": "color"
        }
      ]
    },
    {
      "prompt": "Water boils at 100°C. About what is that in kelvin?",
      "answer": "373",
      "answers": [
        "373"
      ],
      "hint": "Add 273 to the Celsius reading.",
      "label": "boiling kelvin",
      "choices": [
        {
          "value": "373",
          "label": "373"
        },
        {
          "value": "100",
          "label": "100"
        },
        {
          "value": "273",
          "label": "273"
        },
        {
          "value": "212",
          "label": "212"
        }
      ]
    }

  ]
};
})();
