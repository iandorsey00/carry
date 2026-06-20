// Carry Learning / Overview content. Loaded before app.js by index.html.
// Keep authored overview copy here so app.js can focus on rendering and interaction.
(function registerCarryHowThisWorksIntroWorkspace() {
  window.CarryHowThisWorks = window.CarryHowThisWorks || {};
  const api = window.CarryHowThisWorks;

  function introWorkspaceItems(workspace) {
    if (workspace.type === "addition") {
      return [
        "Use one digit per square.",
        "Check validates the active column, then moves left.",
        "Carry marks sit above the next column only when a column total reaches 10."
      ];
    }
  
    if (workspace.type === "subtraction") {
      return [
        "Use one digit per square for the answer row.",
        "Borrow marks show the changed top number before you subtract.",
        "Check one column at a time so a borrow mistake stays local."
      ];
    }
  
    if (workspace.type === "multiplication") {
      return [
        "Build one partial product row at a time.",
        "Zeros mark the place shift for tens and hundreds rows.",
        "The final sum has its own carry row."
      ];
    }
  
    if (workspace.type === "division") {
      return workspace.allowsRemainder
        ? [
            "Use the divide, multiply, subtract cycle from left to right.",
            "The last nonzero amount is written as the final remainder.",
            "If there is no remainder, write 0 when the lesson asks for it."
          ]
        : [
            "Use the divide, multiply, subtract cycle from left to right.",
            "This lesson uses problems that end with remainder 0.",
            "A problem with a final remainder moves to the remainders lesson."
          ];
    }
  
    if (workspace.type === "equation") {
      return [
        "Write the same operation on both sides before simplifying.",
        "Each row should keep left side, relation, and right side aligned.",
        "The last row names the value of the variable."
      ];
    }
  
    if (workspace.type === "inequality") {
      return [
        "Use inverse operations as you would for equations.",
        "Reverse the inequality only when multiplying or dividing by a negative number.",
        "The last row should state the variable, comparison sign, and boundary value."
      ];
    }
  
    if (workspace.type === "system") {
      return [
        "Show the method first: substitution or elimination.",
        "Find one variable, substitute it back, then write the ordered pair.",
        "The pair should work in both original equations."
      ];
    }
  
    if (workspace.type === "factoring" || workspace.type === "quadratic") {
      return [
        "Name the expression shape before choosing a method.",
        "For simple quadratics, look for a pair whose product and sum both fit.",
        "Multiply the factors back out as a check."
      ];
    }
  
    return [];
  }

  api.introWorkspaceItems = introWorkspaceItems;
})();
