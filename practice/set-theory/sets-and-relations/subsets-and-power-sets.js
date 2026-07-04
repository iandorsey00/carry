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
    }
  ]
};
})();
