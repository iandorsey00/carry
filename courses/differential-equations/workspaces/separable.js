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

  const step = (answer, answers, hint, label, options = {}) => s(answer, { answers, hint, label, math: mathFor(answer), ...options });
  const integralAnswers = (expression, aliases = []) => [...new Set([expression, ...aliases].flatMap((value) => [
    `int ${value}`,
    `integral ${value}`,
    `\\int ${value}`,
    `∫ ${value}`
  ]))];
  const scaffoldStep = (prompt, answer, hint, answers = []) => ({ prompt, answer, hint, answers });

  function exponentialFamilyScaffold(exponent, exponentAnswers = []) {
    const exponential = `e^(${exponent})`;
    return {
      title: "Isolate y without losing the constant",
      intro: "Exponentiate first, then turn the additive constant into a multiplicative constant.",
      steps: [
        scaffoldStep(
          "Exponentiate both sides.",
          `|y|=e^(${exponent}+C)`,
          "The exponential undoes the natural logarithm.",
          [`abs(y)=e^(${exponent}+C)`]
        ),
        scaffoldStep(
          "Split the sum in the exponent.",
          `|y|=e^C${exponential}`,
          "Use e^(a+b) = e^a e^b.",
          exponentAnswers.map((value) => `|y|=e^C e^(${value})`)
        ),
        scaffoldStep(
          "Absorb e^C and both possible signs into one constant.",
          `y=C${exponential}`,
          "Let C be any real constant; C = 0 restores the equilibrium solution.",
          exponentAnswers.map((value) => `y=Ce^(${value})`)
        )
      ]
    };
  }

  const threeXPowerScaffold = {
    title: "Use the power rule",
    intro: "Work on the coefficient and the power separately.",
    steps: [
      scaffoldStep("Increase the power of x by one.", "2", "The integrand contains x to the first power."),
      scaffoldStep("Divide the coefficient 3 by the new power.", "3/2", "The new power is 2."),
      scaffoldStep("Write the antiderivative and include C.", "(3/2)x^2+C", "Combine the new coefficient and power.", ["3x^2/2+C"])
    ]
  };

  const uSubstitutionScaffold = {
    title: "Use u-substitution",
    intro: "The derivative of the inner expression already appears beside the cosine.",
    steps: [
      scaffoldStep("Choose the inner expression <math>u</math>.", "x^2", "Choose the expression inside cosine."),
      scaffoldStep("Differentiate it: <math>du = ?</math>", "2x dx", "Differentiate x squared and include dx.", ["2x*dx"]),
      scaffoldStep("Rewrite the integral using <math>u</math>.", "int cos(u) du", "Replace x squared by u and 2x dx by du.", ["integral cos(u) du", "∫ cos(u) du"]),
      scaffoldStep("Integrate with respect to <math>u</math>.", "sin(u)+C", "The antiderivative of cosine is sine."),
      scaffoldStep("Substitute <math>x^2</math> back for <math>u</math>.", "sin(x^2)+C", "Return the answer to the original variable.")
    ]
  };

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
        label: "set up integrals",
        left: step(
          `int ${config.separatedLeft}`,
          integralAnswers(config.separatedLeft, config.separatedLeftAnswers),
          "Put an integral sign around the entire left side. Do not evaluate it yet.",
          "Set up the left integral without evaluating it",
          {
            feedback: `This row only sets up the integral. Enter int ${config.separatedLeft}; evaluate it on the next row.`,
            placeholder: "Write integral"
          }
        ),
        relation: "=",
        right: step(
          `int ${config.separatedRight}`,
          integralAnswers(config.separatedRight, config.separatedRightAnswers),
          "Put an integral sign around the entire right side. Do not evaluate it yet.",
          "Set up the right integral without evaluating it",
          {
            feedback: `This row only sets up the integral. Enter int ${config.separatedRight}; evaluate it on the next row.`,
            placeholder: "Write integral"
          }
        )
      },
      {
        id: "evaluate",
        label: "evaluate",
        left: step(
          config.evaluatedLeft,
          config.evaluatedLeftAnswers,
          config.evaluateLeftHint,
          "Evaluate the left integral",
          {
            feedback: "Evaluate the integral here. Carry uses one arbitrary constant, placed on the right side of this equation.",
            placeholder: "Evaluate integral"
          }
        ),
        relation: "=",
        right: step(
          config.evaluatedRight,
          config.evaluatedRightAnswers,
          config.evaluateRightHint,
          "Evaluate the right integral and include C",
          { placeholder: "Evaluate integral", scaffold: config.evaluateRightScaffold }
        )
      }
    ];

    if (config.family) {
      rows.push({
        id: "family",
        label: "solution family",
        left: config.familyLeft || "y",
        relation: "=",
        right: step(config.family, config.familyAnswers, config.familyHint, "Write the solution family", { scaffold: config.familyScaffold })
      });
    }
    if (config.constant) {
      rows.push({
        id: "constant",
        label: "initial value",
        left: "C",
        relation: "=",
        right: step(config.constant, config.constantAnswers, config.constantHint, "Use the initial condition to find C")
      });
    }
    rows.push({
      id: "solve",
      label: config.solutionLabel || "solution",
      left: config.solutionLeft || "y",
      relation: "=",
      right: step(
        config.solution,
        config.solutionAnswers,
        config.solutionHint,
        config.solutionPrompt || "Write the solution family",
        { scaffold: config.solutionScaffold }
      )
    });
    rows.push({
      id: "verify",
      label: "verify",
      left: step(
        config.verification.left,
        config.verification.leftAnswers,
        config.verification.hint || "Differentiate your result and compare it with the original equation.",
        config.verification.label || "Differentiate and substitute to verify the solution"
      ),
      relation: "=",
      right: config.verification.right
    });
    return {
      id: config.id,
      prompt: config.prompt,
      rows,
      solutionForm: config.solutionForm || "explicit",
      integrationMethod: config.integrationMethod || "basic antiderivative",
      domain: config.domain || "real intervals where every expression is defined",
      equilibriumSolutions: config.equilibriumSolutions || [],
      capabilitiesByStage: {
        separate: ["differential-equations.separable.separate-variables"],
        integrate: ["differential-equations.separable.set-up-integrals"],
        evaluate: ["differential-equations.separable.evaluate-integrals"],
        constant: ["differential-equations.initial-values.apply-condition"],
        family: ["differential-equations.separable.solve-family"],
        solve: ["differential-equations.separable.solve-family"],
        verify: ["differential-equations.solutions.verify"]
      }
    };
  }

  section[existing.id] = {
    ...existing,
    type: "guided-derivation",
    capabilityCatalog: {
      "differential-equations.separable.separate-variables": { title: "Separate variables" },
      "differential-equations.separable.set-up-integrals": { title: "Set up separated integrals" },
      "differential-equations.separable.evaluate-integrals": { title: "Evaluate separated integrals" },
      "differential-equations.separable.solve-family": { title: "Write the solution family" },
      "differential-equations.initial-values.apply-condition": { title: "Apply an initial condition" },
      "differential-equations.solutions.verify": { title: "Verify a differential-equation solution" }
    },
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
        evaluatedLeftAnswers: ["ln |y|"],
        evaluateLeftHint: "The antiderivative of 1/y is ln|y|.",
        evaluatedRight: "(3/2)x^2+C",
        evaluatedRightAnswers: ["3x^2/2+C", "1.5x^2+C"],
        evaluateRightHint: "Integrate 3x with the power rule, then add C.",
        evaluateRightScaffold: threeXPowerScaffold,
        solution: "Ce^((3/2)x^2)",
        solutionAnswers: ["C e^(3x^2/2)", "Ce^(1.5x^2)", "Ce^{3x^2/2}"],
        solutionHint: "Exponentiate, rewrite e^C as a multiplicative constant, and absorb both possible signs into C. This also restores the zero solution.",
        solutionScaffold: exponentialFamilyScaffold("(3/2)x^2", ["3x^2/2", "1.5x^2"]),
        equilibriumSolutions: ["y=0"],
        verification: {
          left: "3xCe^((3/2)x^2)",
          leftAnswers: ["3x C e^(3x^2/2)"],
          right: "3xCe^{\\frac{3}{2}x^2}",
          hint: "Differentiate Ce to the three-halves x-squared using the chain rule."
        }
      }),
      problem({
        id: "sep-u-sub-cosine",
        prompt: "Solve <math>dy/dx = 2x cos(x^2)y</math>.",
        rule: "2x\\cos(x^2)y",
        separatedLeft: "dy/y",
        separatedLeftAnswers: ["(1/y)dy"],
        separatedRight: "2x cos(x^2) dx",
        separatedRightAnswers: ["2x*cos(x^2)dx"],
        evaluatedLeft: "ln|y|",
        evaluateLeftHint: "The antiderivative of 1/y is ln|y|.",
        evaluatedRight: "sin(x^2)+C",
        evaluatedRightAnswers: ["sin(x^2) + C"],
        evaluateRightHint: "Use u = x^2 so du = 2x dx.",
        evaluateRightScaffold: uSubstitutionScaffold,
        solution: "Ce^(sin(x^2))",
        solutionAnswers: ["C e^(sin(x^2))", "Ce^{sin(x^2)}"],
        solutionHint: "Exponentiate and absorb the sign and e^C into one real constant.",
        solutionScaffold: exponentialFamilyScaffold("sin(x^2)"),
        integrationMethod: "u-substitution",
        equilibriumSolutions: ["y=0"],
        verification: {
          left: "2xcos(x^2)Ce^(sin(x^2))",
          leftAnswers: ["2x cos(x^2) C e^(sin(x^2))"],
          right: "2x\\cos(x^2)Ce^{\\sin(x^2)}",
          hint: "Differentiate the outer exponential, then differentiate sin(x^2) with the chain rule."
        }
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
        solutionHint: "Multiply both sides by 2 and rename the arbitrary constant.",
        solutionForm: "implicit",
        domain: "intervals where y is nonzero during separation; the implicit family may meet y = 0 only where the original right side is undefined",
        verification: {
          left: "2yy'",
          leftAnswers: ["2y dy/dx"],
          right: "4x",
          hint: "Differentiate y squared implicitly with respect to x."
        }
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
        solutionHint: "Apply the natural logarithm to isolate y.",
        domain: "intervals where x^2/2 + C is positive",
        verification: {
          left: "x/(x^2/2+C)",
          leftAnswers: ["x/((x^2)/2+C)"],
          right: "\\frac{x}{x^2/2+C}",
          hint: "Differentiate ln of the inside using the chain rule."
        }
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
        solutionHint: "Exponentiate and absorb the multiplicative constant.",
        solutionScaffold: exponentialFamilyScaffold("x^4"),
        equilibriumSolutions: ["y=0"],
        verification: {
          left: "4x^3Ce^(x^4)",
          leftAnswers: ["4x^3 C e^(x^4)"],
          right: "4x^3Ce^{x^4}",
          hint: "Differentiate the exponent x to the fourth with the chain rule."
        }
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
        solutionHint: "Exponentiate and combine the constant with the absolute-value sign on each interval.",
        domain: "intervals that do not cross x = 0",
        equilibriumSolutions: ["y=0"],
        verification: {
          left: "C",
          right: "C",
          hint: "Differentiate Cx, then replace y/x by Cx/x."
        }
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
        solutionHint: "Exponentiate both sides.",
        solutionScaffold: exponentialFamilyScaffold("2x"),
        equilibriumSolutions: ["y=0"],
        verification: {
          left: "2Ce^(2x)",
          leftAnswers: ["2C e^(2x)"],
          right: "2Ce^{2x}",
          hint: "Differentiate the exponential and multiply by the derivative of 2x."
        }
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
        solutionHint: "Exponentiate both sides; the negative exponent describes decay.",
        solutionScaffold: exponentialFamilyScaffold("-3x"),
        equilibriumSolutions: ["y=0"],
        verification: {
          left: "-3Ce^(-3x)",
          leftAnswers: ["-3C e^(-3x)"],
          right: "-3Ce^{-3x}",
          hint: "Differentiate the exponential and multiply by negative 3."
        }
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
        family: "Ce^x",
        familyAnswers: ["C e^x", "Ce^(x)"],
        familyHint: "Exponentiate and absorb e^C and the sign into a multiplicative constant.",
        familyScaffold: exponentialFamilyScaffold("x"),
        constant: "3",
        constantHint: "Substitute x = 0 and y = 3 into y = Ce^x.",
        solution: "3e^x",
        solutionAnswers: ["3e^(x)"],
        solutionHint: "Replace C with the value selected by the initial condition.",
        equilibriumSolutions: ["y=0 for the general equation, excluded by y(0)=3"],
        verification: {
          left: "3e^x",
          right: "3e^x",
          hint: "Differentiate 3e^x and check y(0) = 3."
        }
      })
    ]
  };
})();
