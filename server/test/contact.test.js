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

const postContact = (body, origin = "https://onelement.in") => fetch(`${baseUrl}/api/contact`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Origin: origin,
  },
  body: JSON.stringify(body),
});

test("contact submissions require the official website origin", async () => {
  const response = await postContact({
    name: "Test User",
    email: "test@example.com",
    comments: "This is a valid test enquiry.",
    website: "",
  }, "https://attacker.example");

  assert.equal(response.status, 403);
});

test("contact submissions reject invalid fields", async () => {
  const response = await postContact({
    name: "T",
    email: "not-an-email",
    comments: "short",
    website: "",
  });

  assert.equal(response.status, 400);
});

test("contact honeypot quietly accepts likely bot submissions without sending mail", async () => {
  const response = await postContact({
    name: "Test User",
    email: "test@example.com",
    comments: "This is a valid test enquiry.",
    website: "https://spam.example",
  });

  assert.equal(response.status, 202);
  assert.equal((await response.json()).success, true);
});

test("contact endpoint allows only POST", async () => {
  const response = await fetch(`${baseUrl}/api/contact`);
  assert.equal(response.status, 405);
  assert.equal(response.headers.get("allow"), "POST");
});
