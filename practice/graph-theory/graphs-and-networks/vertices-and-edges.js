// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["graph-theory"] = window.CarryPractice.sections["graph-theory"] || {};
  window.CarryPractice.sections["graph-theory"]["graph-theory.vertices-edges"] = {
  "id": "graph-theory.vertices-edges",
  "topic": "Graph Theory",
  "title": "Vertices and edges",
  "type": "concept",
  "figure": "graph-vertices-edges",
  "intro": [
    "A graph is a set of objects together with connections between them.",
    "The objects are vertices, also called nodes.",
    "The connections are edges."
  ],
  "problems": [
    {
      "prompt": "In graph theory, what is another common name for a vertex?",
      "answer": "node",
      "choices": [
        {
          "value": "node",
          "label": "node"
        },
        {
          "value": "edge",
          "label": "edge"
        }
      ],
      "hint": "Vertices are the points of a graph; many network diagrams call them nodes.",
      "feedback": "A vertex is a node: one object in the graph.",
      "label": "vertex vocabulary"
    },
    {
      "prompt": "Which part of a graph shows a connection between two vertices?",
      "answer": "edge",
      "choices": [
        {
          "value": "edge",
          "label": "edge"
        },
        {
          "value": "degree",
          "label": "degree"
        },
        {
          "value": "tree",
          "label": "tree"
        },
        {
          "value": "cycle",
          "label": "cycle"
        }
      ],
      "hint": "Edges are the lines or links joining vertices.",
      "feedback": "An edge is the connection between vertices.",
      "label": "edge vocabulary"
    },
    {
      "prompt": "A graph has 5 vertices and 4 edges. How many nodes does it have?",
      "answer": "5",
      "choices": [
        {
          "value": "5",
          "label": "5"
        },
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "9",
          "label": "9"
        },
        {
          "value": "1",
          "label": "1"
        }
      ],
      "hint": "Nodes and vertices mean the same thing here.",
      "feedback": "The graph has 5 nodes because it has 5 vertices.",
      "label": "node count"
    },
    {
      "prompt": "A triangle drawn as a graph has how many edges?",
      "answer": "3",
      "answers": [
        "3",
        "three"
      ],
      "hint": "One edge per side: AB, BC, and CA.",
      "label": "triangle edges",
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
      ]
    },
    {
      "prompt": "Can a single edge connect three vertices in an ordinary graph?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "An edge joins exactly two endpoints.",
      "label": "edge endpoints",
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
      "prompt": "A graph with 6 vertices and 0 edges: is it still a graph?",
      "answer": "yes",
      "answers": [
        "yes",
        "true"
      ],
      "hint": "The edge set is allowed to be empty.",
      "label": "empty edge set",
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
      "prompt": "Two cities joined by a road: which is the edge?",
      "answer": "the road",
      "answers": [
        "the road",
        "road"
      ],
      "hint": "Objects are vertices; connections are edges.",
      "label": "road model",
      "choices": [
        {
          "value": "the road",
          "label": "the road"
        },
        {
          "value": "the cities",
          "label": "the cities"
        }
      ]
    },
    {
      "prompt": "In a friendship network, what do the vertices represent?",
      "answer": "people",
      "answers": [
        "people",
        "the people"
      ],
      "hint": "The connections are the friendships.",
      "label": "network vertices",
      "choices": [
        {
          "value": "people",
          "label": "the people"
        },
        {
          "value": "friendships",
          "label": "the friendships"
        },
        {
          "value": "names",
          "label": "the names"
        },
        {
          "value": "messages",
          "label": "the messages"
        }
      ]
    }

  ]
};
})();
