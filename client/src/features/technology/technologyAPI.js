import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});

export const fetchTechnologies = async (params) => {
  const response = await API.get("/technologies", { params });

  return {
    data: response.data.data,
    pagination: response.data.pagination
  };
};

export const fetchTechnology = async (slug) => {
  const response = await API.get(`/technologies/${slug}`);
  return response.data.data;
};