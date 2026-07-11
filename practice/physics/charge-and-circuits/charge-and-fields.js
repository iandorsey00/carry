// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.charge-fields"] = {
  "id": "physics.charge-fields",
  "topic": "Electricity and Magnetism",
  "title": "Charge and fields",
  "type": "concept",
  "figure": "physics-charge-fields",
  "intro": [
    "Electric charge comes in positive and negative types.",
    "Like charges repel and opposite charges attract.",
    "An electric field describes force per unit charge."
  ],
  "problems": [
    {
      "prompt": "Do like charges attract or repel?",
      "answer": "repel",
      "answers": [
        "repel",
        "repels"
      ],
      "hint": "Two positives or two negatives push apart.",
      "label": "like charges",
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
      "prompt": "Do opposite charges attract or repel?",
      "answer": "attract",
      "answers": [
        "attract",
        "attracts"
      ],
      "hint": "Positive and negative pull together.",
      "label": "opposite charges",
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
      "prompt": "Electric field is force per unit what?",
      "answer": "charge",
      "hint": "E = F / q.",
      "label": "field denominator",
      "choices": [
        {
          "value": "charge",
          "label": "charge"
        },
        {
          "value": "mass",
          "label": "mass"
        },
        {
          "value": "distance",
          "label": "distance"
        },
        {
          "value": "time",
          "label": "time"
        }
      ]
    },
    {
      "prompt": "What is the SI unit of electric charge?",
      "answer": "coulomb",
      "answers": [
        "coulomb",
        "the coulomb"
      ],
      "hint": "Named after the physicist who measured the force law.",
      "label": "charge unit",
      "choices": [
        {
          "value": "coulomb",
          "label": "coulomb"
        },
        {
          "value": "newton",
          "label": "newton"
        },
        {
          "value": "volt",
          "label": "volt"
        },
        {
          "value": "ampere",
          "label": "ampere"
        }
      ]
    },
    {
      "prompt": "What is the sign of an electron's charge?",
      "answer": "negative",
      "answers": [
        "negative"
      ],
      "hint": "Protons carry the positive charge.",
      "label": "electron sign",
      "choices": [
        {
          "value": "negative",
          "label": "negative"
        },
        {
          "value": "positive",
          "label": "positive"
        },
        {
          "value": "neutral",
          "label": "neutral"
        }
      ]
    },
    {
      "prompt": "Electric field lines point which way around a positive charge?",
      "answer": "away from it",
      "answers": [
        "away from it"
      ],
      "hint": "A positive test charge would be pushed outward.",
      "label": "field direction",
      "choices": [
        {
          "value": "away from it",
          "label": "away from it"
        },
        {
          "value": "toward it",
          "label": "toward it"
        },
        {
          "value": "in circles",
          "label": "in circles"
        }
      ]
    },
    {
      "prompt": "Do charges need to touch to exert forces on each other?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "The field carries the push across empty space.",
      "label": "action at distance",
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
      "prompt": "Doubling the distance between two charges changes the force by what factor?",
      "answer": "one quarter",
      "answers": [
        "one quarter",
        "1/4",
        "a quarter"
      ],
      "hint": "Coulomb's law is an inverse-square law.",
      "label": "inverse square",
      "choices": [
        {
          "value": "one quarter",
          "label": "one quarter"
        },
        {
          "value": "one half",
          "label": "one half"
        },
        {
          "value": "double",
          "label": "double"
        },
        {
          "value": "unchanged",
          "label": "unchanged"
        }
      ]
    }

  ]
};
})();
