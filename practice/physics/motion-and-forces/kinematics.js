// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.kinematics"] = {
  "id": "physics.kinematics",
  "topic": "Mechanics",
  "title": "Kinematics",
  "type": "concept",
  "figure": "physics-kinematics",
  "intro": [
    "Kinematics describes motion without asking what caused it.",
    "Velocity is change in position over time.",
    "Acceleration is change in velocity over time."
  ],
  "problems": [
    {
      "prompt": "If an object moves 20 m in 4 s, what is its average speed in m/s?",
      "answer": "5",
      "hint": "Divide distance by time: 20 / 4.",
      "label": "average speed"
    },
    {
      "prompt": "Acceleration is change in velocity over what?",
      "answer": "time",
      "hint": "Acceleration measures how quickly velocity changes.",
      "label": "acceleration denominator"
    },
    {
      "prompt": "If velocity is constant, acceleration is what number?",
      "answer": "0",
      "hint": "No change in velocity means zero acceleration.",
      "label": "constant velocity acceleration"
    },
    {
      "prompt": "Starting from rest with acceleration 2 m/s², what is the velocity after 3 s?",
      "answer": "6",
      "answers": [
        "6",
        "6 m/s"
      ],
      "hint": "Velocity gained is acceleration times time.",
      "label": "v equals at",
      "choices": [
        {
          "value": "6",
          "label": "6"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "9",
          "label": "9"
        }
      ]
    },
    {
      "prompt": "Which quantity includes direction: distance or displacement?",
      "answer": "displacement",
      "answers": [
        "displacement"
      ],
      "hint": "Distance only counts the ground covered.",
      "label": "displacement direction",
      "choices": [
        {
          "value": "displacement",
          "label": "displacement"
        },
        {
          "value": "distance",
          "label": "distance"
        }
      ]
    },
    {
      "prompt": "Moving forward while slowing down means acceleration points which way?",
      "answer": "backward",
      "answers": [
        "backward",
        "backwards",
        "opposite the motion"
      ],
      "hint": "Acceleration opposes the motion when braking.",
      "label": "braking",
      "choices": [
        {
          "value": "backward",
          "label": "backward"
        },
        {
          "value": "forward",
          "label": "forward"
        },
        {
          "value": "nowhere",
          "label": "nowhere"
        }
      ]
    },
    {
      "prompt": "A car's speedometer displays which quantity?",
      "answer": "speed",
      "answers": [
        "speed"
      ],
      "hint": "No direction on the dial.",
      "label": "speedometer",
      "choices": [
        {
          "value": "speed",
          "label": "speed"
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
          "value": "displacement",
          "label": "displacement"
        }
      ]
    },
    {
      "prompt": "With constant acceleration, a position-time graph looks like what?",
      "answer": "a curve",
      "answers": [
        "a curve",
        "curved"
      ],
      "hint": "Steadily changing slope bends the line.",
      "label": "curved position",
      "choices": [
        {
          "value": "a curve",
          "label": "a curve"
        },
        {
          "value": "a straight line",
          "label": "a straight line"
        },
        {
          "value": "a horizontal line",
          "label": "a horizontal line"
        }
      ]
    }

  ]
};
})();
