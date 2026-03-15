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
  async (slug, { getState, rejectWithValue }) => {
    try {
      const { technology } = getState();

      // Cache check
      if (technology.cache[slug]) {
        return { data: technology.cache[slug], slug };
      }

      const data = await fetchTechnology(slug);

      return { data, slug };

    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch technology"
      );
    }
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

  reducers: {
    clearTechnology: (state) => {
      state.current = null;
    }
  },

  extraReducers: (builder) => {
    builder

      /* ALL TECHNOLOGIES */

      .addCase(getTechnologies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getTechnologies.fulfilled, (state, action) => {
        state.loading = false;
        state.technologies = action.payload.data;
        state.pagination = action.payload.pagination;
      })

      .addCase(getTechnologies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      /* SINGLE TECHNOLOGY */

      .addCase(getTechnology.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getTechnology.fulfilled, (state, action) => {
        state.loading = false;

        const { data, slug } = action.payload;

        state.current = data;
        state.cache[slug] = data;
      })

      .addCase(getTechnology.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearTechnology } = technologySlice.actions;

export default technologySlice.reducer;