import express from "express";
import { rateLimit } from "express-rate-limit";
import { isProduction } from "../../config/env.js";
import { requireOfficialOrigin } from "../../middlewares/security.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { submitContact } from "./contact.controller.js";
import { contactValidation } from "./contact.validation.js";

const router = express.Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: isProduction ? 5 : 1000,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many messages. Please try again in 15 minutes.",
  },
});

router.post("/", contactLimiter, requireOfficialOrigin, validate(contactValidation), submitContact);
router.all("/", (_req, res) => {
  res.set("Allow", "POST");
  res.status(405).json({ success: false, message: "Method not allowed" });
});

export default router;
