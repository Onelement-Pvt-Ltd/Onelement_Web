import { createHash, timingSafeEqual } from "node:crypto";
import Analytics from "./analytics.model.js";
import { env, isProduction } from "../../config/env.js";

const STATS_ID = "site-views";
const VIEW_COOKIE = "oe_view_date";
const INDIA_OFFSET_MS = 5.5 * 60 * 60 * 1000;

const hash = (value) => createHash("sha256").update(String(value)).digest();
const secureEqual = (left, right) => timingSafeEqual(hash(left), hash(right));

const getIndiaDate = () =>
  new Date(Date.now() + INDIA_OFFSET_MS).toISOString().slice(0, 10);

const readCookie = (req, name) => {
  const cookies = req.get("cookie") || "";
  const match = cookies
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : null;
};

const secondsUntilIndiaMidnight = () => {
  const indiaNow = new Date(Date.now() + INDIA_OFFSET_MS);
  const nextMidnight = new Date(indiaNow);
  nextMidnight.setUTCHours(24, 0, 0, 0);
  return Math.max(1, Math.ceil((nextMidnight.getTime() - indiaNow.getTime()) / 1000));
};

const toDailyObject = (daily) => {
  if (!daily) return {};
  if (daily instanceof Map) return Object.fromEntries(daily);
  return daily;
};

export const requireOfficialOrigin = (req, res, next) => {
  const origin = req.get("origin");
  if (!origin) {
    return res.status(403).json({ success: false, message: "Request origin required" });
  }

  try {
    if (env.FRONTEND_ORIGINS.includes(new URL(origin).origin)) return next();
  } catch {
    // Invalid origins are rejected below.
  }

  return res.status(403).json({ success: false, message: "Origin not allowed" });
};

export const requireStatsAuth = (req, res, next) => {
  if (!env.VIEW_STATS_USERNAME || !env.VIEW_STATS_PASSWORD) {
    return res.status(503).json({ success: false, message: "Statistics service unavailable" });
  }

  const authorization = req.get("authorization") || "";
  if (!authorization.startsWith("Basic ")) {
    res.set("WWW-Authenticate", 'Basic realm="Onelement statistics", charset="UTF-8"');
    return res.status(401).json({ success: false, message: "Authentication required" });
  }

  try {
    const decoded = Buffer.from(authorization.slice(6), "base64").toString("utf8");
    const separator = decoded.indexOf(":");
    if (separator < 0) throw new Error("Invalid credentials");

    const username = decoded.slice(0, separator);
    const password = decoded.slice(separator + 1);
    if (secureEqual(username, env.VIEW_STATS_USERNAME) && secureEqual(password, env.VIEW_STATS_PASSWORD)) {
      return next();
    }
  } catch {
    // Invalid credentials are handled below.
  }

  return res.status(401).json({ success: false, message: "Invalid username or password" });
};

export const registerView = async (req, res) => {
  try {
    const today = getIndiaDate();
    let stats;

    if (readCookie(req, VIEW_COOKIE) === today) {
      stats = await Analytics.findById(STATS_ID).select("total").lean();
    } else {
      stats = await Analytics.findByIdAndUpdate(
        STATS_ID,
        {
          $inc: { total: 1, [`daily.${today}`]: 1 },
          $set: { updatedAt: new Date() },
        },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      ).lean();

      res.cookie(VIEW_COOKIE, today, {
        httpOnly: true,
        secure: isProduction,
        sameSite: "lax",
        maxAge: secondsUntilIndiaMidnight() * 1000,
        path: "/",
      });
    }

    res.json({ success: true, total: Number(stats?.total || 0), countedDate: today });
  } catch (error) {
    console.error("Failed to register view", error);
    res.status(503).json({ success: false, message: "View counter unavailable" });
  }
};

export const getViewStats = async (_req, res) => {
  try {
    const stats = await Analytics.findById(STATS_ID).lean();
    res.set("Cache-Control", "no-store");
    res.json({
      total: Number(stats?.total || 0),
      daily: toDailyObject(stats?.daily),
      updatedAt: stats?.updatedAt || null,
    });
  } catch (error) {
    console.error("Failed to load view statistics", error);
    res.status(503).json({ success: false, message: "Unable to load view statistics" });
  }
};
