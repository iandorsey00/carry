// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["trigonometry"] = window.CarryPractice.sections["trigonometry"] || {};
  window.CarryPractice.sections["trigonometry"]["trigonometry.identities"] = {
  "id": "trigonometry.identities",
  "topic": "Trigonometry",
  "title": "Identities",
  "type": "concept",
  "figure": "trig-identities",
  "intro": [
    "An identity is an equation that is true for every allowed input.",
    "The Pythagorean identity connects sine and cosine.",
    "Identities let you rewrite expressions without changing their value."
  ],
  "problems": [
    {
      "prompt": "Complete the identity: sin^2 x + cos^2 x = __.",
      "answer": "1",
      "hint": "This is the main Pythagorean identity.",
      "label": "pythagorean identity"
    },
    {
      "prompt": "Rewrite tan x using sin x and cos x.",
      "answer": "sinx/cosx",
      "answers": [
        "sinx/cosx",
        "sin(x)/cos(x)",
        "sin x/cos x"
      ],
      "hint": "Tangent is sine divided by cosine.",
      "label": "tangent identity"
    },
    {
      "prompt": "If sin^2 x = 1/4, what is cos^2 x?",
      "answer": "3/4",
      "hint": "Use sin^2 x + cos^2 x = 1.",
      "label": "cosine squared"
    }
  ]
};
})();
