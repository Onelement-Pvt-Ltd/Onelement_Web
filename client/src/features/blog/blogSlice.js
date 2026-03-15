import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchBlogsAPI,
  fetchBlogBySlugAPI,
  fetchBlogMetaAPI,
  fetchHomeBlogsAPI
} from "./blogAPI";

/* ---------------- FETCH BLOG LIST ---------------- */

export const fetchBlogs = createAsyncThunk(
  "blog/fetchBlogs",
  async (filters, { getState }) => {
    const { blog } = getState();
    const cacheKey = JSON.stringify(filters);

    if (blog.cache[cacheKey]) {
      return blog.cache[cacheKey];
    }

    const data = await fetchBlogsAPI(filters);
    return { ...data, cacheKey };
  }
);

/* ---------------- FETCH BLOG META ---------------- */

export const fetchBlogMeta = createAsyncThunk(
  "blog/fetchMeta",
  async () => {
    return await fetchBlogMetaAPI();
  }
);

/* ---------------- FETCH BLOG BY SLUG ---------------- */

export const fetchBlogBySlug = createAsyncThunk(
  "blog/fetchBlogBySlug",
  async (slug) => {
    return await fetchBlogBySlugAPI(slug);
  }
);

/* ---------------- FETCH HOME BLOGS ---------------- */

export const fetchHomeBlogs = createAsyncThunk(
  "blog/fetchHomeBlogs",
  async (_, { getState }) => {
    const { blog } = getState();

    if (blog.homeBlogs && blog.homeBlogs.length > 0) {
      return blog.homeBlogs;
    }

    const data = await fetchHomeBlogsAPI();
    return data;
  }
);

const blogSlice = createSlice({
  name: "blog",

  initialState: {
    blogs: [],
    homeBlogs: [],
    selectedBlog: null,

    filters: {
      page: 1,
      limit: 6
    },

    meta: {
      categories: [],
      years: [],
      monthsByYear: {}
    },

    pagination: {
      page: 1,
      totalPages: 1,
      total: 0
    },

    loading: false,
    error: null,

    cache: {}
  },

  reducers: {
    setFilters: (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload
      };
    },

    clearSelectedBlog: (state) => {
      state.selectedBlog = null;
    },

    /* 🚀 cache invalidation */
    invalidateHomeBlogs: (state) => {
      state.homeBlogs = [];
    }
  },

  extraReducers: (builder) => {
    builder

      /* FETCH BLOG LIST */

      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;

        const { data, pagination, cacheKey } = action.payload;

        state.blogs = data;
        state.pagination = pagination;

        state.cache[cacheKey] = action.payload;
      })

      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      /* FETCH BLOG META */

      .addCase(fetchBlogMeta.fulfilled, (state, action) => {
        state.meta = action.payload;
      })

      /* FETCH SINGLE BLOG */

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

      /* FETCH HOME BLOGS */

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
  }
});

export const {
  setFilters,
  clearSelectedBlog,
  invalidateHomeBlogs
} = blogSlice.actions;

export default blogSlice.reducer;