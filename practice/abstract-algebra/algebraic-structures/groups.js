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
      "label": "additive identity"
    },
    {
      "prompt": "Under addition, what is the inverse of 5?",
      "answer": "-5",
      "hint": "The inverse adds with 5 to make 0.",
      "label": "additive inverse"
    },
    {
      "prompt": "If a set with an operation contains a and b but not a*b, which group rule fails?",
      "answer": "closure",
      "hint": "Closure means combining elements stays inside the set.",
      "label": "closure rule"
    }
  ]
};
})();
