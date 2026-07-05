// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["proofs"] = window.CarryPractice.sections["proofs"] || {};
  window.CarryPractice.sections["proofs"]["proofs.construction"] = {
  "id": "proofs.construction",
  "topic": "Proofs",
  "title": "Construction",
  "type": "concept",
  "figure": "proof-construction",
  "intro": [
    "The most convincing proof that something exists is the thing itself — so build it.",
    "A construction proof names a concrete object and verifies it meets every required condition.",
    "Verification is half the proof: an exhibit without the check is only a candidate."
],
  "problems": [
    {
      "prompt": "To prove there exists an even number greater than 10, is 12 a valid example?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "12 is even and greater than 10.",
      "label": "valid construction",
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
      "prompt": "After constructing an example, what should you do next?",
      "answer": "verify",
      "answers": [
        "verify",
        "check",
        "prove it works"
      ],
      "hint": "Show that the constructed object has the required properties.",
      "label": "verify construction",
      "choices": [
        {
          "value": "verify",
          "label": "verify"
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
      "prompt": "A construction proof is mainly used for which quantifier: for all or exists?",
      "answer": "exists",
      "answers": [
        "exists",
        "thereexists",
        "there exists"
      ],
      "hint": "Building one object proves existence.",
      "label": "construction quantifier",
      "choices": [
        {
          "value": "for all",
          "label": "for all"
        },
        {
          "value": "exists",
          "label": "exists"
        }
      ]
    },
    {
      "prompt": "To prove a multiple of 7 exists between 20 and 30, which number works?",
      "answer": "21",
      "answers": [
        "21",
        "28"
      ],
      "hint": "Check 7 times 3 and 7 times 4.",
      "label": "construct multiple",
      "choices": [
        {
          "value": "21",
          "label": "21"
        },
        {
          "value": "14",
          "label": "14"
        },
        {
          "value": "35",
          "label": "35"
        },
        {
          "value": "27",
          "label": "27"
        }
      ]
    },
    {
      "prompt": "Does naming an example without checking it complete a construction proof?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Verification is half the proof.",
      "label": "must verify",
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
      "prompt": "Can a single constructed example prove a for-all statement?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "One case cannot cover every case.",
      "label": "one example limits",
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
      "prompt": "To prove two odd numbers can sum to an even number, what should you exhibit?",
      "answer": "one concrete pair",
      "answers": [
        "one concrete pair",
        "a pair",
        "an example"
      ],
      "hint": "3 + 5 = 8 settles it.",
      "label": "exhibit pair",
      "choices": [
        {
          "value": "one concrete pair",
          "label": "one concrete pair"
        },
        {
          "value": "a general argument about all pairs",
          "label": "a general argument about all pairs"
        }
      ]
    },
    {
      "prompt": "The number 12 can prove which claim: some even number exceeds 10, or every even number exceeds 10?",
      "answer": "some",
      "answers": [
        "some",
        "the first"
      ],
      "hint": "An example proves existence, never universality.",
      "label": "some versus every",
      "choices": [
        {
          "value": "some",
          "label": "some even number exceeds 10"
        },
        {
          "value": "every",
          "label": "every even number exceeds 10"
        }
      ]
    }

  ]
};
})();
