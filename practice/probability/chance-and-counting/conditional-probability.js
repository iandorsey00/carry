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
    },
    {
      "prompt": "A card is known to be a heart. How many of the 52 cards remain possible?",
      "answer": "13",
      "answers": [
        "13",
        "thirteen"
      ],
      "hint": "The condition shrinks the deck to one suit.",
      "label": "hearts remain",
      "choices": [
        {
          "value": "13",
          "label": "13"
        },
        {
          "value": "52",
          "label": "52"
        },
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "26",
          "label": "26"
        }
      ]
    },
    {
      "prompt": "Does knowing B always change the probability of A?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "When A and B are independent, the information is irrelevant.",
      "label": "not always",
      "choices": [
        {
          "value": "yes",
          "label": "Yes"
        },
        {
          "value": "no",
          "label": "No"
        }
      ]
    },
    {
      "prompt": "Two dice are rolled and the first shows 6. What is P(sum = 12) now?",
      "answer": "1/6",
      "answers": [
        "1/6"
      ],
      "hint": "Only the second die is still in question.",
      "label": "given first six",
      "choices": [
        {
          "value": "1/6",
          "label": "1/6"
        },
        {
          "value": "1/36",
          "label": "1/36"
        },
        {
          "value": "1/12",
          "label": "1/12"
        },
        {
          "value": "1/2",
          "label": "1/2"
        }
      ]
    },
    {
      "prompt": "If A and B are independent, P(A | B) equals what?",
      "answer": "P(A)",
      "answers": [
        "P(A)",
        "p(a)"
      ],
      "hint": "Independence means the condition tells you nothing new.",
      "label": "independence",
      "choices": [
        {
          "value": "P(A)",
          "label": "P(A)"
        },
        {
          "value": "P(B)",
          "label": "P(B)"
        },
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "0",
          "label": "0"
        }
      ]
    },
    {
      "prompt": "A family has two children and at least one is a girl. How many outcomes remain possible?",
      "answer": "3",
      "answers": [
        "3",
        "three"
      ],
      "hint": "GG, GB, and BG survive; only BB is ruled out.",
      "label": "two children",
      "choices": [
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "1",
          "label": "1"
        }
      ]
    }

  ]
};
})();
