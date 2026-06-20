// Carry Learning / Overview content. Loaded before app.js by index.html.
// Keep authored overview copy here so app.js can focus on rendering and interaction.
(function registerCarryHowThisWorksIntroWhy() {
  window.CarryHowThisWorks = window.CarryHowThisWorks || {};
  const api = window.CarryHowThisWorks;

  function introWhyItems(workspace) {
    if (workspace.type === "addition") {
      return [
        "Each column represents a place value.",
        "Ten ones become one ten, ten tens become one hundred, and so on.",
        "Carries keep the total value the same while moving it to the correct column."
      ];
    }
  
    if (workspace.type === "subtraction") {
      return [
        "Borrowing rewrites the same number using a neighboring place value.",
        "One ten can be exchanged for ten ones, and one hundred can be exchanged for ten tens.",
        "The value of the top number stays the same; only its form changes."
      ];
    }
  
    if (workspace.type === "multiplication") {
      return [
        "Long multiplication breaks one factor into ones, tens, and hundreds.",
        "Each partial product is a smaller multiplication with the correct place shift.",
        "Adding the partial products recombines the whole product."
      ];
    }
  
    if (workspace.type === "division") {
      return [
        "Long division repeatedly asks how many groups fit into the current part of the dividend.",
        "Multiplying checks the size of the chosen quotient digit.",
        "Subtracting leaves the remainder that carries into the next place."
      ];
    }
  
    if (workspace.type === "equation") {
      return [
        "An equation is balanced when both sides have the same value.",
        "Doing the same operation to both sides keeps that balance.",
        "The goal is to rewrite the equation until the variable is alone."
      ];
    }
  
    if (workspace.type === "inequality") {
      return [
        "An inequality compares two sides instead of making them equal.",
        "Most inverse operations preserve the comparison.",
        "Multiplying or dividing by a negative reverses order, so the sign must flip."
      ];
    }
  
    if (workspace.type === "system") {
      return [
        "A system solution must satisfy every equation at the same time.",
        "Substitution and elimination reduce two unknowns to one unknown.",
        "The final ordered pair should work in both original equations."
      ];
    }
  
    if (workspace.type === "factoring" || workspace.type === "quadratic") {
      return [
        "Factoring rewrites an expression as a product without changing its value.",
        "Multiplying the factors back out checks the rewrite.",
        "For quadratics, factored form makes zeros easier to see."
      ];
    }
  
    if (workspace.type === "concept") {
      return api.conceptWhyItems?.(workspace) || [];
    }
  
    return [
      "The rule connects the notation to one small action.",
      "Checking a small action prevents a mistake from spreading.",
      "The same pattern can then be reused on new numbers."
    ];
  }

  api.introWhyItems = introWhyItems;
})();
