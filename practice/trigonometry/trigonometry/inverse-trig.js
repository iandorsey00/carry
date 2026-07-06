// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["trigonometry"] = window.CarryPractice.sections["trigonometry"] || {};
  window.CarryPractice.sections["trigonometry"]["trigonometry.inverse"] = {
  "id": "trigonometry.inverse",
  "topic": "Trigonometry",
  "title": "Inverse trig",
  "type": "concept",
  "figure": "trig-inverse",
  "intro": [
    "Inverse trig runs the questions backwards: given the ratio, recover the angle.",
    "arcsin, arccos, and arctan each answer one such question — which angle has this sine, cosine, or tangent?",
    "Because many angles share a ratio, principal ranges pick one official answer and keep the functions single-valued."
],
  "problems": [
    {
      "prompt": "What is arcsin 0?",
      "answer": "0",
      "hint": "sin 0 = 0.",
      "label": "arcsine zero"
    },
    {
      "prompt": "What is arccos 1?",
      "answer": "0",
      "hint": "cos 0 = 1.",
      "label": "arccosine one"
    },
    {
      "prompt": "What is arctan 1 in degrees?",
      "answer": "45",
      "answers": [
        "45",
        "45degrees"
      ],
      "hint": "tan 45 degrees = 1.",
      "label": "arctangent one"
    },
    {
      "prompt": "What is arccos 0 in degrees?",
      "answer": "90",
      "answers": [
        "90",
        "90 degrees"
      ],
      "hint": "Which angle has cosine zero?",
      "label": "arccos zero",
      "choices": [
        {
          "value": "90",
          "label": "90°"
        },
        {
          "value": "0",
          "label": "0°"
        },
        {
          "value": "45",
          "label": "45°"
        },
        {
          "value": "180",
          "label": "180°"
        }
      ]
    },
    {
      "prompt": "What is arctan 0?",
      "answer": "0",
      "answers": [
        "0",
        "zero"
      ],
      "hint": "Which angle has tangent zero?",
      "label": "arctan zero",
      "choices": [
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "45",
          "label": "45°"
        },
        {
          "value": "90",
          "label": "90°"
        },
        {
          "value": "1",
          "label": "1"
        }
      ]
    },
    {
      "prompt": "What is arcsin 1 in degrees?",
      "answer": "90",
      "answers": [
        "90",
        "90 degrees"
      ],
      "hint": "Sine reaches 1 at the top of the circle.",
      "label": "arcsin one",
      "choices": [
        {
          "value": "90",
          "label": "90°"
        },
        {
          "value": "0",
          "label": "0°"
        },
        {
          "value": "45",
          "label": "45°"
        },
        {
          "value": "180",
          "label": "180°"
        }
      ]
    },
    {
      "prompt": "Is arcsin(2) defined for real numbers?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Sine never exceeds 1, so no angle can answer.",
      "label": "out of range",
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
      "prompt": "Since sin 30° = 1/2, what is arcsin(1/2) in degrees?",
      "answer": "30",
      "answers": [
        "30",
        "30 degrees"
      ],
      "hint": "Inverse trig runs the known fact backwards.",
      "label": "arcsin half",
      "choices": [
        {
          "value": "30",
          "label": "30°"
        },
        {
          "value": "60",
          "label": "60°"
        },
        {
          "value": "45",
          "label": "45°"
        },
        {
          "value": "90",
          "label": "90°"
        }
      ]
    }

  ]
};
})();
