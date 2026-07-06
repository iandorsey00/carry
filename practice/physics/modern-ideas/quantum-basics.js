// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.quantum"] = {
  "id": "physics.quantum",
  "topic": "Modern Physics",
  "title": "Quantum basics",
  "type": "concept",
  "figure": "physics-quantum",
  "intro": [
    "Quantum physics describes matter and light at small scales.",
    "Energy can come in discrete packets called quanta.",
    "A photon is a quantum of light."
  ],
  "problems": [
    {
      "prompt": "A photon is a quantum of what?",
      "answer": "light",
      "hint": "Photons are light particles/quanta.",
      "label": "photon meaning",
      "choices": [
        {
          "value": "light",
          "label": "light"
        },
        {
          "value": "sound",
          "label": "sound"
        },
        {
          "value": "heat",
          "label": "heat"
        },
        {
          "value": "mass",
          "label": "mass"
        }
      ]
    },
    {
      "prompt": "Quantum energy levels are continuous or discrete?",
      "answer": "discrete",
      "hint": "Quantum levels come in allowed steps.",
      "label": "energy levels",
      "choices": [
        {
          "value": "continuous",
          "label": "continuous"
        },
        {
          "value": "discrete",
          "label": "discrete"
        }
      ]
    },
    {
      "prompt": "At small scales, quantum physics or classical physics is usually needed?",
      "answer": "quantumphysics",
      "answers": [
        "quantum physics",
        "quantum"
      ],
      "hint": "Quantum effects dominate atoms and particles.",
      "label": "small scale physics",
      "choices": [
        {
          "value": "quantumphysics",
          "label": "quantum physics"
        },
        {
          "value": "classicalphysics",
          "label": "classical physics"
        }
      ]
    },
    {
      "prompt": "Light behaves as a wave and also as what?",
      "answer": "a particle",
      "answers": [
        "a particle",
        "particle"
      ],
      "hint": "The photon is the particle side of light.",
      "label": "duality",
      "choices": [
        {
          "value": "a particle",
          "label": "a particle"
        },
        {
          "value": "a fluid",
          "label": "a fluid"
        },
        {
          "value": "a field only",
          "label": "a field only"
        }
      ]
    },
    {
      "prompt": "When an electron drops to a lower energy level, what is emitted?",
      "answer": "a photon",
      "answers": [
        "a photon",
        "photon"
      ],
      "hint": "The energy difference leaves as light.",
      "label": "emission",
      "choices": [
        {
          "value": "a photon",
          "label": "a photon"
        },
        {
          "value": "a proton",
          "label": "a proton"
        },
        {
          "value": "an electron",
          "label": "an electron"
        },
        {
          "value": "heat only",
          "label": "heat only"
        }
      ]
    },
    {
      "prompt": "Which letter names Planck's constant?",
      "answer": "h",
      "answers": [
        "h"
      ],
      "hint": "It sets the scale of quantum effects.",
      "label": "planck",
      "choices": [
        {
          "value": "h",
          "label": "h"
        },
        {
          "value": "c",
          "label": "c"
        },
        {
          "value": "g",
          "label": "g"
        },
        {
          "value": "k",
          "label": "k"
        }
      ]
    },
    {
      "prompt": "Can a particle's exact position and momentum both be known at once?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Heisenberg's uncertainty principle forbids it.",
      "label": "uncertainty",
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
      "prompt": "Can a quantum particle cross a barrier it classically lacks the energy to climb?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "That escape is called tunneling.",
      "label": "tunneling",
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
    }

  ]
};
})();
