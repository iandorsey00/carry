(function () {
  window.CarryDifferentialEquations.register({
    id: "differential-equations.systems-phase-plane",
    title: "Systems and phase planes",
    figure: "diff-eq-phase-plane",
    intro: ["A system tracks several changing quantities at once.", "For <math>\\mathbf{x}'=A\\mathbf{x}</math>, eigenvalues and eigenvectors organize the motion.", "A phase portrait shows trajectories in state space rather than against time."],
    overview: {
      workedRows: [
        { math: "\\mathbf{x}'=A\\mathbf{x}", note: "Write the coupled equations as one vector equation." },
        { math: "A\\mathbf{v}=\\lambda\\mathbf{v}", note: "Eigenvectors give invariant directions." },
        { math: "\\mathbf{x}(t)=e^{\\lambda t}\\mathbf{v}", note: "The eigenvalue controls growth, decay, or rotation." }
      ],
      notice: ["A point in the phase plane represents the whole state.", "Negative real eigenvalues produce decay.", "Complex eigenvalues often produce rotation or spiraling."],
      applications: ["Predator-prey models", "Coupled tanks", "Competing populations"]
    },
    problems: [
      { prompt: "What does one point in a two-dimensional phase plane represent?", answer: "state", hint: "It records both dependent variables at one time.", label: "phase point", choices: [{ value: "state", label: "the system's current state" }, { value: "time", label: "time alone" }] },
      { prompt: "For <math>\\mathbf{x}'=A\\mathbf{x}</math>, what matrix determines the linear dynamics?", answer: "A", hint: "It multiplies the state vector.", label: "system matrix", choices: [{ value: "A", label: "A" }, { value: "x", label: "x" }] },
      { prompt: "A negative real eigenvalue produces growth or decay along its eigenvector?", answer: "decay", hint: "e to a negative multiple of t approaches zero.", label: "eigenvalue behavior", choices: [{ value: "growth", label: "growth" }, { value: "decay", label: "decay" }] },
      { prompt: "Complex eigenvalues commonly produce which geometric behavior?", answer: "rotation", hint: "Sines and cosines enter the solution.", label: "complex phase behavior", choices: [{ value: "rotation", label: "rotation or spiraling" }, { value: "straight translation", label: "straight translation only" }] },
      { prompt: "An equilibrium of a system satisfies <math>\\mathbf{x}'</math> equal to what?", answer: "0", hint: "Nothing changes at equilibrium.", label: "system equilibrium", choices: [{ value: "0", label: "0" }, { value: "1", label: "1" }, { value: "A", label: "A" }, { value: "t", label: "t" }] },
      { prompt: "Real eigenvalues with opposite signs produce which equilibrium type?", answer: "saddle", hint: "One eigendirection grows while the other decays.", label: "phase type", choices: [{ value: "saddle", label: "saddle" }, { value: "center", label: "center" }, { value: "stable node", label: "stable node" }, { value: "spiral", label: "spiral" }] },
      { prompt: "Do solution trajectories of a well-behaved autonomous system cross at ordinary points?", answer: "no", hint: "Crossing would assign two future directions to one state.", label: "trajectory uniqueness", choices: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] },
      { prompt: "Two negative real eigenvalues usually produce growth or decay toward the equilibrium?", answer: "decay", hint: "Both exponential factors approach zero.", label: "stable node", choices: [{ value: "growth", label: "growth" }, { value: "decay", label: "decay" }] }
    ]
  });
})();
