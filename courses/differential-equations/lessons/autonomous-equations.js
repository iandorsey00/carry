(function () {
  window.CarryDifferentialEquations.register({
    id: "differential-equations.autonomous",
    title: "Autonomous equations",
    figure: "diff-eq-autonomous",
    intro: ["An autonomous equation has the form <math>y'=f(y)</math>.", "Equilibria occur where <math>f(y)=0</math>.", "A phase line uses the sign of f to show whether nearby solutions rise or fall."],
    overview: {
      workedRows: [
        { math: "y'=y(1-y)", note: "Set the rate equal to zero." },
        { math: "y(1-y)=0", note: "Factorization exposes the equilibria." },
        { math: "y=0\text{ or }y=1", note: "Check signs between these values for stability." }
      ],
      notice: ["Equilibria are constant solutions.", "Arrows point upward where f(y) is positive.", "Stable equilibria attract nearby solutions."],
      applications: ["Logistic growth", "Chemical populations", "Long-term behavior without solving explicitly"]
    },
    problems: [
      { prompt: "For <math>y'=y(2-y)</math>, which values are equilibria?", answer: "0 and 2", hint: "Set the right side equal to zero.", label: "equilibria", choices: [{ value: "0 and 2", label: "0 and 2" }, { value: "-2 and 0", label: "-2 and 0" }, { value: "1 and 2", label: "1 and 2" }, { value: "2 only", label: "2 only" }] },
      { prompt: "If <math>f(y)>0</math>, do solutions rise or fall as time increases?", answer: "rise", hint: "A positive derivative means increasing.", label: "phase direction", choices: [{ value: "rise", label: "rise" }, { value: "fall", label: "fall" }] },
      { prompt: "What kind of solution is an equilibrium?", answer: "constant", hint: "Its derivative stays zero.", label: "equilibrium solution", choices: [{ value: "constant", label: "constant" }, { value: "periodic", label: "periodic" }] },
      { prompt: "If arrows on both sides point toward an equilibrium, is it stable or unstable?", answer: "stable", hint: "Nearby solutions return toward it.", label: "stability", choices: [{ value: "stable", label: "stable" }, { value: "unstable", label: "unstable" }] },
      { prompt: "Does an autonomous slope field change when shifted horizontally?", answer: "no", hint: "Its rule contains y but not the independent variable.", label: "autonomous field", choices: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] },
      { prompt: "For <math>y'=y(2-y)</math>, is the derivative positive between 0 and 2?", answer: "yes", hint: "Both factors are positive in that interval.", label: "sign analysis", choices: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] },
      { prompt: "For <math>y'=y(2-y)</math>, do solutions just above 2 rise or fall?", answer: "fall", hint: "Above 2, the factor 2 minus y is negative.", label: "phase direction", choices: [{ value: "rise", label: "rise" }, { value: "fall", label: "fall" }] },
      { prompt: "For <math>y'=y(2-y)</math>, is the equilibrium <math>y=2</math> stable?", answer: "yes", hint: "Arrows below point up and arrows above point down.", label: "stability", choices: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] }
    ]
  });
})();
