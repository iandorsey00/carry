// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["proofs"] = window.CarryPractice.sections["proofs"] || {};
  window.CarryPractice.sections["proofs"]["proofs.induction"] = {
  "id": "proofs.induction",
  "topic": "Proofs",
  "title": "Induction",
  "type": "concept",
  "figure": "proof-induction",
  "intro": [
    "Induction proves a statement for every integer in a sequence.",
    "First prove the base case.",
    "Then prove that one true case forces the next case."
  ],
  "problems": [
    {
      "prompt": "In induction, what is the first case called?",
      "answer": "base",
      "answers": [
        "base",
        "basecase",
        "base case"
      ],
      "hint": "It anchors the proof at the starting value.",
      "label": "base case"
    },
    {
      "prompt": "After the base case, which step proves that case k implies case k + 1?",
      "answer": "inductive",
      "answers": [
        "inductive",
        "inductivestep",
        "inductive step"
      ],
      "hint": "This is the step that moves the proof forward.",
      "label": "inductive step"
    },
    {
      "prompt": "If P(1) is true and P(k) implies P(k + 1), what can induction prove?",
      "answer": "all",
      "answers": [
        "all",
        "alln",
        "every n",
        "all positive integers"
      ],
      "hint": "The truth moves from 1 to 2 to 3 and so on.",
      "label": "induction conclusion"
    }
  ]
};
})();
