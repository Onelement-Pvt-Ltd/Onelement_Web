import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTechnologies, fetchTechnology } from "./technologyAPI";

export const getTechnologies = createAsyncThunk(
  "technology/getAll",
  async (params = {}) => {
    return await fetchTechnologies(params);
  }
);

export const getTechnology = createAsyncThunk(
  "technology/get",
  async (slug, { getState }) => {
    const { technology } = getState();

    if (technology.cache[slug]) {
      return { data: technology.cache[slug], slug, fromCache: true };
    }

    const data = await fetchTechnology(slug);

    return { data, slug, fromCache: false };
  }
);

const technologySlice = createSlice({
  name: "technology",
  initialState: {
    current: null,
    technologies: [],
    pagination: {},
    loading: false,
    error: null,
    cache: {}
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTechnologies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTechnologies.fulfilled, (state, action) => {
        state.loading = false;
        state.technologies = action.payload.data;
        state.pagination = action.payload.pagination;
      })
      .addCase(getTechnologies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getTechnology.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTechnology.fulfilled, (state, action) => {
        state.loading = false;

        const { data, slug } = action.payload;

        state.current = data;
        state.cache[slug] = data;
      })
      .addCase(getTechnology.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default technologySlice.reducer;
