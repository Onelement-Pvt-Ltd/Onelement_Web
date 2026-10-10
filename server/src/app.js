import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { rateLimit } from "express-rate-limit";
import mongoose from "mongoose";

import { env, isProduction } from "./config/env.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import technologyRoutes from "./modules/technology/technology.routes.js";
import blogRoutes from "./modules/blog/blog.routes.js";
import analyticsRoutes from "./modules/analytics/analytics.routes.js";

const app = express();

app.disable("x-powered-by");
app.set("trust proxy", env.TRUST_PROXY);

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "same-site" },
  })
);
app.use(compression());

app.use(
  cors({
    credentials: true,
    methods: ["GET", "POST", "HEAD", "OPTIONS"],
    allowedHeaders: ["Accept", "Authorization", "Content-Type"],
    origin(origin, callback) {
      if (!origin) return callback(null, true);

      let normalizedOrigin;
      try {
        normalizedOrigin = new URL(origin).origin;
      } catch {
        return callback(Object.assign(new Error("Origin not allowed"), { statusCode: 403 }));
      }

      if (env.FRONTEND_ORIGINS.includes(normalizedOrigin)) {
        return callback(null, true);
      }

      return callback(Object.assign(new Error("Origin not allowed"), { statusCode: 403 }));
    },
  })
);

const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: isProduction ? 180 : 1000,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again shortly.",
  },
});

app.use(express.json({ limit: "32kb", strict: true }));
app.use(express.urlencoded({ extended: false, limit: "32kb", parameterLimit: 50 }));

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/ready", (_req, res) => {
  const databaseReady = mongoose.connection.readyState === 1;
  res.status(databaseReady ? 200 : 503).json({
    status: databaseReady ? "ready" : "not-ready",
    database: databaseReady ? "connected" : "disconnected",
  });
});

const cachePublicContent = (req, res, next) => {
  const sendJson = res.json.bind(res);
  res.json = (body) => {
    if (req.method === "GET" && res.statusCode >= 200 && res.statusCode < 300) {
      res.set("Cache-Control", "public, max-age=60, stale-while-revalidate=300");
    }
    return sendJson(body);
  };
  next();
};

app.use("/api", apiLimiter);
app.use("/api/technologies", cachePublicContent, technologyRoutes);
app.use("/api/blogs", cachePublicContent, blogRoutes);
app.use("/api", analyticsRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use(errorHandler);

export default app;
