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
    "A homomorphism is a structure-preserving map.",
    "It sends a combined input to the corresponding combination of outputs.",
    "Homomorphisms let you compare algebraic systems without ignoring their operations."
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
      "label": "homomorphism meaning"
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
      "label": "homomorphism injective"
    }
  ]
};
})();
