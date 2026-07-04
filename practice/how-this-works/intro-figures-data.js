(function () {
  const figures = window.CarryIntroFigures;
  if (!figures) return;
  const { register } = figures;

  const drawDie = (h, target, x, y, size, value, cls) => {
    h.rect(target, x, y, size, size, cls, 6);
    const c = size / 2;
    const q = size / 4;
    const spots = {
      1: [[c, c]],
      2: [[q, 3 * q], [3 * q, q]],
      3: [[q, 3 * q], [c, c], [3 * q, q]],
      4: [[q, q], [3 * q, q], [q, 3 * q], [3 * q, 3 * q]],
      5: [[q, q], [3 * q, q], [c, c], [q, 3 * q], [3 * q, 3 * q]],
      6: [[q, q], [3 * q, q], [q, c], [3 * q, c], [q, 3 * q], [3 * q, 3 * q]]
    };
    for (const [sx, sy] of spots[value]) h.circle(target, x + sx, y + sy, size * 0.07, "geometry-point");
  };

  // Probability — basic: favorable over total, drawn as die faces.
  register("probability-basic", (workspace, h) => {
    const svg = h.canvas({ height: 190, interactive: true });
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (k) => {
      dyn.replaceChildren();
      for (let face = 1; face <= 6; face += 1) {
        drawDie(h, dyn, 34 + (face - 1) * 50, 58, 42, face, face <= k ? "geometry-shape active" : "geometry-shape");
      }
      out.set(`${k} favorable face${k === 1 ? "" : "s"} out of 6 equally likely: <math>P = \\frac{${k}}{6} ≈ ${h.fmt(k / 6)}</math>.`);
    };

    const control = h.slider({ label: "favorable", min: 1, max: 6, step: 1, value: 1 }, update);
    update(1);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "When every outcome is equally likely, probability is plain counting: the faces you are hoping for, over all the faces there are. Nothing deeper is hiding underneath."
    });
  });

  // Probability — conditional: new information shrinks the world.
  register("probability-conditional", (workspace, h) => {
    const svg = h.canvas({ height: 190, interactive: true });
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (given) => {
      dyn.replaceChildren();
      for (let face = 1; face <= 6; face += 1) {
        const excluded = given === 1 && face % 2 === 1;
        const target = face === 6;
        drawDie(h, dyn, 34 + (face - 1) * 50, 58, 42, face, excluded ? "geometry-shape" : target ? "geometry-shape result" : "geometry-shape active");
        if (excluded) h.line(dyn, 34 + (face - 1) * 50, 100, 76 + (face - 1) * 50, 58, "geometry-grid-line");
      }
      out.set(
        given === 1
          ? `Told the roll is even, only 3 outcomes remain: <math>P(6 | even) = \\frac{1}{3}</math>.`
          : `Before any information, all 6 outcomes live: <math>P(6) = \\frac{1}{6}</math>.`
      );
    };

    const control = h.slider({ label: "know it's even", min: 0, max: 1, step: 1, value: 0, format: (v) => (v ? "yes" : "no") }, update);
    update(0);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "Conditional probability is ordinary probability in a smaller world. The condition does not change the die — it crosses out the outcomes that can no longer be true, and you recount what is left."
    });
  });

  // Probability — counting: choices in sequence multiply.
  register("probability-counting", (workspace, h) => {
    const svg = h.canvas({ height: 210, interactive: true });
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    let colors = 3;
    let sizes = 2;
    const update = () => {
      dyn.replaceChildren();
      const cellW = 58;
      const cellH = 34;
      const originX = 180 - (colors * cellW) / 2;
      const originY = 108 - (sizes * cellH) / 2;
      for (let row = 0; row < sizes; row += 1) {
        for (let col = 0; col < colors; col += 1) {
          h.rect(dyn, originX + col * cellW, originY + row * cellH, cellW - 5, cellH - 5, row === 0 ? "geometry-shape active" : "geometry-shape result", 4);
        }
      }
      h.text(dyn, `${colors} colors`, 180, originY - 12, "geometry-note", "middle");
      h.text(dyn, `${sizes} size${sizes === 1 ? "" : "s"}`, originX - 10, 108 + 5, "geometry-note", "end");
      out.set(`<math>${colors} × ${sizes} = ${colors * sizes}</math> different shirts — one cell per choice-pair.`);
    };

    const colorControl = h.slider({ label: "colors", min: 2, max: 5, step: 1, value: colors }, (value) => {
      colors = value;
      update();
    });
    const sizeControl = h.slider({ label: "sizes", min: 1, max: 4, step: 1, value: sizes }, (value) => {
      sizes = value;
      update();
    });
    update();

    return h.figure({
      svg,
      readouts: [out],
      controls: [colorControl, sizeControl],
      caption: "Choices made in sequence build a grid: every color meets every size. That is why independent choices multiply — you are counting the cells of a rectangle."
    });
  });

  // Statistics — center and spread: same middle, different width.
  register("statistics-center-spread", (workspace, h) => {
    const svg = h.canvas({ height: 200, interactive: true });
    const map = h.mapper({ xMin: 0, xMax: 20, left: 40, right: 320 });
    const axisY = 128;
    h.line(svg, map.left - 6, axisY, map.right + 6, axisY, "geometry-grid-line");
    for (let value = 0; value <= 20; value += 5) {
      h.line(svg, map.x(value), axisY - 5, map.x(value), axisY + 5, "geometry-grid-line");
      h.text(svg, String(value), map.x(value), axisY + 26, "geometry-label geometry-math", "middle");
    }
    const offsets = [-3, -2, -1, 0, 1, 2, 3];
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (factor) => {
      dyn.replaceChildren();
      h.line(dyn, map.x(10), axisY - 44, map.x(10), axisY + 6, "geometry-line result");
      offsets.forEach((offset) => {
        h.circle(dyn, map.x(10 + offset * factor), axisY - 20, 6, "geometry-point active");
      });
      out.set(`Mean stays put at 10 — but the data now spans ${h.fmt(6 * factor, 1)}. Center says where; spread says how sure.`);
    };

    const control = h.slider({ label: "spread", min: 0.5, max: 3, step: 0.5, value: 1, format: (v) => `×${h.fmt(v, 1)}` }, update);
    update(1);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "Two data sets can share a center and tell different stories. The mean answers where the data lives; spread answers how tightly it huddles there. You need both numbers, always."
    });
  });

  // Statistics — normal distribution: the bell keeps its promise.
  register("statistics-normal", (workspace, h) => {
    const svg = h.canvas({ height: 220, interactive: true });
    const map = h.mapper({ xMin: -4.2, xMax: 4.2, yMin: 0, yMax: 0.75, left: 36, right: 324, top: 16, bottom: 194 });
    h.line(svg, map.left, map.y(0), map.right, map.y(0), "geometry-grid-line");
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const pdf = (x, sigma) => Math.exp(-(x * x) / (2 * sigma * sigma)) / (sigma * Math.sqrt(2 * Math.PI));
    const update = (sigma) => {
      dyn.replaceChildren();
      const points = [];
      for (let index = 0; index <= 80; index += 1) {
        const x = -sigma + (2 * sigma * index) / 80;
        points.push(`${map.x(x).toFixed(1)} ${map.y(pdf(x, sigma)).toFixed(1)}`);
      }
      h.path(dyn, `M ${map.x(-sigma)} ${map.y(0)} L ${points.join(" L ")} L ${map.x(sigma)} ${map.y(0)} Z`, "geometry-shape active");
      h.plot(dyn, (x) => pdf(x, sigma), map, { samples: 160, className: "geometry-line" });
      out.set(`<math>σ = ${h.fmt(sigma, 1)}</math> — the shaded stripe from −σ to σ always holds about 68% of everything, wide bell or narrow.`);
    };

    const control = h.slider({ label: "std dev σ", min: 0.6, max: 2, step: 0.2, value: 1, format: (v) => h.fmt(v, 1) }, update);
    update(1);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "The normal curve is nature's favorite shape for accumulated randomness. Stretch it or squeeze it, one promise survives: about 68% within one σ, 95% within two. That constancy is why σ is worth naming."
    });
  });

  // Physics — kinematics: slope is velocity, literally.
  register("physics-kinematics", (workspace, h) => {
    const svg = h.canvas({ height: 230, interactive: true });
    const map = h.mapper({ xMin: 0, xMax: 5.2, yMin: 0, yMax: 32, left: 44, right: 320, top: 16, bottom: 200 });
    h.line(svg, map.left, map.y(0), map.right, map.y(0));
    h.line(svg, map.left, map.y(0), map.left, map.top);
    h.text(svg, "time (s)", 320, map.y(0) + 24, "geometry-note", "end");
    h.text(svg, "position (m)", map.left + 6, 30, "geometry-note");
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (v) => {
      dyn.replaceChildren();
      h.plot(dyn, (t) => {
        const x = v * t;
        return x > 32 ? NaN : x;
      }, map, { samples: 40 });
      if (v * 3 <= 32 && v > 0) {
        h.path(dyn, `M ${map.x(2)} ${map.y(2 * v)} H ${map.x(3)} V ${map.y(3 * v)}`, "geometry-line result");
      }
      out.set(v === 0 ? `Velocity 0 — the position graph lies flat. Standing still is a horizontal line.` : `Velocity ${v} m/s — each second the graph climbs ${v} m. After 4 s: <math>x = ${4 * v}</math> m.`);
    };

    const control = h.slider({ label: "velocity", min: 0, max: 8, step: 1, value: 5, format: (v) => `${v} m/s` }, update);
    update(5);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "On a position-time graph, velocity is not shown by the height — it is the slope. Steeper means faster, flat means parked. The little step-triangle is the velocity, drawn."
    });
  });

  // Physics — forces: F = ma as a picture.
  register("physics-forces", (workspace, h) => {
    const svg = h.canvas({ height: 200, interactive: true });
    const groundY = 148;
    h.line(svg, 30, groundY, 330, groundY, "geometry-grid-line");
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    let mass = 2;
    let accel = 3;
    const update = () => {
      dyn.replaceChildren();
      const size = 26 + mass * 7;
      h.rect(dyn, 62, groundY - size, size, size, "geometry-shape", 6);
      h.text(dyn, `${mass} kg`, 62 + size / 2, groundY - size / 2 + 6, "geometry-note", "middle");
      const force = mass * accel;
      if (force > 0) {
        h.arrow(dyn, 62 + size + 8, groundY - size / 2, 62 + size + 8 + force * 6, groundY - size / 2, "geometry-line active");
      }
      out.set(`<math>F = ma = ${mass} × ${accel} = ${force}</math> N${force === 0 ? " — no net force, no change in motion." : "."}`);
    };

    const massControl = h.slider({ label: "mass m", min: 1, max: 6, step: 1, value: mass, format: (v) => `${v} kg` }, (value) => {
      mass = value;
      update();
    });
    const accelControl = h.slider({ label: "accel a", min: 0, max: 5, step: 1, value: accel, format: (v) => `${v} m/s²` }, (value) => {
      accel = value;
      update();
    });
    update();

    return h.figure({
      svg,
      readouts: [out],
      controls: [massControl, accelControl],
      caption: "Newton's second law is a price list: acceleration costs force, and heavier things charge more. Double the mass and the same push buys half the acceleration."
    });
  });

  // Physics — waves: same speed, so frequency and wavelength trade off.
  register("physics-waves", (workspace, h) => {
    const svg = h.canvas({ height: 210, interactive: true });
    const map = h.mapper({ xMin: 0, xMax: 12, yMin: -2.6, yMax: 2.6, left: 34, right: 326, top: 16, bottom: 168 });
    h.line(svg, map.left, map.y(0), map.right, map.y(0), "geometry-grid-line");
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const speed = 12;
    const update = (f) => {
      dyn.replaceChildren();
      const lambda = speed / f;
      h.plot(dyn, (x) => 1.8 * Math.sin((2 * Math.PI * x) / lambda), map, { samples: 220 });
      h.line(dyn, map.x(0), map.y(-2.3), map.x(lambda), map.y(-2.3), "geometry-line result");
      h.text(dyn, "λ", map.x(lambda / 2), map.y(-2.3) + 22, "geometry-label geometry-math result", "middle");
      out.set(`<math>v = f λ = ${f} × ${h.fmt(lambda, 1)} = ${speed}</math> m/s — turn frequency up and the wave must shorten to keep the same speed.`);
    };

    const control = h.slider({ label: "frequency f", min: 1, max: 4, step: 1, value: 2, format: (v) => `${v} Hz` }, update);
    update(2);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "In one medium, waves travel at one speed — so frequency and wavelength are on a seesaw. More wiggles per second forces shorter wiggles. That trade is everything <math>v = f λ</math> says."
    });
  });
})();
