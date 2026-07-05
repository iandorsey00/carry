// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["set-theory"] = window.CarryPractice.sections["set-theory"] || {};
  window.CarryPractice.sections["set-theory"]["set-theory.operations"] = {
  "id": "set-theory.operations",
  "topic": "Set Theory",
  "title": "Union and intersection",
  "type": "concept",
  "figure": "set-operations",
  "intro": [
    "Union, intersection, and complement are the or, and, and not of collections.",
    "Union pools everything from either set; intersection keeps only what both share.",
    "Complement flips the view: everything in the universe that the set leaves out."
],
  "problems": [
    {
      "prompt": "If <math>A = {1, 2}</math> and <math>B = {2, 3}</math>, what is <math>A ∩ B</math>?",
      "answer": "{2}",
      "answers": [
        "{2}",
        "2"
      ],
      "hint": "Intersection keeps the shared element.",
      "label": "intersection"
    },
    {
      "prompt": "If <math>A = {1, 2}</math> and <math>B = {2, 3}</math>, what is <math>A ∪ B</math>?",
      "answer": "{1,2,3}",
      "answers": [
        "{1,2,3}",
        "1,2,3",
        "{1, 2, 3}"
      ],
      "hint": "Union keeps everything, without repeating <math>2</math>.",
      "label": "union"
    },
    {
      "prompt": "Which operation means in A or in B: union or intersection?",
      "answer": "union",
      "answers": [
        "union",
        "cup"
      ],
      "hint": "Union uses or.",
      "label": "union meaning",
      "choices": [
        {
          "value": "union",
          "label": "union"
        },
        {
          "value": "intersection",
          "label": "intersection"
        }
      ]
    },
    {
      "prompt": "If <math>A = {1, 2}</math> and <math>B = {3, 4}</math>, what is <math>A ∩ B</math>?",
      "answer": "the empty set",
      "answers": [
        "the empty set",
        "empty set",
        "{}"
      ],
      "hint": "The sets share nothing.",
      "label": "disjoint intersection",
      "choices": [
        {
          "value": "the empty set",
          "label": "the empty set"
        },
        {
          "value": "{1, 2, 3, 4}",
          "label": "{1, 2, 3, 4}"
        },
        {
          "value": "{1, 2}",
          "label": "{1, 2}"
        },
        {
          "value": "{3, 4}",
          "label": "{3, 4}"
        }
      ]
    },
    {
      "prompt": "Sets that share no members are called what?",
      "answer": "disjoint",
      "answers": [
        "disjoint"
      ],
      "hint": "Their intersection is empty.",
      "label": "disjoint name",
      "choices": [
        {
          "value": "disjoint",
          "label": "disjoint"
        },
        {
          "value": "equal",
          "label": "equal"
        },
        {
          "value": "countable",
          "label": "countable"
        },
        {
          "value": "closed",
          "label": "closed"
        }
      ]
    },
    {
      "prompt": "How many elements are in <math>{1, 2} ∪ {2, 3, 4}</math>?",
      "answer": "4",
      "answers": [
        "4",
        "four"
      ],
      "hint": "The shared 2 is counted once.",
      "label": "union size",
      "choices": [
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "2",
          "label": "2"
        }
      ]
    },
    {
      "prompt": "If the universe is {1, 2, 3, 4, 5} and <math>A = {1, 2}</math>, what is the complement of A?",
      "answer": "{3, 4, 5}",
      "answers": [
        "{3, 4, 5}",
        "{3,4,5}"
      ],
      "hint": "Everything in the universe outside A.",
      "label": "complement",
      "choices": [
        {
          "value": "{3, 4, 5}",
          "label": "{3, 4, 5}"
        },
        {
          "value": "{1, 2}",
          "label": "{1, 2}"
        },
        {
          "value": "{1, 2, 3, 4, 5}",
          "label": "{1, 2, 3, 4, 5}"
        }
      ]
    },
    {
      "prompt": "Does <math>A ∪ B</math> always contain <math>A ∩ B</math>?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Anything in both sets is certainly in at least one.",
      "label": "union contains intersection",
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
