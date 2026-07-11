// Builds the runtime workspace index from independently loaded practice modules.
(function exposeWorkspaceRegistry(root, factory) {
  const api = factory();
  root.CarryWorkspaceRegistry = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis, function createWorkspaceRegistryModule() {
  const planned = {
    "Pre-Algebra": ["prealgebra.placeholders", "Number patterns"],
    Algebra: ["algebra.placeholders", "Equation transformations"],
    Geometry: ["geometry.placeholders", "Shape reasoning"],
    Trigonometry: ["trigonometry.placeholders", "Identity studio"],
    Calculus: ["calculus.placeholders", "Limits and derivatives"],
    "Differential Equations": ["differential-equations.placeholders", "Change over time"],
    "Linear Algebra": ["linear-algebra.placeholders", "Vector spaces"],
    "Set Theory": ["set-theory.placeholders", "Sets and relations"],
    "Number Theory": ["number-theory.placeholders", "Divisibility and congruence"],
    "Graph Theory": ["graph-theory.placeholders", "Graphs and networks"],
    Probability: ["probability.placeholders", "Chance and counting"],
    Statistics: ["statistics.placeholders", "Data and inference"],
    "Complex Analysis": ["complex-analysis.placeholders", "Complex functions"],
    "Real Analysis": ["real-analysis.placeholders", "Definitions and proofs"],
    Topology: ["topology.placeholders", "Spaces and continuity"],
    "Abstract Algebra": ["abstract-algebra.placeholders", "Groups and examples"],
    Proofs: ["proofs.placeholders", "Proof construction"]
  };

  function create(source = {}) {
    const modes = source.modes?.longOperations || {};
    const conceptWorkspaces = Object.assign({}, ...Object.values(source.sections || {}));
    const operationWorkspaces = {
      "arithmetic.long-addition.3x3": modes.additionWorkspace,
      "arithmetic.long-subtraction.3x3": modes.subtractionWorkspace,
      "arithmetic.long-multiplication.3x3": modes.multiplicationWorkspace,
      "arithmetic.long-division.3x1": modes.divisionWorkspace,
      "arithmetic.long-division-remainders": modes.divisionRemainderWorkspace
    };
    const plannedWorkspaces = Object.fromEntries(Object.entries(planned).map(([topic, [id, title]]) => [
      topic,
      { id, title, status: "planned" }
    ]));

    return {
      conceptWorkspaces,
      operationWorkspaces,
      registry: { ...operationWorkspaces, ...conceptWorkspaces, ...plannedWorkspaces },
      additionWorkspace: modes.additionWorkspace,
      subtractionWorkspace: modes.subtractionWorkspace,
      multiplicationWorkspace: modes.multiplicationWorkspace,
      divisionWorkspace: modes.divisionWorkspace,
      divisionRemainderWorkspace: modes.divisionRemainderWorkspace
    };
  }

  return { create };
});

