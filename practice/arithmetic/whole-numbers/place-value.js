// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.place-value"] = {
  "id": "arithmetic.place-value",
  "topic": "Arithmetic",
  "title": "Place value",
  "type": "concept",
  "figure": "place-value",
  "intro": [
    "Read a number by its places: hundreds, tens, and ones.",
    "A digit changes value when it moves to a different place.",
    "Use expanded form to see what each digit contributes."
  ],
  "problems": [
    {
      "prompt": "In 642, what is the value of the 6?",
      "answer": "600",
      "hint": "The 6 is in the hundreds place.",
      "label": "value of 6"
    },
    {
      "prompt": "Complete: 507 = 500 + 0 + __.",
      "answer": "7",
      "answers": [
        "7",
        "500+0+7",
        "500+00+7",
        "500+7"
      ],
      "hint": "The ones digit is 7.",
      "label": "expanded ones term"
    },
    {
      "prompt": "In 381, what digit is in the tens place?",
      "answer": "8",
      "hint": "The tens place is the middle digit.",
      "label": "tens digit"
    }
  ]
};
})();
