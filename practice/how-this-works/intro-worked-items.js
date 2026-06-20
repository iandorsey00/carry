// Carry Learning / Overview content. Loaded before app.js by index.html.
// Keep authored overview copy here so app.js can focus on rendering and interaction.
(function registerCarryHowThisWorksIntroWorkedItems() {
  window.CarryHowThisWorks = window.CarryHowThisWorks || {};
  const api = window.CarryHowThisWorks;

  function introWorkedExampleItems(workspace) {
    if (workspace.type === "concept" && workspace.problems?.length) {
      return api.conceptWorkedExampleItems?.(workspace) || [];
    }
  
    if (workspace.type === "addition") {
      return [
        "For 486 + 257, start with ones: 6 + 7 = 13, so write 3 and carry 1.",
        "Then tens: 8 + 5 + 1 = 14, so write 4 and carry 1.",
        "Then hundreds: 4 + 2 + 1 = 7, so the sum is 743."
      ];
    }
  
    if (workspace.type === "subtraction") {
      return [
        "For 645 - 278, ones needs a borrow: 15 - 8 = 7.",
        "The tens column became 3, so borrow again: 13 - 7 = 6.",
        "The hundreds column became 5, so 5 - 2 = 3. The difference is 367."
      ];
    }
  
    if (workspace.type === "multiplication") {
      return [
        "For 247 × 386, multiply 247 by 6 first to make the ones partial row.",
        "Then multiply by 80 and 300, shifting those partial rows left.",
        "Add the partial rows to get the final product."
      ];
    }
  
    if (workspace.type === "division") {
      return [
        "For 864 ÷ 4, ask how many 4s fit into the current part of the dividend.",
        "8 ÷ 4 = 2, then 6 ÷ 4 = 1 remainder 2, then 24 ÷ 4 = 6.",
        "The quotient is 216, with no final remainder in the exact division lesson."
      ];
    }
  
    if (workspace.type === "equation") {
      return [
        "For x + 7 = 12, subtract 7 from both sides.",
        "The left side becomes x, and the right side becomes 5.",
        "So x = 5."
      ];
    }
  
    if (workspace.type === "inequality") {
      return [
        "For x + 4 > 9, subtract 4 from both sides.",
        "The comparison direction stays the same because you did not multiply or divide by a negative.",
        "So x > 5."
      ];
    }
  
    if (workspace.type === "factoring" || workspace.type === "quadratic") {
      return [
        "For x^2 + 5x + 6, find two numbers that multiply to 6 and add to 5.",
        "The pair 2 and 3 works.",
        "So x^2 + 5x + 6 = (x + 2)(x + 3)."
      ];
    }
  
    return [
      "Read the prompt, identify the current rule, and make one small move.",
      "Check that move before continuing."
    ];
  }

  api.introWorkedExampleItems = introWorkedExampleItems;
})();
