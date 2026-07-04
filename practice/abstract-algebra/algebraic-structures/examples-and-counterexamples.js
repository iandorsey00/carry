// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["abstract-algebra"] = window.CarryPractice.sections["abstract-algebra"] || {};
  window.CarryPractice.sections["abstract-algebra"]["abstract-algebra.examples-counterexamples"] = {
  "id": "abstract-algebra.examples-counterexamples",
  "topic": "Abstract Algebra",
  "title": "Examples and counterexamples",
  "type": "concept",
  "figure": "abstract-examples",
  "intro": [
    "Examples show that a definition can be satisfied.",
    "Counterexamples show exactly where a proposed claim fails.",
    "In abstract algebra, checking the operation is just as important as checking the set."
  ],
  "problems": [
    {
      "prompt": "Under usual addition, give an example of an integer identity element.",
      "answer": "0",
      "hint": "Adding it leaves every integer unchanged.",
      "label": "identity example",
      "choices": [
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "set",
          "label": "set"
        },
        {
          "value": "subset",
          "label": "subset"
        },
        {
          "value": "element",
          "label": "element"
        }
      ]
    },
    {
      "prompt": "Why are positive integers not a group under addition: missing inverses or missing associativity?",
      "answer": "missinginverses",
      "answers": [
        "missinginverses",
        "missing inverses",
        "inverses"
      ],
      "hint": "The inverse of 3 under addition is -3, which is not positive.",
      "label": "positive integer counterexample",
      "choices": [
        {
          "value": "missinginverses",
          "label": "missing inverses"
        },
        {
          "value": "missing associativity",
          "label": "missing associativity"
        }
      ]
    },
    {
      "prompt": "To disprove that every ring is a field, should you give a ring that is not a field?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "One ring without field division is enough.",
      "label": "ring field counterexample",
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
      "prompt": "To disprove a claim about every group, how many failing examples do you need?",
      "answer": "1",
      "answers": [
        "1",
        "one"
      ],
      "hint": "A universal claim collapses at a single failure.",
      "label": "one counterexample",
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
        },
        {
          "value": "most",
          "label": "most of them"
        }
      ]
    },
    {
      "prompt": "Is the set {0, 1, 2} closed under usual addition?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Try 1 + 2 and see whether the result stays in the set.",
      "label": "closure counterexample",
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
      "prompt": "To show a definition can be satisfied, what is the most direct evidence?",
      "answer": "example",
      "answers": [
        "example",
        "an example",
        "one example"
      ],
      "hint": "Existence is settled by an exhibit.",
      "label": "existence evidence",
      "choices": [
        {
          "value": "example",
          "label": "one concrete example"
        },
        {
          "value": "restated definition",
          "label": "restating the definition"
        }
      ]
    },
    {
      "prompt": "Are the nonzero rational numbers a group under multiplication?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Every nonzero fraction has a reciprocal, and products of nonzero fractions stay nonzero.",
      "label": "rational multiplicative group",
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
      "prompt": "The integers under multiplication fail to be a group. Which rule breaks?",
      "answer": "inverses",
      "answers": [
        "inverses",
        "missing inverses"
      ],
      "hint": "2 times what integer gives 1?",
      "label": "integer multiplication failure",
      "choices": [
        {
          "value": "inverses",
          "label": "inverses"
        },
        {
          "value": "closure",
          "label": "closure"
        },
        {
          "value": "associativity",
          "label": "associativity"
        },
        {
          "value": "identity",
          "label": "identity"
        }
      ]
    }
  ]
};
})();
