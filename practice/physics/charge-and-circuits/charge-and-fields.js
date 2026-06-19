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
        "repels",
        "false"
      ],
      "hint": "Two positives or two negatives push apart.",
      "label": "like charges",
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
      "prompt": "Do opposite charges attract or repel?",
      "answer": "attract",
      "answers": [
        "attract",
        "attracts",
        "false"
      ],
      "hint": "Positive and negative pull together.",
      "label": "opposite charges",
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
          "value": "closure",
          "label": "closure"
        },
        {
          "value": "identity",
          "label": "identity"
        },
        {
          "value": "inverse",
          "label": "inverse"
        }
      ]
    }
  ]
};
})();
