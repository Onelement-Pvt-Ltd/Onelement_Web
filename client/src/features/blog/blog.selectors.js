import { createSelector } from "reselect";

const selectBlogState = (state) => state.blog;

export const selectBlogs = createSelector(
  [selectBlogState],
  (blogState) => blogState.blogs
);

export const selectSelectedBlog = createSelector(
  [selectBlogState],
  (blogState) => blogState.selectedBlog
);

export const selectMeta = createSelector(
  [selectBlogState],
  (blogState) => blogState.meta
);

export const selectFilters = createSelector(
  [selectBlogState],
  (blogState) => blogState.filters
);

export const selectPagination = createSelector(
  [selectBlogState],
  (blogState) => blogState.pagination
);

