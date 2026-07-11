(function () {
  window.CarryDifferentialEquations.register({
    id: "differential-equations.forcing-and-resonance",
    title: "Forcing, damping, and resonance",
    figure: "diff-eq-forcing",
    intro: ["The model <math>my''+cy'+ky=F(t)</math> separates inertia, damping, restoring force, and external forcing.", "The homogeneous solution describes transients; a particular solution describes the driven response.", "Resonance occurs when forcing strongly matches a system's natural behavior."],
    overview: {
      workedRows: [
        { math: "my''+cy'+ky=F(t)", note: "Identify the physical role of each term." },
        { math: "y=y_h+y_p", note: "Combine transient and forced responses." },
        { math: "F(t)=F_0\cos(\omega t)", note: "Compare forcing frequency with the natural frequency." }
      ],
      notice: ["Damping removes energy.", "Forcing supplies energy.", "Resonance is controlled by both frequency matching and damping."],
      applications: ["Suspension systems", "Buildings in earthquakes", "Driven electrical circuits"]
    },
    problems: [
      { prompt: "In <math>my''+cy'+ky=F(t)</math>, which term represents damping?", answer: "cy'", hint: "Damping opposes velocity.", label: "damping term", choices: [{ value: "my''", label: "<math>my''</math>" }, { value: "cy'", label: "<math>cy'</math>" }, { value: "ky", label: "<math>ky</math>" }, { value: "F(t)", label: "<math>F(t)</math>" }] },
      { prompt: "Which term is the external input?", answer: "F(t)", hint: "It appears on the right side.", label: "forcing term", choices: [{ value: "my''", label: "<math>my''</math>" }, { value: "cy'", label: "<math>cy'</math>" }, { value: "ky", label: "<math>ky</math>" }, { value: "F(t)", label: "<math>F(t)</math>" }] },
      { prompt: "Does positive damping add or remove mechanical energy?", answer: "remove", hint: "Friction-like effects reduce motion.", label: "damping energy", choices: [{ value: "add", label: "add energy" }, { value: "remove", label: "remove energy" }] },
      { prompt: "The complete forced solution is usually homogeneous plus what?", answer: "particular", hint: "One part solves the nonzero right side.", label: "forced solution", choices: [{ value: "particular", label: "a particular solution" }, { value: "constant", label: "a constant only" }] },
      { prompt: "Resonance is most closely associated with what kind of frequency relationship?", answer: "matching", hint: "The forcing aligns with natural oscillation.", label: "resonance", choices: [{ value: "matching", label: "forcing and natural frequencies are close" }, { value: "unrelated", label: "the frequencies are unrelated" }] },
      { prompt: "What value of c represents an undamped model?", answer: "0", hint: "Remove the velocity term.", label: "undamped coefficient", choices: [{ value: "0", label: "0" }, { value: "1", label: "1" }, { value: "m", label: "m" }, { value: "k", label: "k" }] },
      { prompt: "For <math>my''+ky=0</math>, which expression is the natural angular frequency?", answer: "sqrt(k/m)", hint: "Divide by m and compare with y double prime plus omega squared y.", label: "natural frequency", choices: [{ value: "sqrt(k/m)", label: "<math>sqrt{k/m}</math>" }, { value: "k/m", label: "<math>k/m</math>" }, { value: "sqrt(m/k)", label: "<math>sqrt{m/k}</math>" }, { value: "mk", label: "<math>mk</math>" }] },
      { prompt: "Does stronger damping usually make the resonant peak smaller?", answer: "yes", hint: "Damping dissipates supplied energy.", label: "damped resonance", choices: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }] }
    ]
  });
})();
