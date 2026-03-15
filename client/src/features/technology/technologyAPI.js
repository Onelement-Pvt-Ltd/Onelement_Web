import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});

// API.interceptors.response.use(
//   response => response,
//   error => {
//     return Promise.reject(
//       error.response?.data?.message || "Something went wrong"
//     );
//   }
// );

// export default API;


export const fetchTechnologies = async (params) => {
  const response = await API.get("/technologies", { params });
  console.log(response)
  return {
    data: response.data.data,
    pagination: response.data.pagination
  };
};

export const fetchTechnology = async (slug) => {
  const response = await API.get(`/technologies/${slug}`);
  console.log(response)
  return response.data.data;
};