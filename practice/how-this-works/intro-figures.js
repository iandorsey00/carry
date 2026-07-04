(function () {
  const SVG_NS = "http://www.w3.org/2000/svg";
  const byFigure = new Map();
  const byLesson = new Map();

  function el(tag, attributes = {}) {
    const node = document.createElementNS(SVG_NS, tag);
    for (const [name, value] of Object.entries(attributes)) {
      node.setAttribute(name, value);
    }
    return node;
  }

  function canvas({ width = 360, height = 200, ariaLabel = "", frame = true, interactive = false } = {}) {
    const svg = el("svg", {
      class: "geometry-diagram intro-fig-svg",
      viewBox: `0 0 ${width} ${height}`,
      preserveAspectRatio: "xMidYMid meet"
    });
    if (interactive) {
      if (ariaLabel) svg.setAttribute("aria-label", ariaLabel);
    } else {
      svg.setAttribute("role", "img");
      if (ariaLabel) svg.setAttribute("aria-label", ariaLabel);
    }
    if (frame) svg.append(el("rect", { class: "geometry-frame", x: 1, y: 1, width: width - 2, height: height - 2, rx: 8 }));
    return svg;
  }

  function text(svg, content, x, y, className = "geometry-note", anchor = "start") {
    const node = el("text", { x, y, class: className, "text-anchor": anchor });
    node.textContent = content;
    svg.append(node);
    return node;
  }

  function line(svg, x1, y1, x2, y2, className = "geometry-line") {
    const node = el("line", { class: className, x1, y1, x2, y2 });
    svg.append(node);
    return node;
  }

  function path(svg, d, className = "geometry-line") {
    const node = el("path", { class: className, d });
    svg.append(node);
    return node;
  }

  function circle(svg, cx, cy, r, className = "geometry-point") {
    const node = el("circle", { class: className, cx, cy, r });
    svg.append(node);
    return node;
  }

  function rect(svg, x, y, width, height, className = "geometry-shape", rx = 0) {
    const node = el("rect", { class: className, x, y, width, height, rx });
    svg.append(node);
    return node;
  }

  function arrow(svg, x1, y1, x2, y2, className = "geometry-line") {
    const group = el("g");
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const size = 9;
    const shaft = el("line", { class: className, x1, y1, x2, y2 });
    const head = el("path", {
      class: className,
      d: `M ${x2 - size * Math.cos(angle - 0.44)} ${y2 - size * Math.sin(angle - 0.44)} L ${x2} ${y2} L ${x2 - size * Math.cos(angle + 0.44)} ${y2 - size * Math.sin(angle + 0.44)}`
    });
    group.append(shaft, head);
    svg.append(group);
    return group;
  }

  function mapper({ xMin = 0, xMax = 1, yMin = 0, yMax = 1, left = 20, right = 340, top = 20, bottom = 180 } = {}) {
    const x = (value) => left + ((value - xMin) / (xMax - xMin)) * (right - left);
    const y = (value) => bottom - ((value - yMin) / (yMax - yMin)) * (bottom - top);
    return { x, y, left, right, top, bottom, xMin, xMax, yMin, yMax };
  }

  function plot(svg, fn, map, { from = map.xMin, to = map.xMax, samples = 120, className = "geometry-line active" } = {}) {
    const points = [];
    for (let index = 0; index <= samples; index += 1) {
      const value = from + ((to - from) * index) / samples;
      const result = fn(value);
      if (!Number.isFinite(result)) continue;
      points.push(`${map.x(value).toFixed(2)},${map.y(result).toFixed(2)}`);
    }
    const node = el("polyline", { class: className, fill: "none", points: points.join(" ") });
    svg.append(node);
    return node;
  }

  function fmt(value, digits = 2) {
    if (!Number.isFinite(value)) return "—";
    const fixed = Number(value.toFixed(digits));
    return String(fixed);
  }

  function setMath(target, content) {
    if (typeof window.setMathText === "function") {
      window.setMathText(target, content);
    } else {
      target.textContent = content;
    }
  }

  function slider({ label, min, max, step = 1, value, format }, onInput) {
    const row = document.createElement("label");
    row.className = "intro-fig-control";

    const name = document.createElement("span");
    name.className = "intro-fig-control-name";
    name.textContent = label;

    const input = document.createElement("input");
    input.type = "range";
    input.min = String(min);
    input.max = String(max);
    input.step = String(step);
    input.value = String(value);

    const out = document.createElement("output");
    out.className = "intro-fig-control-value";

    const render = () => {
      const current = Number(input.value);
      out.textContent = format ? format(current) : String(current);
      onInput?.(current);
    };
    input.addEventListener("input", render);
    out.textContent = format ? format(Number(input.value)) : String(value);

    row.append(name, input, out);
    return {
      row,
      input,
      value: () => Number(input.value),
      set(next) {
        input.value = String(next);
        render();
      },
      refresh: render
    };
  }

  function readout(initial = "") {
    const node = document.createElement("p");
    node.className = "intro-fig-readout";
    if (initial) setMath(node, initial);
    node.set = (content) => setMath(node, content);
    return node;
  }

  function svgPointFromEvent(svg, event) {
    const bounds = svg.getBoundingClientRect();
    const viewBox = svg.viewBox.baseVal;
    return {
      x: ((event.clientX - bounds.left) / bounds.width) * viewBox.width + viewBox.x,
      y: ((event.clientY - bounds.top) / bounds.height) * viewBox.height + viewBox.y
    };
  }

  function clampStep(value, min, max, step) {
    const snapped = Math.round((value - min) / step) * step + min;
    return Math.min(max, Math.max(min, Number(snapped.toFixed(6))));
  }

  function dragPoint(svg, { r = 8, className = "geometry-point active intro-fig-handle", ariaLabel, min, max, step = 1, value, toXY, fromXY, valueText, onChange }) {
    const node = el("circle", { class: className, r, tabindex: "0", role: "slider" });
    if (ariaLabel) node.setAttribute("aria-label", ariaLabel);
    node.setAttribute("aria-valuemin", String(min));
    node.setAttribute("aria-valuemax", String(max));

    let current = value;

    const apply = (next, notify = true) => {
      current = clampStep(next, min, max, step);
      const [x, y] = toXY(current);
      node.setAttribute("cx", x);
      node.setAttribute("cy", y);
      node.setAttribute("aria-valuenow", String(current));
      node.setAttribute("aria-valuetext", valueText ? valueText(current) : String(current));
      if (notify) onChange?.(current);
    };

    node.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      node.setPointerCapture(event.pointerId);
    });
    node.addEventListener("pointermove", (event) => {
      if (!node.hasPointerCapture?.(event.pointerId)) return;
      const point = svgPointFromEvent(svg, event);
      apply(fromXY(point.x, point.y));
    });
    node.addEventListener("keydown", (event) => {
      const big = step * 5;
      const moves = {
        ArrowLeft: -step,
        ArrowDown: -step,
        ArrowRight: step,
        ArrowUp: step,
        PageDown: -big,
        PageUp: big
      };
      if (event.key in moves) {
        event.preventDefault();
        apply(current + moves[event.key]);
      } else if (event.key === "Home") {
        event.preventDefault();
        apply(min);
      } else if (event.key === "End") {
        event.preventDefault();
        apply(max);
      }
    });

    svg.append(node);
    apply(current, false);
    return {
      node,
      value: () => current,
      set: (next) => apply(next, false),
      refresh: () => onChange?.(current)
    };
  }

  function dragPointXY(svg, { r = 8, className = "geometry-point active intro-fig-handle", ariaLabel, map, x, y, stepX = 0.5, stepY = 0.5, valueText, onChange }) {
    const node = el("circle", { class: className, r, tabindex: "0", role: "slider" });
    if (ariaLabel) node.setAttribute("aria-label", ariaLabel);

    let currentX = x;
    let currentY = y;

    const apply = (nextX, nextY, notify = true) => {
      currentX = Math.min(map.xMax, Math.max(map.xMin, Number((Math.round(nextX / stepX) * stepX).toFixed(6))));
      currentY = Math.min(map.yMax, Math.max(map.yMin, Number((Math.round(nextY / stepY) * stepY).toFixed(6))));
      node.setAttribute("cx", map.x(currentX));
      node.setAttribute("cy", map.y(currentY));
      node.setAttribute("aria-valuetext", valueText ? valueText(currentX, currentY) : `${fmt(currentX)}, ${fmt(currentY)}`);
      if (notify) onChange?.(currentX, currentY);
    };

    node.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      node.setPointerCapture(event.pointerId);
    });
    node.addEventListener("pointermove", (event) => {
      if (!node.hasPointerCapture?.(event.pointerId)) return;
      const point = svgPointFromEvent(svg, event);
      const mathX = map.xMin + ((point.x - map.left) / (map.right - map.left)) * (map.xMax - map.xMin);
      const mathY = map.yMin + ((map.bottom - point.y) / (map.bottom - map.top)) * (map.yMax - map.yMin);
      apply(mathX, mathY);
    });
    node.addEventListener("keydown", (event) => {
      const moves = {
        ArrowLeft: [-stepX, 0],
        ArrowRight: [stepX, 0],
        ArrowDown: [0, -stepY],
        ArrowUp: [0, stepY]
      };
      if (event.key in moves) {
        event.preventDefault();
        apply(currentX + moves[event.key][0], currentY + moves[event.key][1]);
      }
    });

    svg.append(node);
    apply(currentX, currentY, false);
    return {
      node,
      value: () => ({ x: currentX, y: currentY }),
      refresh: () => onChange?.(currentX, currentY)
    };
  }

  function figure({ svg, controls = [], readouts = [], hint, caption, className = "" }) {
    const node = document.createElement("figure");
    node.className = `intro-figure intro-fig ${className}`.trim();
    if (svg) node.append(svg);

    for (const item of readouts.filter(Boolean)) node.append(item);

    if (controls.length) {
      const panel = document.createElement("div");
      panel.className = "intro-fig-controls";
      for (const control of controls) panel.append(control.row || control);
      node.append(panel);
    }

    if (hint) {
      const hintNode = document.createElement("p");
      hintNode.className = "intro-fig-hint";
      hintNode.textContent = hint;
      node.append(hintNode);
    }

    if (caption) {
      const captionNode = document.createElement("figcaption");
      setMath(captionNode, caption);
      node.append(captionNode);
    }

    return node;
  }

  function mathCard(rows, caption) {
    if (typeof window.createIntroMathFigure === "function") {
      return window.createIntroMathFigure(rows, caption || "");
    }
    return null;
  }

  const helpers = {
    el,
    canvas,
    text,
    line,
    path,
    circle,
    rect,
    arrow,
    mapper,
    plot,
    fmt,
    setMath,
    slider,
    readout,
    dragPoint,
    dragPointXY,
    figure,
    mathCard
  };

  function register(figureKey, builder) {
    byFigure.set(figureKey, builder);
  }

  function registerLesson(workspaceId, builder) {
    byLesson.set(workspaceId, builder);
  }

  function create(workspace) {
    const builder = byLesson.get(workspace.id) || byFigure.get(workspace.figure);
    if (!builder) return null;
    try {
      const result = builder(workspace, helpers);
      const figures = (Array.isArray(result) ? result : [result]).filter(Boolean);
      return figures.length ? figures : null;
    } catch (error) {
      console.error(`Carry intro figure failed for ${workspace.id}`, error);
      return null;
    }
  }

  window.CarryIntroFigures = { register, registerLesson, create, helpers };
})();
