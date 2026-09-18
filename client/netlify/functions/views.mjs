import { getStore } from "@netlify/blobs";

const STORE_NAME = "site-analytics";
const STATS_KEY = "views";
const MAX_WRITE_ATTEMPTS = 8;
const INDIA_OFFSET_MS = 5.5 * 60 * 60 * 1000;

const jsonResponse = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });

const getIndiaDate = () =>
  new Date(Date.now() + INDIA_OFFSET_MS).toISOString().slice(0, 10);

const wait = (attempt) =>
  new Promise((resolve) => {
    const jitter = Math.floor(Math.random() * 20);
    setTimeout(resolve, 15 * 2 ** attempt + jitter);
  });

const emptyStats = () => ({
  total: 0,
  daily: {},
  updatedAt: null,
});

async function incrementView(store) {
  const date = getIndiaDate();

  for (let attempt = 0; attempt < MAX_WRITE_ATTEMPTS; attempt += 1) {
    const entry = await store.getWithMetadata(STATS_KEY, {
      consistency: "strong",
      type: "json",
    });
    const current = entry?.data ?? emptyStats();
    const next = {
      total: Number(current.total || 0) + 1,
      daily: {
        ...(current.daily ?? {}),
        [date]: Number(current.daily?.[date] || 0) + 1,
      },
      updatedAt: new Date().toISOString(),
    };

    const write = await store.setJSON(
      STATS_KEY,
      next,
      entry ? { onlyIfMatch: entry.etag } : { onlyIfNew: true },
    );

    if (write.modified) {
      return { total: next.total, countedDate: date };
    }

    await wait(attempt);
  }

  throw new Error("View counter update was too busy");
}

export default async (request) => {
  if (request.method !== "GET" && request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const store = getStore({ name: STORE_NAME, consistency: "strong" });

    if (request.method === "POST") {
      return jsonResponse(await incrementView(store));
    }

    const stats = await store.get(STATS_KEY, { type: "json" });
    return jsonResponse({ total: Number(stats?.total || 0) });
  } catch (error) {
    console.error("View counter failed", error);
    return jsonResponse({ error: "View counter unavailable" }, 503);
  }
};

export const config = {
  path: "/api/views",
};
