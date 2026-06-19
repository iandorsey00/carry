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
          "value": "0",
          "label": "0"
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
          "value": "10",
          "label": "10"
        }
      ],
      "hint": "The degree is the count.",
      "feedback": "Degree 1 means one edge touches the vertex.",
      "label": "degree one"
    }
  ]
};
})();
