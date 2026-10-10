import express from "express";
import {
  getAllTechnologies,
  getTechnologyBySlug,
  getRelatedTechnologies
} from "./technology.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import {
  technologyListQueryValidation,
  technologySlugValidation,
} from "./technology.validation.js";
import { rejectUnsupportedMethod } from "../../middlewares/security.middleware.js";

const router = express.Router();

router.get("/", validate(technologyListQueryValidation, "query"), getAllTechnologies);
router.get(
  "/:slug/related",
  validate(technologySlugValidation, "params"),
  getRelatedTechnologies
);
router.get("/:slug", validate(technologySlugValidation, "params"), getTechnologyBySlug);
router.all("/", rejectUnsupportedMethod);

export default router;
