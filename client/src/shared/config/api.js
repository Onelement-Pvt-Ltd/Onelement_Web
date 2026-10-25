const defaultApiBaseUrl = import.meta.env.PROD
  ? "https://api.onelement.in/api"
  : "http://localhost:5000/api";

export const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || defaultApiBaseUrl
).replace(/\/$/, "");
