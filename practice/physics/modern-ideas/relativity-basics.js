// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.relativity"] = {
  "id": "physics.relativity",
  "topic": "Modern Physics",
  "title": "Relativity basics",
  "type": "concept",
  "figure": "physics-relativity",
  "intro": [
    "Relativity becomes important at very high speeds or strong gravity.",
    "The speed of light in vacuum is constant for all inertial observers.",
    "Mass and energy are related by E = mc^2."
  ],
  "problems": [
    {
      "prompt": "In E = mc^2, c represents the speed of what?",
      "answer": "light",
      "hint": "c is the speed of light in vacuum.",
      "label": "c meaning",
      "choices": [
        {
          "value": "light",
          "label": "light"
        },
        {
          "value": "mean",
          "label": "mean"
        },
        {
          "value": "median",
          "label": "median"
        },
        {
          "value": "mode",
          "label": "mode"
        }
      ]
    },
    {
      "prompt": "Relativity matters most at slow speeds or near light speed?",
      "answer": "nearlightspeed",
      "answers": [
        "near light speed",
        "near the speed of light",
        "light speed"
      ],
      "hint": "Everyday speeds are usually well approximated by classical mechanics.",
      "label": "relativity speed",
      "choices": [
        {
          "value": "speeds",
          "label": "speeds"
        },
        {
          "value": "nearlightspeed",
          "label": "near light speed"
        }
      ]
    },
    {
      "prompt": "Mass and energy are related: yes or no?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "That is the meaning of E = mc^2.",
      "label": "mass energy relation",
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
      "prompt": "Compared with a clock at rest, a fast-moving clock runs how?",
      "answer": "slower",
      "answers": [
        "slower"
      ],
      "hint": "Time dilation stretches the moving clock's seconds.",
      "label": "time dilation",
      "choices": [
        {
          "value": "slower",
          "label": "slower"
        },
        {
          "value": "faster",
          "label": "faster"
        },
        {
          "value": "the same",
          "label": "the same"
        }
      ]
    },
    {
      "prompt": "No object with mass can reach the speed of what?",
      "answer": "light",
      "answers": [
        "light"
      ],
      "hint": "It is the universe's speed limit.",
      "label": "speed limit",
      "choices": [
        {
          "value": "light",
          "label": "light"
        },
        {
          "value": "sound",
          "label": "sound"
        },
        {
          "value": "a rocket",
          "label": "a rocket"
        },
        {
          "value": "gravity",
          "label": "gravity"
        }
      ]
    },
    {
      "prompt": "The speed of light is about how many kilometers per second?",
      "answer": "300000",
      "answers": [
        "300000",
        "300,000"
      ],
      "hint": "Three hundred thousand.",
      "label": "light speed",
      "choices": [
        {
          "value": "300000",
          "label": "300000"
        },
        {
          "value": "3000",
          "label": "3000"
        },
        {
          "value": "150000",
          "label": "150000"
        },
        {
          "value": "1000000",
          "label": "1000000"
        }
      ]
    },
    {
      "prompt": "Do GPS satellites need relativity corrections to stay accurate?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Without them, positions would drift kilometers per day.",
      "label": "gps",
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
      "prompt": "At everyday speeds, relativistic effects are what size?",
      "answer": "tiny",
      "answers": [
        "tiny",
        "negligible"
      ],
      "hint": "They exist, but far below anything you can feel.",
      "label": "everyday speeds",
      "choices": [
        {
          "value": "tiny",
          "label": "tiny"
        },
        {
          "value": "huge",
          "label": "huge"
        },
        {
          "value": "moderate",
          "label": "moderate"
        }
      ]
    }

  ]
};
})();
