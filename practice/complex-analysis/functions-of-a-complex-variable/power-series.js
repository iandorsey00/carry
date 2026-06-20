// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["complex-analysis"] = window.CarryPractice.sections["complex-analysis"] || {};
  window.CarryPractice.sections["complex-analysis"]["complex-analysis.power-series"] = {
    id: "complex-analysis.power-series",
    topic: "Complex Analysis",
    title: "Power series",
    type: "concept",
    figure: "complex-power-series",
    intro: [
      "Power series write functions as infinite polynomial-like sums.",
      "In complex analysis, analytic functions are locally represented by power series.",
      "The radius of convergence tells how far the series representation works from its center."
    ],
    problems: [
      {
        prompt: "A power series is built from powers of which expression?",
        answer: "z-a",
        answers: ["z-a", "z - a"],
        hint: "The series is centered at a.",
        label: "series center",
        choices: [
          { value: "z-a", label: "z - a" },
          { value: "a-z", label: "a - z" },
          { value: "z+a", label: "z + a" },
          { value: "az", label: "az" }
        ]
      },
      {
        prompt: "The radius of convergence describes a circle or disk around the center.",
        answer: "true",
        answers: ["true", "yes"],
        hint: "Distance from the center is what matters.",
        label: "radius of convergence",
        choices: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ]
      },
      {
        prompt: "Inside its radius of convergence, a power series behaves like a function.",
        answer: "true",
        answers: ["true", "yes"],
        hint: "Inside the disk, the infinite sum converges.",
        label: "inside radius",
        choices: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ]
      },
      {
        prompt: "Which object is closest in spirit to a power series?",
        answer: "infinite polynomial",
        answers: ["infinite polynomial", "polynomial"],
        hint: "It is a sum of powers with coefficients.",
        label: "series intuition",
        choices: [
          { value: "infinite polynomial", label: "an infinite polynomial" },
          { value: "single point", label: "a single point" },
          { value: "truth value", label: "a truth value" },
          { value: "triangle angle", label: "a triangle angle" }
        ]
      }
    ]
  };
})();
