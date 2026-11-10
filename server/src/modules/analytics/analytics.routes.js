import express from "express";
import { rateLimit } from "express-rate-limit";
import {
  getViewStats,
  registerView,
  requireStatsAuth,
} from "./analytics.controller.js";
import { isProduction } from "../../config/env.js";
import { requireOfficialOrigin } from "../../middlewares/security.middleware.js";

const router = express.Router();

const viewLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 30,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

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

router.post("/views", viewLimiter, requireOfficialOrigin, registerView);
router.get("/view-stats", statsLimiter, requireStatsAuth, getViewStats);

export default router;
