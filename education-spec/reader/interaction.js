(() => {
  "use strict";

  const cards = [...document.querySelectorAll(".card")];
  let currentCard;

  function showCard(moveFocus) {
    const id = location.hash.slice(1);
    const target = id && document.getElementById(id);
    const card = target?.closest?.(".card") ?? (id ? currentCard : null) ?? cards[0];
    if (!card) return;
    for (const candidate of cards) candidate.hidden = candidate !== card;
    currentCard = card;
    if (moveFocus && (!id || target)) {
      const heading = !target || target.matches(".card") ? card.querySelector("h2") : target;
      heading.focus({ preventScroll: true });
      heading.scrollIntoView({ block: "start" });
    }
  }

  showCard(false);
  window.addEventListener("hashchange", () => showCard(true));
  document.querySelector(".contents")?.addEventListener("click", event => {
    if (event.target.closest("a")) event.currentTarget.open = false;
  });

  for (const options of document.querySelectorAll("[data-shuffle]")) {
    const labels = [...options.children];
    for (let index = labels.length - 1; index > 0; index--) {
      const swap = Math.floor(Math.random() * (index + 1));
      [labels[index], labels[swap]] = [labels[swap], labels[index]];
    }
    options.append(...labels);
  }

  function normalize(value, policy) {
    const trimmed = value.trim();
    return policy === "trim-ascii-case-insensitive"
      ? trimmed.replace(/[A-Z]/g, letter => letter.toLowerCase())
      : trimmed;
  }

  function evaluate(part, form) {
    const { input, accepted, correct, normalization } = part.dataset;
    if (accepted) {
      const value = normalize(document.getElementById(input).value, normalization);
      if (!value) return "empty";
      return JSON.parse(accepted).some(answer => normalize(answer, normalization) === value)
        ? "correct" : "incorrect";
    }
    const selected = new FormData(form).getAll(input);
    if (!selected.length) return "empty";
    const expected = correct.split(" ");
    return selected.length === expected.length && selected.every(value => expected.includes(value))
      ? "correct" : "incorrect";
  }

  function updateResult(part, state) {
    const status = part.querySelector(".result");
    const message = {
      correct: "Correct.",
      incorrect: "Try again.",
      empty: "Enter or select an answer."
    };
    const feedback = state === "correct" && part.dataset.feedback ? ` ${part.dataset.feedback}` : "";
    status.textContent = (message[state] ?? "") + feedback;
    status.dataset.state = state;
  }

  for (const form of document.querySelectorAll(".question")) {
    const parts = [...form.querySelectorAll(".part")];
    form.addEventListener("submit", event => {
      event.preventDefault();
      for (const part of parts) updateResult(part, evaluate(part, form));
    });
    form.addEventListener("input", event => {
      const field = event.target.name || event.target.id;
      const part = parts.find(candidate => candidate.dataset.input === field);
      if (part) updateResult(part, "");
    });
  }

  for (const form of document.querySelectorAll(".addition")) {
    const { top, bottom } = form.dataset;
    const width = Math.max(top.length, bottom.length);
    const first = top.padStart(width + 1, "0");
    const second = bottom.padStart(width + 1, "0");
    const status = form.querySelector(".addition-status");
    const check = form.querySelector('[type="submit"]');
    const hint = form.querySelector("[data-addition-hint]");
    const restart = form.querySelector('[type="reset"]');
    const inputs = new Map([...form.querySelectorAll("[data-slot]")].map(input => [input.dataset.slot, input]));
    const steps = [];
    let carry = 0;
    for (let column = width; column > 0; column--) {
      const total = Number(first[column]) + Number(second[column]) + carry;
      const expression = carry ? `${first[column]} + ${second[column]} + ${carry}` : `${first[column]} + ${second[column]}`;
      steps.push({
        input: inputs.get(`Sum-${column}`),
        answer: String(total % 10),
        instruction: column === width ? "Add the ones." : "Add the next column, including any carry.",
        hint: `What is the ones digit of ${expression}?`
      });
      carry = Math.floor(total / 10);
      if (carry && column > 1) {
        steps.push({
          input: inputs.get(`Carry-${column - 1}`),
          answer: String(carry),
          instruction: "Write the carry above the next column.",
          hint: `How many tens are in ${expression}?`
        });
      }
    }
    if (carry) {
      steps.push({
        input: inputs.get("Sum-0"),
        answer: String(carry),
        instruction: "Write the remaining carry at the left of the sum.",
        hint: "Use the tens digit of the leftmost column total."
      });
    }

    let active = 0;
    function showStep(focus) {
      const step = steps[active];
      check.hidden = hint.hidden = !step;
      restart.hidden = Boolean(step);
      if (!step) {
        status.textContent = `Complete. ${top} + ${bottom} = ${Number(top) + Number(bottom)}.`;
        if (focus) restart.focus();
        return;
      }
      step.input.disabled = false;
      step.input.hidden = false;
      status.textContent = step.instruction;
      if (focus) step.input.focus();
    }

    showStep(false);
    form.hidden = false;
    form.addEventListener("submit", event => {
      event.preventDefault();
      const step = steps[active];
      if (!step) return;
      if (step.input.value.trim() !== step.answer) {
        status.textContent = step.input.value.trim() ? "Try that digit again." : "Enter a digit first.";
        step.input.setAttribute("aria-invalid", "true");
        step.input.focus();
        step.input.select();
        return;
      }
      step.input.removeAttribute("aria-invalid");
      step.input.readOnly = true;
      active += 1;
      showStep(true);
    });
    form.addEventListener("input", event => event.target.removeAttribute("aria-invalid"));
    hint.addEventListener("click", () => { status.textContent = steps[active]?.hint ?? ""; });
    form.addEventListener("reset", event => {
      event.preventDefault();
      for (const input of inputs.values()) {
        input.value = "";
        input.readOnly = false;
        input.disabled = true;
        input.hidden = true;
        input.removeAttribute("aria-invalid");
      }
      active = 0;
      showStep(true);
    });
  }
})();
