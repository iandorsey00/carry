// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["topology"] = window.CarryPractice.sections["topology"] || {};
  window.CarryPractice.sections["topology"]["topology.continuity"] = {
    id: "topology.continuity",
    topic: "Topology",
    title: "Continuity",
    type: "concept",
    figure: "topology-continuity",
    intro: [
      "Topological continuity is defined with open sets.",
      "A function is continuous when the preimage of every open set is open.",
      "This definition works without formulas, slopes, or distances."
    ],
    problems: [
      {
        prompt: "Topological continuity uses preimages of which sets?",
        answer: "open sets",
        answers: ["open sets", "open"],
        hint: "Look backward from open sets in the output space.",
        label: "continuity preimage",
        choices: [
          { value: "open sets", label: "open sets" },
          { value: "prime numbers", label: "prime numbers" },
          { value: "matrix columns", label: "matrix columns" },
          { value: "sample means", label: "sample means" }
        ]
      },
      {
        prompt: "For a continuous function, the preimage of an open set is open.",
        answer: "true",
        answers: ["true", "yes"],
        hint: "That is the topological definition.",
        label: "continuity definition",
        choices: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ]
      },
      {
        prompt: "Does topological continuity require a graph to draw?",
        answer: "no",
        answers: ["no", "false"],
        hint: "The definition works in spaces that may not look like curves.",
        label: "graph not required",
        choices: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]
      },
      {
        prompt: "Continuity in topology is mainly about preserving which structure?",
        answer: "open-set structure",
        answers: ["open-set structure", "open sets", "topology"],
        hint: "Continuous maps respect the chosen open sets.",
        label: "preserved structure",
        choices: [
          { value: "open-set structure", label: "open-set structure" },
          { value: "decimal place value", label: "decimal place value" },
          { value: "multiplication table", label: "multiplication table" },
          { value: "chemical formula", label: "chemical formula" }
        ]
      }
    ]
  };
})();
