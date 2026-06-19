// Carry special practice mode data. Loaded before app.js by index.html.
(function registerCarryLongOperationPractice() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.modes.longOperations = window.CarryPractice.modes.longOperations || {};
  window.CarryPractice.modes.longOperations["multiplicationWorkspace"] = {
  "id": "arithmetic.long-multiplication.3x3",
  "topic": "Arithmetic",
  "title": "Long multiplication",
  "type": "multiplication",
  "problem": {
    "top": 247,
    "bottom": 386
  },
  "rows": [
    {
      "id": "p0",
      "label": "x6",
      "value": 1482,
      "shift": 0
    },
    {
      "id": "p1",
      "label": "x80",
      "value": 19760,
      "shift": 1
    },
    {
      "id": "p2",
      "label": "x300",
      "value": 74100,
      "shift": 2
    },
    {
      "id": "sum",
      "label": "sum",
      "value": 95342,
      "shift": 0
    }
  ]
};
})();
