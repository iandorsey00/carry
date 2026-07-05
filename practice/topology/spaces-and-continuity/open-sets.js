// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["topology"] = window.CarryPractice.sections["topology"] || {};
  window.CarryPractice.sections["topology"]["topology.open-sets"] = {
    id: "topology.open-sets",
    topic: "Topology",
    title: "Open sets",
    type: "concept",
    figure: "topology-open-sets",
    intro: [
      "Topology studies which sets count as open.",
      "An open set lets each point move a little without immediately leaving the set.",
      "Choosing the open sets defines the shape of a topological space."
    ],
    problems: [
      {
        prompt: "In the usual real line topology, is the interval (0, 1) open?",
        answer: "yes",
        answers: ["yes", "true"],
        hint: "Every point between 0 and 1 has a little room on both sides.",
        label: "open interval",
        choices: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]
      },
      {
        prompt: "In the usual real line topology, is the interval [0, 1] open?",
        answer: "no",
        answers: ["no", "false"],
        hint: "At 0 and 1, any small interval spills outside [0, 1].",
        label: "closed interval not open",
        choices: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]
      },
      {
        prompt: "What does a topology specify?",
        answer: "open sets",
        answers: ["open sets", "the open sets"],
        hint: "A topological space starts by declaring which subsets are open.",
        label: "topology data",
        choices: [
          { value: "open sets", label: "which sets are open" },
          { value: "only distances", label: "only distances" },
          { value: "only angles", label: "only angles" },
          { value: "only arithmetic operations", label: "only arithmetic operations" }
        ]
      },
      {
        prompt: "The empty set is open in every topology.",
        answer: "true",
        answers: ["true", "yes"],
        hint: "This is one of the topology axioms.",
        label: "empty open",
        choices: [
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ]
      },
    {
      "prompt": "In the usual topology, is the whole real line an open set?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Every point has room on both sides.",
      "label": "whole line open",
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
      "prompt": "Is the single-point set {3} open in the usual real line?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "There is no wiggle room around 3 that stays inside the set.",
      "label": "point not open",
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
      "prompt": "The union of any collection of open sets is always what?",
      "answer": "open",
      "answers": [
        "open"
      ],
      "hint": "Openness survives unions — that is one of the axioms.",
      "label": "union axiom",
      "choices": [
        {
          "value": "open",
          "label": "open"
        },
        {
          "value": "closed",
          "label": "closed"
        },
        {
          "value": "empty",
          "label": "empty"
        },
        {
          "value": "finite",
          "label": "finite"
        }
      ]
    },
    {
      "prompt": "Can the same set carry more than one topology?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Choosing different collections of open sets gives different spaces.",
      "label": "many topologies",
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
    }

    ]
  };
})();
