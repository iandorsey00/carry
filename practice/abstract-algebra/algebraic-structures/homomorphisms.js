// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["abstract-algebra"] = window.CarryPractice.sections["abstract-algebra"] || {};
  window.CarryPractice.sections["abstract-algebra"]["abstract-algebra.homomorphisms"] = {
  "id": "abstract-algebra.homomorphisms",
  "topic": "Abstract Algebra",
  "title": "Homomorphisms",
  "type": "concept",
  "figure": "abstract-homomorphisms",
  "intro": [
    "A homomorphism is a translation between two algebraic worlds that never garbles the grammar.",
    "The test: combine then translate, or translate then combine — the results must agree, as in <math>f(a + b) = f(a) + f(b)</math>.",
    "Logarithms pass the test by turning multiplication into addition; that is why slide rules ever worked."
],
  "problems": [
    {
      "prompt": "A homomorphism is a map that preserves what?",
      "answer": "structure",
      "answers": [
        "structure",
        "operation",
        "operations"
      ],
      "hint": "It respects the operation, so structure is preserved.",
      "label": "homomorphism meaning",
      "choices": [
        {
          "value": "structure",
          "label": "structure"
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
      "prompt": "For an additive homomorphism f, f(a + b) equals f(a) plus what?",
      "answer": "f(b)",
      "answers": [
        "f(b)",
        "fb"
      ],
      "hint": "Preserving addition means f(a + b) = f(a) + f(b).",
      "label": "additive homomorphism"
    },
    {
      "prompt": "Does a homomorphism have to be one-to-one?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Some homomorphisms collapse different inputs together.",
      "label": "homomorphism injective",
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
      "prompt": "For f(x) = 2x on the integers, what is f(3 + 4)?",
      "answer": "14",
      "answers": [
        "14"
      ],
      "hint": "Add first to get 7, then apply f.",
      "label": "evaluate homomorphism",
      "choices": [
        {
          "value": "14",
          "label": "14"
        },
        {
          "value": "7",
          "label": "7"
        },
        {
          "value": "12",
          "label": "12"
        },
        {
          "value": "24",
          "label": "24"
        }
      ]
    },
    {
      "prompt": "For an additive homomorphism f, what is f(0)?",
      "answer": "0",
      "answers": [
        "0",
        "zero"
      ],
      "hint": "Since 0 + 0 = 0, applying f forces f(0) + f(0) = f(0).",
      "label": "identity image",
      "choices": [
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "-1",
          "label": "-1"
        }
      ]
    },
    {
      "prompt": "Is g(x) = x + 1 an additive homomorphism on the integers?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Test it: g(0 + 0) = 1, but g(0) + g(0) = 2.",
      "label": "shift not homomorphism",
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
      "prompt": "A homomorphism that is also a bijection is called what?",
      "answer": "isomorphism",
      "answers": [
        "isomorphism",
        "an isomorphism"
      ],
      "hint": "Two structures connected this way are the same up to renaming.",
      "label": "isomorphism name",
      "choices": [
        {
          "value": "isomorphism",
          "label": "an isomorphism"
        },
        {
          "value": "permutation",
          "label": "a permutation"
        },
        {
          "value": "identity map",
          "label": "an identity map"
        },
        {
          "value": "inverse",
          "label": "an inverse"
        }
      ]
    },
    {
      "prompt": "Must a group homomorphism send the identity to the identity?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Preserving the operation leaves the identity nowhere else to go.",
      "label": "identity preserved",
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
    }
  ]
};
})();
