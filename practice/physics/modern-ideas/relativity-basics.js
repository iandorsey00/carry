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
    }
  ]
};
})();
