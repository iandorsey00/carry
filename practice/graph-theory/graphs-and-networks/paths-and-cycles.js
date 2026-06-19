// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["graph-theory"] = window.CarryPractice.sections["graph-theory"] || {};
  window.CarryPractice.sections["graph-theory"]["graph-theory.paths-cycles"] = {
  "id": "graph-theory.paths-cycles",
  "topic": "Graph Theory",
  "title": "Paths and cycles",
  "type": "concept",
  "figure": "graph-paths-cycles",
  "intro": [
    "A path is a route through a graph that follows edges.",
    "The length of a path is the number of edges used.",
    "A cycle is a path that comes back to where it started without immediately retracing an edge."
  ],
  "problems": [
    {
      "prompt": "If a route uses 3 edges, what is its path length?",
      "answer": "3",
      "choices": [
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "6",
          "label": "6"
        }
      ],
      "hint": "Path length counts edges, not vertices.",
      "feedback": "A path using 3 edges has length 3.",
      "label": "path length"
    },
    {
      "prompt": "What do we call a path that returns to its starting vertex?",
      "answer": "cycle",
      "choices": [
        {
          "value": "cycle",
          "label": "cycle"
        },
        {
          "value": "degree",
          "label": "degree"
        },
        {
          "value": "component",
          "label": "component"
        },
        {
          "value": "leaf",
          "label": "leaf"
        }
      ],
      "hint": "Cycle has the same root idea as going around and returning.",
      "feedback": "A cycle returns to its starting vertex.",
      "label": "cycle vocabulary"
    },
    {
      "prompt": "For shortest path questions, what should you count?",
      "answer": "edges",
      "choices": [
        {
          "value": "edges",
          "label": "edges"
        },
        {
          "value": "vertices",
          "label": "vertices"
        }
      ],
      "hint": "The Graph Paths game asks for the fewest edge steps.",
      "feedback": "Shortest path length counts edge steps.",
      "label": "shortest path count"
    }
  ]
};
})();
