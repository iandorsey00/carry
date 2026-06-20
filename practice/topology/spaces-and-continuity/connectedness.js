// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["topology"] = window.CarryPractice.sections["topology"] || {};
  window.CarryPractice.sections["topology"]["topology.connectedness"] = {
    id: "topology.connectedness",
    topic: "Topology",
    title: "Connectedness",
    type: "concept",
    figure: "topology-connectedness",
    intro: [
      "Connectedness means a space cannot be split into two separated nonempty open pieces.",
      "Intervals in the real line are connected.",
      "Connectedness is about staying in one piece, not about distance alone."
    ],
    problems: [
      {
        prompt: "Connectedness asks whether a space can be split into separated pieces.",
        answer: "true",
        answers: ["true", "yes"],
        hint: "A connected space stays in one topological piece.",
        label: "connected intuition",
        choices: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ]
      },
      {
        prompt: "In the usual real line topology, is [0, 1] connected?",
        answer: "yes",
        answers: ["yes", "true"],
        hint: "Intervals are connected.",
        label: "interval connected",
        choices: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]
      },
      {
        prompt: "In the usual real line topology, is {0} union {1} connected?",
        answer: "no",
        answers: ["no", "false"],
        hint: "There are two separated points.",
        label: "two point disconnected",
        choices: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]
      },
      {
        prompt: "Which object is the best basic example of a connected subset of the real line?",
        answer: "interval",
        answers: ["interval", "an interval"],
        hint: "No gaps.",
        label: "connected example",
        choices: [
          { value: "interval", label: "an interval" },
          { value: "two separated points", label: "two separated points" },
          { value: "two disjoint intervals", label: "two disjoint intervals" },
          { value: "set with a gap", label: "a set with a gap" }
        ]
      }
    ]
  };
})();
