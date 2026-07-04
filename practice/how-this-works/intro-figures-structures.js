(function () {
  const figures = window.CarryIntroFigures;
  if (!figures) return;
  const { register } = figures;

  // Set theory — union and intersection: two clubs, three kinds of members.
  register("set-operations", (workspace, h) => {
    const svg = h.canvas({ height: 220, interactive: true });
    h.circle(svg, 138, 104, 66, "geometry-shape active");
    h.circle(svg, 222, 104, 66, "geometry-shape result");
    h.text(svg, "A", 92, 52, "geometry-label geometry-math active");
    h.text(svg, "B", 268, 52, "geometry-label geometry-math result", "end");
    const members = [
      { value: 1, x: 112, y: 92, zone: "a" },
      { value: 2, x: 118, y: 130, zone: "a" },
      { value: 3, x: 180, y: 88, zone: "both" },
      { value: 4, x: 180, y: 126, zone: "both" },
      { value: 5, x: 244, y: 92, zone: "b" },
      { value: 6, x: 240, y: 130, zone: "b" }
    ];
    const chips = members.map((member) => {
      const chip = h.circle(svg, member.x, member.y, 13, "geometry-point");
      const label = h.text(svg, String(member.value), member.x, member.y + 6, "geometry-note", "middle");
      label.setAttribute("fill", "var(--surface)");
      return { ...member, chip };
    });
    const out = h.readout("");

    const modes = [
      { name: "A ∪ B", keep: () => true, text: "everyone from either club: {1, 2, 3, 4, 5, 6}" },
      { name: "A ∩ B", keep: (zone) => zone === "both", text: "only the overlap: {3, 4}" },
      { name: "A \\ B", keep: (zone) => zone === "a", text: "A with the shared members removed: {1, 2}" }
    ];
    const update = (index) => {
      const mode = modes[index];
      chips.forEach(({ chip, zone }) => {
        chip.setAttribute("class", mode.keep(zone) ? "geometry-point result" : "geometry-point");
      });
      out.set(`<math>${mode.name}</math> keeps ${mode.text}.`);
    };

    const control = h.slider({ label: "operation", min: 0, max: 2, step: 1, value: 0, format: (v) => modes[v].name }, update);
    update(0);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "Union, intersection, and difference are just three answers to one question: which members do we keep? Or means either club, and means both, minus means kick out the shared ones."
    });
  });

  // Set theory — subsets: every element is one yes-or-no choice.
  register("set-subsets", (workspace, h) => {
    const svg = h.canvas({ height: 230, interactive: true });
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (n) => {
      dyn.replaceChildren();
      const total = 2 ** n;
      const cols = Math.min(total, n >= 3 ? 4 : total);
      const rows = Math.ceil(total / cols);
      const cellW = n * 14 + 10;
      const gridW = cols * (cellW + 12);
      const originX = 180 - gridW / 2 + 6;
      const originY = 116 - (rows * 26) / 2;
      for (let subset = 0; subset < total; subset += 1) {
        const col = subset % cols;
        const row = Math.floor(subset / cols);
        for (let element = 0; element < n; element += 1) {
          const inSubset = (subset >> element) & 1;
          h.rect(
            dyn,
            originX + col * (cellW + 12) + element * 14,
            originY + row * 26,
            11,
            16,
            inSubset ? "geometry-shape active" : "geometry-shape",
            2
          );
        }
      }
      out.set(`${n} element${n === 1 ? "" : "s"}, each answering in or out: <math>2^{${n}} = ${total}</math> subsets, the all-out empty set included.`);
    };

    const control = h.slider({ label: "elements", min: 1, max: 4, step: 1, value: 3 }, update);
    update(3);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "Building a subset is a row of yes-or-no switches, one per element. Each new element doubles the possibilities — that is the whole story of 2ⁿ."
    });
  });

  // Number theory — modular arithmetic: numbers on a wheel.
  register("number-modular", (workspace, h) => {
    const svg = h.canvas({ height: 240, interactive: true });
    const cx = 180;
    const cy = 118;
    const r = 82;
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    let modulus = 5;
    let number = 14;
    const update = () => {
      dyn.replaceChildren();
      h.circle(dyn, cx, cy, r, "geometry-shape");
      const remainder = number % modulus;
      for (let slot = 0; slot < modulus; slot += 1) {
        const angle = -Math.PI / 2 + (slot * 2 * Math.PI) / modulus;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        h.circle(dyn, x, y, slot === remainder ? 15 : 11, slot === remainder ? "geometry-point result" : "geometry-point");
        const label = h.text(dyn, String(slot), x, y + 6, "geometry-note", "middle");
        label.setAttribute("fill", "var(--surface)");
      }
      out.set(`<math>${number} mod ${modulus} = ${remainder}</math> — count ${number} steps around a ${modulus}-hour wheel and this is where you stand. The ${Math.floor(number / modulus)} full laps vanish.`);
    };

    const modulusControl = h.slider({ label: "wheel size n", min: 3, max: 12, step: 1, value: modulus }, (value) => {
      modulus = value;
      update();
    });
    const numberControl = h.slider({ label: "number", min: 0, max: 40, step: 1, value: number }, (value) => {
      number = value;
      update();
    });
    update();

    return h.figure({
      svg,
      readouts: [out],
      controls: [modulusControl, numberControl],
      caption: "Modular arithmetic bends the number line into a wheel. Whole laps disappear; only your final position — the remainder — survives. A clock has been teaching you this since childhood."
    });
  });

  // Number theory — Euclidean algorithm: tile, keep the leftover, repeat.
  register("number-euclidean", (workspace, h) => {
    const svg = h.canvas({ height: 230, interactive: true });
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    let a = 48;
    let b = 18;
    const gcdOf = (x, y) => (y === 0 ? x : gcdOf(y, x % y));
    const update = () => {
      dyn.replaceChildren();
      const scale = 272 / Math.max(a, b);
      let big = Math.max(a, b);
      let small = Math.min(a, b);
      let y = 42;
      let steps = 0;
      while (small > 0 && steps < 4) {
        const q = Math.floor(big / small);
        const r = big % small;
        for (let index = 0; index < q; index += 1) {
          h.rect(dyn, 44 + index * small * scale, y, small * scale - 2, 24, "geometry-shape", 3);
        }
        if (r > 0) h.rect(dyn, 44 + q * small * scale, y, r * scale - 2, 24, "geometry-shape active", 3);
        h.text(dyn, `${big} = ${q} × ${small}${r ? ` + ${r}` : ""}`, 322, y + 17, "geometry-note", "end");
        big = small;
        small = r;
        y += 44;
        steps += 1;
      }
      out.set(`<math>gcd(${a}, ${b}) = ${gcdOf(a, b)}</math> — the last leftover that fits perfectly.`);
    };

    const aControl = h.slider({ label: "first", min: 20, max: 60, step: 1, value: a }, (value) => {
      a = value;
      update();
    });
    const bControl = h.slider({ label: "second", min: 5, max: 24, step: 1, value: b }, (value) => {
      b = value;
      update();
    });
    update();

    return h.figure({
      svg,
      readouts: [out],
      controls: [aControl, bControl],
      caption: "Tile the big bar with copies of the small one and keep the leftover. Now tile the small bar with the leftover. The piece that finally fits with nothing left over measures both original numbers — that is the GCD."
    });
  });

  // Number theory — primes: a prime refuses to be a rectangle.
  register("number-primes", (workspace, h) => {
    const svg = h.canvas({ height: 220, interactive: true });
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (n) => {
      dyn.replaceChildren();
      let best = 1;
      for (let d = 2; d * d <= n; d += 1) {
        if (n % d === 0) best = d;
      }
      const rows = best;
      const cols = n / best;
      const size = Math.min(20, 280 / cols, 150 / rows);
      const originX = 180 - (cols * size) / 2;
      const originY = 112 - (rows * size) / 2;
      for (let index = 0; index < n; index += 1) {
        const row = Math.floor(index / cols);
        const col = index % cols;
        h.circle(dyn, originX + col * size + size / 2, originY + row * size + size / 2, size * 0.32, best === 1 ? "geometry-point active" : "geometry-point result");
      }
      out.set(
        best === 1
          ? `${n} dots make only a single file line — <math>1 × ${n}</math>. ${n} is prime.`
          : `${n} dots stand in a perfect <math>${rows} × ${cols}</math> rectangle. ${n} is composite.`
      );
    };

    const control = h.slider({ label: "number n", min: 2, max: 30, step: 1, value: 17 }, update);
    update(17);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "Try to arrange n dots into a filled rectangle. Composite numbers manage it; a prime can only stand in single file. Factoring is really the search for hidden rectangles."
    });
  });

  // Real analysis — limits: the epsilon-delta bargain.
  register("real-limits", (workspace, h) => {
    const svg = h.canvas({ height: 240, interactive: true });
    const map = h.mapper({ xMin: 0, xMax: 4, yMin: -0.5, yMax: 7.2, left: 40, right: 324, top: 14, bottom: 218 });
    const dyn = h.el("g");
    svg.append(dyn);
    h.plot(svg, (x) => 2 * x - 1, map, { samples: 60, className: "geometry-line" });
    h.circle(svg, map.x(2), map.y(3), 5, "geometry-point");
    const out = h.readout("");

    const update = (epsilon) => {
      dyn.replaceChildren();
      const delta = epsilon / 2;
      h.rect(dyn, map.left, map.y(3 + epsilon), map.right - map.left, map.y(3 - epsilon) - map.y(3 + epsilon), "geometry-shape result");
      h.rect(dyn, map.x(2 - delta), map.top, map.x(2 + delta) - map.x(2 - delta), map.bottom - map.top, "geometry-shape active");
      out.set(`You demand outputs within <math>ε = ${h.fmt(epsilon, 2)}</math> of 3. Inputs within <math>δ = ${h.fmt(delta, 2)}</math> of 2 deliver it — every time, for every ε.`);
    };

    const control = h.slider({ label: "tolerance ε", min: 0.25, max: 1.5, step: 0.25, value: 1, format: (v) => h.fmt(v, 2) }, update);
    update(1);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "The limit definition is a bargain: however tight a band you demand around the output, I can name a band around the input that keeps the function inside yours. If I can always win, the limit exists."
    });
  });

  // Real analysis — sequences: the tail settles into the band.
  register("real-sequences", (workspace, h) => {
    const svg = h.canvas({ height: 220, interactive: true });
    const map = h.mapper({ xMin: 0, xMax: 25, yMin: 0, yMax: 1.05, left: 40, right: 324, top: 16, bottom: 196 });
    h.line(svg, map.left, map.y(0), map.right, map.y(0), "geometry-grid-line");
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (epsilon) => {
      dyn.replaceChildren();
      h.rect(dyn, map.left, map.y(epsilon), map.right - map.left, map.y(0) - map.y(epsilon), "geometry-shape result");
      const cutoff = Math.ceil(1 / epsilon);
      for (let n = 1; n <= 24; n += 1) {
        h.circle(dyn, map.x(n), map.y(1 / n), 4, 1 / n < epsilon ? "geometry-point result" : "geometry-point");
      }
      if (cutoff <= 24) {
        h.line(dyn, map.x(cutoff + 0.5), map.top, map.x(cutoff + 0.5), map.bottom, "geometry-grid-line");
      }
      out.set(`<math>a_n = \\frac{1}{n}</math>: past <math>N = ${cutoff}</math>, every term stays inside the ε-band around 0 — and never leaves.`);
    };

    const control = h.slider({ label: "band ε", min: 0.05, max: 0.5, step: 0.05, value: 0.2, format: (v) => h.fmt(v, 2) }, update);
    update(0.2);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "Convergence is a promise about the tail: name any band around the limit, and from some point on, every term lives inside it. The first terms can misbehave all they like."
    });
  });

  // Topology — open sets: elbow room for every point.
  register("topology-open-sets", (workspace, h) => {
    const svg = h.canvas({ height: 200, interactive: true });
    const map = h.mapper({ xMin: -0.15, xMax: 1.15, left: 44, right: 316 });
    const axisY = 116;
    h.line(svg, map.x(-0.12), axisY, map.x(1.12), axisY, "geometry-grid-line");
    h.line(svg, map.x(0), axisY, map.x(1), axisY, "geometry-line");
    const endLeft = h.circle(svg, map.x(0), axisY, 6, "geometry-shape");
    const endRight = h.circle(svg, map.x(1), axisY, 6, "geometry-shape");
    endLeft.setAttribute("fill", "var(--surface)");
    endRight.setAttribute("fill", "var(--surface)");
    h.text(svg, "0", map.x(0), axisY + 28, "geometry-label geometry-math", "middle");
    h.text(svg, "1", map.x(1), axisY + 28, "geometry-label geometry-math", "middle");
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const update = (x) => {
      dyn.replaceChildren();
      const room = Math.min(x, 1 - x);
      h.line(dyn, map.x(x - room), axisY - 14, map.x(x + room), axisY - 14, "geometry-line result");
      h.line(dyn, map.x(x - room), axisY - 20, map.x(x - room), axisY - 8, "geometry-line result");
      h.line(dyn, map.x(x + room), axisY - 20, map.x(x + room), axisY - 8, "geometry-line result");
      out.set(`At <math>x = ${h.fmt(x, 2)}</math> there is room <math>${h.fmt(room, 2)}</math> on each side before leaving (0, 1) — an entire neighborhood still inside.`);
    };

    h.dragPoint(svg, {
      ariaLabel: "Point inside the open interval",
      min: 0.05,
      max: 0.95,
      step: 0.05,
      value: 0.3,
      toXY: (x) => [map.x(x), axisY],
      fromXY: (x) => map.xMin + ((x - map.left) / (map.right - map.left)) * (map.xMax - map.xMin),
      valueText: (x) => `x = ${h.fmt(x, 2)}, room ${h.fmt(Math.min(x, 1 - x), 2)}`,
      onChange: update
    });
    update(0.3);

    return h.figure({
      svg,
      readouts: [out],
      hint: "Drag the point — even close to the edge, some room remains.",
      caption: "Open means every member has elbow room: wherever you stand in <math>(0, 1)</math>, a little neighborhood around you still fits inside. Add the endpoints and the promise breaks — at 1 exactly, there is no room to the right."
    });
  });

  // Abstract algebra — groups: one move, repeated, reveals a group inside.
  register("abstract-groups", (workspace, h) => {
    const svg = h.canvas({ height: 240, interactive: true });
    const cx = 180;
    const cy = 118;
    const r = 82;
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    let n = 6;
    let g = 2;
    const update = () => {
      dyn.replaceChildren();
      const step = g % n;
      const visited = new Set();
      let position = 0;
      do {
        visited.add(position);
        position = (position + step) % n;
      } while (position !== 0 && visited.size <= n);
      const point = (slot) => {
        const angle = -Math.PI / 2 + (slot * 2 * Math.PI) / n;
        return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
      };
      if (step > 0) {
        let from = 0;
        for (let hop = 0; hop < visited.size; hop += 1) {
          const to = (from + step) % n;
          const [x1, y1] = point(from);
          const [x2, y2] = point(to);
          h.arrow(dyn, x1 + (x2 - x1) * 0.18, y1 + (y2 - y1) * 0.18, x1 + (x2 - x1) * 0.82, y1 + (y2 - y1) * 0.82, "geometry-line active");
          from = to;
        }
      }
      for (let slot = 0; slot < n; slot += 1) {
        const [x, y] = point(slot);
        h.circle(dyn, x, y, 13, visited.has(slot) ? "geometry-point result" : "geometry-point");
        const label = h.text(dyn, String(slot), x, y + 6, "geometry-note", "middle");
        label.setAttribute("fill", "var(--surface)");
      }
      const members = [...visited].sort((p, q) => p - q).join(", ");
      out.set(
        step === 0
          ? `Stepping by 0 goes nowhere: the subgroup is just {0}, the identity alone.`
          : `Stepping by ${step} in mod ${n} reaches {${members}} — ${visited.size === n ? "the whole group" : `a smaller group of ${visited.size} hiding inside`}.`
      );
    };

    const nControl = h.slider({ label: "clock size n", min: 4, max: 9, step: 1, value: n }, (value) => {
      n = value;
      update();
    });
    const gControl = h.slider({ label: "step g", min: 0, max: 8, step: 1, value: g }, (value) => {
      g = value;
      update();
    });
    update();

    return h.figure({
      svg,
      readouts: [out],
      controls: [nControl, gControl],
      caption: "Take one move and repeat it forever. Whatever it can reach is closed, has an identity, and can be undone — a group grown from a single seed. Sometimes it is the whole clock; sometimes a smaller gear turning inside."
    });
  });

  // Proofs — induction: dominoes, honestly arranged.
  register("proof-induction", (workspace, h) => {
    const svg = h.canvas({ height: 200, interactive: true });
    const dyn = h.el("g");
    svg.append(dyn);
    const out = h.readout("");

    const total = 9;
    const update = (k) => {
      dyn.replaceChildren();
      for (let index = 0; index < total; index += 1) {
        const x = 52 + index * 30;
        const node = h.rect(dyn, x, 92, 14, 66, index < k ? "geometry-shape active" : "geometry-shape", 3);
        if (index < k) node.setAttribute("transform", `rotate(52 ${x + 7} 158)`);
      }
      h.text(dyn, "P(1)", 60, 62, "geometry-label geometry-math", "middle");
      out.set(
        k === 0
          ? "Nothing falls on its own — induction always needs the first push: the base case."
          : k < total
            ? `${k} down. Each falling domino knocks the next: <math>P(k) → P(k + 1)</math>.`
            : "All of them — one push plus one honest chain reaches every case there is."
      );
    };

    const control = h.slider({ label: "fallen", min: 0, max: total, step: 1, value: 4 }, update);
    update(4);

    return h.figure({
      svg,
      readouts: [out],
      controls: [control],
      caption: "Induction is a row of dominoes: prove the first one falls, prove each one knocks over the next, and you have proved something about infinitely many dominoes without touching them all."
    });
  });
})();
