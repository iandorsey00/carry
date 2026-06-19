// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["geometry"] = window.CarryPractice.sections["geometry"] || {};
  window.CarryPractice.sections["geometry"]["geometry.area-volume"] = {
  "id": "geometry.area-volume",
  "topic": "Geometry",
  "title": "Area and volume",
  "type": "concept",
  "figure": "geometry-area-volume",
  "intro": [
    "Area measures how much flat space a shape covers.",
    "Volume measures how much space a solid holds.",
    "Track the unit: square units for area, cubic units for volume."
  ],
  "problems": [
    {
      "prompt": "What is the area of a rectangle with length 8 and width 3?",
      "answer": "24",
      "hint": "Rectangle area is length times width.",
      "label": "rectangle area"
    },
    {
      "prompt": "What is the volume of a rectangular prism with dimensions 2, 3, and 5?",
      "answer": "30",
      "hint": "Multiply all three dimensions.",
      "label": "prism volume"
    },
    {
      "prompt": "A triangle has base 10 and height 4. What is its area?",
      "answer": "20",
      "hint": "Triangle area is half of base times height.",
      "label": "triangle area"
    },
    {
      "prompt": "What is the area of a rectangle with length 9 and width 4?",
      "answer": "36",
      "hint": "Rectangle area is length times width.",
      "label": "rectangle area",
      "feedback": "Multiply the two side lengths."
    },
    {
      "prompt": "A triangle has base 12 and height 5. What is its area?",
      "answer": "30",
      "hint": "Use half of base times height.",
      "label": "triangle area",
      "feedback": "Take half after multiplying base and height."
    },
    {
      "prompt": "What is the volume of a rectangular prism with dimensions 3, 4, and 6?",
      "answer": "72",
      "hint": "Multiply all three dimensions.",
      "label": "prism volume",
      "feedback": "Volume uses three dimensions."
    }
  ]
};
})();
