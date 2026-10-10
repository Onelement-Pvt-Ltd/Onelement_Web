import express from "express";
import {
  getBlogs, getBlogBySlug, getRelatedBlogs, getBlogMeta,
  getHomeBlogs} from "./blog.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import {
  blogListQueryValidation,
  blogSlugValidation
} from "./blog.validation.js";
import { rejectUnsupportedMethod } from "../../middlewares/security.middleware.js";

const router = express.Router();

router.get("/", validate(blogListQueryValidation, "query"), getBlogs);
router.get("/meta", getBlogMeta);
router.get("/home", getHomeBlogs);
router.get("/related/:slug", validate(blogSlugValidation, "params"), getRelatedBlogs);
router.get("/:slug", validate(blogSlugValidation, "params"), getBlogBySlug);

router.all("/", rejectUnsupportedMethod);

export default router;
