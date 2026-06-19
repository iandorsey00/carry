// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["proofs"] = window.CarryPractice.sections["proofs"] || {};
  window.CarryPractice.sections["proofs"]["proofs.logic"] = {
  "id": "proofs.logic",
  "topic": "Proofs",
  "title": "Logic",
  "type": "concept",
  "figure": "proof-logic",
  "intro": [
    "Logic tracks how statements imply other statements.",
    "An implication has a hypothesis and a conclusion.",
    "A proof can use known true statements to force a new statement to be true."
  ],
  "problems": [
    {
      "prompt": "In the statement if P then Q, which part is the hypothesis?",
      "answer": "p",
      "answers": [
        "p",
        "P"
      ],
      "hint": "The hypothesis is the condition after if.",
      "label": "identify hypothesis"
    },
    {
      "prompt": "In the statement if P then Q, which part is the conclusion?",
      "answer": "q",
      "answers": [
        "q",
        "Q"
      ],
      "hint": "The conclusion is what follows then.",
      "label": "identify conclusion"
    },
    {
      "prompt": "If P implies Q and P is true, what can you conclude?",
      "answer": "q",
      "answers": [
        "q",
        "Q"
      ],
      "hint": "This is direct reasoning: the implication fires when P is true.",
      "label": "direct implication"
    }
  ]
};
})();
