(function () {
  const figures = window.CarryIntroFigures;
  if (!figures) return;
  const { register } = figures;
  const RAD = Math.PI / 180;

  // Geometry — angles: two neighbors on a straight line always share 180°.
  register("geometry-angles", (workspace, h) => {
    const svg = h.canvas({ height: 200, interactive: true });
    const cx = 180;
    const cy = 150;
    const r = 108;
    h.line(svg, cx - 140, cy, cx + 140, cy);
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (deg) => {
      dyn.replaceChildren();
      const px = cx + r * Math.cos(deg * RAD);
      const py = cy - r * Math.sin(deg * RAD);
      h.line(dyn, cx, cy, px, py, "geometry-line active");
      const arc = (from, to, radius, cls) => {
        const x1 = cx + radius * Math.cos(from * RAD);
        const y1 = cy - radius * Math.sin(from * RAD);
        const x2 = cx + radius * Math.cos(to * RAD);
        const y2 = cy - radius * Math.sin(to * RAD);
        h.path(dyn, `M ${x1} ${y1} A ${radius} ${radius} 0 ${to - from > 180 ? 1 : 0} 0 ${x2} ${y2}`, cls);
      };
      arc(0, deg, 34, "geometry-arc active");
      arc(deg, 180, 46, "geometry-arc result");
      h.text(dyn, `${deg}°`, cx + 66 * Math.cos((deg / 2) * RAD), cy - 66 * Math.sin((deg / 2) * RAD) + 6, "geometry-label geometry-math active", "middle");
      h.text(dyn, `${180 - deg}°`, cx + 78 * Math.cos(((deg + 180) / 2) * RAD), cy - 78 * Math.sin(((deg + 180) / 2) * RAD) + 6, "geometry-label geometry-math result", "middle");
      out.set(`<math>${deg}° + ${180 - deg}° = 180°</math> — a straight line is half a turn, however you split it.`);
    };

    h.dragPoint(svg, {
      ariaLabel: "Angle of the tilted ray",
      min: 15,
      max: 165,
      step: 5,
      value: 120,
      toXY: (deg) => [cx + r * Math.cos(deg * RAD), cy - r * Math.sin(deg * RAD)],
      fromXY: (x, y) => Math.atan2(cy - y, x - cx) / RAD,
      valueText: (deg) => `${deg} degrees, partner ${180 - deg} degrees`,
      onChange: update
    });
    update(120);

    return h.figure({
      svg,
      readouts: [out],
      hint: "Drag the ray.",
      caption: "Angles on a straight line are partners: whatever one takes, the other gets the rest of 180°."
    });
  });

  // Geometry — triangles: pick two angles, the third has no choice.
  register("geometry-triangle", (workspace, h) => {
    const svg = h.canvas({ height: 230, interactive: true });
    const leftX = 60;
    const rightX = 300;
    const baseY = 196;
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    let a = 55;
    let b = 65;
    let controlA;
    let controlB;
    const update = () => {
      dyn.replaceChildren();
      const tanA = Math.tan(a * RAD);
      const tanB = Math.tan(b * RAD);
      const base = rightX - leftX;
      const height = Math.min(160, (base * tanA * tanB) / (tanA + tanB));
      const apexX = leftX + height / tanA;
      h.path(dyn, `M ${leftX} ${baseY} L ${rightX} ${baseY} L ${apexX} ${baseY - height} Z`, "geometry-shape");
      const c = 180 - a - b;
      h.text(dyn, `${a}°`, leftX + 32, baseY - 12, "geometry-label geometry-math active");
      h.text(dyn, `${b}°`, rightX - 32, baseY - 12, "geometry-label geometry-math active", "end");
      h.text(dyn, `${c}°`, apexX, baseY - height - 10, "geometry-label geometry-math result", "middle");
      out.set(`<math>${a}° + ${b}° + ${c}° = 180°</math> — choose two corners and the third is decided for you.`);
    };

    controlA = h.slider({ label: "angle A", min: 20, max: 110, step: 5, value: a, format: (v) => `${v}°` }, (value) => {
      a = value;
      if (a + b > 150) controlB.set(150 - a);
      update();
    });
    controlB = h.slider({ label: "angle B", min: 20, max: 110, step: 5, value: b, format: (v) => `${v}°` }, (value) => {
      b = value;
      if (a + b > 150) controlA.set(150 - b);
      update();
    });
    update();

    return h.figure({
      svg,
      readouts: [out],
      controls: [controlA, controlB],
      caption: "A triangle's three angles share one fixed budget: 180°. That is why two angles always give away the third."
    });
  });

  // Geometry — circles: one number controls everything.
  register("geometry-circle", (workspace, h) => {
    const svg = h.canvas({ height: 240, interactive: true });
    const cx = 180;
    const cy = 118;
    const scale = 17;
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (r) => {
      dyn.replaceChildren();
      h.circle(dyn, cx, cy, r * scale, "geometry-shape active");
      h.line(dyn, cx - r * scale, cy, cx + r * scale, cy, "geometry-line result");
      h.line(dyn, cx, cy, cx + r * scale * Math.cos(0.9), cy - r * scale * Math.sin(0.9), "geometry-line");
      h.text(dyn, "r", cx + (r * scale * Math.cos(0.9)) / 2 + 10, cy - (r * scale * Math.sin(0.9)) / 2, "geometry-label geometry-math");
      h.text(dyn, "d", cx, cy + 22, "geometry-label geometry-math result", "middle");
      out.set(`<math>r = ${r}</math>, so <math>d = ${2 * r}</math> and <math>C = \\pi d ≈ ${h.fmt(Math.PI * 2 * r, 1)}</math>.`);
    };

    const control = h.slider({ label: "radius r", min: 1, max: 6, step: 1, value: 4 }, update);
    update(4);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "Every circle is the same circle at a different size. One number — the radius — runs the diameter, the circumference, everything. That is why π gets to be a single constant."
    });
  });

  // Geometry — area and volume: area is honest counting.
  register("geometry-area-volume", (workspace, h) => {
    const svg = h.canvas({ height: 230, interactive: true });
    const cell = 22;
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    let length = 8;
    let width = 3;
    const update = () => {
      dyn.replaceChildren();
      const originX = 180 - (length * cell) / 2;
      const originY = 118 - (width * cell) / 2;
      for (let row = 0; row < width; row += 1) {
        for (let col = 0; col < length; col += 1) {
          h.rect(dyn, originX + col * cell, originY + row * cell, cell - 2, cell - 2, "geometry-shape active", 2);
        }
      }
      h.text(dyn, String(length), 180, originY - 10, "geometry-label geometry-math", "middle");
      h.text(dyn, String(width), originX - 14, 118 + 6, "geometry-label geometry-math", "end");
      out.set(`<math>${length} × ${width} = ${length * width}</math> unit squares — that product is the area.`);
    };

    const lengthControl = h.slider({ label: "length", min: 1, max: 12, step: 1, value: length }, (value) => {
      length = value;
      update();
    });
    const widthControl = h.slider({ label: "width", min: 1, max: 6, step: 1, value: width }, (value) => {
      width = value;
      update();
    });
    update();

    return h.figure({
      svg,
      readouts: [out],
      controls: [lengthControl, widthControl],
      caption: "Area is honest counting: rows of unit squares, multiplied. Volume plays the identical game one dimension up, with unit cubes."
    });
  });

  // Trigonometry — right triangles: the ratios belong to the angle.
  register("trig-right-triangle", (workspace, h) => {
    const svg = h.canvas({ height: 240, interactive: true });
    const ax = 66;
    const ay = 204;
    const hyp = 200;
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (deg) => {
      dyn.replaceChildren();
      const adj = hyp * Math.cos(deg * RAD);
      const opp = hyp * Math.sin(deg * RAD);
      h.path(dyn, `M ${ax} ${ay} L ${ax + adj} ${ay} L ${ax + adj} ${ay - opp} Z`, "geometry-shape");
      h.path(dyn, `M ${ax + adj - 14} ${ay} V ${ay - 14} H ${ax + adj}`, "geometry-line");
      h.path(dyn, `M ${ax + 38} ${ay} A 38 38 0 0 0 ${ax + 38 * Math.cos(deg * RAD)} ${ay - 38 * Math.sin(deg * RAD)}`, "geometry-arc active");
      h.text(dyn, "θ", ax + 54, ay - 12, "geometry-label geometry-math active");
      h.text(dyn, "adjacent", ax + adj / 2, ay + 22, "geometry-note", "middle");
      h.text(dyn, "opposite", ax + adj + 8, ay - opp / 2, "geometry-note");
      h.text(dyn, "hypotenuse", ax + adj / 2 - 24, ay - opp / 2 - 14, "geometry-note", "middle");
      out.set(`<math>θ = ${deg}°</math> — <math>\\sin θ = ${h.fmt(Math.sin(deg * RAD))}</math>, <math>\\cos θ = ${h.fmt(Math.cos(deg * RAD))}</math>, <math>\\tan θ = ${h.fmt(Math.tan(deg * RAD))}</math>.`);
    };

    h.dragPoint(svg, {
      ariaLabel: "Angle θ",
      min: 15,
      max: 75,
      step: 5,
      value: 35,
      toXY: (deg) => [ax + hyp * Math.cos(deg * RAD), ay - hyp * Math.sin(deg * RAD)],
      fromXY: (x, y) => Math.atan2(ay - y, x - ax) / RAD,
      valueText: (deg) => `theta ${deg} degrees`,
      onChange: update
    });
    update(35);

    return h.figure({
      svg,
      readouts: [out],
      hint: "Drag the top corner.",
      caption: "Make the triangle bigger and nothing happens to sine and cosine — the ratios belong to the angle, not to the triangle. That is the entire secret of trigonometry."
    });
  });

  // Trigonometry — unit circle: an angle is an address.
  register("trig-unit-circle", (workspace, h) => {
    const svg = h.canvas({ height: 250, interactive: true });
    const cx = 180;
    const cy = 122;
    const r = 92;
    h.line(svg, cx - r - 18, cy, cx + r + 18, cy, "geometry-grid-line");
    h.line(svg, cx, cy - r - 14, cx, cy + r + 14, "geometry-grid-line");
    h.circle(svg, cx, cy, r, "geometry-shape");
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (deg) => {
      dyn.replaceChildren();
      const x = Math.cos(deg * RAD);
      const y = Math.sin(deg * RAD);
      const px = cx + r * x;
      const py = cy - r * y;
      h.line(dyn, cx, cy, px, py, "geometry-line active");
      h.line(dyn, px, py, px, cy, "geometry-grid-line");
      h.line(dyn, px, cy, cx, cy, "geometry-line result");
      out.set(`<math>θ = ${deg}°</math> lands at <math>(\\cos θ, \\sin θ) = (${h.fmt(x)}, ${h.fmt(y)})</math>.`);
    };

    h.dragPoint(svg, {
      ariaLabel: "Angle on the unit circle",
      min: 0,
      max: 360,
      step: 15,
      value: 60,
      toXY: (deg) => [cx + r * Math.cos(deg * RAD), cy - r * Math.sin(deg * RAD)],
      fromXY: (x, y) => {
        const deg = Math.atan2(cy - y, x - cx) / RAD;
        return deg < 0 ? deg + 360 : deg;
      },
      valueText: (deg) => `${deg} degrees`,
      onChange: update
    });
    update(60);

    return h.figure({
      svg,
      readouts: [out],
      hint: "Drag the point around the circle.",
      caption: "The unit circle turns every angle into an address: walk θ around the rim, and cosine and sine are simply where you are standing. All of trigonometry reads off this one picture."
    });
  });

  // Trigonometry — graphs: amplitude is the volume knob.
  register("trig-graphs", (workspace, h) => {
    const svg = h.canvas({ height: 230, interactive: true });
    const map = h.mapper({ xMin: 0, xMax: 2 * Math.PI, yMin: -4.6, yMax: 4.6, left: 34, right: 330, top: 14, bottom: 212 });
    h.line(svg, map.left, map.y(0), map.right, map.y(0), "geometry-grid-line");
    h.text(svg, "2π", map.x(2 * Math.PI) - 4, map.y(0) + 24, "geometry-label geometry-math", "end");
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (a) => {
      dyn.replaceChildren();
      h.plot(dyn, (x) => a * Math.sin(x), map, { samples: 160 });
      h.line(dyn, map.left, map.y(a), map.right, map.y(a), "geometry-grid-line");
      h.line(dyn, map.x(Math.PI / 2), map.y(0), map.x(Math.PI / 2), map.y(a), "geometry-line result");
      out.set(`<math>y = ${a === 1 ? "" : h.fmt(a, 1) + " "}\\sin x</math> — amplitude ${h.fmt(a, 1)}, period still <math>2\\pi</math>.`);
    };

    const control = h.slider({ label: "amplitude", min: 1, max: 4, step: 0.5, value: 3, format: (v) => h.fmt(v, 1) }, update);
    update(3);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "Amplitude is the volume knob: it makes the wave taller without making it faster. The rhythm — the period — is a separate dial entirely."
    });
  });

  // Trigonometry — identities: the Pythagorean identity is a triangle in disguise.
  register("trig-identities", (workspace, h) => {
    const svg = h.canvas({ height: 200, interactive: true });
    const barX = 44;
    const barWidth = 272;
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (deg) => {
      dyn.replaceChildren();
      const s2 = Math.sin(deg * RAD) ** 2;
      h.rect(dyn, barX, 78, Math.max(1, barWidth * s2), 40, "geometry-shape active");
      h.rect(dyn, barX + barWidth * s2, 78, Math.max(1, barWidth * (1 - s2)), 40, "geometry-shape result");
      if (s2 > 0.12) h.text(dyn, "sin²θ", barX + (barWidth * s2) / 2, 103, "geometry-label geometry-math active", "middle");
      if (s2 < 0.88) h.text(dyn, "cos²θ", barX + barWidth * s2 + (barWidth * (1 - s2)) / 2, 103, "geometry-label geometry-math result", "middle");
      h.text(dyn, "always exactly 1", 180, 152, "geometry-note", "middle");
      out.set(`<math>θ = ${deg}°</math> — <math>${h.fmt(s2)} + ${h.fmt(1 - s2)} = 1</math>. The pieces trade, the total never moves.`);
    };

    const control = h.slider({ label: "angle θ", min: 0, max: 90, step: 5, value: 30, format: (v) => `${v}°` }, update);
    update(30);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "The Pythagorean identity is a right triangle wearing algebra: the two squared sides always fill the squared hypotenuse — which on the unit circle is exactly 1."
    });
  });

  // Precalculus — functions: a machine that keeps one promise.
  register("precalc-functions", (workspace, h) => {
    const svg = h.canvas({ height: 190, interactive: true });
    h.arrow(svg, 34, 100, 116, 100);
    h.rect(svg, 122, 62, 116, 76, "geometry-shape active", 10);
    h.text(svg, "× 2, + 1", 180, 106, "geometry-label geometry-math", "middle");
    h.arrow(svg, 244, 100, 326, 100);
    const inputLabel = h.text(svg, "", 74, 84, "geometry-label geometry-math active", "middle");
    const outputLabel = h.text(svg, "", 286, 84, "geometry-label geometry-math result", "middle");
    const out = h.readout("");

    const update = (x) => {
      inputLabel.textContent = String(x);
      outputLabel.textContent = String(2 * x + 1);
      out.set(`<math>f(${x}) = 2 · ${x} + 1 = ${2 * x + 1}</math> — same input, same output, every single time.`);
    };

    const control = h.slider({ label: "input x", min: -4, max: 4, step: 1, value: 3 }, update);
    update(3);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "A function is a machine that keeps one promise: feed it the same input and it must return the same output. Everything else about functions is bookkeeping."
    });
  });

  // Precalculus — transformations: sliders move the whole graph.
  register("precalc-transformations", (workspace, h) => {
    const svg = h.canvas({ height: 250, interactive: true });
    const map = h.mapper({ xMin: -6, xMax: 6, yMin: -5, yMax: 7, left: 36, right: 324, top: 14, bottom: 226 });
    h.line(svg, map.left, map.y(0), map.right, map.y(0), "geometry-grid-line");
    h.line(svg, map.x(0), map.top, map.x(0), map.bottom, "geometry-grid-line");
    h.plot(svg, (x) => {
      const y = x * x;
      return y > 7 ? NaN : y;
    }, map, { samples: 100, className: "geometry-line" });
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    let hShift = 2;
    let kShift = 1;
    const update = () => {
      dyn.replaceChildren();
      h.plot(dyn, (x) => {
        const y = (x - hShift) ** 2 + kShift;
        return y > 7 || y < -5 ? NaN : y;
      }, map, { samples: 120 });
      h.circle(dyn, map.x(hShift), map.y(kShift), 6, "geometry-point result");
      const hText = hShift === 0 ? "x^2" : `(x ${hShift < 0 ? "+" : "-"} ${Math.abs(hShift)})^2`;
      const kText = kShift === 0 ? "" : ` ${kShift < 0 ? "-" : "+"} ${Math.abs(kShift)}`;
      out.set(`<math>y = ${hText}${kText}</math> — vertex at <math>(${hShift}, ${kShift})</math>.`);
    };

    const hControl = h.slider({ label: "inside h", min: -4, max: 4, step: 1, value: hShift }, (value) => {
      hShift = value;
      update();
    });
    const kControl = h.slider({ label: "outside k", min: -4, max: 4, step: 1, value: kShift }, (value) => {
      kShift = value;
      update();
    });
    update();

    return h.figure({
      svg,
      readouts: [out],
      controls: [hControl, kControl],
      caption: "Outside the function moves the graph the way you expect; inside the parentheses moves it backwards. The gray parent never moves — you are sliding a copy."
    });
  });

  // Precalculus — exponentials and logs: one staircase, two directions.
  register("precalc-exponential-log", (workspace, h) => {
    const svg = h.canvas({ height: 230, interactive: true });
    const baseY = 196;
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (x) => {
      dyn.replaceChildren();
      for (let index = 0; index <= 6; index += 1) {
        const height = Math.max(3, (2 ** index / 64) * 150);
        h.rect(dyn, 52 + index * 40, baseY - height, 30, height, index === x ? "geometry-shape active" : "geometry-shape", 3);
        h.text(dyn, String(index), 67 + index * 40, baseY + 20, "geometry-label geometry-math", "middle");
      }
      out.set(`<math>2^{${x}} = ${2 ** x}</math>, and read backwards: <math>\\log_2 ${2 ** x} = ${x}</math>.`);
    };

    const control = h.slider({ label: "exponent x", min: 0, max: 6, step: 1, value: 3 }, update);
    update(3);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "Exponentials and logarithms are the same staircase walked in opposite directions: one asks how tall step x is, the other asks which step has this height."
    });
  });

  // Calculus — limits: the outputs can aim at a value the function never takes.
  register("calc-limits", (workspace, h) => {
    const svg = h.canvas({ height: 230, interactive: true });
    const map = h.mapper({ xMin: -0.5, xMax: 4.5, yMin: 0, yMax: 6.8, left: 40, right: 324, top: 14, bottom: 206 });
    h.line(svg, map.left, map.y(0), map.right, map.y(0), "geometry-grid-line");
    h.plot(svg, (x) => x + 2, map, { samples: 60, className: "geometry-line" });
    const hole = h.circle(svg, map.x(2), map.y(4), 6, "geometry-shape result");
    hole.setAttribute("fill", "var(--surface)");
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (x) => {
      dyn.replaceChildren();
      const atHole = Math.abs(x - 2) < 0.001;
      if (!atHole) {
        h.circle(dyn, map.x(x), map.y(x + 2), 6, "geometry-point active");
        h.line(dyn, map.x(x), map.y(x + 2), map.x(x), map.y(0), "geometry-grid-line");
      }
      out.set(
        atHole
          ? `<math>f(2)</math> itself is undefined — yet the limit is 4, because that is where the outputs were heading.`
          : `<math>f(${h.fmt(x, 1)}) = ${h.fmt(x + 2, 1)}</math> — creeping toward the hole at <math>(2, 4)</math>.`
      );
    };

    h.dragPoint(svg, {
      ariaLabel: "Input x sliding toward 2",
      min: 0.4,
      max: 3.6,
      step: 0.1,
      value: 1.2,
      toXY: (x) => [map.x(x), map.y(x + 2)],
      fromXY: (x) => map.xMin + ((x - map.left) / (map.right - map.left)) * (map.xMax - map.xMin),
      valueText: (x) => `x = ${h.fmt(x, 1)}`,
      onChange: update
    });
    update(1.2);

    return h.figure({
      svg,
      readouts: [out],
      hint: "Drag the point toward the hole.",
      caption: "This is <math>f(x) = \\frac{x^2 - 4}{x - 2}</math>: identical to <math>x + 2</math> everywhere except <math>x = 2</math>, where it has no value at all. The limit ignores the hole and reports where the outputs were going. That idea powers all of calculus."
    });
  });

  // Calculus — derivatives: drag the point, watch the tangent tilt.
  register("calc-derivatives", (workspace, h) => {
    const svg = h.canvas({ height: 250, interactive: true });
    const map = h.mapper({ xMin: -3.4, xMax: 3.4, yMin: -1.5, yMax: 9.5, left: 36, right: 324, top: 12, bottom: 228 });
    h.line(svg, map.left, map.y(0), map.right, map.y(0), "geometry-grid-line");
    h.line(svg, map.x(0), map.top, map.x(0), map.bottom, "geometry-grid-line");
    h.plot(svg, (x) => x * x, map, { samples: 120, className: "geometry-line" });
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (a) => {
      dyn.replaceChildren();
      h.plot(dyn, (x) => {
        const y = a * a + 2 * a * (x - a);
        return y < -1.5 || y > 9.5 ? NaN : y;
      }, map, { samples: 40, className: "geometry-line result" });
      out.set(`At <math>x = ${h.fmt(a, 1)}</math> the tangent slope is <math>2x = ${h.fmt(2 * a, 1)}</math>${a === 0 ? " — flat at the bottom of the valley." : "."}`);
    };

    h.dragPoint(svg, {
      ariaLabel: "Point on the parabola",
      min: -2.8,
      max: 2.8,
      step: 0.2,
      value: 1.4,
      toXY: (a) => [map.x(a), map.y(a * a)],
      fromXY: (x) => map.xMin + ((x - map.left) / (map.right - map.left)) * (map.xMax - map.xMin),
      valueText: (a) => `x = ${h.fmt(a, 1)}, slope ${h.fmt(2 * a, 1)}`,
      onChange: update
    });
    update(1.4);

    return h.figure({
      svg,
      readouts: [out],
      hint: "Drag the point along the curve.",
      caption: "The derivative answers one question at every point: standing right here, how steep is the ground? For <math>y = x^2</math> the answer is always <math>2x</math> — steeper as you climb, flat at the bottom, downhill on the left."
    });
  });

  // Calculus — integrals: rectangles vote on the area.
  register("calc-integrals", (workspace, h) => {
    const svg = h.canvas({ height: 240, interactive: true });
    const map = h.mapper({ xMin: 0, xMax: 3.3, yMin: 0, yMax: 9.6, left: 40, right: 324, top: 14, bottom: 214 });
    h.line(svg, map.left, map.y(0), map.right, map.y(0), "geometry-grid-line");
    const dyn = h.el("g");
    svg.append(dyn);
    h.plot(svg, (x) => x * x, map, { samples: 120, className: "geometry-line" });
    const out = h.readout("");

    const update = (n) => {
      dyn.replaceChildren();
      const width = 3 / n;
      let sum = 0;
      for (let index = 0; index < n; index += 1) {
        const x = index * width;
        const height = x * x;
        sum += height * width;
        if (height > 0) h.rect(dyn, map.x(x), map.y(height), map.x(width) - map.x(0), map.y(0) - map.y(height), "geometry-shape active");
      }
      out.set(`${n} rectangles hold <math>${h.fmt(sum)}</math> — sneaking up on the true area <math>\\int_0^3 x^2 dx = 9</math>.`);
    };

    const control = h.slider({ label: "rectangles", min: 3, max: 48, step: 1, value: 6 }, update);
    update(6);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "Integration is an election among rectangles: each one is slightly wrong, but as they get thinner their total stops being wrong. The integral is the value they all agree on."
    });
  });

  // Calculus — series: infinitely many steps, finite staircase.
  register("calc-series", (workspace, h) => {
    const svg = h.canvas({ height: 190, interactive: true });
    const map = h.mapper({ xMin: 0, xMax: 2.12, left: 36, right: 324 });
    const barY = 84;
    h.line(svg, map.x(2), barY - 22, map.x(2), barY + 56, "geometry-line result");
    h.text(svg, "2", map.x(2), barY - 32, "geometry-label geometry-math result", "middle");
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (n) => {
      dyn.replaceChildren();
      let position = 0;
      for (let index = 0; index < n; index += 1) {
        const term = 1 / 2 ** index;
        h.rect(dyn, map.x(position), barY, Math.max(2, map.x(term) - map.x(0) - 2), 34, index % 2 ? "geometry-shape result" : "geometry-shape active", 3);
        position += term;
      }
      const sum = 2 - 2 ** (1 - n);
      out.set(`<math>1 + \\frac{1}{2} + \\frac{1}{4} + ...</math> after ${n} term${n === 1 ? "" : "s"}: <math>${h.fmt(sum, 3)}</math> — the gap to 2 halves at every step.`);
    };

    const control = h.slider({ label: "terms", min: 1, max: 10, step: 1, value: 3 }, update);
    update(3);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "Each block is half the one before. You may add forever, yet you never cross the line at 2 — infinitely many numbers politely agreeing to a finite sum."
    });
  });

  // Differential equations — slope fields: the equation paints arrows; solutions obey them.
  register("diff-eq-slope-fields", (workspace, h) => {
    const svg = h.canvas({ height: 240, interactive: true, ariaLabel: "Slope field for y prime equals y with a draggable initial condition" });
    const map = h.mapper({ xMin: -3, xMax: 3, yMin: -3, yMax: 3, left: 36, right: 324, top: 14, bottom: 218 });
    h.line(svg, map.left, map.y(0), map.right, map.y(0), "geometry-grid-line");
    h.line(svg, map.x(0), map.top, map.x(0), map.bottom, "geometry-grid-line");
    for (let gx = -3; gx <= 3; gx += 1) {
      for (let gy = -3; gy <= 3; gy += 1) {
        const slope = gy;
        const dx = 0.26 / Math.sqrt(1 + slope * slope);
        const dy = slope * dx;
        h.line(svg, map.x(gx - dx), map.y(gy - dy), map.x(gx + dx), map.y(gy + dy), "geometry-grid-line");
      }
    }
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (x0, y0) => {
      dyn.replaceChildren();
      if (y0 === 0) {
        h.plot(dyn, () => 0, map, { samples: 20 });
        out.set(`At <math>(${h.fmt(x0, 1)},0)</math>, the slope is 0. The solution stays on the equilibrium <math>y=0</math>.`);
        return;
      }
      h.plot(dyn, (x) => {
        const y = y0 * Math.exp(x - x0);
        return Math.abs(y) > 3 ? NaN : y;
      }, map, { samples: 140 });
      const tangentDx = 0.42 / Math.sqrt(1 + y0 * y0);
      const tangentDy = y0 * tangentDx;
      h.line(dyn, map.x(x0 - tangentDx), map.y(y0 - tangentDy), map.x(x0 + tangentDx), map.y(y0 + tangentDy), "geometry-line result");
      out.set(`At <math>(${h.fmt(x0, 1)},${h.fmt(y0, 1)})</math>, <math>y' = y = ${h.fmt(y0, 1)}</math>. The initial condition selects <math>y=${h.fmt(y0 * Math.exp(-x0), 2)}e^x</math>.`);
    };

    const handle = h.dragPointXY(svg, {
      ariaLabel: "Initial condition",
      map,
      x: 0,
      y: 1,
      stepX: 0.5,
      stepY: 0.5,
      valueText: (x, y) => `initial condition x ${x}, y ${y}, local slope ${y}`,
      onChange: update
    });
    handle.refresh();

    return h.figure({
      svg,
      readouts: [out],
      hint: "Drag the initial condition. Arrow keys move it in half-unit steps.",
      caption: "The equation <math>dy/dx = y</math> paints a local instruction at every point. One initial condition selects exactly one curve that follows all of those instructions."
    });
  });

  // Linear algebra — vectors: an arrow is two numbers.
  register("linear-vectors", (workspace, h) => {
    const svg = h.canvas({ height: 250, interactive: true });
    const map = h.mapper({ xMin: -6, xMax: 6, yMin: -6, yMax: 6, left: 40, right: 320, top: 14, bottom: 226 });
    for (let value = -6; value <= 6; value += 2) {
      h.line(svg, map.x(value), map.top, map.x(value), map.bottom, "geometry-grid-line");
      h.line(svg, map.left, map.y(value), map.right, map.y(value), "geometry-grid-line");
    }
    h.line(svg, map.left, map.y(0), map.right, map.y(0));
    h.line(svg, map.x(0), map.top, map.x(0), map.bottom);
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (x, y) => {
      dyn.replaceChildren();
      h.arrow(dyn, map.x(0), map.y(0), map.x(x), map.y(y), "geometry-line active");
      h.line(dyn, map.x(x), map.y(y), map.x(x), map.y(0), "geometry-grid-line");
      const length = Math.sqrt(x * x + y * y);
      out.set(`<math>(${h.fmt(x, 1)}, ${h.fmt(y, 1)})</math> — length <math>\\sqrt{x^2 + y^2} = ${h.fmt(length)}</math>.`);
    };

    h.dragPointXY(svg, {
      ariaLabel: "Vector head",
      map,
      x: 3,
      y: 4,
      stepX: 1,
      stepY: 1,
      valueText: (x, y) => `vector (${x}, ${y})`,
      onChange: update
    });
    update(3, 4);

    return h.figure({
      svg,
      readouts: [out],
      hint: "Drag the arrowhead.",
      caption: "A vector is an arrow you can mail: just send the two numbers. Its length comes free from Pythagoras — which is why <math>(3, 4)</math> really is 5 units long."
    });
  });

  // Linear algebra — transformations: watch what happens to one square.
  register("linear-transformations", (workspace, h) => {
    const svg = h.canvas({ height: 250, interactive: true });
    const map = h.mapper({ xMin: -2.6, xMax: 2.6, yMin: -2.6, yMax: 2.6, left: 40, right: 320, top: 14, bottom: 226 });
    h.line(svg, map.left, map.y(0), map.right, map.y(0), "geometry-grid-line");
    h.line(svg, map.x(0), map.top, map.x(0), map.bottom, "geometry-grid-line");
    h.path(svg, `M ${map.x(0)} ${map.y(0)} L ${map.x(1)} ${map.y(0)} L ${map.x(1)} ${map.y(1)} L ${map.x(0)} ${map.y(1)} Z`, "geometry-shape");
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    let angle = 30;
    let scale = 1.25;
    const update = () => {
      dyn.replaceChildren();
      const e1 = [scale * Math.cos(angle * RAD), scale * Math.sin(angle * RAD)];
      const e2 = [-scale * Math.sin(angle * RAD), scale * Math.cos(angle * RAD)];
      const corners = [[0, 0], e1, [e1[0] + e2[0], e1[1] + e2[1]], e2];
      h.path(dyn, `M ${corners.map(([x, y]) => `${map.x(x)} ${map.y(y)}`).join(" L ")} Z`, "geometry-shape active");
      h.arrow(dyn, map.x(0), map.y(0), map.x(e1[0]), map.y(e1[1]), "geometry-line result");
      h.arrow(dyn, map.x(0), map.y(0), map.x(e2[0]), map.y(e2[1]), "geometry-line active");
      out.set(`<math>T(1, 0) = (${h.fmt(e1[0])}, ${h.fmt(e1[1])})</math> — rotate ${angle}°, scale ×${h.fmt(scale, 2)}. The gray square went along for the ride.`);
    };

    const angleControl = h.slider({ label: "rotate", min: 0, max: 180, step: 15, value: angle, format: (v) => `${v}°` }, (value) => {
      angle = value;
      update();
    });
    const scaleControl = h.slider({ label: "scale", min: 0.5, max: 2, step: 0.25, value: scale, format: (v) => `×${h.fmt(v, 2)}` }, (value) => {
      scale = value;
      update();
    });
    update();

    return h.figure({
      svg,
      readouts: [out],
      controls: [angleControl, scaleControl],
      caption: "A linear transformation is fully described by where it sends two arrows. Move the basis arrows and the whole plane — gray square included — must follow."
    });
  });

  // Linear algebra — determinants: how much does the square stretch?
  register("linear-determinants", (workspace, h) => {
    const svg = h.canvas({ height: 250, interactive: true });
    const map = h.mapper({ xMin: -2.6, xMax: 3.6, yMin: -2.6, yMax: 3.6, left: 40, right: 320, top: 14, bottom: 226 });
    h.line(svg, map.left, map.y(0), map.right, map.y(0), "geometry-grid-line");
    h.line(svg, map.x(0), map.top, map.x(0), map.bottom, "geometry-grid-line");
    h.path(svg, `M ${map.x(0)} ${map.y(0)} L ${map.x(1)} ${map.y(0)} L ${map.x(1)} ${map.y(1)} L ${map.x(0)} ${map.y(1)} Z`, "geometry-shape");
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    let a = 2;
    let d = 1.5;
    const update = () => {
      dyn.replaceChildren();
      if (a !== 0 && d !== 0) {
        h.path(dyn, `M ${map.x(0)} ${map.y(0)} L ${map.x(a)} ${map.y(0)} L ${map.x(a)} ${map.y(d)} L ${map.x(0)} ${map.y(d)} Z`, "geometry-shape active");
      } else {
        h.line(dyn, map.x(Math.min(0, a)), map.y(Math.min(0, d)), map.x(Math.max(0, a)), map.y(Math.max(0, d)), "geometry-line active");
      }
      const det = a * d;
      out.set(
        det === 0
          ? `<math>det = ${h.fmt(a, 1)} × ${h.fmt(d, 1)} = 0</math> — the square is crushed flat. No area, no way back: not invertible.`
          : `<math>det = ${h.fmt(a, 1)} × ${h.fmt(d, 1)} = ${h.fmt(det, 2)}</math> — area scaled ×${h.fmt(Math.abs(det), 2)}${det < 0 ? ", flipped over" : ""}.`
      );
    };

    const aControl = h.slider({ label: "stretch x", min: -2, max: 3, step: 0.5, value: a, format: (v) => h.fmt(v, 1) }, (value) => {
      a = value;
      update();
    });
    const dControl = h.slider({ label: "stretch y", min: -2, max: 3, step: 0.5, value: d, format: (v) => h.fmt(v, 1) }, (value) => {
      d = value;
      update();
    });
    update();

    return h.figure({
      svg,
      readouts: [out],
      controls: [aControl, dControl],
      caption: "The determinant is a stretch report: how many times bigger did the unit square get? Zero is the disaster case — the square is flattened to nothing, and flattening cannot be undone."
    });
  });
})();
