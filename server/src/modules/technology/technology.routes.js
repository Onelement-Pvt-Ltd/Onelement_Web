
import express from "express";

import {
  getAllTechnologies,
  getTechnologyBySlug,
  getRelatedTechnologies,
} from "./technology.controller.js";

import { validate } from "../../middlewares/validate.middleware.js";

import {
  technologyListQueryValidation,
  technologySlugValidation,
} from "./technology.validation.js";

import {
  rejectUnsupportedMethod,
} from "../../middlewares/security.middleware.js";

const router = express.Router();

// Public: list technologies
router.get(
  "/",
  validate(technologyListQueryValidation, "query"),
  getAllTechnologies
);

// Public: related technologies
router.get(
  "/:slug/related",
  validate(technologySlugValidation, "params"),
  getRelatedTechnologies
);

// Public: individual technology
router.get(
  "/:slug",
  validate(technologySlugValidation, "params"),
  getTechnologyBySlug
);

// Reject unsupported methods
router.all("/", rejectUnsupportedMethod);
router.all("/:slug/related", rejectUnsupportedMethod);
router.all("/:slug", rejectUnsupportedMethod);

export default router;
