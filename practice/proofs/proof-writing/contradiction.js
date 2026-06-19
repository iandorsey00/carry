// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["proofs"] = window.CarryPractice.sections["proofs"] || {};
  window.CarryPractice.sections["proofs"]["proofs.contradiction"] = {
  "id": "proofs.contradiction",
  "topic": "Proofs",
  "title": "Contradiction",
  "type": "concept",
  "figure": "proof-contradiction",
  "intro": [
    "Proof by contradiction starts by assuming the opposite of the claim.",
    "The goal is to derive something impossible.",
    "Once the opposite fails, the original claim must be true."
  ],
  "problems": [
    {
      "prompt": "In a contradiction proof, do you first assume the claim or its opposite?",
      "answer": "opposite",
      "answers": [
        "opposite",
        "negation",
        "not the claim"
      ],
      "hint": "You temporarily suppose the claim is false.",
      "label": "contradiction assumption"
    },
    {
      "prompt": "What kind of result finishes a contradiction proof?",
      "answer": "contradiction",
      "answers": [
        "contradiction",
        "impossible",
        "false"
      ],
      "hint": "You show the assumption led to something impossible.",
      "label": "contradiction finish"
    },
    {
      "prompt": "If assuming not P leads to a contradiction, what can you conclude?",
      "answer": "p",
      "answers": [
        "p",
        "P",
        "p is true",
        "true"
      ],
      "hint": "The negation failed, so P remains.",
      "label": "contradiction conclusion"
    }
  ]
};
})();
