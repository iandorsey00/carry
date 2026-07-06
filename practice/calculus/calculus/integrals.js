// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["calculus"] = window.CarryPractice.sections["calculus"] || {};
  window.CarryPractice.sections["calculus"]["calculus.integrals"] = {
  "id": "calculus.integrals",
  "topic": "Calculus",
  "title": "Integrals",
  "type": "concept",
  "figure": "calc-integrals",
  "intro": [
    "An integral is a total assembled from countless tiny contributions: distance from speed, area from height, mass from density.",
    "The definite integral measures the amount accumulated between two endpoints; on a graph, that is the area under the curve.",
    "Antiderivatives run derivatives backwards and always carry the constant C, because a constant leaves no trace in a rate."
],
  "problems": [
    {
      "prompt": "What is an antiderivative of 2x?",
      "answer": "x^2+c",
      "answers": [
        "x^2+c",
        "x^2+C",
        "x^2 + C"
      ],
      "hint": "Differentiate x^2 and you get 2x. Add C for the constant.",
      "label": "basic antiderivative"
    },
    {
      "prompt": "What is the area under y = 2 from x = 0 to x = 3?",
      "answer": "6",
      "hint": "This is a rectangle: height 2 and width 3.",
      "label": "constant integral"
    },
    {
      "prompt": "What is an antiderivative of 4?",
      "answer": "4x+c",
      "answers": [
        "4x+c",
        "4x+C",
        "4*x+c",
        "4*x+C"
      ],
      "hint": "A derivative of 4x is 4.",
      "label": "constant antiderivative"
    },
    {
      "prompt": "What is an antiderivative of 3x^2?",
      "answer": "x^3+c",
      "answers": [
        "x^3+c",
        "x^3+C",
        "x^3 + C"
      ],
      "hint": "Differentiate x^3 to get 3x^2.",
      "label": "basic antiderivative",
      "feedback": "Reverse the power rule."
    },
    {
      "prompt": "What is the area under y = 4 from x = 0 to x = 5?",
      "answer": "20",
      "hint": "This is a rectangle: height 4 and width 5.",
      "label": "constant integral",
      "feedback": "For a constant function, multiply height by width."
    },
    {
      "prompt": "What is an antiderivative of 9?",
      "answer": "9x+c",
      "answers": [
        "9x+c",
        "9x+C",
        "9*x+c",
        "9*x+C"
      ],
      "hint": "A derivative of 9x is 9.",
      "label": "constant antiderivative",
      "feedback": "Constants integrate to constant times x plus C."
    },
    {
      "prompt": "What is an antiderivative of cos x?",
      "answer": "sin x + C",
      "answers": [
        "sin x + C",
        "sinx+c",
        "sin x"
      ],
      "hint": "Which function differentiates to cosine?",
      "label": "cosine antiderivative",
      "choices": [
        {
          "value": "sin x + C",
          "label": "sin x + C"
        },
        {
          "value": "-sin x + C",
          "label": "-sin x + C"
        },
        {
          "value": "cos x + C",
          "label": "cos x + C"
        },
        {
          "value": "tan x + C",
          "label": "tan x + C"
        }
      ]
    },
    {
      "prompt": "The definite integral from 2 to 2 of any function equals what?",
      "answer": "0",
      "answers": [
        "0",
        "zero"
      ],
      "hint": "An interval of zero width holds no area.",
      "label": "zero width",
      "choices": [
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "undefined",
          "label": "undefined"
        }
      ]
    }

  ]
};
})();
