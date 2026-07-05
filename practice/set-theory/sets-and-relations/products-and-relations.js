// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["set-theory"] = window.CarryPractice.sections["set-theory"] || {};
  window.CarryPractice.sections["set-theory"]["set-theory.cartesian-relations"] = {
  "id": "set-theory.cartesian-relations",
  "topic": "Set Theory",
  "title": "Products and relations",
  "type": "concept",
  "figure": "set-relations",
  "intro": [
    "Ordered pairs let sets describe relationships: (3, 5) pairs 3 with 5, in that order and no other.",
    "The Cartesian product <math>A × B</math> manufactures every possible pair, one member from each set.",
    "A relation is a curated selection of those pairs — the ones where some connection genuinely holds."
],
  "problems": [
    {
      "prompt": "If <math>A = {1, 2}</math> and <math>B = {x}</math>, how many ordered pairs are in <math>A × B</math>?",
      "answer": "2",
      "hint": "Each element of <math>A</math> pairs with <math>x</math>.",
      "label": "product size"
    },
    {
      "prompt": "In the ordered pair <math>(3, 5)</math>, what is the first coordinate?",
      "answer": "3",
      "hint": "The first coordinate is the left entry.",
      "label": "first coordinate"
    },
    {
      "prompt": "Is a relation a set of ordered pairs?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "A relation is usually represented by ordered pairs.",
      "label": "relation definition",
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
      "prompt": "If A has 3 elements and B has 4, how many pairs are in <math>A × B</math>?",
      "answer": "12",
      "answers": [
        "12",
        "twelve"
      ],
      "hint": "Every element of A meets every element of B.",
      "label": "product size",
      "choices": [
        {
          "value": "12",
          "label": "12"
        },
        {
          "value": "7",
          "label": "7"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "4",
          "label": "4"
        }
      ]
    },
    {
      "prompt": "Is (a, b) the same pair as (b, a)?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Order is the whole point of an ordered pair.",
      "label": "order matters",
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
      "prompt": "Is the comparison is less than a relation on numbers?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "It selects exactly the pairs (a, b) where a is smaller.",
      "label": "less than relation",
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
      "prompt": "In the ordered pair (3, 5), what is the second coordinate?",
      "answer": "5",
      "answers": [
        "5",
        "five"
      ],
      "hint": "Position two of the pair.",
      "label": "second coordinate",
      "choices": [
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "8",
          "label": "8"
        },
        {
          "value": "2",
          "label": "2"
        }
      ]
    },
    {
      "prompt": "Is every relation from A to B a subset of <math>A × B</math>?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "A relation is a selection of pairs from the full product.",
      "label": "relation subset",
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
