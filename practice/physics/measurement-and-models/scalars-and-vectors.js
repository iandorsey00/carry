// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.scalars-vectors"] = {
  "id": "physics.scalars-vectors",
  "topic": "Physics Foundations",
  "title": "Scalars and vectors",
  "type": "concept",
  "figure": "physics-vectors",
  "intro": [
    "A scalar has magnitude only.",
    "A vector has magnitude and direction.",
    "Velocity, force, acceleration, and displacement are vectors."
  ],
  "problems": [
    {
      "prompt": "Is speed a scalar or vector?",
      "answer": "scalar",
      "hint": "Speed has size but no direction.",
      "label": "speed type",
      "answers": [
        "scalar"
      ],
      "choices": [
        {
          "value": "scalar",
          "label": "scalar"
        },
        {
          "value": "vector",
          "label": "vector"
        }
      ]
    },
    {
      "prompt": "Is velocity a scalar or vector?",
      "answer": "vector",
      "hint": "Velocity includes direction.",
      "label": "velocity type",
      "answers": [
        "vector"
      ],
      "choices": [
        {
          "value": "scalar",
          "label": "scalar"
        },
        {
          "value": "vector",
          "label": "vector"
        }
      ]
    },
    {
      "prompt": "A 10 N force east is a scalar or vector?",
      "answer": "vector",
      "hint": "The direction east matters.",
      "label": "force type",
      "choices": [
        {
          "value": "scalar",
          "label": "scalar"
        },
        {
          "value": "vector",
          "label": "vector"
        }
      ]
    },
    {
      "prompt": "Is mass a scalar or a vector?",
      "answer": "scalar",
      "answers": [
        "scalar"
      ],
      "hint": "It has size but no direction.",
      "label": "mass scalar",
      "choices": [
        {
          "value": "scalar",
          "label": "scalar"
        },
        {
          "value": "vector",
          "label": "vector"
        }
      ]
    },
    {
      "prompt": "Is displacement a scalar or a vector?",
      "answer": "vector",
      "answers": [
        "vector"
      ],
      "hint": "It points from start to finish.",
      "label": "displacement vector",
      "choices": [
        {
          "value": "vector",
          "label": "vector"
        },
        {
          "value": "scalar",
          "label": "scalar"
        }
      ]
    },
    {
      "prompt": "Is temperature a scalar or a vector?",
      "answer": "scalar",
      "answers": [
        "scalar"
      ],
      "hint": "There is no direction to 20 degrees.",
      "label": "temperature scalar",
      "choices": [
        {
          "value": "scalar",
          "label": "scalar"
        },
        {
          "value": "vector",
          "label": "vector"
        }
      ]
    },
    {
      "prompt": "Adding two vectors requires paying attention to what?",
      "answer": "their directions",
      "answers": [
        "their directions",
        "direction"
      ],
      "hint": "5 + 5 can be 10, 0, or anything between.",
      "label": "vector addition",
      "choices": [
        {
          "value": "their directions",
          "label": "their directions"
        },
        {
          "value": "only their magnitudes",
          "label": "only their magnitudes"
        },
        {
          "value": "only their units",
          "label": "only their units"
        }
      ]
    },
    {
      "prompt": "Walking 5 km east and then 5 km west gives what net displacement?",
      "answer": "0",
      "answers": [
        "0",
        "zero"
      ],
      "hint": "You end where you began.",
      "label": "round trip",
      "choices": [
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "10 km",
          "label": "10 km"
        },
        {
          "value": "5 km",
          "label": "5 km"
        },
        {
          "value": "25 km",
          "label": "25 km"
        }
      ]
    }

  ]
};
})();
