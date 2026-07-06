// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.magnetism"] = {
  "id": "physics.magnetism",
  "topic": "Electricity and Magnetism",
  "title": "Magnetism",
  "type": "concept",
  "figure": "physics-magnetism",
  "intro": [
    "Magnets have north and south poles.",
    "Moving charges can create magnetic fields.",
    "Magnetic forces depend on direction."
  ],
  "problems": [
    {
      "prompt": "A moving charge can create an electric field or magnetic field?",
      "answer": "magneticfield",
      "answers": [
        "magnetic field",
        "magnetic"
      ],
      "hint": "Moving charge is connected to magnetism.",
      "label": "moving charge field",
      "choices": [
        {
          "value": "electricfield",
          "label": "electric field"
        },
        {
          "value": "magneticfield",
          "label": "magnetic field"
        }
      ]
    },
    {
      "prompt": "Like magnetic poles attract or repel?",
      "answer": "repel",
      "answers": [
        "repel",
        "repels"
      ],
      "hint": "North-north or south-south push apart.",
      "label": "like poles",
      "choices": [
        {
          "value": "attract",
          "label": "attract"
        },
        {
          "value": "repel",
          "label": "repel"
        }
      ]
    },
    {
      "prompt": "Opposite magnetic poles attract or repel?",
      "answer": "attract",
      "answers": [
        "attract",
        "attracts"
      ],
      "hint": "North and south pull together.",
      "label": "opposite poles",
      "choices": [
        {
          "value": "attract",
          "label": "attract"
        },
        {
          "value": "repel",
          "label": "repel"
        }
      ]
    },
    {
      "prompt": "Magnetic field lines around a straight current-carrying wire form what shape?",
      "answer": "circles",
      "answers": [
        "circles"
      ],
      "hint": "They wrap around the wire.",
      "label": "wire field",
      "choices": [
        {
          "value": "circles",
          "label": "circles"
        },
        {
          "value": "straight lines",
          "label": "straight lines"
        },
        {
          "value": "spirals outward",
          "label": "spirals outward"
        },
        {
          "value": "squares",
          "label": "squares"
        }
      ]
    },
    {
      "prompt": "Is the Earth itself a giant magnet?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "That is why compasses work at all.",
      "label": "earth magnet",
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
      "prompt": "Does a compass needle align with the local magnetic field?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "The needle is a tiny magnet free to turn.",
      "label": "compass",
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
      "prompt": "Cutting a bar magnet in half produces what?",
      "answer": "two smaller magnets",
      "answers": [
        "two smaller magnets",
        "two magnets"
      ],
      "hint": "Poles always come in pairs; you cannot isolate one.",
      "label": "cut magnet",
      "choices": [
        {
          "value": "two smaller magnets",
          "label": "two smaller magnets"
        },
        {
          "value": "one pole each",
          "label": "one pole each"
        },
        {
          "value": "no magnets",
          "label": "no magnets"
        }
      ]
    },
    {
      "prompt": "Does more current make an electromagnet stronger?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "The field grows with the moving charge that causes it.",
      "label": "electromagnet",
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
