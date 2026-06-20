// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["topology"] = window.CarryPractice.sections["topology"] || {};
  window.CarryPractice.sections["topology"]["topology.bases"] = {
    id: "topology.bases",
    topic: "Topology",
    title: "Bases",
    type: "concept",
    figure: "topology-bases",
    intro: [
      "A basis is a smaller collection of open sets that generates a topology.",
      "Every open set can be built as a union of basis elements.",
      "In the real line, open intervals form a standard basis."
    ],
    problems: [
      {
        prompt: "A basis generates a topology by taking what operation on basis elements?",
        answer: "unions",
        answers: ["unions", "union"],
        hint: "Open sets are built by collecting basis pieces together.",
        label: "basis generation",
        choices: [
          { value: "unions", label: "unions" },
          { value: "only complements", label: "only complements" },
          { value: "only products", label: "only products" },
          { value: "derivatives", label: "derivatives" }
        ]
      },
      {
        prompt: "In the usual real line, open intervals form a basis.",
        answer: "true",
        answers: ["true", "yes"],
        hint: "Every usual open set can be built from open intervals.",
        label: "real basis",
        choices: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ]
      },
      {
        prompt: "Does a basis usually contain enough local neighborhoods to build open sets?",
        answer: "yes",
        answers: ["yes", "true"],
        hint: "Basis elements are the local building blocks.",
        label: "local pieces",
        choices: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]
      },
      {
        prompt: "Which phrase best describes a basis element?",
        answer: "building block open set",
        answers: ["building block open set", "basic open set"],
        hint: "Basis elements are the open pieces used to build larger open sets.",
        label: "basis element",
        choices: [
          { value: "building block open set", label: "building-block open set" },
          { value: "closed endpoint", label: "closed endpoint" },
          { value: "single proof line", label: "single proof line" },
          { value: "largest distance", label: "largest distance" }
        ]
      }
    ]
  };
})();
