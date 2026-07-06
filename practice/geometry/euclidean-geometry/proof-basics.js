// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["geometry"] = window.CarryPractice.sections["geometry"] || {};
  window.CarryPractice.sections["geometry"]["geometry.proof-basics"] = {
  "id": "geometry.proof-basics",
  "topic": "Geometry",
  "title": "Proof basics",
  "type": "concept",
  "figure": "geometry-proof",
  "intro": [
    "A proof is an argument with no gaps: it shows a conclusion must be true, not just that it seems true.",
    "Every step names its reason — a given fact, a definition, or an earlier theorem — so anyone can audit the chain.",
    "The craft is direction: start from what is known and move deliberately toward the claim."
],
  "problems": [
    {
      "prompt": "If two angles are both right angles, what can you conclude about their measures?",
      "answer": "equal",
      "answers": [
        "equal",
        "congruent",
        "same"
      ],
      "hint": "All right angles measure 90 degrees.",
      "label": "right angle conclusion",
      "choices": [
        {
          "value": "equal",
          "label": "equal"
        },
        {
          "value": "acute",
          "label": "acute"
        },
        {
          "value": "right",
          "label": "right"
        },
        {
          "value": "obtuse",
          "label": "obtuse"
        }
      ]
    },
    {
      "prompt": "In a proof, what word describes information stated at the start?",
      "answer": "given",
      "hint": "A proof often begins with given information.",
      "label": "proof starting fact",
      "choices": [
        {
          "value": "given",
          "label": "given"
        },
        {
          "value": "hypothesis",
          "label": "hypothesis"
        },
        {
          "value": "conclusion",
          "label": "conclusion"
        },
        {
          "value": "contradiction",
          "label": "contradiction"
        }
      ]
    },
    {
      "prompt": "If AB = CD and CD = EF, which property lets you conclude AB = EF?",
      "answer": "transitive",
      "answers": [
        "transitive",
        "transitivity",
        "transitiveproperty"
      ],
      "hint": "Equality can pass through a shared equal quantity.",
      "label": "equality reason",
      "choices": [
        {
          "value": "transitive",
          "label": "transitive"
        },
        {
          "value": "closure",
          "label": "closure"
        },
        {
          "value": "identity",
          "label": "identity"
        },
        {
          "value": "inverse",
          "label": "inverse"
        }
      ]
    },
    {
      "prompt": "A statement accepted as a starting rule without proof is called what?",
      "answer": "postulate",
      "answers": [
        "postulate",
        "axiom",
        "a postulate",
        "an axiom"
      ],
      "hint": "Euclid began with five of them.",
      "label": "postulate",
      "choices": [
        {
          "value": "postulate",
          "label": "a postulate"
        },
        {
          "value": "theorem",
          "label": "a theorem"
        },
        {
          "value": "counterexample",
          "label": "a counterexample"
        },
        {
          "value": "definition",
          "label": "a definition"
        }
      ]
    },
    {
      "prompt": "A statement that has been proven from earlier facts is called what?",
      "answer": "theorem",
      "answers": [
        "theorem",
        "a theorem"
      ],
      "hint": "Proofs produce these.",
      "label": "theorem",
      "choices": [
        {
          "value": "theorem",
          "label": "a theorem"
        },
        {
          "value": "postulate",
          "label": "a postulate"
        },
        {
          "value": "guess",
          "label": "a guess"
        },
        {
          "value": "given",
          "label": "a given"
        }
      ]
    },
    {
      "prompt": "If a = b, which property lets you conclude b = a?",
      "answer": "symmetric",
      "answers": [
        "symmetric",
        "the symmetric property"
      ],
      "hint": "Equality reads the same in both directions.",
      "label": "symmetric property",
      "choices": [
        {
          "value": "symmetric",
          "label": "symmetric"
        },
        {
          "value": "reflexive",
          "label": "reflexive"
        },
        {
          "value": "transitive",
          "label": "transitive"
        },
        {
          "value": "distributive",
          "label": "distributive"
        }
      ]
    },
    {
      "prompt": "The reflexive property says any quantity is equal to what?",
      "answer": "itself",
      "answers": [
        "itself"
      ],
      "hint": "The mirror looks back at you.",
      "label": "reflexive property",
      "choices": [
        {
          "value": "itself",
          "label": "itself"
        },
        {
          "value": "zero",
          "label": "zero"
        },
        {
          "value": "its opposite",
          "label": "its opposite"
        }
      ]
    },
    {
      "prompt": "In a two-column proof, every statement is paired with what?",
      "answer": "a reason",
      "answers": [
        "a reason",
        "reason"
      ],
      "hint": "The second column justifies the first.",
      "label": "two column",
      "choices": [
        {
          "value": "a reason",
          "label": "a reason"
        },
        {
          "value": "a diagram",
          "label": "a diagram"
        },
        {
          "value": "a number",
          "label": "a number"
        }
      ]
    }

  ]
};
})();
