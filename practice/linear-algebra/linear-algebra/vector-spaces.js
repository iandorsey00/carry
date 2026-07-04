// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["linear-algebra"] = window.CarryPractice.sections["linear-algebra"] || {};
  window.CarryPractice.sections["linear-algebra"]["linear-algebra.vector-spaces"] = {
  "id": "linear-algebra.vector-spaces",
  "topic": "Linear Algebra",
  "title": "Vector spaces",
  "type": "concept",
  "figure": "linear-vector-spaces",
  "intro": [
    "A vector space is anywhere the rules of adding and scaling hold — arrows, polynomials, signals, and datasets all qualify.",
    "The span of some vectors is everything you can reach by combining them; a basis reaches everything with no redundancy.",
    "The size of a basis is the dimension: how many independent numbers a description truly needs."
],
  "problems": [
    {
      "prompt": "Do the vectors (1, 0) and (0, 1) span the plane?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Any point (a, b) can be made from a(1, 0) + b(0, 1).",
      "label": "span plane",
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
      "prompt": "How many vectors are in a standard basis for R^2?",
      "answer": "2",
      "hint": "The plane has two independent directions.",
      "label": "basis size"
    },
    {
      "prompt": "If one vector is a multiple of another, are they independent?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "One vector can be made from the other, so it is redundant.",
      "label": "independence check",
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
