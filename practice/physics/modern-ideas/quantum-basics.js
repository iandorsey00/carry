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
    }
  ]
};
})();
