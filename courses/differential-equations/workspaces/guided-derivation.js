// Generic staged-equation engine for Differential Equations course workspaces.
(function exposeGuidedDerivation(root, factory) {
  const api = factory();
  root.CarryGuidedDerivation = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis, function createGuidedDerivationEngine() {
  function slot(answer, options = {}) {
    return {
      answer: String(answer),
      answers: [...new Set([answer, ...(options.answers || [])].map(String))],
      hint: options.hint || "Use the current equation to make one equivalent step.",
      label: options.label || "Enter the next expression",
      math: options.math || String(answer),
      feedback: options.feedback || "",
      placeholder: options.placeholder || "",
      scaffold: options.scaffold || null
    };
  }

  function isSlot(value) {
    return Boolean(value && typeof value === "object" && Object.hasOwn(value, "answer"));
  }

  function buildModel(problem) {
    const cells = [];
    let sequence = 0;
    const rows = (problem.rows || []).map((row, rowIndex) => {
      const next = { ...row, row: rowIndex + 2 };
      const stageId = row.id || `row-${rowIndex + 1}`;
      const capabilities = row.capabilities || problem.capabilitiesByStage?.[stageId] || problem.capabilities || [];
      for (const [side, col] of [["left", 2], ["right", 4]]) {
        if (!isSlot(row[side])) continue;
        const definition = row[side];
        const id = `${problem.id}-${row.id || `row-${rowIndex + 1}`}-${side}`;
        cells.push({
          id,
          row: next.row,
          col,
          kind: "equationStep",
          expected: definition.answer,
          answers: definition.answers,
          sequence,
          label: definition.label,
          hint: definition.hint,
          feedback: definition.feedback || "",
          math: definition.math,
          placeholder: definition.placeholder,
          scaffold: definition.scaffold,
          inputMode: "text",
          stageId,
          capabilities
        });
        next[`${side}CellId`] = id;
        sequence += 1;
      }
      return next;
    });

    return { ...problem, rows, cells };
  }

  return { buildModel, isSlot, slot };
});
