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
    },
    {
      "prompt": "If cos^2 x = 1/9, what is sin^2 x?",
      "answer": "8/9",
      "hint": "Use sin^2 x + cos^2 x = 1.",
      "label": "sine squared",
      "feedback": "Subtract the known squared value from 1."
    },
    {
      "prompt": "Complete: 1 + tan^2 x = __.",
      "answer": "sec^2x",
      "answers": [
        "sec^2x",
        "sec^2 x",
        "sec²x"
      ],
      "hint": "This is a Pythagorean identity.",
      "label": "secant identity",
      "feedback": "This identity pairs tangent with secant."
    },
    {
      "prompt": "Rewrite cot x using cos x and sin x.",
      "answer": "cosx/sinx",
      "answers": [
        "cosx/sinx",
        "cos(x)/sin(x)",
        "cos x/sin x"
      ],
      "hint": "Cotangent is cosine divided by sine.",
      "label": "cotangent identity",
      "feedback": "Cotangent is the reciprocal of tangent."
    }
  ]
};
})();
