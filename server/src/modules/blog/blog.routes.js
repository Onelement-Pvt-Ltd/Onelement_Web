import express from "express";
import {
  getBlogs, getBlogBySlug, createBlog, getBlogMeta,
  getHomeBlogs} from "./blog.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { createBlogValidation } from "./blog.validation.js";

const router = express.Router();

router.get("/", getBlogs);
router.get("/meta", getBlogMeta);
router.get("/home", getHomeBlogs);
router.get("/:slug", getBlogBySlug);

router.post(
  "/",
  validate(createBlogValidation),
  createBlog
);

export default router;