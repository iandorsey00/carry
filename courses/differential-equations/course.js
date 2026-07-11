// Differential Equations is Carry's first sequenced course.
// The catalog controls navigation order; each lesson file owns its teaching and practice data.
(function registerDifferentialEquationsCourse() {
  window.CarryCourses = window.CarryCourses || {};
  window.CarryCourses["differential-equations"] = {
    id: "differential-equations",
    title: "Differential Equations",
    level: "University course",
    description: "A sequenced first course in ordinary differential equations.",
    sections: [
      {
        title: "Foundations",
        lessons: [
          ["differential-equations.classification", "Equations and classification"],
          ["differential-equations.slope-fields", "Slope fields"],
          ["differential-equations.euler-method", "Euler's method"]
        ]
      },
      {
        title: "First-Order Equations",
        lessons: [
          ["differential-equations.separable", "Separable equations"],
          ["differential-equations.linear-first-order", "Linear first-order equations"],
          ["differential-equations.autonomous", "Autonomous equations"],
          ["differential-equations.first-order-models", "First-order models"]
        ]
      },
      {
        title: "Second-Order Equations",
        lessons: [
          ["differential-equations.second-order-models", "Second-order models"],
          ["differential-equations.homogeneous-second-order", "Homogeneous linear equations"],
          ["differential-equations.forcing-and-resonance", "Forcing, damping, and resonance"]
        ]
      },
      {
        title: "Systems and Transform Methods",
        lessons: [
          ["differential-equations.systems-phase-plane", "Systems and phase planes"],
          ["differential-equations.laplace-transforms", "Laplace transforms"],
          ["differential-equations.series-solutions", "Series solutions"]
        ]
      }
    ].map((section) => ({
      ...section,
      lessons: section.lessons.map(([id, title]) => ({ id, title }))
    }))
  };

  window.CarryDifferentialEquations = {
    register(definition) {
      window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
      const sections = window.CarryPractice.sections;
      sections["differential-equations"] = sections["differential-equations"] || {};
      sections["differential-equations"][definition.id] = {
        topic: "Differential Equations",
        type: "concept",
        course: "differential-equations",
        ...definition
      };
    }
  };
})();

