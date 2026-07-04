// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["precalculus"] = window.CarryPractice.sections["precalculus"] || {};
  window.CarryPractice.sections["precalculus"]["precalculus.functions"] = {
  "id": "precalculus.functions",
  "topic": "Precalculus",
  "title": "Functions",
  "type": "concept",
  "figure": "precalc-functions",
  "intro": [
    "A function is a dependable rule: give it an input and it returns one output — the same one, every time.",
    "The notation <math>f(x)</math> names the rule and its input together, so <math>f(3)</math> means the output when the input is 3.",
    "Formulas, tables, and graphs are three portraits of the same rule; the one-output promise is what makes them match."
],
  "problems": [
    {
      "prompt": "If f(x) = 2x + 1, what is f(3)?",
      "answer": "7",
      "hint": "Replace x with 3: 2 times 3 plus 1.",
      "label": "evaluate a function"
    },
    {
      "prompt": "Does a function allow one input to have two outputs?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Each input can have only one output.",
      "label": "function definition",
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
      "prompt": "For the point (4, 9), what is the output?",
      "answer": "9",
      "hint": "In an ordered pair, the output is the y-value.",
      "label": "function output"
    },
    {
      "prompt": "If f(x) = x^2 - 1, what is f(4)?",
      "answer": "15",
      "hint": "Replace x with 4.",
      "label": "evaluate a function",
      "feedback": "Substitute the input wherever x appears."
    },
    {
      "prompt": "For the point (-2, 5), what is the input?",
      "answer": "-2",
      "hint": "The input is the x-value.",
      "label": "function input",
      "feedback": "Ordered pairs are written as input, output."
    },
    {
      "prompt": "Can a vertical line hit the graph of a function twice?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "That would give one input two outputs.",
      "label": "vertical line test",
      "feedback": "Functions need one output per input.",
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
