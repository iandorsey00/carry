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
    },
    {
      "prompt": "A tree with 5 vertices has how many edges?",
      "answer": "4",
      "answers": [
        "4",
        "four"
      ],
      "hint": "A tree always has one fewer edge than vertices.",
      "label": "tree edge count",
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
          "value": "3",
          "label": "3"
        },
        {
          "value": "6",
          "label": "6"
        }
      ]
    },
    {
      "prompt": "Adding one new edge between two vertices of a tree always creates what?",
      "answer": "a cycle",
      "answers": [
        "a cycle",
        "cycle",
        "loop"
      ],
      "hint": "The tree already had exactly one route between them.",
      "label": "extra edge",
      "choices": [
        {
          "value": "a cycle",
          "label": "a cycle"
        },
        {
          "value": "a component",
          "label": "a new component"
        },
        {
          "value": "a leaf",
          "label": "a leaf"
        }
      ]
    },
    {
      "prompt": "Removing any single edge from a tree does what?",
      "answer": "splits it",
      "answers": [
        "splits it",
        "disconnects it",
        "splits"
      ],
      "hint": "Trees have no spare connections.",
      "label": "remove edge",
      "choices": [
        {
          "value": "splits it",
          "label": "splits it in two"
        },
        {
          "value": "nothing",
          "label": "changes nothing"
        },
        {
          "value": "makes a cycle",
          "label": "makes a cycle"
        }
      ]
    },
    {
      "prompt": "How many different routes join any two vertices of a tree?",
      "answer": "1",
      "answers": [
        "1",
        "one",
        "exactly one"
      ],
      "hint": "A second route would close a loop.",
      "label": "unique route",
      "choices": [
        {
          "value": "1",
          "label": "exactly one"
        },
        {
          "value": "0",
          "label": "none"
        },
        {
          "value": "2",
          "label": "two"
        },
        {
          "value": "many",
          "label": "many"
        }
      ]
    },
    {
      "prompt": "Is a single vertex with no edges a tree?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "It is connected and has no cycles — the smallest tree.",
      "label": "trivial tree",
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
