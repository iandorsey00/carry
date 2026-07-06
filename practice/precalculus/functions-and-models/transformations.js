// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["precalculus"] = window.CarryPractice.sections["precalculus"] || {};
  window.CarryPractice.sections["precalculus"]["precalculus.transformations"] = {
  "id": "precalculus.transformations",
  "topic": "Precalculus",
  "title": "Transformations",
  "type": "concept",
  "figure": "precalc-transformations",
  "intro": [
    "Once you know one graph, transformations give you a thousand more: slide it, stretch it, flip it — without re-plotting a point.",
    "Changes outside the function act on outputs and move the graph vertically; changes inside act on inputs and move it sideways, backwards.",
    "Vertex form displays the result: <math>y = (x - h)^2 + k</math> is the parent parabola parked at <math>(h, k)</math>."
],
  "problems": [
    {
      "prompt": "Compared with y = x^2, y = x^2 + 4 shifts which direction?",
      "answer": "up",
      "hint": "Adding 4 outside the square raises every output.",
      "label": "vertical shift",
      "choices": [
        {
          "value": "up",
          "label": "up"
        },
        {
          "value": "down",
          "label": "down"
        },
        {
          "value": "left",
          "label": "left"
        },
        {
          "value": "right",
          "label": "right"
        }
      ]
    },
    {
      "prompt": "What is the vertex of y = (x - 2)^2 + 3?",
      "answer": "(2,3)",
      "answers": [
        "(2,3)",
        "2,3"
      ],
      "hint": "The form y = (x - h)^2 + k has vertex (h, k).",
      "label": "parabola vertex"
    },
    {
      "prompt": "Compared with y = x^2, y = (x - 5)^2 shifts right by how many units?",
      "answer": "5",
      "hint": "Inside subtraction shifts right.",
      "label": "horizontal shift",
      "choices": [
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "up",
          "label": "up"
        },
        {
          "value": "down",
          "label": "down"
        },
        {
          "value": "left",
          "label": "left"
        }
      ]
    },
    {
      "prompt": "Compared with y = x^2, y = x^2 - 6 shifts which direction?",
      "answer": "down",
      "hint": "Subtracting outside lowers every output.",
      "label": "vertical shift",
      "feedback": "Outside changes affect y-values.",
      "choices": [
        {
          "value": "down",
          "label": "down"
        },
        {
          "value": "up",
          "label": "up"
        },
        {
          "value": "left",
          "label": "left"
        },
        {
          "value": "right",
          "label": "right"
        }
      ]
    },
    {
      "prompt": "What is the vertex of y = (x + 1)^2 - 4?",
      "answer": "(-1,-4)",
      "answers": [
        "(-1,-4)",
        "-1,-4"
      ],
      "hint": "Use y = (x - h)^2 + k.",
      "label": "parabola vertex",
      "feedback": "Inside plus means the h-value is negative."
    },
    {
      "prompt": "Compared with y = x^2, y = (x + 3)^2 shifts left by how many units?",
      "answer": "3",
      "hint": "Inside addition shifts left.",
      "label": "horizontal shift",
      "feedback": "Horizontal shifts feel opposite inside parentheses.",
      "choices": [
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "up",
          "label": "up"
        },
        {
          "value": "down",
          "label": "down"
        },
        {
          "value": "left",
          "label": "left"
        }
      ]
    },
    {
      "prompt": "Compared with y = x², what does y = -x² look like?",
      "answer": "reflected across the x-axis",
      "answers": [
        "reflected across the x-axis",
        "flipped upside down"
      ],
      "hint": "Every output flips sign.",
      "label": "flip parabola",
      "choices": [
        {
          "value": "reflected across the x-axis",
          "label": "reflected across the x-axis"
        },
        {
          "value": "shifted down",
          "label": "shifted down"
        },
        {
          "value": "reflected across the y-axis",
          "label": "reflected across the y-axis"
        }
      ]
    },
    {
      "prompt": "Compared with y = x², the graph of y = 2x² is what?",
      "answer": "stretched vertically",
      "answers": [
        "stretched vertically",
        "narrower"
      ],
      "hint": "Outputs double, so the parabola climbs faster.",
      "label": "vertical stretch",
      "choices": [
        {
          "value": "stretched vertically",
          "label": "stretched vertically"
        },
        {
          "value": "shifted up",
          "label": "shifted up"
        },
        {
          "value": "wider",
          "label": "wider"
        }
      ]
    }

  ]
};
})();
