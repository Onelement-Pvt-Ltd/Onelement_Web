import { createHash, timingSafeEqual } from "node:crypto";
import { getStore } from "@netlify/blobs";

const STORE_NAME = "site-analytics";
const STATS_KEY = "views";
const ADMIN_USERNAME = "onelement";
const ADMIN_PASSWORD_HASH = "ecfd3c8612c90ba150a89be64942aa68d1e156c474c24d63712ba33ed132c2b2";

const responseHeaders = {
  "Cache-Control": "no-store, max-age=0",
  "Content-Type": "application/json; charset=utf-8",
  "Referrer-Policy": "no-referrer",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-Robots-Tag": "noindex, nofollow, noarchive",
};

const jsonResponse = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: responseHeaders });

const hash = (value) => createHash("sha256").update(value).digest();

const secureEqual = (left, right) => timingSafeEqual(hash(left), hash(right));

const readCredentials = (request) => {
  const authorization = request.headers.get("authorization") ?? "";
  if (!authorization.startsWith("Basic ")) return null;

  try {
    const decoded = Buffer.from(authorization.slice(6), "base64").toString("utf8");
    const separator = decoded.indexOf(":");
    if (separator < 0) return null;

    return {
      username: decoded.slice(0, separator),
      passwordHash: createHash("sha256")
        .update(decoded.slice(separator + 1))
        .digest("hex"),
    };
  } catch {
    return null;
  }
};

const isAuthorized = (request) => {
  const credentials = readCredentials(request);
  if (!credentials) return false;

  return (
    secureEqual(credentials.username, ADMIN_USERNAME) &&
    secureEqual(credentials.passwordHash, ADMIN_PASSWORD_HASH)
  );
};

export default async (request) => {
  if (request.method !== "GET") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  if (!isAuthorized(request)) {
    return jsonResponse({ error: "Invalid username or password" }, 401);
  }

  try {
    const store = getStore({ name: STORE_NAME, consistency: "strong" });
    const stats = await store.get(STATS_KEY, { type: "json" });

    return jsonResponse({
      total: Number(stats?.total || 0),
      daily: stats?.daily ?? {},
      updatedAt: stats?.updatedAt ?? null,
    });
  } catch (error) {
    console.error("Private view statistics failed", error);
    return jsonResponse({ error: "Unable to load view statistics" }, 503);
  }
};

export const config = {
  method: "GET",
  path: "/api/view-stats",
  rateLimit: {
    windowLimit: 20,
    windowSize: 60,
    aggregateBy: ["ip", "domain"],
  },
};
