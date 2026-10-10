import express from "express";
import { rateLimit } from "express-rate-limit";
import {
  getViewStats,
  registerView,
  requireOfficialOrigin,
  requireStatsAuth,
} from "./analytics.controller.js";

const router = express.Router();

const viewLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 30,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

const statsLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

router.post("/views", viewLimiter, requireOfficialOrigin, registerView);
router.get("/view-stats", statsLimiter, requireStatsAuth, getViewStats);

export default router;
