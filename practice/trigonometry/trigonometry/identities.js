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
    "An identity is stronger than an equation: it holds for every allowed input, so it can be used as a rewriting rule.",
    "The Pythagorean identity <math>\\sin^2 θ + \\cos^2 θ = 1</math> is the workhorse, trading sines for cosines on demand.",
    "Rewriting with identities never changes a value — only its costume, into whichever form the problem prefers."
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
    },
    {
      "prompt": "If sin x = 0.6, what is sin² x?",
      "answer": "0.36",
      "answers": [
        "0.36",
        "9/25"
      ],
      "hint": "Square the value: 0.6 × 0.6.",
      "label": "square sine",
      "choices": [
        {
          "value": "0.36",
          "label": "0.36"
        },
        {
          "value": "1.2",
          "label": "1.2"
        },
        {
          "value": "0.6",
          "label": "0.6"
        },
        {
          "value": "0.8",
          "label": "0.8"
        }
      ]
    },
    {
      "prompt": "Complete the identity: sec x = 1 over what?",
      "answer": "cos x",
      "answers": [
        "cos x",
        "cosx",
        "cos"
      ],
      "hint": "Secant is the reciprocal of cosine.",
      "label": "secant reciprocal",
      "choices": [
        {
          "value": "cos x",
          "label": "cos x"
        },
        {
          "value": "sin x",
          "label": "sin x"
        },
        {
          "value": "tan x",
          "label": "tan x"
        }
      ]
    }

  ]
};
})();
