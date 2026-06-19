// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.graphs"] = {
  "id": "physics.graphs",
  "topic": "Physics Foundations",
  "title": "Graphs and models",
  "type": "concept",
  "figure": "physics-graphs",
  "intro": [
    "Graphs show how one quantity changes with another.",
    "The slope of a position-time graph is velocity.",
    "The area under a velocity-time graph is displacement."
  ],
  "problems": [
    {
      "prompt": "On a position-time graph, slope represents what?",
      "answer": "velocity",
      "hint": "Change in position divided by change in time is velocity.",
      "label": "position graph slope",
      "choices": [
        {
          "value": "velocity",
          "label": "velocity"
        },
        {
          "value": "position",
          "label": "position"
        },
        {
          "value": "acceleration",
          "label": "acceleration"
        },
        {
          "value": "time",
          "label": "time"
        }
      ]
    },
    {
      "prompt": "On a velocity-time graph, area represents what?",
      "answer": "displacement",
      "hint": "Velocity times time gives displacement.",
      "label": "velocity graph area",
      "choices": [
        {
          "value": "displacement",
          "label": "displacement"
        },
        {
          "value": "velocity",
          "label": "velocity"
        },
        {
          "value": "acceleration",
          "label": "acceleration"
        },
        {
          "value": "time",
          "label": "time"
        }
      ]
    },
    {
      "prompt": "A horizontal position-time graph means the object is moving or at rest?",
      "answer": "atrest",
      "answers": [
        "at rest",
        "rest",
        "not moving"
      ],
      "hint": "Position is not changing.",
      "label": "horizontal position graph",
      "choices": [
        {
          "value": "moving",
          "label": "moving"
        },
        {
          "value": "atrest",
          "label": "at rest"
        }
      ]
    }
  ]
};
})();
