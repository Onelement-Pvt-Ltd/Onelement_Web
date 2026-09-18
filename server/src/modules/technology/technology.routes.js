import express from "express";
import {
  getAllTechnologies,
  getTechnologyBySlug,
  getRelatedTechnologies
} from "./technology.controller.js";

const router = express.Router();

router.get("/", getAllTechnologies);
router.get("/:slug/related", getRelatedTechnologies);
router.get("/:slug", getTechnologyBySlug);

export default router;
