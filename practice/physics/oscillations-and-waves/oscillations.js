// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.oscillations"] = {
  "id": "physics.oscillations",
  "topic": "Waves",
  "title": "Oscillations",
  "type": "concept",
  "figure": "physics-oscillations",
  "intro": [
    "An oscillation repeats around an equilibrium position.",
    "Period is the time for one cycle.",
    "Frequency is cycles per second."
  ],
  "problems": [
    {
      "prompt": "Time for one full cycle is period or frequency?",
      "answer": "period",
      "hint": "Period is measured in seconds per cycle.",
      "label": "cycle time",
      "choices": [
        {
          "value": "period",
          "label": "period"
        },
        {
          "value": "frequency",
          "label": "frequency"
        }
      ]
    },
    {
      "prompt": "Cycles per second is called what?",
      "answer": "frequency",
      "hint": "Frequency counts cycles each second.",
      "label": "cycles per second",
      "choices": [
        {
          "value": "frequency",
          "label": "frequency"
        },
        {
          "value": "period",
          "label": "period"
        },
        {
          "value": "amplitude",
          "label": "amplitude"
        },
        {
          "value": "wavelength",
          "label": "wavelength"
        }
      ]
    },
    {
      "prompt": "If period doubles, frequency increases or decreases?",
      "answer": "decreases",
      "answers": [
        "decrease",
        "goes down"
      ],
      "hint": "Frequency is inverse to period.",
      "label": "period frequency relation",
      "choices": [
        {
          "value": "increases",
          "label": "increases"
        },
        {
          "value": "decreases",
          "label": "decreases"
        }
      ]
    },
    {
      "prompt": "What is the SI unit of frequency?",
      "answer": "hertz",
      "answers": [
        "hertz",
        "hz"
      ],
      "hint": "Cycles per second.",
      "label": "frequency unit",
      "choices": [
        {
          "value": "hertz",
          "label": "hertz"
        },
        {
          "value": "seconds",
          "label": "seconds"
        },
        {
          "value": "meters",
          "label": "meters"
        },
        {
          "value": "joules",
          "label": "joules"
        }
      ]
    },
    {
      "prompt": "If the frequency is 4 Hz, what is the period?",
      "answer": "0.25 s",
      "answers": [
        "0.25 s",
        "0.25",
        "1/4 s"
      ],
      "hint": "Period is one over frequency.",
      "label": "quarter second",
      "choices": [
        {
          "value": "0.25 s",
          "label": "0.25 s"
        },
        {
          "value": "4 s",
          "label": "4 s"
        },
        {
          "value": "2 s",
          "label": "2 s"
        },
        {
          "value": "0.5 s",
          "label": "0.5 s"
        }
      ]
    },
    {
      "prompt": "Amplitude measures the maximum distance from what?",
      "answer": "equilibrium",
      "answers": [
        "equilibrium",
        "the equilibrium position"
      ],
      "hint": "The rest position at the center of the swing.",
      "label": "amplitude center",
      "choices": [
        {
          "value": "equilibrium",
          "label": "equilibrium"
        },
        {
          "value": "the peak",
          "label": "the peak"
        },
        {
          "value": "the floor",
          "label": "the floor"
        }
      ]
    },
    {
      "prompt": "A pendulum's period depends mainly on what?",
      "answer": "its length",
      "answers": [
        "its length",
        "length"
      ],
      "hint": "Not the mass — Galileo checked.",
      "label": "pendulum period",
      "choices": [
        {
          "value": "its length",
          "label": "its length"
        },
        {
          "value": "its mass",
          "label": "its mass"
        },
        {
          "value": "its color",
          "label": "its color"
        }
      ]
    },
    {
      "prompt": "At the farthest point of a swing, the speed is what?",
      "answer": "zero",
      "answers": [
        "zero",
        "0"
      ],
      "hint": "All the motion has traded into potential energy.",
      "label": "turning point",
      "choices": [
        {
          "value": "zero",
          "label": "zero"
        },
        {
          "value": "maximum",
          "label": "maximum"
        },
        {
          "value": "constant",
          "label": "constant"
        }
      ]
    }

  ]
};
})();
