import express from "express";
import {
  getBlogs, getBlogBySlug, getRelatedBlogs, createBlog, getBlogMeta,
  getHomeBlogs} from "./blog.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import {
  blogListQueryValidation,
  blogSlugValidation,
  createBlogValidation
} from "./blog.validation.js";

const router = express.Router();

router.get("/", validate(blogListQueryValidation, "query"), getBlogs);
router.get("/meta", getBlogMeta);
router.get("/home", getHomeBlogs);
router.get("/related/:slug", validate(blogSlugValidation, "params"), getRelatedBlogs);
router.get("/:slug", validate(blogSlugValidation, "params"), getBlogBySlug);

router.post(
  "/",
  validate(createBlogValidation),
  createBlog
);

export default router;
