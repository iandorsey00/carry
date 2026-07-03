(function registerSignalBoxesExploration() {
  window.CarryExplorations.register({
    id: "2026-06-21-signal-boxes",
    date: "2026-06-21",
    title: "The Signal Box Puzzle",
    deck: "A friendly binary search puzzle: ten lights can identify one box out of 1024.",
    tags: ["Binary", "Information", "Puzzle"],
    figure: {
      type: "binary-signature",
      signature: "1010100101",
      caption: "Each light has a place value. Add the lit values to find the hidden box."
    },
    sections: [
      {
        heading: "Puzzle",
        body: [
          "A studio has 1024 signal boxes numbered 0 through 1023. Exactly one box is sending a test pulse.",
          "There are ten sensors. Each sensor listens for one binary place value: 512, 256, 128, 64, 32, 16, 8, 4, 2, and 1.",
          "The sensor board shows the signature 1010100101. Which box is sending the pulse?"
        ]
      },
      {
        heading: "Think First",
        body: [
          "Treat each 1 as a lit sensor and each 0 as an unlit sensor.",
          "Only add the place values whose sensors are lit."
        ]
      }
    ],
    hiddenResponse: {
      title: "Hidden Response",
      answer: "The box is 677.",
      body: [
        "The lit places are 512, 128, 32, 4, and 1.",
        "Their sum is 512 + 128 + 32 + 4 + 1 = 677."
      ],
      interactive: {
        type: "binary-signature",
        signature: "1010100101",
        note: "Toggle lights to see how a ten-bit signature names a box."
      }
    }
  });
})();
