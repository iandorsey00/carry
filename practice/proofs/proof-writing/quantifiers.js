// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["proofs"] = window.CarryPractice.sections["proofs"] || {};
  window.CarryPractice.sections["proofs"]["proofs.quantifiers"] = {
  "id": "proofs.quantifiers",
  "topic": "Proofs",
  "title": "Quantifiers",
  "type": "concept",
  "figure": "proof-quantifiers",
  "intro": [
    "Quantifiers say how many objects a statement covers.",
    "For all means every object in the chosen set.",
    "There exists means at least one object works."
  ],
  "problems": [
    {
      "prompt": "Which phrase means every object: for all or there exists?",
      "answer": "forall",
      "answers": [
        "forall",
        "for all",
        "every",
        "all"
      ],
      "hint": "For all makes a claim about every case.",
      "label": "universal quantifier"
    },
    {
      "prompt": "Which phrase means at least one object works?",
      "answer": "exists",
      "answers": [
        "exists",
        "thereexists",
        "there exists",
        "atleastone",
        "at least one"
      ],
      "hint": "There exists only needs one example.",
      "label": "existential quantifier"
    },
    {
      "prompt": "To disprove a for all statement, what should you find?",
      "answer": "counterexample",
      "answers": [
        "counterexample",
        "a counterexample"
      ],
      "hint": "One failing case is enough.",
      "label": "disprove universal"
    }
  ]
};
})();
