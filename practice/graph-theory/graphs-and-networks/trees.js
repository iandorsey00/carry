// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["graph-theory"] = window.CarryPractice.sections["graph-theory"] || {};
  window.CarryPractice.sections["graph-theory"]["graph-theory.trees"] = {
  "id": "graph-theory.trees",
  "topic": "Graph Theory",
  "title": "Trees",
  "type": "concept",
  "figure": "graph-trees",
  "intro": [
    "A tree is a connected graph with no cycles.",
    "Connected means every vertex can be reached from every other vertex.",
    "No cycles means there is no closed loop."
  ],
  "problems": [
    {
      "prompt": "A tree is connected and has no what?",
      "answer": "cycles",
      "choices": [
        {
          "value": "cycles",
          "label": "cycles"
        },
        {
          "value": "vertices",
          "label": "vertices"
        },
        {
          "value": "edges",
          "label": "edges"
        },
        {
          "value": "paths",
          "label": "paths"
        }
      ],
      "hint": "Trees may have vertices, edges, and paths. What they cannot have is a loop.",
      "feedback": "A tree has no cycles.",
      "label": "tree definition"
    },
    {
      "prompt": "Can a tree have a closed loop?",
      "answer": "no",
      "choices": [
        {
          "value": "yes",
          "label": "Yes"
        },
        {
          "value": "no",
          "label": "No"
        }
      ],
      "hint": "A closed loop is a cycle.",
      "feedback": "A tree cannot have a closed loop.",
      "label": "tree loop",
      "answers": [
        "false"
      ]
    },
    {
      "prompt": "Which word means every vertex is reachable from every other vertex?",
      "answer": "connected",
      "choices": [
        {
          "value": "connected",
          "label": "connected"
        },
        {
          "value": "separated",
          "label": "separated"
        },
        {
          "value": "mean",
          "label": "mean"
        },
        {
          "value": "median",
          "label": "median"
        }
      ],
      "hint": "Reachability is the core idea.",
      "feedback": "Connected means all vertices are mutually reachable.",
      "label": "connected meaning"
    }
  ]
};
})();
