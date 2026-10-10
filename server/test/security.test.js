import assert from "node:assert/strict";
import { after, before, test } from "node:test";

process.env.NODE_ENV = "production";
process.env.FRONTEND_ORIGINS = "https://onelement.in,https://www.onelement.in";
process.env.VIEW_STATS_USERNAME = "test-admin";
process.env.VIEW_STATS_PASSWORD = "test-password-is-long-enough";
process.env.TRUST_PROXY = "0";

const { default: app } = await import("../src/app.js");

let server;
let baseUrl;

before(async () => {
  await new Promise((resolve) => {
    server = app.listen(0, "127.0.0.1", () => {
      const address = server.address();
      baseUrl = `http://127.0.0.1:${address.port}`;
      resolve();
    });
  });
});

after(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
});

test("health endpoint remains available to the hosting platform", async () => {
  const response = await fetch(`${baseUrl}/health`);
  assert.equal(response.status, 200);
});

test("public read routes validate malformed input", async () => {
  const response = await fetch(`${baseUrl}/api/technologies?page=invalid`);
  assert.equal(response.status, 400);
});

test("public content write methods remain disabled", async () => {
  const response = await fetch(`${baseUrl}/api/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: "unauthorized" }),
  });
  assert.equal(response.status, 405);
});

test("unapproved browser origins are rejected", async () => {
  const response = await fetch(`${baseUrl}/api/blogs`, {
    headers: {
      Origin: "https://attacker.example",
    },
  });
  assert.equal(response.status, 403);
});

test("visitor registration requires the official browser origin", async () => {
  const response = await fetch(`${baseUrl}/api/views`, { method: "POST" });
  assert.equal(response.status, 403);
});

test("private statistics require authentication", async () => {
  const response = await fetch(`${baseUrl}/api/view-stats`);
  assert.equal(response.status, 401);
});
