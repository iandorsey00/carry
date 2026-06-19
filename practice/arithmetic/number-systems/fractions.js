// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["arithmetic"] = window.CarryPractice.sections["arithmetic"] || {};
  window.CarryPractice.sections["arithmetic"]["arithmetic.fractions"] = {
  "id": "arithmetic.fractions",
  "topic": "Arithmetic",
  "title": "Fractions",
  "type": "concept",
  "figure": "fraction-bar",
  "intro": [
    "A fraction names equal parts of a whole.",
    "The denominator tells how many equal parts make the whole.",
    "The numerator tells how many of those parts are being used."
  ],
  "problems": [
    {
      "prompt": "Simplify 6/8.",
      "answer": "3/4",
      "hint": "Divide the top and bottom by 2.",
      "label": "simplified fraction"
    },
    {
      "prompt": "What is 1/4 of 20?",
      "answer": "5",
      "hint": "Split 20 into 4 equal groups.",
      "label": "fraction of a number"
    },
    {
      "prompt": "Which is larger: 1/2 or 1/3?",
      "answer": "1/2",
      "hint": "With the same whole, thirds are smaller parts than halves.",
      "label": "larger fraction",
      "choices": [
        {
          "value": "1/2",
          "label": "1/2"
        },
        {
          "value": "1/3",
          "label": "1/3"
        }
      ]
    },
    {
      "prompt": "Simplify 9/12.",
      "answer": "3/4",
      "hint": "Divide the top and bottom by 3.",
      "label": "simplified fraction",
      "feedback": "Look for a common factor in the numerator and denominator."
    },
    {
      "prompt": "What is 3/5 of 20?",
      "answer": "12",
      "hint": "One fifth of 20 is 4, so three fifths is 12.",
      "label": "fraction of a number",
      "feedback": "Find one equal part first, then multiply by the numerator."
    },
    {
      "prompt": "Which is larger: 2/3 or 2/5?",
      "answer": "2/3",
      "hint": "With the same numerator, smaller parts make a smaller fraction.",
      "label": "larger fraction",
      "feedback": "Compare the size of each part when the numerators match.",
      "choices": [
        {
          "value": "2/3",
          "label": "2/3"
        },
        {
          "value": "2/5",
          "label": "2/5"
        }
      ]
    },
    {
      "prompt": "Complete: 1/2 = __/8.",
      "answer": "4",
      "hint": "Multiply the denominator by 4, so multiply the numerator by 4.",
      "label": "equivalent fraction",
      "feedback": "Use the same scale factor on the top and bottom."
    },
    {
      "prompt": "What is 1/3 + 1/3?",
      "answer": "2/3",
      "hint": "The denominators match, so add the numerators.",
      "label": "like denominator sum",
      "feedback": "When denominators match, keep the denominator and add the numerators."
    }
  ]
};
})();
