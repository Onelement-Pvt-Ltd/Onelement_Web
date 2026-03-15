import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});

export const fetchBlogsAPI = async (filters) => {
  const response = await API.get("/blogs", {
    params: filters
  });

  return response.data;
};

export const fetchHomeBlogsAPI = async () => {
  const response = await API.get("/blogs/home");
  return response.data.data;
};

export const fetchBlogBySlugAPI = async (slug) => {
  const response = await API.get(`/blogs/${slug}`);
  return response.data.data;
};

export const fetchBlogMetaAPI = async () => {
  const response = await API.get("/blogs/meta");
  console.log(response.data.data)
  return response.data.data;
};