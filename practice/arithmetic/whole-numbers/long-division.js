// Carry special practice mode data. Loaded before app.js by index.html.
(function registerCarryLongOperationPractice() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.modes.longOperations = window.CarryPractice.modes.longOperations || {};
  window.CarryPractice.modes.longOperations["divisionWorkspace"] = {
  "id": "arithmetic.long-division.3x1",
  "topic": "Arithmetic",
  "title": "Long division",
  "type": "division",
  "allowsRemainder": false,
  "problem": {
    "top": 864,
    "bottom": 4
  }
};
})();
