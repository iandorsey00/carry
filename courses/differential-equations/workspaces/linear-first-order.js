(function registerLinearFirstOrderDerivations() {
  const engine = window.CarryGuidedDerivation;
  const section = window.CarryPractice?.sections?.["differential-equations"];
  const existing = section?.["differential-equations.linear-first-order"];
  if (!engine || !section || !existing) return;

  function s(answer, math, hint, label, answers = []) {
    return engine.slot(answer, { math, hint, label, answers });
  }

  function problem(config) {
    const rows = [
      { id: "start", label: "start", left: config.startLeft, relation: "=", right: config.startRight }
    ];

    if (config.standardLeft) {
      rows.push({
        id: "standard",
        label: "standard form",
        left: s(config.standardLeft, config.standardLeftMath, config.standardHint, "Put the left side in standard form", config.standardLeftAnswers),
        relation: "=",
        right: s(config.standardRight, config.standardRightMath, config.standardHint, "Put the right side in standard form", config.standardRightAnswers)
      });
    }

    rows.push(
      {
        id: "factor",
        label: "factor",
        left: "\\mu(x)",
        relation: "=",
        right: s(config.mu, config.muMath, config.muHint || "Integrate p(x), then exponentiate.", "Find the integrating factor", config.muAnswers)
      },
      {
        id: "multiply",
        label: "multiply",
        left: s(config.expandedLeft, config.expandedLeftMath, "Multiply every term on the left by the integrating factor.", "Multiply the left side by the integrating factor", config.expandedLeftAnswers),
        relation: "=",
        right: s(config.expandedRight, config.expandedRightMath, "Multiply the right side by the same integrating factor.", "Multiply the right side by the integrating factor", config.expandedRightAnswers)
      },
      {
        id: "product",
        label: "product rule",
        left: s(config.product, config.productMath, "Recognize the left side as the derivative of mu times y.", "Rewrite the left side as one derivative", config.productAnswers),
        relation: "=",
        right: config.expandedRightMath
      },
      {
        id: "integrate",
        label: "integrate",
        left: s(config.integratedLeft, config.integratedLeftMath, "Integrate the product derivative.", "Integrate the left side", config.integratedLeftAnswers),
        relation: "=",
        right: s(config.integratedRight, config.integratedRightMath, config.integratedRightHint, "Integrate the right side and include C", config.integratedRightAnswers)
      }
    );

    if (config.constant) {
      rows.push({
        id: "constant",
        label: "initial value",
        left: "C",
        relation: "=",
        right: s(config.constant, config.constant, config.constantHint, "Use the initial condition to find C", config.constantAnswers)
      });
    }

    rows.push({
      id: "solve",
      label: "solution",
      left: "y",
      relation: "=",
      right: s(config.solution, config.solutionMath, "Divide by the integrating factor and simplify.", "Isolate y", config.solutionAnswers)
    });

    return { id: config.id, prompt: config.prompt, rows };
  }

  section[existing.id] = {
    ...existing,
    type: "guided-derivation",
    problems: [
      problem({
        id: "linear-two-six", prompt: "Solve <math>y'+2y=6</math>.", startLeft: "y'+2y", startRight: "6",
        mu: "e^(2x)", muMath: "e^{2x}", muAnswers: ["e^2x", "exp(2x)"],
        expandedLeft: "e^(2x)y'+2e^(2x)y", expandedLeftMath: "e^{2x}y'+2e^{2x}y",
        expandedRight: "6e^(2x)", expandedRightMath: "6e^{2x}",
        product: "(e^(2x)y)'", productMath: "(e^{2x}y)'",
        integratedLeft: "e^(2x)y", integratedLeftMath: "e^{2x}y",
        integratedRight: "3e^(2x)+C", integratedRightMath: "3e^{2x}+C", integratedRightHint: "The antiderivative of 6e to the 2x is 3e to the 2x.",
        solution: "3+Ce^(-2x)", solutionMath: "3+Ce^{-2x}", solutionAnswers: ["3+C e^(-2x)"]
      }),
      problem({
        id: "linear-minus-one-four", prompt: "Solve <math>y'-y=4</math>.", startLeft: "y'-y", startRight: "4",
        mu: "e^(-x)", muMath: "e^{-x}", muAnswers: ["exp(-x)"],
        expandedLeft: "e^(-x)y'-e^(-x)y", expandedLeftMath: "e^{-x}y'-e^{-x}y",
        expandedRight: "4e^(-x)", expandedRightMath: "4e^{-x}",
        product: "(e^(-x)y)'", productMath: "(e^{-x}y)'",
        integratedLeft: "e^(-x)y", integratedLeftMath: "e^{-x}y",
        integratedRight: "-4e^(-x)+C", integratedRightMath: "-4e^{-x}+C", integratedRightHint: "Integrating e to the negative x introduces a negative sign.",
        solution: "-4+Ce^x", solutionMath: "-4+Ce^x", solutionAnswers: ["Ce^x-4"]
      }),
      problem({
        id: "linear-homogeneous-three", prompt: "Solve <math>y'+3y=0</math>.", startLeft: "y'+3y", startRight: "0",
        mu: "e^(3x)", muMath: "e^{3x}",
        expandedLeft: "e^(3x)y'+3e^(3x)y", expandedLeftMath: "e^{3x}y'+3e^{3x}y",
        expandedRight: "0", expandedRightMath: "0",
        product: "(e^(3x)y)'", productMath: "(e^{3x}y)'",
        integratedLeft: "e^(3x)y", integratedLeftMath: "e^{3x}y",
        integratedRight: "C", integratedRightMath: "C", integratedRightHint: "The integral of zero is an arbitrary constant.",
        solution: "Ce^(-3x)", solutionMath: "Ce^{-3x}", solutionAnswers: ["C e^(-3x)"]
      }),
      problem({
        id: "linear-exponential-input", prompt: "Solve <math>y'+y=e^x</math>.", startLeft: "y'+y", startRight: "e^x",
        mu: "e^x", muMath: "e^x",
        expandedLeft: "e^x y'+e^x y", expandedLeftMath: "e^x y'+e^x y",
        expandedRight: "e^(2x)", expandedRightMath: "e^{2x}",
        product: "(e^x y)'", productMath: "(e^x y)'",
        integratedLeft: "e^x y", integratedLeftMath: "e^x y",
        integratedRight: "(1/2)e^(2x)+C", integratedRightMath: "\\frac{1}{2}e^{2x}+C", integratedRightHint: "Integrate e to the 2x and divide by 2.",
        solution: "(1/2)e^x+Ce^(-x)", solutionMath: "\\frac{1}{2}e^x+Ce^{-x}", solutionAnswers: ["e^x/2+C e^(-x)"]
      }),
      problem({
        id: "linear-resonant-input", prompt: "Solve <math>y'+2y=e^{-2x}</math>.", startLeft: "y'+2y", startRight: "e^{-2x}",
        mu: "e^(2x)", muMath: "e^{2x}",
        expandedLeft: "e^(2x)y'+2e^(2x)y", expandedLeftMath: "e^{2x}y'+2e^{2x}y",
        expandedRight: "1", expandedRightMath: "1", expandedRightAnswers: ["e^(2x)e^(-2x)"],
        product: "(e^(2x)y)'", productMath: "(e^{2x}y)'",
        integratedLeft: "e^(2x)y", integratedLeftMath: "e^{2x}y",
        integratedRight: "x+C", integratedRightMath: "x+C", integratedRightHint: "The right side is 1 after multiplication.",
        solution: "(x+C)e^(-2x)", solutionMath: "(x+C)e^{-2x}", solutionAnswers: ["(x+C)/e^(2x)"]
      }),
      problem({
        id: "linear-standard-form", prompt: "Solve <math>xy'+y=x^3</math> for <math>x>0</math>.", startLeft: "xy'+y", startRight: "x^3",
        standardLeft: "y'+y/x", standardLeftMath: "y'+\\frac{1}{x}y", standardLeftAnswers: ["y'+(1/x)y"],
        standardRight: "x^2", standardRightMath: "x^2", standardHint: "Divide every term by x.",
        mu: "x", muMath: "x", muHint: "e to the integral of 1/x is x when x is positive.",
        expandedLeft: "xy'+y", expandedLeftMath: "xy'+y",
        expandedRight: "x^3", expandedRightMath: "x^3",
        product: "(xy)'", productMath: "(xy)'",
        integratedLeft: "xy", integratedLeftMath: "xy",
        integratedRight: "x^4/4+C", integratedRightMath: "\\frac{x^4}{4}+C", integratedRightHint: "Apply the power rule to x cubed.",
        solution: "x^3/4+C/x", solutionMath: "\\frac{x^3}{4}+\\frac{C}{x}", solutionAnswers: ["(1/4)x^3+C/x"]
      }),
      problem({
        id: "linear-variable-coefficient", prompt: "Solve <math>y'-(2/x)y=x^2</math> for <math>x>0</math>.", startLeft: "y'-(2/x)y", startRight: "x^2",
        mu: "x^(-2)", muMath: "x^{-2}", muHint: "e to the integral of negative 2/x is x to the negative 2.",
        expandedLeft: "x^(-2)y'-2x^(-3)y", expandedLeftMath: "x^{-2}y'-2x^{-3}y",
        expandedRight: "1", expandedRightMath: "1", expandedRightAnswers: ["x^(-2)x^2"],
        product: "(x^(-2)y)'", productMath: "(x^{-2}y)'",
        integratedLeft: "x^(-2)y", integratedLeftMath: "x^{-2}y",
        integratedRight: "x+C", integratedRightMath: "x+C", integratedRightHint: "The integral of 1 is x.",
        solution: "x^3+Cx^2", solutionMath: "x^3+Cx^2", solutionAnswers: ["x^3+C x^2"]
      }),
      problem({
        id: "linear-initial-value", prompt: "Solve <math>y'+y=0</math> with <math>y(0)=5</math>.", startLeft: "y'+y", startRight: "0",
        mu: "e^x", muMath: "e^x",
        expandedLeft: "e^x y'+e^x y", expandedLeftMath: "e^x y'+e^x y",
        expandedRight: "0", expandedRightMath: "0",
        product: "(e^x y)'", productMath: "(e^x y)'",
        integratedLeft: "e^x y", integratedLeftMath: "e^x y",
        integratedRight: "C", integratedRightMath: "C", integratedRightHint: "The integral of zero is C.",
        constant: "5", constantHint: "At x = 0, e to the x is 1, so y(0) equals C.",
        solution: "5e^(-x)", solutionMath: "5e^{-x}", solutionAnswers: ["5/e^x"]
      })
    ]
  };
})();

