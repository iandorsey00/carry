// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["precalculus"] = window.CarryPractice.sections["precalculus"] || {};
  window.CarryPractice.sections["precalculus"]["precalculus.complex-numbers"] = {
  "id": "precalculus.complex-numbers",
  "topic": "Precalculus",
  "title": "Complex numbers",
  "type": "concept",
  "figure": "precalc-complex",
  "intro": [
    "Complex numbers finish arithmetic: with them, every polynomial equation finally has a full set of solutions.",
    "One new ingredient does it all — the unit i with <math>i^2 = -1</math> — and a + bi mixes it with ordinary numbers.",
    "Geometrically, a + bi is the point (a, b), so complex arithmetic is plane geometry in disguise."
],
  "problems": [
    {
      "prompt": "What is i^2?",
      "answer": "-1",
      "hint": "This is the defining property of i.",
      "label": "imaginary unit"
    },
    {
      "prompt": "What is the real part of 3 + 4i?",
      "answer": "3",
      "hint": "The real part is the number without i.",
      "label": "real part"
    },
    {
      "prompt": "Compute (3 + 4i) + (1 - 2i).",
      "answer": "4+2i",
      "answers": [
        "4+2i",
        "4+2*i"
      ],
      "hint": "Add real parts and imaginary parts separately.",
      "label": "complex addition"
    }
  ]
};
})();
