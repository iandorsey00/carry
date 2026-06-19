// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["proofs"] = window.CarryPractice.sections["proofs"] || {};
  window.CarryPractice.sections["proofs"]["proofs.construction"] = {
  "id": "proofs.construction",
  "topic": "Proofs",
  "title": "Construction",
  "type": "concept",
  "figure": "proof-construction",
  "intro": [
    "A construction proof shows an object exists by building it.",
    "The object must satisfy the required conditions.",
    "After building it, verify that it really works."
  ],
  "problems": [
    {
      "prompt": "To prove there exists an even number greater than 10, is 12 a valid example?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "12 is even and greater than 10.",
      "label": "valid construction",
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
      "prompt": "After constructing an example, what should you do next?",
      "answer": "verify",
      "answers": [
        "verify",
        "check",
        "prove it works"
      ],
      "hint": "Show that the constructed object has the required properties.",
      "label": "verify construction",
      "choices": [
        {
          "value": "verify",
          "label": "verify"
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
      "prompt": "A construction proof is mainly used for which quantifier: for all or exists?",
      "answer": "exists",
      "answers": [
        "exists",
        "thereexists",
        "there exists"
      ],
      "hint": "Building one object proves existence.",
      "label": "construction quantifier",
      "choices": [
        {
          "value": "for all",
          "label": "for all"
        },
        {
          "value": "exists",
          "label": "exists"
        }
      ]
    }
  ]
};
})();
