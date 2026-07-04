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
    "Induction proves infinitely many statements with two finite moves.",
    "The base case starts the chain; the inductive step shows every true case forces the next one.",
    "Together they cover 1, then 2, then 3, and onward forever — a complete proof no checklist could finish."
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
      "label": "base case",
      "choices": [
        {
          "value": "base",
          "label": "base"
        },
        {
          "value": "hypothesis",
          "label": "hypothesis"
        },
        {
          "value": "conclusion",
          "label": "conclusion"
        },
        {
          "value": "contradiction",
          "label": "contradiction"
        }
      ]
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
      "label": "induction conclusion",
      "choices": [
        {
          "value": "all",
          "label": "all"
        },
        {
          "value": "hypothesis",
          "label": "hypothesis"
        },
        {
          "value": "conclusion",
          "label": "conclusion"
        },
        {
          "value": "contradiction",
          "label": "contradiction"
        }
      ]
    }
  ]
};
})();
