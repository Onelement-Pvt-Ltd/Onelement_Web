import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { rateLimit } from "express-rate-limit";
import mongoose from "mongoose";
import crypto from "node:crypto";

import { env, isProduction } from "./config/env.js";
import { errorHandler } from "./middlewares/error.middleware.js";

import technologyRoutes from "./modules/technology/technology.routes.js";
import blogRoutes from "./modules/blog/blog.routes.js";
import analyticsRoutes from "./modules/analytics/analytics.routes.js";
import contactRoutes from "./modules/contact/contact.routes.js";

const app = express();

app.disable("x-powered-by");
app.set("trust proxy", env.TRUST_PROXY);

app.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: "same-site",
    },
  })
);




app.use(compression());




const allowedOrigins = [
  "https://onelement.in",
  "https://www.onelement.in",
];

app.use(
  cors({
    credentials: false,

    methods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS",
    ],

    allowedHeaders: [
      "Accept",
      "Authorization",
      "Content-Type",
    ],

    origin(origin, callback) {
      // Non-browser clients may omit Origin.
      // This is NOT authentication.
      if (!origin) {
        return callback(null, false);
      }

      let normalizedOrigin;

      try {
        normalizedOrigin = new URL(origin).origin;
      } catch {
        return callback(
          Object.assign(new Error("Origin not allowed"), {
            statusCode: 403,
          })
        );
      }

      if (allowedOrigins.includes(normalizedOrigin)) {
        return callback(null, normalizedOrigin);
      }

      return callback(
        Object.assign(new Error("Origin not allowed"), {
          statusCode: 403,
        })
      );
    },
  })
);




app.use(
  express.json({
    limit: "32kb",
    strict: true,
  })
);

app.use(
  express.urlencoded({
    extended: false,
    limit: "32kb",
    parameterLimit: 50,
  })
);



const requireUptimeRobot = (req, res, next) => {
  const expectedToken = process.env.UPTIMEROBOT_HEALTH_TOKEN;

  if (!expectedToken) {
    return res.status(503).json({
      status: "monitoring-not-configured",
    });
  }

  const authorization = req.get("authorization") || "";

  const suppliedToken = authorization.startsWith("Bearer ")
    ? authorization.slice(7)
    : "";

  const expected = Buffer.from(expectedToken);
  const supplied = Buffer.from(suppliedToken);

  const valid =
    expected.length === supplied.length &&
    crypto.timingSafeEqual(expected, supplied);

  if (!valid) {
    return res.status(403).json({
      success: false,
      message: "Forbidden",
    });
  }

  next();
};




app.get(
  "/health",
  requireUptimeRobot,
  (_req, res) => {
    res.status(200).json({
      status: "ok",
    });
  }
);

app.get(
  "/ready",
  requireUptimeRobot,
  (_req, res) => {
    const databaseReady =
      mongoose.connection.readyState === 1;

    res.status(databaseReady ? 200 : 503).json({
      status: databaseReady ? "ready" : "not-ready",
    });
  }
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

app.use("/api", apiLimiter);




const cachePublicContent = (req, res, next) => {
  const sendJson = res.json.bind(res);

  res.json = (body) => {
    if (
      req.method === "GET" &&
      res.statusCode >= 200 &&
      res.statusCode < 300
    ) {
      res.set(
        "Cache-Control",
        "public, max-age=60, stale-while-revalidate=300"
      );
    }

    return sendJson(body);
  };

  next();
};



app.use(
  "/api/technologies",
  cachePublicContent,
  technologyRoutes
);

app.use(
  "/api/blogs",
  cachePublicContent,
  blogRoutes
);

app.use(
  "/api/contact",
  contactRoutes
);

app.use(
  "/api",
  analyticsRoutes
);


app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});



app.use(errorHandler);

export default app;
