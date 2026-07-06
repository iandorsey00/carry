// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.waves"] = {
  "id": "physics.waves",
  "topic": "Waves",
  "title": "Wave properties",
  "type": "concept",
  "figure": "physics-waves",
  "intro": [
    "A wave transfers energy through space or a medium.",
    "Wavelength is distance from one matching point to the next.",
    "Wave speed equals frequency times wavelength."
  ],
  "problems": [
    {
      "prompt": "In v = f lambda, what does f represent?",
      "answer": "frequency",
      "hint": "f is the number of cycles per second.",
      "label": "wave frequency",
      "choices": [
        {
          "value": "frequency",
          "label": "frequency"
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
      "prompt": "If frequency is 2 Hz and wavelength is 3 m, what is wave speed?",
      "answer": "6",
      "hint": "Use v = f lambda: 2 times 3.",
      "label": "wave speed"
    },
    {
      "prompt": "Does a wave transfer energy or mass overall?",
      "answer": "energy",
      "hint": "Waves carry energy without transporting matter overall.",
      "label": "wave transfer",
      "answers": [
        "false"
      ],
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
      "prompt": "The high point of a wave is called the what?",
      "answer": "crest",
      "answers": [
        "crest"
      ],
      "hint": "The trough is its opposite.",
      "label": "crest",
      "choices": [
        {
          "value": "crest",
          "label": "crest"
        },
        {
          "value": "trough",
          "label": "trough"
        },
        {
          "value": "node",
          "label": "node"
        },
        {
          "value": "period",
          "label": "period"
        }
      ]
    },
    {
      "prompt": "The low point of a wave is called the what?",
      "answer": "trough",
      "answers": [
        "trough"
      ],
      "hint": "The crest is its opposite.",
      "label": "trough",
      "choices": [
        {
          "value": "trough",
          "label": "trough"
        },
        {
          "value": "crest",
          "label": "crest"
        },
        {
          "value": "peak",
          "label": "peak"
        },
        {
          "value": "axis",
          "label": "axis"
        }
      ]
    },
    {
      "prompt": "Wavelength is measured in which units?",
      "answer": "meters",
      "answers": [
        "meters"
      ],
      "hint": "It is a distance.",
      "label": "wavelength unit",
      "choices": [
        {
          "value": "meters",
          "label": "meters"
        },
        {
          "value": "hertz",
          "label": "hertz"
        },
        {
          "value": "seconds",
          "label": "seconds"
        },
        {
          "value": "joules",
          "label": "joules"
        }
      ]
    },
    {
      "prompt": "In a transverse wave, the medium moves in which direction relative to travel?",
      "answer": "perpendicular",
      "answers": [
        "perpendicular",
        "at right angles"
      ],
      "hint": "Think of a shaken rope.",
      "label": "transverse",
      "choices": [
        {
          "value": "perpendicular",
          "label": "perpendicular"
        },
        {
          "value": "parallel",
          "label": "parallel"
        },
        {
          "value": "backward",
          "label": "backward"
        }
      ]
    },
    {
      "prompt": "If wavelength doubles at the same wave speed, frequency does what?",
      "answer": "halves",
      "answers": [
        "halves",
        "is halved"
      ],
      "hint": "v = fλ forces the trade.",
      "label": "wavelength trade",
      "choices": [
        {
          "value": "halves",
          "label": "halves"
        },
        {
          "value": "doubles",
          "label": "doubles"
        },
        {
          "value": "stays the same",
          "label": "stays the same"
        }
      ]
    }

  ]
};
})();
