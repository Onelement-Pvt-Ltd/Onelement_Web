import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api"
});

export const fetchTechnologies = async (params) => {
  const response = await API.get("/technologies", { params });

  return {
    data: response.data.data,
    pagination: response.data.pagination
  };
};

export const fetchTechnology = async (slug) => {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.length > 200) {
    const error = new Error("Invalid technology address.");
    error.status = 404;
    throw error;
  }
  const response = await API.get(`/technologies/${encodeURIComponent(slug)}`);
  return response.data.data;
};

export const fetchRelatedTechnologies = async (slug) => {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.length > 200) {
    const error = new Error("Invalid technology address.");
    error.status = 404;
    throw error;
  }
  const response = await API.get(`/technologies/${encodeURIComponent(slug)}/related`);
  return response.data.data;
};
