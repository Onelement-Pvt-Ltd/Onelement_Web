import { createSelector } from "reselect";

const selectBlogState = (state) => state.blog;

export const selectSelectedBlog = createSelector(
  [selectBlogState],
  (blogState) => blogState.selectedBlog
);

export const selectHomeBlogs = createSelector(
  [selectBlogState],
  (blogState) => blogState.homeBlogs
);