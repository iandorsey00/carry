// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["geometry"] = window.CarryPractice.sections["geometry"] || {};
  window.CarryPractice.sections["geometry"]["geometry.triangles"] = {
  "id": "geometry.triangles",
  "topic": "Geometry",
  "title": "Triangles",
  "type": "concept",
  "figure": "geometry-triangle",
  "intro": [
    "The triangle is geometry's sturdiest object: three sides lock its shape, and its angles obey one unbreakable rule.",
    "Inside every triangle the three angles total exactly 180° — no exceptions, whatever the shape or size.",
    "Sides and angles mirror each other: equal sides sit opposite equal angles."
],
  "problems": [
    {
      "prompt": "A triangle has angles 60 degrees and 70 degrees. What is the third angle?",
      "answer": "50",
      "answers": [
        "50",
        "50degrees"
      ],
      "hint": "Subtract 60 and 70 from 180.",
      "label": "third angle"
    },
    {
      "prompt": "A triangle with three equal sides is called what?",
      "answer": "equilateral",
      "hint": "Equal sides means equilateral.",
      "label": "triangle type",
      "choices": [
        {
          "value": "equilateral",
          "label": "equilateral"
        },
        {
          "value": "acute",
          "label": "acute"
        },
        {
          "value": "right",
          "label": "right"
        },
        {
          "value": "obtuse",
          "label": "obtuse"
        }
      ]
    },
    {
      "prompt": "A right triangle has one angle of 90 degrees and another of 35 degrees. What is the third angle?",
      "answer": "55",
      "answers": [
        "55",
        "55degrees"
      ],
      "hint": "180 - 90 - 35 = 55.",
      "label": "right triangle angle"
    },
    {
      "prompt": "A triangle has angles 40 degrees and 65 degrees. What is the third angle?",
      "answer": "75",
      "answers": [
        "75",
        "75degrees"
      ],
      "hint": "Subtract 40 and 65 from 180.",
      "label": "third angle",
      "feedback": "Triangle angles always total 180 degrees."
    },
    {
      "prompt": "A triangle with two equal sides is called what?",
      "answer": "isosceles",
      "hint": "Two equal sides means isosceles.",
      "label": "triangle type",
      "feedback": "Match the side pattern to the name.",
      "choices": [
        {
          "value": "isosceles",
          "label": "isosceles"
        },
        {
          "value": "acute",
          "label": "acute"
        },
        {
          "value": "right",
          "label": "right"
        },
        {
          "value": "obtuse",
          "label": "obtuse"
        }
      ]
    },
    {
      "prompt": "Can a triangle have angles 90, 60, and 40 degrees?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Those angles add to 190.",
      "label": "triangle possibility",
      "feedback": "Check whether the angles add to 180.",
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
      "prompt": "A triangle with all three sides different lengths is called what?",
      "answer": "scalene",
      "answers": [
        "scalene"
      ],
      "hint": "No sides match at all.",
      "label": "scalene",
      "choices": [
        {
          "value": "scalene",
          "label": "scalene"
        },
        {
          "value": "isosceles",
          "label": "isosceles"
        },
        {
          "value": "equilateral",
          "label": "equilateral"
        },
        {
          "value": "right",
          "label": "right"
        }
      ]
    },
    {
      "prompt": "Can a triangle have two right angles?",
      "answer": "no",
      "answers": [
        "no",
        "false"
      ],
      "hint": "Two right angles alone would spend the whole 180 degrees.",
      "label": "two right angles",
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
