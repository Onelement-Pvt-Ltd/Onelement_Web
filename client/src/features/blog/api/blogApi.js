import axios from "axios";
import { API_BASE_URL } from "@/shared/config/api";

const API = axios.create({
  baseURL: API_BASE_URL
});

export const fetchBlogsAPI = async (filters) => {
  const params = {
    category: filters.categories.join(",") || undefined,
    year: filters.years.join(",") || undefined,
    month: filters.months.join(",") || undefined,
    page: filters.page,
    limit: filters.limit
  };
  const response = await API.get("/blogs", {
    params
  });

  return response.data;
};

export const fetchHomeBlogsAPI = async () => {
  const response = await API.get("/blogs/home");
  return response.data.data;
};

export const fetchBlogBySlugAPI = async (slug) => {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.length > 200) {
    const error = new Error("Invalid blog address.");
    error.status = 404;
    throw error;
  }
  const response = await API.get(`/blogs/${encodeURIComponent(slug)}`);
  return response.data.data;
};

export const fetchBlogMetaAPI = async () => {
  const response = await API.get("/blogs/meta");
  return response.data.data;
};

export const fetchRelatedBlogsAPI = async (slug) => {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.length > 200) {
    const error = new Error("Invalid blog address.");
    error.status = 404;
    throw error;
  }
  const response = await API.get(`/blogs/related/${encodeURIComponent(slug)}`);
  return response.data.data;
};
