(function registerDifferentialEquationsCourseFigures() {
  const figures = window.CarryIntroFigures;
  if (!figures) return;

  figures.registerLesson("differential-equations.classification", (workspace, h) => h.mathCard([
    "y' = x+y \quad \text{first order, linear}",
    "y'' + 4y = 0 \quad \text{second order, linear}",
    "y' = y^2 \quad \text{first order, nonlinear}"
  ], "Order comes from the highest derivative. Linearity comes from how the unknown function appears."));

  figures.registerLesson("differential-equations.euler-method", (workspace, h) => {
    const svg = h.canvas({ height: 230, interactive: true, ariaLabel: "Euler approximation to y prime equals y" });
    const map = h.mapper({ xMin: 0, xMax: 2, yMin: 0, yMax: 8, left: 38, right: 326, top: 14, bottom: 204 });
    for (let x = 0; x <= 2; x += 0.5) h.line(svg, map.x(x), map.top, map.x(x), map.bottom, "geometry-grid-line");
    for (let y = 0; y <= 8; y += 2) h.line(svg, map.left, map.y(y), map.right, map.y(y), "geometry-grid-line");
    h.plot(svg, (x) => Math.exp(x), map, { samples: 120, className: "geometry-line result" });
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (steps) => {
      dyn.replaceChildren();
      const step = 2 / steps;
      let x = 0;
      let y = 1;
      const points = [`${map.x(x)},${map.y(y)}`];
      for (let index = 0; index < steps; index += 1) {
        y += step * y;
        x += step;
        points.push(`${map.x(x)},${map.y(y)}`);
        h.circle(dyn, map.x(x), map.y(y), 4, "geometry-point active");
      }
      dyn.prepend(h.el("polyline", { class: "geometry-line active", fill: "none", points: points.join(" ") }));
      out.set(`<math>h=${h.fmt(step, 2)}</math>: Euler gives <math>y(2)\approx ${h.fmt(y, 3)}</math>; the exact value is <math>e^2\approx ${h.fmt(Math.exp(2), 3)}</math>.`);
    };

    const control = h.slider({ label: "steps from 0 to 2", min: 2, max: 20, step: 1, value: 4 }, update);
    control.refresh();
    return h.figure({
      svg,
      controls: [control],
      readouts: [out],
      caption: "The blue polygon follows one tangent at a time. More, shorter steps bring it closer to the exact curve."
    });
  });

  figures.registerLesson("differential-equations.autonomous", (workspace, h) => {
    const svg = h.canvas({ height: 230, interactive: true, ariaLabel: "Phase line for y prime equals y times one minus y" });
    const x = 180;
    const map = h.mapper({ yMin: -0.5, yMax: 1.5, top: 20, bottom: 206 });
    h.line(svg, x, map.top, x, map.bottom);
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");
    const update = (y) => {
      dyn.replaceChildren();
      const slope = y * (1 - y);
      const direction = slope > 0 ? "upward" : slope < 0 ? "downward" : "stationary";
      h.circle(dyn, x, map.y(y), 7, "geometry-point active");
      h.text(dyn, `y = ${h.fmt(y, 2)}`, x + 22, map.y(y) + 5, "geometry-label geometry-math active");
      out.set(`<math>y' = y(1-y) = ${h.fmt(slope, 3)}</math>, so the state moves ${direction}. Equilibria are <math>y=0</math> and <math>y=1</math>.`);
    };
    h.circle(svg, x, map.y(0), 7, "geometry-point result");
    h.circle(svg, x, map.y(1), 7, "geometry-point result");
    h.text(svg, "0", x - 18, map.y(0) + 5, "geometry-label geometry-math result", "end");
    h.text(svg, "1", x - 18, map.y(1) + 5, "geometry-label geometry-math result", "end");
    const handle = h.dragPoint(svg, {
      ariaLabel: "Current y value",
      min: -0.5,
      max: 1.5,
      step: 0.1,
      value: 0.5,
      toXY: (y) => [x, map.y(y)],
      fromXY: (px, py) => map.yMin + ((map.bottom - py) / (map.bottom - map.top)) * (map.yMax - map.yMin),
      valueText: (y) => `y ${h.fmt(y, 1)}, derivative ${h.fmt(y * (1 - y), 2)}`,
      onChange: update
    });
    handle.refresh();
    return h.figure({ svg, readouts: [out], hint: "Drag the state along the phase line.", caption: "A phase line compresses the differential equation into equilibria and directions of motion." });
  });
})();

