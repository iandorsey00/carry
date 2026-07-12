(function registerHomogeneousSecondOrderDerivations() {
  const engine = window.CarryGuidedDerivation;
  const section = window.CarryPractice?.sections?.["differential-equations"];
  const existing = section?.["differential-equations.homogeneous-second-order"];
  if (!engine || !section || !existing) return;

  function s(answer, math, hint, label, answers = []) {
    return engine.slot(answer, { math, hint, label, answers });
  }

  function problem(config) {
    const rows = [
      { id: "start", label: "start", left: config.equation, relation: "=", right: "0" },
      {
        id: "characteristic",
        label: "characteristic",
        left: s(config.characteristic, config.characteristicMath, "Replace y, y prime, and y double prime by 1, r, and r squared.", "Write the characteristic polynomial", config.characteristicAnswers),
        relation: "=",
        right: "0"
      },
      {
        id: "roots",
        label: "roots",
        left: "r",
        relation: "=",
        right: s(config.roots, config.rootsMath, config.rootsHint || "Solve the characteristic equation.", "Find every characteristic root", config.rootsAnswers)
      },
      {
        id: "basis",
        label: "basis",
        left: s(config.basisOne, config.basisOneMath, config.basisHint, "Write the first independent solution", config.basisOneAnswers),
        relation: ",",
        right: s(config.basisTwo, config.basisTwoMath, config.basisHint, "Write the second independent solution", config.basisTwoAnswers)
      },
      {
        id: "general",
        label: "general",
        left: "y",
        relation: "=",
        right: s(config.general, config.generalMath, "Combine both independent solutions with arbitrary constants.", "Write the general solution", config.generalAnswers)
      }
    ];

    for (const constant of config.constants || []) {
      rows.push({
        id: constant.id,
        label: "initial value",
        left: constant.name,
        relation: "=",
        right: s(constant.answer, constant.math || constant.answer, constant.hint, `Find ${constant.name}`, constant.answers)
      });
    }

    if (config.final) {
      rows.push({
        id: "final",
        label: "solution",
        left: "y",
        relation: "=",
        right: s(config.final, config.finalMath, "Substitute the constants into the general solution.", "Write the initial-value solution", config.finalAnswers)
      });
    }

    return { id: config.id, prompt: config.prompt, rows };
  }

  section[existing.id] = {
    ...existing,
    type: "guided-derivation",
    problems: [
      problem({
        id: "hom-real-distinct", prompt: "Solve <math>y''-5y'+6y=0</math>.", equation: "y''-5y'+6y",
        characteristic: "r^2-5r+6", characteristicMath: "r^2-5r+6",
        roots: "2,3", rootsMath: "2,3", rootsAnswers: ["3,2", "2 and 3"],
        basisOne: "e^(2x)", basisOneMath: "e^{2x}", basisTwo: "e^(3x)", basisTwoMath: "e^{3x}", basisHint: "A real root r gives e to the rx.",
        general: "C1e^(2x)+C2e^(3x)", generalMath: "C_1e^{2x}+C_2e^{3x}", generalAnswers: ["C2e^(3x)+C1e^(2x)"]
      }),
      problem({
        id: "hom-pure-oscillation", prompt: "Solve <math>y''+4y=0</math>.", equation: "y''+4y",
        characteristic: "r^2+4", characteristicMath: "r^2+4",
        roots: "2i,-2i", rootsMath: "\\pm 2i", rootsAnswers: ["-2i,2i", "+-2i", "±2i"],
        basisOne: "cos(2x)", basisOneMath: "\\cos(2x)", basisTwo: "sin(2x)", basisTwoMath: "\\sin(2x)", basisHint: "Roots plus or minus beta i give cosine beta x and sine beta x.",
        general: "C1cos(2x)+C2sin(2x)", generalMath: "C_1\\cos(2x)+C_2\\sin(2x)"
      }),
      problem({
        id: "hom-symmetric-real", prompt: "Solve <math>y''-4y=0</math>.", equation: "y''-4y",
        characteristic: "r^2-4", characteristicMath: "r^2-4",
        roots: "2,-2", rootsMath: "2,-2", rootsAnswers: ["-2,2", "+-2"],
        basisOne: "e^(2x)", basisOneMath: "e^{2x}", basisTwo: "e^(-2x)", basisTwoMath: "e^{-2x}", basisHint: "Use one exponential for each real root.",
        general: "C1e^(2x)+C2e^(-2x)", generalMath: "C_1e^{2x}+C_2e^{-2x}"
      }),
      problem({
        id: "hom-repeated-one", prompt: "Solve <math>y''-2y'+y=0</math>.", equation: "y''-2y'+y",
        characteristic: "r^2-2r+1", characteristicMath: "r^2-2r+1", characteristicAnswers: ["(r-1)^2"],
        roots: "1 repeated", rootsMath: "1\\text{ repeated}", rootsAnswers: ["1,1", "r=1 double"], rootsHint: "The polynomial is a perfect square.",
        basisOne: "e^x", basisOneMath: "e^x", basisTwo: "xe^x", basisTwoMath: "xe^x", basisHint: "For a repeated root, multiply the second exponential solution by x.",
        general: "(C1+C2x)e^x", generalMath: "(C_1+C_2x)e^x", generalAnswers: ["C1e^x+C2xe^x"]
      }),
      problem({
        id: "hom-damped-oscillation", prompt: "Solve <math>y''+2y'+5y=0</math>.", equation: "y''+2y'+5y",
        characteristic: "r^2+2r+5", characteristicMath: "r^2+2r+5",
        roots: "-1+2i,-1-2i", rootsMath: "-1\\pm 2i", rootsAnswers: ["-1-2i,-1+2i", "-1+-2i"],
        basisOne: "e^(-x)cos(2x)", basisOneMath: "e^{-x}\\cos(2x)", basisTwo: "e^(-x)sin(2x)", basisTwoMath: "e^{-x}\\sin(2x)", basisHint: "Use e to the alpha x times cosine and sine of beta x.",
        general: "e^(-x)(C1cos(2x)+C2sin(2x))", generalMath: "e^{-x}(C_1\\cos(2x)+C_2\\sin(2x))"
      }),
      problem({
        id: "hom-repeated-negative", prompt: "Solve <math>y''+6y'+9y=0</math>.", equation: "y''+6y'+9y",
        characteristic: "r^2+6r+9", characteristicMath: "r^2+6r+9", characteristicAnswers: ["(r+3)^2"],
        roots: "-3 repeated", rootsMath: "-3\\text{ repeated}", rootsAnswers: ["-3,-3"],
        basisOne: "e^(-3x)", basisOneMath: "e^{-3x}", basisTwo: "xe^(-3x)", basisTwoMath: "xe^{-3x}", basisHint: "Multiply the second solution by x for a repeated root.",
        general: "(C1+C2x)e^(-3x)", generalMath: "(C_1+C_2x)e^{-3x}"
      }),
      problem({
        id: "hom-zero-root", prompt: "Solve <math>y''-y'=0</math>.", equation: "y''-y'",
        characteristic: "r^2-r", characteristicMath: "r^2-r", characteristicAnswers: ["r(r-1)"],
        roots: "0,1", rootsMath: "0,1", rootsAnswers: ["1,0"],
        basisOne: "1", basisOneMath: "1", basisOneAnswers: ["e^0"], basisTwo: "e^x", basisTwoMath: "e^x", basisHint: "The root zero gives the constant solution 1.",
        general: "C1+C2e^x", generalMath: "C_1+C_2e^x"
      }),
      problem({
        id: "hom-initial-value", prompt: "Solve <math>y''+y=0</math> with <math>y(0)=2</math> and <math>y'(0)=0</math>.", equation: "y''+y",
        characteristic: "r^2+1", characteristicMath: "r^2+1",
        roots: "i,-i", rootsMath: "\\pm i", rootsAnswers: ["-i,i", "+-i", "±i"],
        basisOne: "cos(x)", basisOneMath: "\\cos x", basisTwo: "sin(x)", basisTwoMath: "\\sin x", basisHint: "Roots plus or minus i give cosine x and sine x.",
        general: "C1cos(x)+C2sin(x)", generalMath: "C_1\\cos x+C_2\\sin x",
        constants: [
          { id: "constant-one", name: "C_1", answer: "2", hint: "At x = 0, cosine is 1 and sine is 0." },
          { id: "constant-two", name: "C_2", answer: "0", hint: "Differentiate the general solution and use y prime at 0 equals 0." }
        ],
        final: "2cos(x)", finalMath: "2\\cos x", finalAnswers: ["2cos x"]
      })
    ]
  };
})();
