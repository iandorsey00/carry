(function registerSeparableDerivations() {
  const engine = window.CarryGuidedDerivation;
  const section = window.CarryPractice?.sections?.["differential-equations"];
  const existing = section?.["differential-equations.separable"];
  if (!engine || !section || !existing) return;

  const s = engine.slot;
  function mathFor(answer) {
    const exact = {
      "dy/y": "\\frac{1}{y}\\,dy",
      "dx/x": "\\frac{1}{x}\\,dx",
      "y dy": "y\\,dy",
      "e^y dy": "e^y\\,dy",
      "3x dx": "3x\\,dx",
      "2x dx": "2x\\,dx",
      "x dx": "x\\,dx",
      "4x^3 dx": "4x^3\\,dx",
      "2 dx": "2\\,dx",
      "-3 dx": "-3\\,dx",
      "dx": "dx",
      "ln|y|": "\\ln|y|",
      "y^2/2": "\\frac{y^2}{2}",
      "x^2/2+C": "\\frac{x^2}{2}+C",
      "(3/2)x^2+C": "\\frac{3}{2}x^2+C",
      "Ce^((3/2)x^2)": "Ce^{\\frac{3}{2}x^2}",
      "Ce^(x^4)": "Ce^{x^4}",
      "Ce^(2x)": "Ce^{2x}",
      "Ce^(-3x)": "Ce^{-3x}"
    };
    if (exact[answer]) return exact[answer];
    if (answer.startsWith("int ")) return `\\int ${mathFor(answer.slice(4))}`;
    return answer.replace(/x\^2\/2/g, "\\frac{x^2}{2}");
  }

  const step = (answer, answers, hint, label) => s(answer, { answers, hint, label, math: mathFor(answer) });
  const integralAnswers = (expression) => [`int ${expression}`, `integral ${expression}`, `\\int ${expression}`, `∫ ${expression}`];

  function problem(config) {
    const rows = [
      { id: "start", label: "start", left: "\\frac{dy}{dx}", relation: "=", right: config.rule },
      {
        id: "separate",
        label: "separate",
        left: step(config.separatedLeft, config.separatedLeftAnswers, config.separateHint || "Move every y-factor beside dy.", "Separate the y terms on the left"),
        relation: "=",
        right: step(config.separatedRight, config.separatedRightAnswers, config.separateRightHint || "Keep every x-factor beside dx.", "Separate the x terms on the right")
      },
      {
        id: "integrate",
        label: "integrate",
        left: step(`int ${config.separatedLeft}`, integralAnswers(config.separatedLeft), "Integrate the entire left side with respect to y.", "Write the left integral"),
        relation: "=",
        right: step(`int ${config.separatedRight}`, integralAnswers(config.separatedRight), "Integrate the entire right side with respect to x.", "Write the right integral")
      },
      {
        id: "evaluate",
        label: "evaluate",
        left: step(config.evaluatedLeft, config.evaluatedLeftAnswers, config.evaluateLeftHint, "Evaluate the left integral"),
        relation: "=",
        right: step(config.evaluatedRight, config.evaluatedRightAnswers, config.evaluateRightHint, "Evaluate the right integral and include C")
      },
      {
        id: "solve",
        label: config.solutionLabel || "solution",
        left: config.solutionLeft || "y",
        relation: "=",
        right: step(config.solution, config.solutionAnswers, config.solutionHint, config.solutionPrompt || "Write the solution family")
      }
    ];
    if (config.constant) {
      rows.splice(rows.length - 1, 0, {
        id: "constant",
        label: "initial value",
        left: "C",
        relation: "=",
        right: step(config.constant, config.constantAnswers, config.constantHint, "Use the initial condition to find C")
      });
    }
    return { id: config.id, prompt: config.prompt, rows };
  }

  section[existing.id] = {
    ...existing,
    type: "guided-derivation",
    problems: [
      problem({
        id: "sep-3xy",
        prompt: "Solve <math>dy/dx = 3xy</math>.",
        rule: "3xy",
        separatedLeft: "dy/y",
        separatedLeftAnswers: ["(1/y)dy", "1/y dy", "\\frac{1}{y}dy"],
        separatedRight: "3x dx",
        separatedRightAnswers: ["3x*dx"],
        evaluatedLeft: "ln|y|",
        evaluatedLeftAnswers: ["ln |y|", "ln(y)"],
        evaluateLeftHint: "The antiderivative of 1/y is ln|y|.",
        evaluatedRight: "(3/2)x^2+C",
        evaluatedRightAnswers: ["3x^2/2+C", "1.5x^2+C"],
        evaluateRightHint: "Integrate 3x with the power rule, then add C.",
        solution: "Ce^((3/2)x^2)",
        solutionAnswers: ["C e^(3x^2/2)", "Ce^(1.5x^2)", "Ce^{3x^2/2}"],
        solutionHint: "Exponentiate both sides and absorb the sign into C."
      }),
      problem({
        id: "sep-2x-over-y",
        prompt: "Solve <math>dy/dx = 2x/y</math>.",
        rule: "\\frac{2x}{y}",
        separatedLeft: "y dy",
        separatedLeftAnswers: ["y*dy"],
        separatedRight: "2x dx",
        evaluatedLeft: "y^2/2",
        evaluatedLeftAnswers: ["(1/2)y^2"],
        evaluateLeftHint: "Use the power rule on y.",
        evaluatedRight: "x^2+C",
        evaluateRightHint: "The antiderivative of 2x is x squared.",
        solutionLeft: "y^2",
        solution: "2x^2+C",
        solutionAnswers: ["2x^2+2C"],
        solutionHint: "Multiply both sides by 2 and rename the arbitrary constant."
      }),
      problem({
        id: "sep-x-exp-minus-y",
        prompt: "Solve <math>dy/dx = xe^{-y}</math>.",
        rule: "xe^{-y}",
        separatedLeft: "e^y dy",
        separatedRight: "x dx",
        evaluatedLeft: "e^y",
        evaluateLeftHint: "The exponential is its own antiderivative.",
        evaluatedRight: "x^2/2+C",
        evaluateRightHint: "Integrate x with the power rule.",
        solution: "ln(x^2/2+C)",
        solutionAnswers: ["ln((x^2)/2+C)"],
        solutionHint: "Apply the natural logarithm to isolate y."
      }),
      problem({
        id: "sep-four-x-cubed-y",
        prompt: "Solve <math>dy/dx = 4x^3y</math>.",
        rule: "4x^3y",
        separatedLeft: "dy/y",
        separatedLeftAnswers: ["(1/y)dy"],
        separatedRight: "4x^3 dx",
        evaluatedLeft: "ln|y|",
        evaluateLeftHint: "The antiderivative of 1/y is ln|y|.",
        evaluatedRight: "x^4+C",
        evaluateRightHint: "The antiderivative of 4x cubed is x to the fourth.",
        solution: "Ce^(x^4)",
        solutionAnswers: ["C e^(x^4)", "Ce^{x^4}"],
        solutionHint: "Exponentiate and absorb the multiplicative constant."
      }),
      problem({
        id: "sep-y-over-x",
        prompt: "Solve <math>dy/dx = y/x</math>.",
        rule: "\\frac{y}{x}",
        separatedLeft: "dy/y",
        separatedLeftAnswers: ["(1/y)dy"],
        separatedRight: "dx/x",
        separatedRightAnswers: ["1/x dx", "(1/x)dx"],
        evaluatedLeft: "ln|y|",
        evaluateLeftHint: "Integrate 1/y.",
        evaluatedRight: "ln|x|+C",
        evaluateRightHint: "Integrate 1/x and add C.",
        solution: "Cx",
        solutionAnswers: ["C*x"],
        solutionHint: "Exponentiate and combine the constant with the absolute-value sign on each interval."
      }),
      problem({
        id: "sep-two-y",
        prompt: "Solve <math>dy/dx = 2y</math>.",
        rule: "2y",
        separatedLeft: "dy/y",
        separatedRight: "2 dx",
        evaluatedLeft: "ln|y|",
        evaluateLeftHint: "Integrate 1/y.",
        evaluatedRight: "2x+C",
        evaluateRightHint: "The integral of 2 is 2x.",
        solution: "Ce^(2x)",
        solutionAnswers: ["C e^(2x)", "Ce^{2x}"],
        solutionHint: "Exponentiate both sides."
      }),
      problem({
        id: "sep-negative-three-y",
        prompt: "Solve <math>dy/dx = -3y</math>.",
        rule: "-3y",
        separatedLeft: "dy/y",
        separatedRight: "-3 dx",
        evaluatedLeft: "ln|y|",
        evaluateLeftHint: "Integrate 1/y.",
        evaluatedRight: "-3x+C",
        evaluateRightHint: "The integral of negative 3 is negative 3x.",
        solution: "Ce^(-3x)",
        solutionAnswers: ["C e^(-3x)", "Ce^{-3x}"],
        solutionHint: "Exponentiate both sides; the negative exponent describes decay."
      }),
      problem({
        id: "sep-initial-value",
        prompt: "Solve <math>dy/dx = y</math> with <math>y(0)=3</math>.",
        rule: "y",
        separatedLeft: "dy/y",
        separatedRight: "dx",
        separatedRightAnswers: ["1 dx"],
        evaluatedLeft: "ln|y|",
        evaluateLeftHint: "Integrate 1/y.",
        evaluatedRight: "x+C",
        evaluateRightHint: "Integrate 1 and add C.",
        constant: "3",
        constantHint: "Substitute x = 0 and y = 3 into y = Ce^x.",
        solution: "3e^x",
        solutionAnswers: ["3e^(x)"],
        solutionHint: "Replace C with the value selected by the initial condition."
      })
    ]
  };
})();
