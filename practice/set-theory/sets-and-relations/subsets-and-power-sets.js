// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["set-theory"] = window.CarryPractice.sections["set-theory"] || {};
  window.CarryPractice.sections["set-theory"]["set-theory.subsets"] = {
  "id": "set-theory.subsets",
  "topic": "Set Theory",
  "title": "Subsets and power sets",
  "type": "concept",
  "figure": "set-subsets",
  "intro": [
    "A subset is a set living entirely inside another — every one of its members already belongs to the larger set.",
    "The test is universal: check every element of <math>A</math> for membership in <math>B</math>, because one stray element ruins it.",
    "Collect all subsets of a set and you get its power set, the empty set and the whole set included."
],
  "problems": [
    {
      "prompt": "Is <math>{1, 2}</math> a subset of <math>{1, 2, 3}</math>?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Both <math>1</math> and <math>2</math> appear in the larger set.",
      "label": "subset check",
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
      "prompt": "How many subsets does a set with 3 elements have?",
      "answer": "8",
      "hint": "A set with n elements has 2^n subsets.",
      "label": "power set size"
    },
    {
      "prompt": "Is the empty set a subset of every set?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "There is no element in the empty set that can fail to belong.",
      "label": "empty subset",
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
      "prompt": "Is every set a subset of itself?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Each element is certainly in the set.",
      "label": "self subset",
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
      "prompt": "How many subsets does the empty set have?",
      "answer": "1",
      "answers": [
        "1",
        "one"
      ],
      "hint": "Just itself: 2 to the power 0.",
      "label": "empty power set",
      "choices": [
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "8",
          "label": "8"
        }
      ]
    },
    {
      "prompt": "Is {1, 4} a subset of {1, 2, 3}?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "The element 4 is missing from the larger set.",
      "label": "failed subset",
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
      "prompt": "A set with 4 elements has how many subsets?",
      "answer": "16",
      "answers": [
        "16",
        "sixteen"
      ],
      "hint": "Each element doubles the count: 2 to the 4th.",
      "label": "sixteen subsets",
      "choices": [
        {
          "value": "16",
          "label": "16"
        },
        {
          "value": "8",
          "label": "8"
        },
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "12",
          "label": "12"
        }
      ]
    },
    {
      "prompt": "If A is a subset of B and B is a subset of A, what follows?",
      "answer": "A equals B",
      "answers": [
        "A equals B",
        "a = b",
        "they are equal"
      ],
      "hint": "Mutual containment is how set equality is proved.",
      "label": "mutual containment",
      "choices": [
        {
          "value": "A equals B",
          "label": "A equals B"
        },
        {
          "value": "A is empty",
          "label": "A is empty"
        }
      ]
    }

  ]
};
})();
