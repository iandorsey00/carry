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
    },
    {
      "prompt": "Negating for all x, P(x) gives which statement?",
      "answer": "there exists x with not P(x)",
      "answers": [
        "there exists x with not P(x)",
        "exists not"
      ],
      "hint": "Denying every needs only one failure.",
      "label": "negate forall",
      "choices": [
        {
          "value": "there exists x with not P(x)",
          "label": "there exists x with not P(x)"
        },
        {
          "value": "for all x, not P(x)",
          "label": "for all x, not P(x)"
        }
      ]
    },
    {
      "prompt": "To prove a there-exists claim, how many working examples suffice?",
      "answer": "1",
      "answers": [
        "1",
        "one"
      ],
      "hint": "Existence asks for a single success.",
      "label": "one suffices",
      "choices": [
        {
          "value": "1",
          "label": "one"
        },
        {
          "value": "2",
          "label": "two"
        },
        {
          "value": "all",
          "label": "all of them"
        }
      ]
    },
    {
      "prompt": "Is the statement every element of the empty set is purple true or false?",
      "answer": "true",
      "answers": [
        "true",
        "vacuously true"
      ],
      "hint": "No element exists to fail the claim — it is vacuously true.",
      "label": "vacuous truth",
      "choices": [
        {
          "value": "true",
          "label": "true"
        },
        {
          "value": "false",
          "label": "false"
        }
      ]
    },
    {
      "prompt": "Some student aced the test — which quantifier is hiding in that sentence?",
      "answer": "there exists",
      "answers": [
        "there exists",
        "exists"
      ],
      "hint": "Some means at least one.",
      "label": "spot exists",
      "choices": [
        {
          "value": "there exists",
          "label": "there exists"
        },
        {
          "value": "for all",
          "label": "for all"
        }
      ]
    },
    {
      "prompt": "To disprove a there-exists statement, what must you show?",
      "answer": "every case fails",
      "answers": [
        "every case fails",
        "all fail"
      ],
      "hint": "Killing an existence claim takes a universal argument.",
      "label": "disprove exists",
      "choices": [
        {
          "value": "every case fails",
          "label": "every case fails"
        },
        {
          "value": "one case fails",
          "label": "one case fails"
        }
      ]
    }

  ]
};
})();
