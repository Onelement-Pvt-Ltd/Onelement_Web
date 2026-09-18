import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBlogBySlugAPI, fetchHomeBlogsAPI } from "../api/blogApi";

export const fetchBlogBySlug = createAsyncThunk(
  "blog/fetchBlogBySlug",
  async (slug) => {
    return await fetchBlogBySlugAPI(slug);
  }
);

export const fetchHomeBlogs = createAsyncThunk(
  "blog/fetchHomeBlogs",
  async (_, { getState }) => {
    const { blog } = getState();
    if (blog.homeBlogs && blog.homeBlogs.length > 0) {
      return blog.homeBlogs;
    }
    return await fetchHomeBlogsAPI();
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    homeBlogs: [],
    selectedBlog: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSelectedBlog: (state) => {
      state.selectedBlog = null;
    },
    invalidateHomeBlogs: (state) => {
      state.homeBlogs = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedBlog = action.payload;
      })
      .addCase(fetchBlogBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchHomeBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHomeBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.homeBlogs = action.payload;
      })
      .addCase(fetchHomeBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearSelectedBlog, invalidateHomeBlogs } = blogSlice.actions;
export default blogSlice.reducer;
