(function () {
  const figures = window.CarryIntroFigures;
  if (!figures) return;
  const { register } = figures;

  // Arithmetic — number sense: drag a number, watch it choose its nearest hundred.
  register("number-line", (workspace, h) => {
    const svg = h.canvas({ height: 190, interactive: true });
    const map = h.mapper({ xMin: 300, xMax: 500, left: 44, right: 316 });
    const axisY = 118;
    h.line(svg, map.left - 10, axisY, map.right + 10, axisY);
    for (let value = 300; value <= 500; value += 20) {
      const major = value % 100 === 0;
      h.line(svg, map.x(value), axisY - (major ? 10 : 5), map.x(value), axisY + (major ? 10 : 5), major ? "geometry-line" : "geometry-grid-line");
      if (major) h.text(svg, String(value), map.x(value), axisY + 34, "geometry-label geometry-math", "middle");
    }
    const nearestMark = h.circle(svg, map.x(400), axisY, 6, "geometry-point result");
    const jump = h.path(svg, "", "geometry-line active");
    const note = h.text(svg, "", 180, 46, "geometry-note", "middle");
    const out = h.readout("");

    const update = (value) => {
      const nearest = Math.round(value / 100) * 100;
      nearestMark.setAttribute("cx", map.x(nearest));
      const from = map.x(value);
      const to = map.x(nearest);
      const lift = Math.min(40, Math.max(14, Math.abs(to - from) * 0.45));
      jump.setAttribute("d", `M ${from} ${axisY - 8} C ${from} ${axisY - 8 - lift} ${to} ${axisY - 8 - lift} ${to} ${axisY - 8}`);
      note.textContent = `${value} is ${Math.abs(value - nearest)} away from ${nearest}`;
      out.set(`${value} rounds to ${nearest}.`);
    };

    h.dragPoint(svg, {
      ariaLabel: "Number on the line",
      min: 300,
      max: 500,
      step: 1,
      value: 437,
      toXY: (value) => [map.x(value), axisY],
      fromXY: (x) => map.xMin + ((x - map.left) / (map.right - map.left)) * (map.xMax - map.xMin),
      valueText: (value) => `${value}, nearest hundred ${Math.round(value / 100) * 100}`,
      onChange: update
    });
    update(437);

    return h.figure({
      svg,
      readouts: [out],
      hint: "Drag the blue point along the line.",
      caption: "Every number lives between two hundreds. Rounding just asks: which neighbor is closer?"
    });
  });

  // Arithmetic + pre-algebra — integers: walk right to add, left to subtract.
  register("integer-line", (workspace, h) => {
    const svg = h.canvas({ height: 200, interactive: true });
    const map = h.mapper({ xMin: -10, xMax: 10, left: 34, right: 326 });
    const axisY = 130;
    h.line(svg, map.left - 8, axisY, map.right + 8, axisY);
    for (let value = -10; value <= 10; value += 1) {
      const major = value % 5 === 0;
      h.line(svg, map.x(value), axisY - (major ? 9 : 4), map.x(value), axisY + (major ? 9 : 4), major ? "geometry-line" : "geometry-grid-line");
      if (major) h.text(svg, String(value), map.x(value), axisY + 32, "geometry-label geometry-math", "middle");
    }
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    let start = -3;
    let walk = 5;
    const update = () => {
      dyn.replaceChildren();
      const sum = start + walk;
      if (start !== 0) h.arrow(dyn, map.x(0), axisY - 26, map.x(start), axisY - 26, "geometry-line");
      if (walk !== 0) h.arrow(dyn, map.x(start), axisY - 50, map.x(sum), axisY - 50, "geometry-line active");
      h.circle(dyn, map.x(start), axisY, 5, "geometry-point");
      h.circle(dyn, map.x(sum), axisY, 6, "geometry-point result");
      out.set(`<math>${start} ${walk < 0 ? "-" : "+"} ${Math.abs(walk)} = ${sum}</math> — start at ${start}, walk ${Math.abs(walk)} step${Math.abs(walk) === 1 ? "" : "s"} ${walk < 0 ? "left" : "right"}.`);
    };

    const startControl = h.slider({ label: "start", min: -9, max: 9, step: 1, value: start }, (value) => {
      start = value;
      update();
    });
    const walkControl = h.slider({ label: "walk", min: -9, max: 9, step: 1, value: walk, format: (value) => (value >= 0 ? `+${value}` : String(value)) }, (value) => {
      walk = value;
      update();
    });
    update();

    return h.figure({
      svg,
      readouts: [out],
      controls: [startControl, walkControl],
      caption: "Adding a positive number walks right; adding a negative walks left. Subtraction is the same walk, taken in reverse."
    });
  });

  // Arithmetic — fractions: recut the same bar, the amount never changes.
  register("fraction-bar", (workspace, h) => {
    const svg = h.canvas({ height: 210, interactive: true });
    const barX = 40;
    const barWidth = 280;
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    let parts = 4;
    let shaded = 3;
    const drawBar = (y, count, filled, cls) => {
      for (let index = 0; index < count; index += 1) {
        h.rect(dyn, barX + (index * barWidth) / count, y, barWidth / count, 34, index < filled ? `geometry-shape ${cls}` : "geometry-shape");
      }
    };
    let shadedControl;
    const update = () => {
      shaded = Math.min(shaded, parts);
      dyn.replaceChildren();
      drawBar(46, parts, shaded, "active");
      drawBar(126, parts * 2, shaded * 2, "result");
      h.text(dyn, "same bar, twice the cuts", barX, 112, "geometry-note");
      out.set(`<math>\\frac{${shaded}}{${parts}} = \\frac{${shaded * 2}}{${parts * 2}}</math> — the shading never moves; only its name changes.`);
      if (shadedControl) {
        shadedControl.input.max = String(parts);
        if (Number(shadedControl.input.value) > parts) shadedControl.input.value = String(parts);
      }
    };

    const partsControl = h.slider({ label: "pieces", min: 2, max: 10, step: 1, value: parts }, (value) => {
      parts = value;
      update();
    });
    shadedControl = h.slider({ label: "shaded", min: 0, max: parts, step: 1, value: shaded }, (value) => {
      shaded = value;
      update();
    });
    update();

    return h.figure({
      svg,
      readouts: [out],
      controls: [partsControl, shadedControl],
      caption: "A fraction is a fair-share recipe: cut the whole into equal pieces, take some. Equivalent fractions cut finer without taking more."
    });
  });

  // Arithmetic — decimals and percents share one hundred-grid.
  const hundredGrid = (mode) => (workspace, h) => {
    const svg = h.canvas({ height: 220, interactive: true });
    const cell = 16;
    const originX = 100;
    const originY = 26;
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (count) => {
      dyn.replaceChildren();
      for (let index = 0; index < 100; index += 1) {
        const row = Math.floor(index / 10);
        const col = index % 10;
        h.rect(dyn, originX + col * cell, originY + row * cell, cell - 2, cell - 2, index < count ? "geometry-shape active" : "geometry-shape", 2);
      }
      const value = count / 100;
      out.set(
        mode === "percent"
          ? `${count} of 100 squares — <math>${count}\\% = ${h.fmt(value)}</math>`
          : `${count} of 100 squares — <math>${h.fmt(value)} = \\frac{${count}}{100}</math>`
      );
    };

    const control = h.slider({ label: "squares", min: 0, max: 100, step: 1, value: 60 }, update);
    update(60);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption:
        mode === "percent"
          ? "Percent means per hundred — literally. Shade squares on a hundred-grid and you read the percent straight off the picture."
          : "A decimal is a fraction whose denominator is a power of ten. On a hundred-grid, 0.6 and 60 hundredths are the same picture."
    });
  };
  register("decimal-grid", hundredGrid("decimal"));
  register("percent-grid", hundredGrid("percent"));

  // Arithmetic — ratios: scale both parts together and the recipe stays true.
  register("ratio-bars", (workspace, h) => {
    const svg = h.canvas({ height: 190, interactive: true });
    const unit = 24;
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (times) => {
      dyn.replaceChildren();
      for (let index = 0; index < 2 * times; index += 1) {
        h.rect(dyn, 64 + index * unit, 48, unit - 3, 30, "geometry-shape active", 3);
      }
      for (let index = 0; index < 3 * times; index += 1) {
        h.rect(dyn, 64 + index * unit, 112, unit - 3, 30, "geometry-shape result", 3);
      }
      h.text(dyn, `${2 * times}`, 48, 70, "geometry-label geometry-math active", "end");
      h.text(dyn, `${3 * times}`, 48, 134, "geometry-label geometry-math result", "end");
      out.set(`<math>2 : 3 = ${2 * times} : ${3 * times}</math> — both parts grew ×${times}, so the mix stays the same.`);
    };

    const control = h.slider({ label: "batches", min: 1, max: 4, step: 1, value: 2, format: (value) => `×${value}` }, update);
    update(2);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "A ratio is a recipe, not an amount. Double every ingredient and you have more of it — but it is still the same recipe."
    });
  });

  // Pre-algebra — exponents: repeated multiplication, drawn as doubling.
  register("exponent-stack", (workspace, h) => {
    const svg = h.canvas({ height: 210, interactive: true });
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (power) => {
      dyn.replaceChildren();
      const count = 2 ** power;
      const columns = Math.min(count, 16);
      const rows = Math.ceil(count / columns);
      const cellSize = Math.min(24, 288 / columns);
      const originX = 180 - (columns * cellSize) / 2;
      const originY = 128 - (rows * cellSize) / 2;
      for (let index = 0; index < count; index += 1) {
        const row = Math.floor(index / columns);
        const col = index % columns;
        h.rect(dyn, originX + col * cellSize, originY + row * cellSize, cellSize - 2, cellSize - 2, "geometry-shape active", 2);
      }
      h.text(dyn, Array.from({ length: power }, () => "2").join(" × "), 180, 40, "geometry-label geometry-math", "middle");
      out.set(`<math>2^{${power}} = ${count}</math> — ${power} doubling${power === 1 ? "" : "s"} of a single square.`);
    };

    const control = h.slider({ label: "power", min: 1, max: 7, step: 1, value: 5 }, update);
    update(5);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "An exponent counts repeated multiplications. Each step does not add two squares — it doubles all of them. That is why powers explode."
    });
  });

  // Pre-algebra + algebra — equations as a balance scale.
  register("equation-balance", (workspace, h) => {
    const svg = h.canvas({ height: 220, interactive: true });
    const pivotX = 180;
    const beamY = 96;
    h.line(svg, pivotX, beamY, pivotX, 172);
    h.path(svg, `M ${pivotX - 34} 172 H ${pivotX + 34}`, "geometry-line");
    const beam = h.el("g");
    svg.append(beam);
    const out = h.readout("");

    const update = (value) => {
      const left = value + 7;
      const tilt = Math.max(-9, Math.min(9, (left - 12) * 3));
      beam.replaceChildren();
      beam.setAttribute("transform", `rotate(${tilt} ${pivotX} ${beamY})`);
      h.line(beam, pivotX - 110, beamY, pivotX + 110, beamY);
      h.path(beam, `M ${pivotX - 90} ${beamY} L ${pivotX - 110} ${beamY + 36} H ${pivotX - 70} Z`, "geometry-line active");
      h.path(beam, `M ${pivotX + 90} ${beamY} L ${pivotX + 70} ${beamY + 36} H ${pivotX + 110} Z`, "geometry-line result");
      h.text(beam, "x + 7", pivotX - 90, beamY - 14, "geometry-label geometry-math active", "middle");
      h.text(beam, "12", pivotX + 90, beamY - 14, "geometry-label geometry-math result", "middle");
      out.set(
        left === 12
          ? `<math>${value} + 7 = 12</math> — balanced. <math>x = ${value}</math> is the solution.`
          : `<math>${value} + 7 = ${left}</math>, not 12 — the scale tips ${left > 12 ? "left" : "right"}.`
      );
    };

    const control = h.slider({ label: "try x =", min: 0, max: 10, step: 1, value: 3 }, update);
    update(3);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "An equation is a balanced scale. Solving means finding the x that keeps it level — and whatever you do to one side, you owe the other."
    });
  });

  // Pre-algebra — inequalities: a claim that is true for a whole region.
  register("inequality-line", (workspace, h) => {
    const svg = h.canvas({ height: 190, interactive: true });
    const map = h.mapper({ xMin: -2, xMax: 12, left: 36, right: 324 });
    const axisY = 118;
    h.line(svg, map.left - 8, axisY, map.right + 8, axisY);
    for (let value = -2; value <= 12; value += 2) {
      h.line(svg, map.x(value), axisY - 6, map.x(value), axisY + 6, "geometry-grid-line");
      h.text(svg, String(value), map.x(value), axisY + 30, "geometry-label geometry-math", "middle");
    }
    h.path(svg, `M ${map.x(5)} ${axisY} H ${map.right + 2}`, "geometry-line result");
    h.path(svg, `M ${map.right - 6} ${axisY - 8} L ${map.right + 6} ${axisY} L ${map.right - 6} ${axisY + 8}`, "geometry-line result");
    const boundary = h.circle(svg, map.x(5), axisY, 7, "geometry-shape result");
    boundary.setAttribute("fill", "var(--surface)");
    h.text(svg, "x > 5", map.x(5), 48, "geometry-label geometry-math result", "middle");
    const out = h.readout("");

    const update = (value) => {
      out.set(
        value > 5
          ? `<math>${value} > 5</math> is true — ${value} lives in the shaded region.`
          : `<math>${value} > 5</math> is false — ${value} is outside${value === 5 ? " (the open circle keeps 5 itself out)" : ""}.`
      );
    };

    h.dragPoint(svg, {
      ariaLabel: "Test value for x",
      min: -2,
      max: 12,
      step: 1,
      value: 7,
      toXY: (value) => [map.x(value), axisY],
      fromXY: (x) => map.xMin + ((x - map.left) / (map.right - map.left)) * (map.xMax - map.xMin),
      valueText: (value) => `x = ${value}, ${value > 5 ? "inside" : "outside"} the solution set`,
      onChange: update
    });
    update(7);

    return h.figure({
      svg,
      readouts: [out],
      hint: "Drag the point to test values.",
      caption: "An equation is satisfied by a point; an inequality by a whole region. The open circle marks the boundary that almost — but not quite — counts."
    });
  });

  // Pre-algebra — coordinate plane: slope is a promise about every step.
  register("coordinate-plane", (workspace, h) => {
    const svg = h.canvas({ height: 240, interactive: true });
    const map = h.mapper({ xMin: -6, xMax: 6, yMin: -6, yMax: 6, left: 40, right: 320, top: 16, bottom: 216 });
    for (let value = -6; value <= 6; value += 2) {
      h.line(svg, map.x(value), map.top, map.x(value), map.bottom, "geometry-grid-line");
      h.line(svg, map.left, map.y(value), map.right, map.y(value), "geometry-grid-line");
    }
    h.line(svg, map.left, map.y(0), map.right, map.y(0));
    h.line(svg, map.x(0), map.top, map.x(0), map.bottom);
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    let slope = 1;
    let intercept = -2;
    const update = () => {
      dyn.replaceChildren();
      h.plot(dyn, (x) => {
        const y = slope * x + intercept;
        return y < -6 || y > 6 ? NaN : y;
      }, map, { samples: 60 });
      h.circle(dyn, map.x(0), map.y(intercept), 5, "geometry-point result");
      if (Math.abs(intercept + slope) <= 6) {
        h.path(dyn, `M ${map.x(0)} ${map.y(intercept)} H ${map.x(1)} V ${map.y(intercept + slope)}`, "geometry-line result");
      }
      const slopeText = slope === 1 ? "" : slope === -1 ? "-" : h.fmt(slope, 1);
      const interceptText = intercept < 0 ? `- ${Math.abs(intercept)}` : `+ ${intercept}`;
      const equation = slope === 0 ? `y = ${intercept}` : `y = ${slopeText}x ${interceptText}`;
      out.set(`<math>${equation}</math> — start at ${intercept}, climb ${h.fmt(slope, 1)} per step right.`);
    };

    const slopeControl = h.slider({ label: "slope m", min: -3, max: 3, step: 0.5, value: slope, format: (value) => h.fmt(value, 1) }, (value) => {
      slope = value;
      update();
    });
    const interceptControl = h.slider({ label: "intercept b", min: -5, max: 5, step: 1, value: intercept }, (value) => {
      intercept = value;
      update();
    });
    update();

    return h.figure({
      svg,
      readouts: [out],
      controls: [slopeControl, interceptControl],
      caption: "A line is the graph of a promise: every step right climbs exactly m. The intercept b just says where the promise starts."
    });
  });

  // Pre-algebra + algebra — combining like terms as tiles.
  const likeTermsFigure = (termLabel, caption) => (workspace, h) => {
    const svg = h.canvas({ height: 200, interactive: true });
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    let first = 2;
    let second = 3;
    const tile = (x, y, cls) => {
      h.rect(dyn, x, y, 44, 30, cls, 4);
      h.text(dyn, termLabel, x + 22, y + 21, "geometry-note", "middle");
    };
    const update = () => {
      dyn.replaceChildren();
      for (let index = 0; index < first; index += 1) tile(48 + index * 52, 40, "geometry-shape active");
      for (let index = 0; index < second; index += 1) tile(48 + (first + index) * 52 + 14, 40, "geometry-shape");
      for (let index = 0; index < first + second; index += 1) tile(48 + index * 52, 122, "geometry-shape result");
      const exp = termLabel === "x²" ? "x^2" : "x";
      out.set(`<math>${first}${exp} + ${second}${exp} = ${first + second}${exp}</math> — just count the tiles.`);
    };

    const firstControl = h.slider({ label: "first", min: 1, max: 3, step: 1, value: first }, (value) => {
      first = value;
      update();
    });
    const secondControl = h.slider({ label: "second", min: 1, max: 3, step: 1, value: second }, (value) => {
      second = value;
      update();
    });
    update();

    return h.figure({
      svg,
      readouts: [out],
      controls: [firstControl, secondControl],
      caption
    });
  };
  register("expression-terms", likeTermsFigure("x", "Like terms are tiles of the same shape. You can count them together — but an x-tile and a number-tile never merge."));
  register("polynomial-terms", likeTermsFigure("x²", "Same power, same shape of tile. Combining like terms is literally counting — which is why x² and x refuse to combine."));

  // Algebra — systems: two promises, one point that keeps both.
  register("system-intersection", (workspace, h) => {
    const svg = h.canvas({ height: 240, interactive: true });
    const map = h.mapper({ xMin: -6, xMax: 6, yMin: -6, yMax: 6, left: 40, right: 320, top: 16, bottom: 216 });
    for (let value = -6; value <= 6; value += 2) {
      h.line(svg, map.x(value), map.top, map.x(value), map.bottom, "geometry-grid-line");
      h.line(svg, map.left, map.y(value), map.right, map.y(value), "geometry-grid-line");
    }
    h.line(svg, map.left, map.y(0), map.right, map.y(0));
    h.line(svg, map.x(0), map.top, map.x(0), map.bottom);
    h.plot(svg, (x) => {
      const y = x + 1;
      return y < -6 || y > 6 ? NaN : y;
    }, map, { samples: 60, className: "geometry-line" });
    h.text(svg, "y = x + 1", map.x(2.6), map.y(4.6), "geometry-label geometry-math");
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (c) => {
      dyn.replaceChildren();
      h.plot(dyn, (x) => {
        const y = -x + c;
        return y < -6 || y > 6 ? NaN : y;
      }, map, { samples: 60, className: "geometry-line active" });
      const solutionX = (c - 1) / 2;
      const solutionY = solutionX + 1;
      h.circle(dyn, map.x(solutionX), map.y(solutionY), 6, "geometry-point result");
      out.set(`<math>y = -x + ${c}</math> meets it at <math>(${h.fmt(solutionX, 1)}, ${h.fmt(solutionY, 1)})</math> — the one point both lines agree on.`);
    };

    const control = h.slider({ label: "shift c", min: -4, max: 6, step: 1, value: 3 }, update);
    update(3);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "Each equation draws every point that keeps its promise. Solving a system means finding the point that keeps both promises at once."
    });
  });

  // Algebra — quadratics: roots are where the parabola touches ground.
  register("quadratic-roots", (workspace, h) => {
    const svg = h.canvas({ height: 240, interactive: true });
    const map = h.mapper({ xMin: -6, xMax: 6, yMin: -8, yMax: 10, left: 40, right: 320, top: 14, bottom: 218 });
    h.line(svg, map.left, map.y(0), map.right, map.y(0));
    h.line(svg, map.x(0), map.top, map.x(0), map.bottom);
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    let rootA = -1;
    let rootB = 3;
    const update = () => {
      dyn.replaceChildren();
      h.plot(dyn, (x) => {
        const y = (x - rootA) * (x - rootB);
        return y < -8 || y > 10 ? NaN : y;
      }, map, { samples: 140 });
      h.circle(dyn, map.x(rootA), map.y(0), 6, "geometry-point result");
      h.circle(dyn, map.x(rootB), map.y(0), 6, "geometry-point result");
      const sign = (value) => (value < 0 ? `+ ${Math.abs(value)}` : `- ${value}`);
      out.set(
        rootA === rootB
          ? `<math>(x ${sign(rootA)})^2 = 0</math> — a double root: the parabola kisses the axis at ${rootA}.`
          : `<math>(x ${sign(rootA)})(x ${sign(rootB)}) = 0</math> when <math>x = ${rootA}</math> or <math>x = ${rootB}</math>.`
      );
    };

    const controlA = h.slider({ label: "root p", min: -5, max: 5, step: 1, value: rootA }, (value) => {
      rootA = value;
      update();
    });
    const controlB = h.slider({ label: "root q", min: -5, max: 5, step: 1, value: rootB }, (value) => {
      rootB = value;
      update();
    });
    update();

    return h.figure({
      svg,
      readouts: [out],
      controls: [controlA, controlB],
      caption: "Factoring reads the graph: the roots are exactly where the parabola touches the axis, because a product is zero only when a factor is."
    });
  });

  // Algebra — factoring: an area model, the quiet reason FOIL works.
  register("factoring-pairs", (workspace, h) => {
    const svg = h.canvas({ height: 230 });
    const originX = 96;
    const originY = 44;
    const wide = 118;
    const tall = 76;
    const narrow = 52;
    const cell = (x, y, width, height, cls, label) => {
      h.rect(svg, x, y, width, height, cls, 4);
      h.text(svg, label, x + width / 2, y + height / 2 + 6, "geometry-label geometry-math", "middle");
    };
    cell(originX, originY, wide, tall, "geometry-shape active", "x²");
    cell(originX + wide, originY, narrow + 14, tall, "geometry-shape", "3x");
    cell(originX, originY + tall, wide, narrow, "geometry-shape", "2x");
    cell(originX + wide, originY + tall, narrow + 14, narrow, "geometry-shape result", "6");
    h.text(svg, "x", originX + wide / 2, originY - 10, "geometry-label geometry-math", "middle");
    h.text(svg, "+ 3", originX + wide + (narrow + 14) / 2, originY - 10, "geometry-label geometry-math", "middle");
    h.text(svg, "x", originX - 14, originY + tall / 2 + 6, "geometry-label geometry-math", "end");
    h.text(svg, "+ 2", originX - 14, originY + tall + narrow / 2 + 6, "geometry-label geometry-math", "end");

    return [
      h.figure({
        svg,
        caption: "Factoring is un-multiplying: find the side lengths of a rectangle whose area is the polynomial. The four regions are the four FOIL terms."
      }),
      h.mathCard(["x^2 + 5x + 6 = (x + 2)(x + 3)", "2 + 3 = 5 \\quad 2 × 3 = 6"], "Two numbers that add to the middle and multiply to the end.")
    ];
  });
})();
