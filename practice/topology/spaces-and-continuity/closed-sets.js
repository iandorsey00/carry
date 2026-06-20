// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["topology"] = window.CarryPractice.sections["topology"] || {};
  window.CarryPractice.sections["topology"]["topology.closed-sets"] = {
    id: "topology.closed-sets",
    topic: "Topology",
    title: "Closed sets",
    type: "concept",
    figure: "topology-closed-sets",
    intro: [
      "A closed set is defined by its complement: the outside is open.",
      "Closed does not mean unavailable or blocked.",
      "Some sets can be both open and closed, depending on the space."
    ],
    problems: [
      {
        prompt: "A set is closed when its complement is what?",
        answer: "open",
        answers: ["open", "an open set"],
        hint: "Closed sets are defined through open complements.",
        label: "closed complement",
        choices: [
          { value: "open", label: "open" },
          { value: "dense", label: "dense" },
          { value: "finite", label: "finite" },
          { value: "connected", label: "connected" }
        ]
      },
      {
        prompt: "In the usual real line topology, is [0, 1] closed?",
        answer: "yes",
        answers: ["yes", "true"],
        hint: "Its complement is (-infinity, 0) union (1, infinity), which is open.",
        label: "closed interval",
        choices: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]
      },
      {
        prompt: "Can a set be both open and closed?",
        answer: "yes",
        answers: ["yes", "true"],
        hint: "The empty set and the whole space always are.",
        label: "clopen set",
        choices: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]
      },
      {
        prompt: "The whole space is closed in every topology.",
        answer: "true",
        answers: ["true", "yes"],
        hint: "Its complement is the empty set, and the empty set is open.",
        label: "space closed",
        choices: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ]
      }
    ]
  };
})();
