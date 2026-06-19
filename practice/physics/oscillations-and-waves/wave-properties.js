// Carry practice lesson data. Loaded before app.js by index.html.
(function registerCarryPracticeLesson() {
  window.CarryPractice = window.CarryPractice || { sections: {}, modes: {} };
  window.CarryPractice.sections["physics"] = window.CarryPractice.sections["physics"] || {};
  window.CarryPractice.sections["physics"]["physics.waves"] = {
  "id": "physics.waves",
  "topic": "Waves",
  "title": "Wave properties",
  "type": "concept",
  "figure": "physics-waves",
  "intro": [
    "A wave transfers energy through space or a medium.",
    "Wavelength is distance from one matching point to the next.",
    "Wave speed equals frequency times wavelength."
  ],
  "problems": [
    {
      "prompt": "In v = f lambda, what does f represent?",
      "answer": "frequency",
      "hint": "f is the number of cycles per second.",
      "label": "wave frequency"
    },
    {
      "prompt": "If frequency is 2 Hz and wavelength is 3 m, what is wave speed?",
      "answer": "6",
      "hint": "Use v = f lambda: 2 times 3.",
      "label": "wave speed"
    },
    {
      "prompt": "Does a wave transfer energy or mass overall?",
      "answer": "energy",
      "hint": "Waves carry energy without transporting matter overall.",
      "label": "wave transfer"
    }
  ]
};
})();
