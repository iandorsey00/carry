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
      },
      {
        prompt: "The geometric series 1 + z + z^2 + ... converges when |z| is less than what?",
        answer: "1",
        answers: ["1", "one"],
        hint: "Same rule as the real geometric series: the ratio must stay small.",
        label: "geometric radius",
        choices: [
          { value: "1", label: "1" },
          { value: "2", label: "2" },
          { value: "π", label: "π" },
          { value: "any value", label: "any value" }
        ]
      },
      {
        prompt: "A power series centered at 0 converges for |z| < 3. Does it converge at z = 2i?",
        answer: "yes",
        answers: ["yes", "true"],
        hint: "The modulus of 2i is 2, which is inside the disk of radius 3.",
        label: "inside the disk",
        choices: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]
      },
      {
        prompt: "Inside its disk of convergence, can a power series be differentiated term by term?",
        answer: "yes",
        answers: ["yes", "true"],
        hint: "Inside the disk it behaves like a polynomial with infinitely many terms.",
        label: "term by term",
        choices: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]
      },
      {
        prompt: "What is the radius of convergence of the power series for e^z?",
        answer: "infinite",
        answers: ["infinite", "infinity", "∞"],
        hint: "e^z is entire, so its series works everywhere.",
        label: "entire radius",
        choices: [
          { value: "infinite", label: "infinite" },
          { value: "1", label: "1" },
          { value: "2π", label: "2π" },
          { value: "0", label: "0" }
        ]
      }
    ]
  };
})();
