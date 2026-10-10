import assert from "node:assert/strict";
import { test } from "node:test";
import { assertSeedAllowed } from "../src/seed/seedGuard.js";

test("seed replacement requires an explicit confirmation", () => {
  assert.throws(() => assertSeedAllowed({ NODE_ENV: "development" }), /SEED_CONFIRMATION/);
});

test("production seeding requires a second explicit confirmation", () => {
  assert.throws(
    () => assertSeedAllowed({ NODE_ENV: "production", SEED_CONFIRMATION: "replace-all-content" }),
    /Production seeding is blocked/,
  );
});

test("confirmed non-production seeding is allowed", () => {
  assert.doesNotThrow(() =>
    assertSeedAllowed({ NODE_ENV: "development", SEED_CONFIRMATION: "replace-all-content" }),
  );
});
