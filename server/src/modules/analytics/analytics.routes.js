
import express from "express";
import { rateLimit } from "express-rate-limit";
import { isProduction } from "../../config/env.js";

import {
  getViewStats,
  registerView,
  requireStatsAuth,
} from "./analytics.controller.js";

import {
  requireOfficialOrigin,
  rejectUnsupportedMethod,
} from "../../middlewares/security.middleware.js";

const router = express.Router();

// Public website view registration
const viewLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 30,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

// Protected analytics login/statistics requests
const statsLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: isProduction ? 20 : 1000,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  skipSuccessfulRequests: true,

  message: {
    success: false,
    message: "Too many sign-in attempts. Please try again in 15 minutes.",
  },
});

// Public: register website views
router.post(
  "/views",
  viewLimiter,
  requireOfficialOrigin,
  registerView
);

// Admin-only: retrieve analytics
router.get(
  "/view-stats",
  statsLimiter,
  requireStatsAuth,
  getViewStats
);

// Reject unsupported methods
router.all("/views", rejectUnsupportedMethod);
router.all("/view-stats", rejectUnsupportedMethod);

export default router;
