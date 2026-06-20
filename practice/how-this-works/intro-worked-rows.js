// Carry Learning / Overview content. Loaded before app.js by index.html.
// Keep authored overview copy here so app.js can focus on rendering and interaction.
(function registerCarryHowThisWorksIntroWorkedRows() {
  window.CarryHowThisWorks = window.CarryHowThisWorks || {};
  const api = window.CarryHowThisWorks;

  function introWorkedExampleRows(workspace) {
    if (workspace.type === "addition") {
      return [
        { math: "6 + 7 = 13", note: "Write 3 in ones and carry 1." },
        { math: "8 + 5 + 1 = 14", note: "Write 4 in tens and carry 1." },
        { math: "4 + 2 + 1 = 7", note: "The sum is 743." }
      ];
    }
  
    if (workspace.type === "subtraction") {
      return [
        { math: "15 - 8 = 7", note: "Borrow because 5 is too small." },
        { math: "13 - 7 = 6", note: "Borrow again in the tens column." },
        { math: "5 - 2 = 3", note: "The difference is 367." }
      ];
    }
  
    if (workspace.type === "multiplication") {
      return [
        { math: "247 × 6 = 1482", note: "Build the ones partial row." },
        { math: "247 × 80 = 19760", note: "Shift one place for tens." },
        { math: "247 × 300 = 74100", note: "Shift two places for hundreds." }
      ];
    }
  
    if (workspace.type === "division") {
      return [
        { math: "8 ÷ 4 = 2", note: "First quotient digit." },
        { math: "6 ÷ 4 = 1 r 2", note: "Carry the remainder forward." },
        { math: "24 ÷ 4 = 6", note: "Final quotient digit." }
      ];
    }
  
    if (workspace.type === "equation") {
      return [
        { math: "x + 7 = 12", note: "Start with the equation." },
        { math: "x + 7 - 7 = 12 - 7", note: "Subtract 7 from both sides." },
        { math: "x = 5", note: "Simplify." }
      ];
    }
  
    if (workspace.type === "inequality") {
      return [
        { math: "x + 4 > 9", note: "Start with the inequality." },
        { math: "x + 4 - 4 > 9 - 4", note: "Subtract 4 from both sides." },
        { math: "x > 5", note: "Direction stays the same." }
      ];
    }
  
    if (workspace.type === "factoring" || workspace.type === "quadratic") {
      return [
        { math: "x^2 + 5x + 6", note: "Find a pair with product 6 and sum 5." },
        { math: "2 × 3 = 6", note: "Product matches c." },
        { math: "2 + 3 = 5", note: "Sum matches b." },
        { math: "x^2 + 5x + 6 = (x + 2)(x + 3)", note: "Write the factors." }
      ];
    }
  
    return api.conceptWorkedExampleRows?.(workspace) || null;
  }

  api.introWorkedExampleRows = introWorkedExampleRows;
})();
