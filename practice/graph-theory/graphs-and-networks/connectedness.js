// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["graph-theory"] = window.CarryPractice.sections["graph-theory"] || {};
  window.CarryPractice.sections["graph-theory"]["graph-theory.connectedness"] = {
  "id": "graph-theory.connectedness",
  "topic": "Graph Theory",
  "title": "Connectedness",
  "type": "concept",
  "figure": "graph-connectedness",
  "intro": [
    "A graph is connected if every vertex can be reached from every other vertex.",
    "If a graph is split into separated pieces, each piece is called a component.",
    "Connectedness is about whether paths exist, not how short they are."
  ],
  "problems": [
    {
      "prompt": "If no path connects A to B, are A and B in the same connected component?",
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
      "hint": "Same component means there is a path between them.",
      "feedback": "Without a path, the vertices are in different components.",
      "label": "component membership",
      "answers": [
        "false"
      ]
    },
    {
      "prompt": "A graph with two separated pieces has how many connected components?",
      "answer": "2",
      "choices": [
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "0",
          "label": "0"
        }
      ],
      "hint": "Each separated piece is one component.",
      "feedback": "Two separated pieces make two connected components.",
      "label": "component count"
    },
    {
      "prompt": "Connectedness asks whether what exists between vertices?",
      "answer": "a path",
      "choices": [
        {
          "value": "a path",
          "label": "a path"
        },
        {
          "value": "only a label",
          "label": "only a label"
        }
      ],
      "hint": "Connected vertices can be reached by following edges.",
      "feedback": "Connectedness is about whether a path exists.",
      "label": "connected path"
    },
    {
      "prompt": "Vertices A, B, C with edges AB and BC: how many components?",
      "answer": "1",
      "answers": [
        "1",
        "one"
      ],
      "hint": "A reaches C through B, so everything is one piece.",
      "label": "one piece",
      "choices": [
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "3",
          "label": "3"
        }
      ]
    },
    {
      "prompt": "Add an isolated vertex D to that graph. Now how many components?",
      "answer": "2",
      "answers": [
        "2",
        "two"
      ],
      "hint": "D has no edges, so it is a piece of its own.",
      "label": "isolated component",
      "choices": [
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "4",
          "label": "4"
        }
      ]
    },
    {
      "prompt": "A connected graph has how many components?",
      "answer": "1",
      "answers": [
        "1",
        "one"
      ],
      "hint": "Connected means the whole graph is one piece.",
      "label": "connected components",
      "choices": [
        {
          "value": "1",
          "label": "exactly 1"
        },
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "2",
          "label": "at least 2"
        }
      ]
    },
    {
      "prompt": "Does a long winding path between A and B still make them connected?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "Connectedness only asks whether a path exists, not how short it is.",
      "label": "long path counts",
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
      "prompt": "A graph with 6 vertices and no edges has how many components?",
      "answer": "6",
      "answers": [
        "6",
        "six"
      ],
      "hint": "With no connections, every vertex stands alone.",
      "label": "all isolated",
      "choices": [
        {
          "value": "6",
          "label": "6"
        },
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "5",
          "label": "5"
        }
      ]
    }

  ]
};
})();
