// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["linear-algebra"] = window.CarryPractice.sections["linear-algebra"] || {};
  window.CarryPractice.sections["linear-algebra"]["linear-algebra.vectors"] = {
  "id": "linear-algebra.vectors",
  "topic": "Linear Algebra",
  "title": "Vectors",
  "type": "concept",
  "figure": "linear-vectors",
  "intro": [
    "A vector answers two questions at once: how much, and which way.",
    "Written in coordinates it becomes pure arithmetic: add component by component, scale every component together.",
    "The same object works as an arrow in space or as any ordered list of numbers — that double life is the point."
],
  "problems": [
    {
      "prompt": "Add the vectors (2, 3) + (4, 1).",
      "answer": "(6,4)",
      "answers": [
        "(6,4)",
        "6,4"
      ],
      "hint": "Add x-components and y-components separately.",
      "label": "vector addition"
    },
    {
      "prompt": "Compute 3(2, -1).",
      "answer": "(6,-3)",
      "answers": [
        "(6,-3)",
        "6,-3"
      ],
      "hint": "Multiply each component by 3.",
      "label": "scalar multiplication"
    },
    {
      "prompt": "What is the length of the vector (3, 4)?",
      "answer": "5",
      "hint": "Use the distance formula: square, add, then take the square root.",
      "label": "vector length"
    },
    {
      "prompt": "Add the vectors (1, 5) + (3, -2).",
      "answer": "(4,3)",
      "answers": [
        "(4,3)",
        "4,3"
      ],
      "hint": "Add x-components and y-components separately.",
      "label": "vector addition",
      "feedback": "Vectors add component by component."
    },
    {
      "prompt": "Compute -2(3, 4).",
      "answer": "(-6,-8)",
      "answers": [
        "(-6,-8)",
        "-6,-8"
      ],
      "hint": "Multiply each component by -2.",
      "label": "scalar multiplication",
      "feedback": "A negative scalar also reverses direction."
    },
    {
      "prompt": "What is the length of the vector (5, 12)?",
      "answer": "13",
      "hint": "Use the 5-12-13 right triangle.",
      "label": "vector length",
      "feedback": "Square, add, then take the square root."
    }
  ]
};
})();
