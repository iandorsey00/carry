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
    "Quantifiers set a claim's scope: is this about every case, or just about some case?",
    "For all promises no exceptions; there exists promises at least one success.",
    "The scope decides the burden of proof: universal claims die by one counterexample, existence claims live by one example."
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
      "label": "universal quantifier",
      "choices": [
        {
          "value": "forall",
          "label": "for all"
        },
        {
          "value": "there exists",
          "label": "there exists"
        }
      ]
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
      "label": "existential quantifier",
      "choices": [
        {
          "value": "exists",
          "label": "exists"
        },
        {
          "value": "mean",
          "label": "mean"
        },
        {
          "value": "median",
          "label": "median"
        },
        {
          "value": "mode",
          "label": "mode"
        }
      ]
    },
    {
      "prompt": "To disprove a for all statement, what should you find?",
      "answer": "counterexample",
      "answers": [
        "counterexample",
        "a counterexample"
      ],
      "hint": "One failing case is enough.",
      "label": "disprove universal",
      "choices": [
        {
          "value": "counterexample",
          "label": "counterexample"
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
