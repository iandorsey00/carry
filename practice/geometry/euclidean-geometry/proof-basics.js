// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["geometry"] = window.CarryPractice.sections["geometry"] || {};
  window.CarryPractice.sections["geometry"]["geometry.proof-basics"] = {
  "id": "geometry.proof-basics",
  "topic": "Geometry",
  "title": "Proof basics",
  "type": "concept",
  "figure": "geometry-proof",
  "intro": [
    "A proof explains why a conclusion must be true.",
    "Each step should have a reason, such as a definition, a given fact, or a theorem.",
    "Good proof writing moves from known information toward the claim."
  ],
  "problems": [
    {
      "prompt": "If two angles are both right angles, what can you conclude about their measures?",
      "answer": "equal",
      "answers": [
        "equal",
        "congruent",
        "same"
      ],
      "hint": "All right angles measure 90 degrees.",
      "label": "right angle conclusion",
      "choices": [
        {
          "value": "equal",
          "label": "equal"
        },
        {
          "value": "acute",
          "label": "acute"
        },
        {
          "value": "right",
          "label": "right"
        },
        {
          "value": "obtuse",
          "label": "obtuse"
        }
      ]
    },
    {
      "prompt": "In a proof, what word describes information stated at the start?",
      "answer": "given",
      "hint": "A proof often begins with given information.",
      "label": "proof starting fact",
      "choices": [
        {
          "value": "given",
          "label": "given"
        },
        {
          "value": "hypothesis",
          "label": "hypothesis"
        },
        {
          "value": "conclusion",
          "label": "conclusion"
        },
        {
          "value": "contradiction",
          "label": "contradiction"
        }
      ]
    },
    {
      "prompt": "If AB = CD and CD = EF, which property lets you conclude AB = EF?",
      "answer": "transitive",
      "answers": [
        "transitive",
        "transitivity",
        "transitiveproperty"
      ],
      "hint": "Equality can pass through a shared equal quantity.",
      "label": "equality reason",
      "choices": [
        {
          "value": "transitive",
          "label": "transitive"
        },
        {
          "value": "closure",
          "label": "closure"
        },
        {
          "value": "identity",
          "label": "identity"
        },
        {
          "value": "inverse",
          "label": "inverse"
        }
      ]
    }
  ]
};
})();
