// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["probability"] = window.CarryPractice.sections["probability"] || {};
  window.CarryPractice.sections["probability"]["probability.conditional-probability"] = {
  "id": "probability.conditional-probability",
  "topic": "Probability",
  "title": "Conditional probability",
  "type": "concept",
  "figure": "probability-conditional",
  "intro": [
    "Conditional probability asks how likely something is after new information is known.",
    "The condition narrows the sample space.",
    "The notation P(A | B) means probability of A given B."
  ],
  "problems": [
    {
      "prompt": "In <math>P(A | B)</math>, which event is given as known?",
      "answer": "b",
      "answers": [
        "b",
        "B"
      ],
      "hint": "The event after the vertical bar is the condition.",
      "label": "given event"
    },
    {
      "prompt": "A die roll is known to be even. How many possible outcomes remain?",
      "answer": "3",
      "hint": "The even outcomes are 2, 4, and 6.",
      "label": "conditional sample space"
    },
    {
      "prompt": "If a die roll is known to be even, what is the probability it is 6?",
      "answer": "1/3",
      "hint": "Only three outcomes remain, and one of them is 6.",
      "label": "conditional die probability"
    }
  ]
};
})();
