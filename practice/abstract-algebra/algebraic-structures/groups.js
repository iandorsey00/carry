// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["abstract-algebra"] = window.CarryPractice.sections["abstract-algebra"] || {};
  window.CarryPractice.sections["abstract-algebra"]["abstract-algebra.groups"] = {
  "id": "abstract-algebra.groups",
  "topic": "Abstract Algebra",
  "title": "Groups",
  "type": "concept",
  "figure": "abstract-groups",
  "intro": [
    "A group is a set with one operation that follows specific rules.",
    "The operation must be closed, associative, have an identity, and give every element an inverse.",
    "Groups abstract symmetry, addition, and modular arithmetic."
  ],
  "problems": [
    {
      "prompt": "Under addition, what is the identity element for integers?",
      "answer": "0",
      "hint": "Adding 0 changes nothing.",
      "label": "additive identity",
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
      "prompt": "Under addition, what is the inverse of 5?",
      "answer": "-5",
      "hint": "The inverse adds with 5 to make 0.",
      "label": "additive inverse",
      "choices": [
        {
          "value": "-5",
          "label": "-5"
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
      "prompt": "If a set with an operation contains a and b but not a*b, which group rule fails?",
      "answer": "closure",
      "hint": "Closure means combining elements stays inside the set.",
      "label": "closure rule",
      "choices": [
        {
          "value": "closure",
          "label": "closure"
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
      "prompt": "Under multiplication, what is the identity element for nonzero real numbers?",
      "answer": "1",
      "hint": "Multiplying by 1 changes nothing.",
      "label": "multiplicative identity",
      "feedback": "The identity leaves elements unchanged.",
      "choices": [
        {
          "value": "1",
          "label": "1"
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
      "prompt": "Under addition, what is the inverse of -8?",
      "answer": "8",
      "hint": "-8 plus 8 is 0.",
      "label": "additive inverse",
      "feedback": "Find the element that combines to make the identity.",
      "choices": [
        {
          "value": "8",
          "label": "8"
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
      "prompt": "If combining two elements always stays in the set, which rule is being checked?",
      "answer": "closure",
      "hint": "Closure keeps results inside the set.",
      "label": "closure rule",
      "feedback": "Closure is about staying inside.",
      "choices": [
        {
          "value": "closure",
          "label": "closure"
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
      "prompt": "In the group of integers under addition, what is 7 + (-7)?",
      "answer": "0",
      "answers": [
        "0",
        "zero"
      ],
      "hint": "An element plus its inverse returns the identity.",
      "label": "inverse cancellation",
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
          "value": "14",
          "label": "14"
        },
        {
          "value": "-14",
          "label": "-14"
        }
      ]
    },
    {
      "prompt": "Is subtraction on the integers associative?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Compare (2 - 3) - 4 with 2 - (3 - 4).",
      "label": "subtraction associativity",
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
