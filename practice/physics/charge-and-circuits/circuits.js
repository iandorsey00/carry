// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.circuits"] = {
  "id": "physics.circuits",
  "topic": "Electricity and Magnetism",
  "title": "Circuits",
  "type": "concept",
  "figure": "physics-circuits",
  "intro": [
    "Current is the flow of electric charge.",
    "Voltage is energy per unit charge.",
    "Ohm's law is V = IR."
  ],
  "problems": [
    {
      "prompt": "Using V = IR, what is V when I = 2 A and R = 5 ohms?",
      "answer": "10",
      "hint": "Multiply current by resistance.",
      "label": "ohms law voltage"
    },
    {
      "prompt": "Current measures flow of what?",
      "answer": "charge",
      "hint": "Electric current is moving charge.",
      "label": "current meaning",
      "choices": [
        {
          "value": "charge",
          "label": "charge"
        },
        {
          "value": "mean",
          "label": "mean"
        },
        {
          "value": "median",
          "label": "median"
        },
        {
          "value": "mode",
          "label": "mode"
        }
      ]
    },
    {
      "prompt": "In a series circuit, current is the same through each component: yes or no?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "There is only one path in series.",
      "label": "series current",
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
      "prompt": "What is the SI unit of resistance?",
      "answer": "ohm",
      "answers": [
        "ohm",
        "ohms"
      ],
      "hint": "The symbol is the Greek letter omega.",
      "label": "resistance unit",
      "choices": [
        {
          "value": "ohm",
          "label": "ohm"
        },
        {
          "value": "volt",
          "label": "volt"
        },
        {
          "value": "ampere",
          "label": "ampere"
        },
        {
          "value": "watt",
          "label": "watt"
        }
      ]
    },
    {
      "prompt": "What is the SI unit of current?",
      "answer": "ampere",
      "answers": [
        "ampere",
        "amp"
      ],
      "hint": "Often shortened to amp.",
      "label": "current unit",
      "choices": [
        {
          "value": "ampere",
          "label": "ampere"
        },
        {
          "value": "volt",
          "label": "volt"
        },
        {
          "value": "ohm",
          "label": "ohm"
        },
        {
          "value": "joule",
          "label": "joule"
        }
      ]
    },
    {
      "prompt": "Using V = IR, what is I when V = 12 V and R = 4 ohms?",
      "answer": "3",
      "answers": [
        "3",
        "3 a"
      ],
      "hint": "Divide voltage by resistance.",
      "label": "solve current",
      "choices": [
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "48",
          "label": "48"
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
      "prompt": "In a parallel circuit, is the voltage the same across each branch?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Each branch connects to the same two points.",
      "label": "parallel voltage",
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
      "prompt": "Rubber is a conductor or an insulator?",
      "answer": "insulator",
      "answers": [
        "insulator"
      ],
      "hint": "Charges cannot flow through it easily.",
      "label": "insulator",
      "choices": [
        {
          "value": "insulator",
          "label": "insulator"
        },
        {
          "value": "conductor",
          "label": "conductor"
        },
        {
          "value": "semiconductor",
          "label": "semiconductor"
        }
      ]
    }

  ]
};
})();
