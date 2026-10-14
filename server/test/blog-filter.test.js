import assert from "node:assert/strict";
import { test } from "node:test";
import mongoose from "mongoose";
import { buildBlogFilter } from "../src/modules/blog/blog.filters.js";
import Blog from "../src/modules/blog/blog.model.js";

const sanitizeAndCast = (filter) => {
  mongoose.sanitizeFilter(filter);
  return Blog.find(filter).cast(Blog);
};

test("multi-category filters remain valid after query sanitization", () => {
  const filter = buildBlogFilter({
    category: ["Artificial Intelligence", "Bioenergy"],
  });

  const castFilter = sanitizeAndCast(filter);

  assert.deepEqual(castFilter.category.$in, ["Artificial Intelligence", "Bioenergy"]);
});

test("year and month ranges remain valid after query sanitization", () => {
  const filter = buildBlogFilter({
    year: [2025, 2023],
    month: [2],
  });

  const castFilter = sanitizeAndCast(filter);

  assert.equal(castFilter.$or.length, 2);
  assert.equal(
    castFilter.$or[0].publishedAt.$gte.toISOString(),
    "2025-02-01T00:00:00.000Z"
  );
  assert.equal(
    castFilter.$or[0].publishedAt.$lt.toISOString(),
    "2025-03-01T00:00:00.000Z"
  );
  assert.equal(
    castFilter.$or[1].publishedAt.$gte.toISOString(),
    "2023-02-01T00:00:00.000Z"
  );
  assert.equal(
    castFilter.$or[1].publishedAt.$lt.toISOString(),
    "2023-03-01T00:00:00.000Z"
  );
});
