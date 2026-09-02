# Carry Portfolio Capture

The screenshot set presents Carry as a learning system rather than a collection of pages:

1. Guided long addition shows the original low-friction arithmetic interaction.
2. Guided Differential Equations shows the university-course direction.
3. Math Scratchpad shows plain-text work rendered as readable notation.
4. Grapher shows the linked visual toolset.
5. Lesson Studio shows constrained, AI-assisted programmable lessons.
6. Sudoku shows the quieter recreational side of the product.

To retake the set, start Carry locally and run:

```sh
PORT=4173 node scripts/test-server.js
CARRY_URL=http://127.0.0.1:4173 npm run portfolio:capture
```

The script uses a fixed 1440 by 1000 viewport, light mode, reduced motion, clean local state, and 2x output for portfolio-quality PNGs. Review the images before publishing; screenshots are demonstrations, not visual regression baselines.

`screenshots/social-preview.png` is a 2:1 crop intended for GitHub's repository **Settings > General > Social preview** upload. The README uses the full long-addition screenshot.
