// Carry special practice mode data. Loaded before app.js by index.html.
(function registerCarryLongOperationPractice() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.modes.longOperations = window.CarryPractice.modes.longOperations || {};
  window.CarryPractice.modes.longOperations["divisionRemainderWorkspace"] = {
  "id": "arithmetic.long-division-remainders",
  "topic": "Arithmetic",
  "title": "Long division with remainders",
  "type": "division",
  "allowsRemainder": true,
  "problem": {
    "top": 865,
    "bottom": 4
  }
};
})();
