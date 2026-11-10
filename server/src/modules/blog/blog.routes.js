
import express from "express";

import {
  getBlogs,
  getBlogBySlug,
  getRelatedBlogs,
  getBlogMeta,
  getHomeBlogs,
} from "./blog.controller.js";

import { validate } from "../../middlewares/validate.middleware.js";

import {
  blogListQueryValidation,
  blogSlugValidation,
} from "./blog.validation.js";

import {
  rejectUnsupportedMethod,
} from "../../middlewares/security.middleware.js";

const router = express.Router();

// Public: blog listing
router.get(
  "/",
  validate(blogListQueryValidation, "query"),
  getBlogs
);

// Public: blog metadata
router.get("/meta", getBlogMeta);

// Public: homepage blogs
router.get("/home", getHomeBlogs);

// Public: related blogs
router.get(
  "/related/:slug",
  validate(blogSlugValidation, "params"),
  getRelatedBlogs
);

// Public: individual blog
router.get(
  "/:slug",
  validate(blogSlugValidation, "params"),
  getBlogBySlug
);

// Reject unsupported methods
router.all("/", rejectUnsupportedMethod);
router.all("/meta", rejectUnsupportedMethod);
router.all("/home", rejectUnsupportedMethod);
router.all("/related/:slug", rejectUnsupportedMethod);
router.all("/:slug", rejectUnsupportedMethod);

export default router;
