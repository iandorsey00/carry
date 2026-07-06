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
    },
    {
      "prompt": "In 735, what is the value of the 7?",
      "answer": "700",
      "hint": "The 7 is in the hundreds place.",
      "label": "value of 7",
      "feedback": "Name the place first, then write the digit's value."
    },
    {
      "prompt": "Complete: 864 = 800 + __ + 4.",
      "answer": "60",
      "hint": "The 6 is in the tens place.",
      "label": "expanded tens term",
      "feedback": "The tens digit contributes groups of ten."
    },
    {
      "prompt": "In 902, what digit is in the ones place?",
      "answer": "2",
      "hint": "The ones place is the rightmost digit.",
      "label": "ones digit",
      "feedback": "Read the places from right to left: ones, tens, hundreds."
    },
    {
      "prompt": "Write 300 + 40 + 9 as a number.",
      "answer": "349",
      "hint": "Put the hundreds, tens, and ones together.",
      "label": "standard form",
      "feedback": "Expanded form names each place value separately."
    },
    {
      "prompt": "In 4,058, what is the value of the 4?",
      "answer": "4000",
      "answers": [
        "4000",
        "4,000"
      ],
      "hint": "It sits in the thousands place.",
      "label": "thousands",
      "choices": [
        {
          "value": "4000",
          "label": "4000"
        },
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "400",
          "label": "400"
        },
        {
          "value": "40",
          "label": "40"
        }
      ]
    }

  ]
};
})();
