// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["complex-analysis"] = window.CarryPractice.sections["complex-analysis"] || {};
  window.CarryPractice.sections["complex-analysis"]["complex-analysis.analytic-functions"] = {
    id: "complex-analysis.analytic-functions",
    topic: "Complex Analysis",
    title: "Analytic functions",
    type: "concept",
    figure: "complex-analytic",
    intro: [
      "An analytic function is complex differentiable on a whole open region.",
      "That is stronger than being differentiable at one point.",
      "Analytic functions are rigid: local derivative information controls a surprising amount of the function."
    ],
    problems: [
      {
        prompt: "Is being differentiable at one point enough to call a function analytic on a region?",
        answer: "no",
        answers: ["no", "false"],
        hint: "Analytic means differentiable throughout an open region.",
        label: "analytic region",
        choices: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]
      },
      {
        prompt: "Analytic means complex differentiable on what kind of set?",
        answer: "open set",
        answers: ["open set", "open region", "region"],
        hint: "The derivative must exist around each point, not just at isolated points.",
        label: "analytic domain",
        choices: [
          { value: "open set", label: "an open set" },
          { value: "single point", label: "one single point" },
          { value: "finite set", label: "a finite set" },
          { value: "empty set", label: "only the empty set" }
        ]
      },
      {
        prompt: "Which function is a standard example of an entire function?",
        answer: "e^z",
        answers: ["e^z", "exp(z)"],
        hint: "Entire means analytic on the whole complex plane.",
        label: "entire function",
        choices: [
          { value: "e^z", label: "e^z" },
          { value: "1/z", label: "1/z" },
          { value: "1/(z-2)", label: "1/(z - 2)" },
          { value: "log z", label: "log z" }
        ]
      },
      {
        prompt: "Does f(z) = 1/z have a problem at z = 0?",
        answer: "yes",
        answers: ["yes", "true"],
        hint: "Division by zero is not defined.",
        label: "singularity",
        choices: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]
      }
    ]
  };
})();
