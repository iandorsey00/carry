// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["topology"] = window.CarryPractice.sections["topology"] || {};
  window.CarryPractice.sections["topology"]["topology.compactness"] = {
    id: "topology.compactness",
    topic: "Topology",
    title: "Compactness",
    type: "concept",
    figure: "topology-compactness",
    intro: [
      "Compactness is a topological version of being controllably finite.",
      "The formal definition uses open covers and finite subcovers.",
      "In the real line, closed and bounded intervals are compact."
    ],
    problems: [
      {
        prompt: "Compactness is defined using open covers and what kind of subcovers?",
        answer: "finite",
        answers: ["finite", "finite subcovers"],
        hint: "You may start with many open sets, but compactness lets you keep finitely many.",
        label: "finite subcover",
        choices: [
          { value: "finite", label: "finite subcovers" },
          { value: "empty", label: "empty subcovers" },
          { value: "disjoint", label: "disjoint subcovers" },
          { value: "random", label: "random subcovers" }
        ]
      },
      {
        prompt: "In the usual real line topology, is [0, 1] compact?",
        answer: "yes",
        answers: ["yes", "true"],
        hint: "It is closed and bounded.",
        label: "compact interval",
        choices: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]
      },
      {
        prompt: "In the usual real line topology, is (0, 1) compact?",
        answer: "no",
        answers: ["no", "false"],
        hint: "It is bounded, but it is not closed.",
        label: "open interval not compact",
        choices: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]
      },
      {
        prompt: "The Heine-Borel theorem says compact subsets of the real line are closed and what?",
        answer: "bounded",
        answers: ["bounded", "closed and bounded"],
        hint: "Closed controls endpoints; the other condition controls size.",
        label: "heine borel",
        choices: [
          { value: "bounded", label: "bounded" },
          { value: "prime", label: "prime" },
          { value: "counted", label: "counted" },
          { value: "differentiable", label: "differentiable" }
        ]
      }
    ]
  };
})();
