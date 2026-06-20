// Carry Learning / Overview content. Loaded before app.js by index.html.
// Keep authored overview copy here so app.js can focus on rendering and interaction.
(function registerCarryHowThisWorksIntroStudio() {
  window.CarryHowThisWorks = window.CarryHowThisWorks || {};
  const api = window.CarryHowThisWorks;

  function lessonStudioMove(workspace) {
    if (workspace.type === "addition") return "Build the sum one column at a time.";
    if (workspace.type === "subtraction") return "Rewrite the top number only when a borrow is needed.";
    if (workspace.type === "multiplication") return "Build partial products, then add them.";
    if (workspace.type === "division") return "Repeat divide, multiply, subtract from left to right.";
    if (workspace.type === "equation") return "Keep both sides balanced on every row.";
    if (workspace.type === "inequality") return "Track the comparison sign while you solve.";
    if (workspace.type === "system") return "Show the method before writing the solution.";
    if (workspace.type === "quadratic" || workspace.type === "factoring") return "Choose the structure before calculating.";
    if (workspace.topic === "Statistics") return "Name the data structure before calculating.";
    return `Review ${workspace.title.toLowerCase()}, then try the prompt.`;
  }
  
  function lessonStudioItems(workspace) {
    if (workspace.type === "addition") {
      return [
        "Treat each column as a small checkpoint.",
        "Only write a carry when a column total reaches 10 or more."
      ];
    }
  
    if (workspace.type === "subtraction") {
      return [
        "Make the top digit large enough before subtracting.",
        "Use borrow marks to preserve what changed."
      ];
    }
  
    if (workspace.type === "multiplication") {
      return [
        "Finish one partial row before starting the next.",
        "Use place-value zeros to show the row shift."
      ];
    }
  
    if (workspace.type === "division") {
      return [
        "Each cycle asks what fits, checks by multiplying, then subtracts.",
        "Remainders become part of the next partial dividend."
      ];
    }
  
    if (workspace.topic === "Statistics") {
      return [
        "First ask what the data values represent.",
        "Then choose the summary, display, or inference idea that matches the question."
      ];
    }
  
    return [];
  }

  api.lessonStudioMove = lessonStudioMove;
  api.lessonStudioItems = lessonStudioItems;
})();
