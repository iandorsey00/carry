(function registerForcingAndResonanceDerivations() {
  const engine = window.CarryGuidedDerivation;
  const section = window.CarryPractice?.sections?.["differential-equations"];
  const existing = section?.["differential-equations.forcing-and-resonance"];
  if (!engine || !section || !existing) return;

  function s(answer, math, hint, label, answers = []) {
    return engine.slot(answer, { math, hint, label, answers });
  }

  function problem(config) {
    return {
      id: config.id,
      prompt: config.prompt,
      rows: [
        { id: "start", label: "start", left: config.left, relation: "=", right: config.forcing },
        {
          id: "homogeneous",
          label: "complementary",
          left: "y_h",
          relation: "=",
          right: s(config.homogeneous, config.homogeneousMath, "Solve the associated homogeneous equation first.", "Write the complementary solution", config.homogeneousAnswers)
        },
        {
          id: "trial",
          label: "trial",
          left: "y_p",
          relation: "=",
          right: s(config.trial, config.trialMath, config.trialHint, "Choose a particular-solution trial", config.trialAnswers)
        },
        {
          id: "substitute",
          label: "substitute",
          left: s(config.substitution, config.substitutionMath, "Differentiate the trial, substitute it into the left side, and collect like terms.", "Substitute the trial and simplify", config.substitutionAnswers),
          relation: "=",
          right: config.forcing
        },
        {
          id: "coefficients",
          label: "coefficients",
          left: config.coefficientLabel || "A",
          relation: "=",
          right: s(config.coefficients, config.coefficientsMath, "Match coefficients of the same functions on both sides.", "Solve for the trial coefficients", config.coefficientAnswers)
        },
        {
          id: "particular",
          label: "particular",
          left: "y_p",
          relation: "=",
          right: s(config.particular, config.particularMath, "Put the solved coefficients into the trial function.", "Write the particular solution", config.particularAnswers)
        },
        {
          id: "general",
          label: "general",
          left: "y",
          relation: "=",
          right: s(config.general, config.generalMath, "Add the complementary and particular solutions.", "Write the complete general solution", config.generalAnswers)
        }
      ]
    };
  }

  section[existing.id] = {
    ...existing,
    type: "guided-derivation",
    problems: [
      problem({
        id: "force-constant", prompt: "Solve <math>y''-3y'+2y=4</math>.", left: "y''-3y'+2y", forcing: "4",
        homogeneous: "C1e^x+C2e^(2x)", homogeneousMath: "C_1e^x+C_2e^{2x}",
        trial: "A", trialMath: "A", trialHint: "A constant forcing calls for a constant trial.",
        substitution: "2A", substitutionMath: "2A",
        coefficients: "2", coefficientsMath: "2",
        particular: "2", particularMath: "2",
        general: "C1e^x+C2e^(2x)+2", generalMath: "C_1e^x+C_2e^{2x}+2"
      }),
      problem({
        id: "force-exponential", prompt: "Solve <math>y''-y=e^{2x}</math>.", left: "y''-y", forcing: "e^{2x}",
        homogeneous: "C1e^x+C2e^(-x)", homogeneousMath: "C_1e^x+C_2e^{-x}",
        trial: "Ae^(2x)", trialMath: "Ae^{2x}", trialHint: "Use the same exponential shape because 2 is not a characteristic root.",
        substitution: "3Ae^(2x)", substitutionMath: "3Ae^{2x}",
        coefficients: "1/3", coefficientsMath: "\frac{1}{3}",
        particular: "(1/3)e^(2x)", particularMath: "\frac{1}{3}e^{2x}", particularAnswers: ["e^(2x)/3"],
        general: "C1e^x+C2e^(-x)+(1/3)e^(2x)", generalMath: "C_1e^x+C_2e^{-x}+\frac{1}{3}e^{2x}"
      }),
      problem({
        id: "force-polynomial", prompt: "Solve <math>y''+4y=8x</math>.", left: "y''+4y", forcing: "8x",
        homogeneous: "C1cos(2x)+C2sin(2x)", homogeneousMath: "C_1\cos(2x)+C_2\sin(2x)",
        trial: "Ax+B", trialMath: "Ax+B", trialHint: "A degree-one polynomial requires a complete degree-one polynomial trial.",
        substitution: "4Ax+4B", substitutionMath: "4Ax+4B",
        coefficientLabel: "(A,B)", coefficients: "2,0", coefficientsMath: "(2,0)", coefficientAnswers: ["A=2,B=0", "(2,0)"],
        particular: "2x", particularMath: "2x",
        general: "C1cos(2x)+C2sin(2x)+2x", generalMath: "C_1\cos(2x)+C_2\sin(2x)+2x"
      }),
      problem({
        id: "force-trigonometric", prompt: "Solve <math>y''+y=\cos(2x)</math>.", left: "y''+y", forcing: "\cos(2x)",
        homogeneous: "C1cos(x)+C2sin(x)", homogeneousMath: "C_1\cos x+C_2\sin x",
        trial: "Acos(2x)+Bsin(2x)", trialMath: "A\cos(2x)+B\sin(2x)", trialHint: "Include both sine and cosine at the forcing frequency.",
        substitution: "-3Acos(2x)-3Bsin(2x)", substitutionMath: "-3A\cos(2x)-3B\sin(2x)",
        coefficientLabel: "(A,B)", coefficients: "-1/3,0", coefficientsMath: "(-\frac{1}{3},0)", coefficientAnswers: ["A=-1/3,B=0", "(-1/3,0)"],
        particular: "-(1/3)cos(2x)", particularMath: "-\frac{1}{3}\cos(2x)", particularAnswers: ["-cos(2x)/3"],
        general: "C1cos(x)+C2sin(x)-(1/3)cos(2x)", generalMath: "C_1\cos x+C_2\sin x-\frac{1}{3}\cos(2x)"
      }),
      problem({
        id: "force-repeated-exponential", prompt: "Solve <math>y''-2y'+y=e^x</math>.", left: "y''-2y'+y", forcing: "e^x",
        homogeneous: "(C1+C2x)e^x", homogeneousMath: "(C_1+C_2x)e^x",
        trial: "Ax^2e^x", trialMath: "Ax^2e^x", trialHint: "The forcing exponent is a repeated characteristic root, so multiply the usual trial by x squared.",
        substitution: "2Ae^x", substitutionMath: "2Ae^x",
        coefficients: "1/2", coefficientsMath: "\frac{1}{2}",
        particular: "(1/2)x^2e^x", particularMath: "\frac{1}{2}x^2e^x", particularAnswers: ["x^2e^x/2"],
        general: "(C1+C2x)e^x+(1/2)x^2e^x", generalMath: "(C_1+C_2x)e^x+\frac{1}{2}x^2e^x"
      }),
      problem({
        id: "force-sine-resonance", prompt: "Solve <math>y''+y=\sin x</math>.", left: "y''+y", forcing: "\sin x",
        homogeneous: "C1cos(x)+C2sin(x)", homogeneousMath: "C_1\cos x+C_2\sin x",
        trial: "Axcos(x)", trialMath: "Ax\cos x", trialHint: "Sine and cosine already solve the homogeneous equation, so multiply the matching trial by x.",
        substitution: "-2Asin(x)", substitutionMath: "-2A\sin x",
        coefficients: "-1/2", coefficientsMath: "-\frac{1}{2}",
        particular: "-(1/2)xcos(x)", particularMath: "-\frac{1}{2}x\cos x", particularAnswers: ["-xcos(x)/2"],
        general: "C1cos(x)+C2sin(x)-(1/2)xcos(x)", generalMath: "C_1\cos x+C_2\sin x-\frac{1}{2}x\cos x"
      }),
      problem({
        id: "force-damped-repeated", prompt: "Solve <math>y''+2y'+y=e^{-x}</math>.", left: "y''+2y'+y", forcing: "e^{-x}",
        homogeneous: "(C1+C2x)e^(-x)", homogeneousMath: "(C_1+C_2x)e^{-x}",
        trial: "Ax^2e^(-x)", trialMath: "Ax^2e^{-x}", trialHint: "Negative one is a repeated characteristic root, so multiply by x squared.",
        substitution: "2Ae^(-x)", substitutionMath: "2Ae^{-x}",
        coefficients: "1/2", coefficientsMath: "\frac{1}{2}",
        particular: "(1/2)x^2e^(-x)", particularMath: "\frac{1}{2}x^2e^{-x}", particularAnswers: ["x^2e^(-x)/2"],
        general: "(C1+C2x)e^(-x)+(1/2)x^2e^(-x)", generalMath: "(C_1+C_2x)e^{-x}+\frac{1}{2}x^2e^{-x}"
      }),
      problem({
        id: "force-cosine-resonance", prompt: "Solve <math>y''+4y=\cos(2x)</math>.", left: "y''+4y", forcing: "\cos(2x)",
        homogeneous: "C1cos(2x)+C2sin(2x)", homogeneousMath: "C_1\cos(2x)+C_2\sin(2x)",
        trial: "Axsin(2x)", trialMath: "Ax\sin(2x)", trialHint: "The forcing frequency is natural, so multiply the usual trigonometric trial by x.",
        substitution: "4Acos(2x)", substitutionMath: "4A\cos(2x)",
        coefficients: "1/4", coefficientsMath: "\frac{1}{4}",
        particular: "(1/4)xsin(2x)", particularMath: "\frac{1}{4}x\sin(2x)", particularAnswers: ["xsin(2x)/4"],
        general: "C1cos(2x)+C2sin(2x)+(1/4)xsin(2x)", generalMath: "C_1\cos(2x)+C_2\sin(2x)+\frac{1}{4}x\sin(2x)"
      })
    ]
  };
})();
