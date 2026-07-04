// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["abstract-algebra"] = window.CarryPractice.sections["abstract-algebra"] || {};
  window.CarryPractice.sections["abstract-algebra"]["abstract-algebra.rings"] = {
  "id": "abstract-algebra.rings",
  "topic": "Abstract Algebra",
  "title": "Rings",
  "type": "concept",
  "figure": "abstract-rings",
  "intro": [
    "A ring is a world where addition and multiplication live together, modeled on the integers that inspired it.",
    "Addition behaves like a group on its own; multiplication is bound to it by the distributive law <math>a(b + c) = ab + ac</math>.",
    "Polynomials, matrices, and integers mod n all form rings — prove something once and it works everywhere."
],
  "problems": [
    {
      "prompt": "How many operations does a ring have?",
      "answer": "2",
      "hint": "A ring has addition and multiplication.",
      "label": "ring operations"
    },
    {
      "prompt": "In a ring, multiplication distributes over which operation?",
      "answer": "addition",
      "hint": "Think a(b + c) = ab + ac.",
      "label": "distributive operation",
      "choices": [
        {
          "value": "addition",
          "label": "addition"
        },
        {
          "value": "closure",
          "label": "closure"
        },
        {
          "value": "identity",
          "label": "identity"
        },
        {
          "value": "inverse",
          "label": "inverse"
        }
      ]
    },
    {
      "prompt": "Are the integers a ring under usual addition and multiplication?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Integers support both operations and satisfy the ring rules.",
      "label": "integer ring",
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
      "prompt": "In a ring, which operation must distribute over the other?",
      "answer": "multiplication over addition",
      "answers": [
        "multiplication over addition",
        "multiplication"
      ],
      "hint": "The rule reads a(b + c) = ab + ac.",
      "label": "distribution direction",
      "choices": [
        {
          "value": "multiplication over addition",
          "label": "multiplication over addition"
        },
        {
          "value": "addition over multiplication",
          "label": "addition over multiplication"
        }
      ]
    },
    {
      "prompt": "Is subtraction always possible inside a ring?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Additive inverses exist, so a - b means a + (-b).",
      "label": "ring subtraction",
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
      "prompt": "Must division by every nonzero element work in a ring?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "That extra requirement is exactly what upgrades a ring to a field.",
      "label": "ring division",
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
      "prompt": "In the integers, do 3 × (4 + 5) and 3 × 4 + 3 × 5 give the same result?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Both equal 27; that agreement is distribution at work.",
      "label": "distribution check",
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
      "prompt": "Which set is a ring: the integers or the positive integers?",
      "answer": "integers",
      "answers": [
        "integers",
        "the integers"
      ],
      "hint": "Positive integers have no additive inverses.",
      "label": "ring example",
      "choices": [
        {
          "value": "integers",
          "label": "the integers"
        },
        {
          "value": "positive integers",
          "label": "the positive integers"
        }
      ]
    }
  ]
};
})();
