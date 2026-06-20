// Carry How This Works content. Loaded before app.js by index.html.
// Keep authored lesson overview copy here so app.js can focus on rendering and interaction.
(function registerCarryHowThisWorksConceptWhyItems() {
  window.CarryHowThisWorks = window.CarryHowThisWorks || {};
  const api = window.CarryHowThisWorks;

  function conceptWhyItems(workspace) {
      if (workspace.topic === "Probability") {
        return [
          "Probability compares an event with the outcomes that could happen.",
          "A clear sample space makes the denominator clear.",
          "Changing the known information can change the sample space."
        ];
      }
    
      if (workspace.topic === "Statistics") {
        return [
          "Statistics turns data into summaries, displays, and decisions.",
          "Good statistical reasoning keeps the context and units attached to the numbers.",
          "Samples are useful because they help estimate what may be true about a larger population."
        ];
      }
    
      if (workspace.topic === "Differential Equations") {
        return [
          "A differential equation describes how a quantity changes, not only what it is.",
          "Derivatives connect a current state to a rate of change.",
          "Solutions are functions whose derivatives match the rule."
        ];
      }
    
      if (workspace.topic === "Calculus") {
        return [
          "Calculus studies change and accumulation.",
          "Derivatives measure local rate; integrals collect small pieces into totals.",
          "Limits make those ideas precise."
        ];
      }
    
      if (workspace.topic === "Physics Foundations" || String(workspace.id || "").startsWith("physics.")) {
        return [
          "Physics formulas connect quantities with units and meaning.",
          "The units help check whether a calculation is reasonable.",
          "A diagram or model should match the formula, not replace it."
        ];
      }
    
      if (workspace.topic === "Proofs") {
        return [
          "Proofs are controlled chains of reasons.",
          "Each step should follow from definitions, earlier facts, or a named rule.",
          "A counterexample can disprove a universal claim with one failing case."
        ];
      }
    
      if (workspace.topic === "Set Theory") {
        return [
          "Set notation makes collections precise.",
          "Membership asks about individual objects; subsets ask about whole collections.",
          "Operations such as union and intersection describe how collections overlap."
        ];
      }
    
      if (workspace.topic === "Number Theory") {
        return [
          "Number theory often turns division into structure.",
          "Remainders, factors, and multiples reveal patterns.",
          "Definitions matter because small wording changes can change the answer."
        ];
      }
    
      if (workspace.topic === "Real Analysis") {
        return [
          "Analysis makes calculus ideas precise using definitions.",
          "The focus is often on what happens arbitrarily close to a value.",
          "Examples and counterexamples test whether the definition really applies."
        ];
      }
    
      if (workspace.topic === "Complex Analysis") {
        return [
          "Complex analysis studies functions whose inputs and outputs live in the complex plane.",
          "Differentiability is much stronger here than it is for ordinary real functions.",
          "Local behavior near points and singularities can control global integrals."
        ];
      }
    
      if (workspace.topic === "Topology") {
        return [
          "Topology studies structure that survives continuous deformation.",
          "Open sets replace formulas or distances as the basic language.",
          "Definitions matter because the same set can behave differently in different spaces."
        ];
      }
    
      if (workspace.topic === "Abstract Algebra") {
        return [
          "Abstract algebra studies operations through their rules.",
          "The same structure can appear in numbers, symmetries, functions, or matrices.",
          "Checking a definition means checking every required rule."
        ];
      }
    
      return [
        "Name the objects in the definition before choosing an answer.",
        "Check the condition stated in the lesson directly.",
        "Use the example as a model for the kind of test to apply."
      ];
    }

  api.conceptWhyItems = conceptWhyItems;
})();
