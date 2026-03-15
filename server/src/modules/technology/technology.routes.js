import express from "express";
import {
  getAllTechnologies,
  getTechnologyBySlug
} from "./technology.controller.js";

const router = express.Router();

router.get("/", getAllTechnologies);
router.get("/:slug", getTechnologyBySlug);

export default router;
