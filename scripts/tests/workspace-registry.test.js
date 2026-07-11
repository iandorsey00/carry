const test = require("node:test");
const assert = require("node:assert/strict");
const { create } = require("../../core/workspace-registry.js");

test("combines practice sections without topic-specific wiring", () => {
  const arithmetic = { id: "arithmetic.decimals", title: "Decimals" };
  const topology = { id: "topology.open-sets", title: "Open sets" };
  const data = create({
    sections: {
      arithmetic: { [arithmetic.id]: arithmetic },
      topology: { [topology.id]: topology }
    },
    modes: { longOperations: {} }
  });

  assert.equal(data.registry[arithmetic.id], arithmetic);
  assert.equal(data.registry[topology.id], topology);
  assert.equal(data.registry.Topology.status, "planned");
});

test("registers long-operation workspaces by their stable ids", () => {
  const addition = { id: "arithmetic.long-addition.3x3" };
  const data = create({
    sections: {},
    modes: { longOperations: { additionWorkspace: addition } }
  });

  assert.equal(data.additionWorkspace, addition);
  assert.equal(data.registry[addition.id], addition);
});

