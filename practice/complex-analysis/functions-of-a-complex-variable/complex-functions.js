// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["complex-analysis"] = window.CarryPractice.sections["complex-analysis"] || {};
  window.CarryPractice.sections["complex-analysis"]["complex-analysis.complex-functions"] = {
    id: "complex-analysis.complex-functions",
    topic: "Complex Analysis",
    title: "Complex functions",
    type: "concept",
    figure: "complex-functions",
    intro: [
      "A complex function takes a complex input and returns a complex output.",
      "The input z can be written as x + iy, so one function often controls two real directions at once.",
      "Complex analysis studies how these functions move points, curves, and regions in the complex plane."
    ],
    problems: [
      {
        prompt: "For f(z) = z^2, what is f(i)?",
        answer: "-1",
        hint: "Use i^2 = -1.",
        label: "evaluate at i",
        choices: [
          { value: "-1", label: "-1" },
          { value: "1", label: "1" },
          { value: "i", label: "i" },
          { value: "-i", label: "-i" }
        ]
      },
      {
        prompt: "In complex analysis, z usually represents which kind of number?",
        answer: "complex number",
        answers: ["complex number", "complex"],
        hint: "It has both real and imaginary parts.",
        label: "meaning of z",
        choices: [
          { value: "complex number", label: "a complex number" },
          { value: "real number", label: "only a real number" }
        ]
      },
      {
        prompt: "If z = 3 + 2i, what is the real part?",
        answer: "3",
        hint: "The real part is the part without i.",
        label: "real part",
        choices: [
          { value: "3", label: "3" },
          { value: "2", label: "2" },
          { value: "2i", label: "2i" },
          { value: "3 + 2i", label: "3 + 2i" }
        ]
      },
      {
        prompt: "If z = 3 + 2i, what is the imaginary part?",
        answer: "2",
        hint: "The imaginary part is the coefficient of i.",
        label: "imaginary part",
        choices: [
          { value: "2", label: "2" },
          { value: "3", label: "3" },
          { value: "2i", label: "2i" },
          { value: "3 + 2i", label: "3 + 2i" }
        ]
      }
    ]
  };
})();
