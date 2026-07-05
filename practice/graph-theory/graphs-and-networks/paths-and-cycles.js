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
    },
    {
      "prompt": "Walking A to B to C to D uses how many edges?",
      "answer": "3",
      "answers": [
        "3",
        "three"
      ],
      "hint": "Count the hops, not the vertices.",
      "label": "count hops",
      "choices": [
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "5",
          "label": "5"
        }
      ]
    },
    {
      "prompt": "A path visiting 5 vertices without repeating uses how many edges?",
      "answer": "4",
      "answers": [
        "4",
        "four"
      ],
      "hint": "Edges are always one fewer than the vertices on a simple path.",
      "label": "vertices minus one",
      "choices": [
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "6",
          "label": "6"
        },
        {
          "value": "3",
          "label": "3"
        }
      ]
    },
    {
      "prompt": "What is the shortest possible cycle in a simple graph?",
      "answer": "triangle",
      "answers": [
        "triangle",
        "a triangle",
        "3-cycle",
        "length 3"
      ],
      "hint": "Two vertices cannot loop without reusing their edge.",
      "label": "shortest cycle",
      "choices": [
        {
          "value": "triangle",
          "label": "a triangle"
        },
        {
          "value": "square",
          "label": "a square"
        },
        {
          "value": "single edge",
          "label": "a single edge"
        }
      ]
    },
    {
      "prompt": "Does a cycle end at the vertex where it started?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Returning to the start is what makes it a cycle.",
      "label": "cycle closes",
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
      "prompt": "Between two vertices, route one uses 4 edges and route two uses 6. Which is shorter?",
      "answer": "route one",
      "answers": [
        "route one",
        "one",
        "the first"
      ],
      "hint": "Fewer edges means a shorter path.",
      "label": "compare routes",
      "choices": [
        {
          "value": "route one",
          "label": "route one"
        },
        {
          "value": "route two",
          "label": "route two"
        }
      ]
    }

  ]
};
})();
