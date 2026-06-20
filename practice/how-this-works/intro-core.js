// Carry Learning / Overview content. Loaded before app.js by index.html.
// Keep authored overview copy here so app.js can focus on rendering and interaction.
(function registerCarryHowThisWorksIntroCore() {
  window.CarryHowThisWorks = window.CarryHowThisWorks || {};
  const api = window.CarryHowThisWorks;

  function introCoreItems(workspace) {
    const intros = {
      addition: [
        "Start at the ones column and move left.",
        "Add the two digits in the active column, plus any carry already above that column.",
        "Write the ones digit in the sum row. If the column total is 10 or more, place the carry above the next column.",
        "At the last column, bring down any final carry."
      ],
      subtraction: [
        "Start at the ones column and move left.",
        "If the top digit is large enough, subtract the lower digit and write the difference.",
        "If the top digit is too small, borrow from the next available column on the left.",
        "A digit that lends is crossed out and replaced with its reduced value. A digit that receives ten gets a small 1 mark."
      ],
      multiplication: [
        "Multiply one bottom digit at a time, starting with the ones digit.",
        "Within each partial row, move from right to left and carry into the next column as needed.",
        "Use a zero when a partial row shifts left for tens or hundreds.",
        "After all partial rows are complete, add them from right to left."
      ],
      division: [
        "Move through the dividend from left to right.",
        "For each column, form the partial dividend, choose the quotient digit, multiply, then subtract.",
        "Carry each remainder into the next partial dividend.",
        workspace.allowsRemainder
          ? "At the end, write the final remainder instead of forcing another quotient digit."
          : "In this lesson, the final remainder is zero."
      ]
    };
    return intros[workspace.type] || ["This interactive workspace is planned."];
  }

  api.introCoreItems = introCoreItems;
})();
