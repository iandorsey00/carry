// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["graph-theory"] = window.CarryPractice.sections["graph-theory"] || {};
  window.CarryPractice.sections["graph-theory"]["graph-theory.degree"] = {
  "id": "graph-theory.degree",
  "topic": "Graph Theory",
  "title": "Degree",
  "type": "concept",
  "figure": "graph-degree",
  "intro": [
    "The degree of a vertex counts how many edges touch it.",
    "A vertex with one edge touching it is often called a leaf in a tree.",
    "Degree is a local measurement: it describes one vertex at a time."
  ],
  "problems": [
    {
      "prompt": "If 4 edges touch vertex A, what is the degree of A?",
      "answer": "4",
      "choices": [
        {
          "value": "4",
          "label": "4"
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
          "value": "8",
          "label": "8"
        }
      ],
      "hint": "Degree counts touching edges.",
      "feedback": "Four touching edges means degree 4.",
      "label": "degree count"
    },
    {
      "prompt": "Degree describes which object?",
      "answer": "a vertex",
      "choices": [
        {
          "value": "a vertex",
          "label": "a vertex"
        },
        {
          "value": "an edge",
          "label": "an edge"
        }
      ],
      "hint": "Ask: degree of which point?",
      "feedback": "Degree is attached to a vertex.",
      "label": "degree object"
    },
    {
      "prompt": "A vertex with degree 1 has how many edges touching it?",
      "answer": "1",
      "choices": [
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "10",
          "label": "10"
        }
      ],
      "hint": "The degree is the count.",
      "feedback": "Degree 1 means one edge touches the vertex.",
      "label": "degree one"
    },
    {
      "prompt": "A star graph has center C joined to A, B, and D. What is the degree of C?",
      "answer": "3",
      "answers": [
        "3",
        "three"
      ],
      "hint": "Count the edges that touch C.",
      "label": "star center degree",
      "choices": [
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "4",
          "label": "4"
        }
      ]
    },
    {
      "prompt": "In that same star, what is the degree of A?",
      "answer": "1",
      "answers": [
        "1",
        "one"
      ],
      "hint": "A touches only the edge to the center.",
      "label": "star leaf degree",
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
        },
        {
          "value": "0",
          "label": "0"
        }
      ]
    },
    {
      "prompt": "A vertex with no edges at all has what degree?",
      "answer": "0",
      "answers": [
        "0",
        "zero"
      ],
      "hint": "Degree counts touching edges; here there are none.",
      "label": "isolated degree",
      "choices": [
        {
          "value": "0",
          "label": "0"
        },
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "-1",
          "label": "-1"
        },
        {
          "value": "undefined",
          "label": "undefined"
        }
      ]
    },
    {
      "prompt": "In a triangle graph, every vertex has what degree?",
      "answer": "2",
      "answers": [
        "2",
        "two"
      ],
      "hint": "Each corner touches two sides.",
      "label": "triangle degree",
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
          "value": "6",
          "label": "6"
        }
      ]
    },
    {
      "prompt": "Adding the degrees of all vertices counts every edge how many times?",
      "answer": "2",
      "answers": [
        "2",
        "twice"
      ],
      "hint": "Each edge touches two vertices, so it is counted at both ends.",
      "label": "handshake lemma",
      "choices": [
        {
          "value": "2",
          "label": "twice"
        },
        {
          "value": "1",
          "label": "once"
        },
        {
          "value": "0",
          "label": "not at all"
        },
        {
          "value": "4",
          "label": "four times"
        }
      ]
    }

  ]
};
})();
