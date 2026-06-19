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
      "label": "like charges"
    },
    {
      "prompt": "Do opposite charges attract or repel?",
      "answer": "attract",
      "answers": [
        "attract",
        "attracts"
      ],
      "hint": "Positive and negative pull together.",
      "label": "opposite charges"
    },
    {
      "prompt": "Electric field is force per unit what?",
      "answer": "charge",
      "hint": "E = F / q.",
      "label": "field denominator"
    }
  ]
};
})();
