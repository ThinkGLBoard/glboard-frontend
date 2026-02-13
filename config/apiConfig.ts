import axios from "axios";

export const API_BASE_URL = process.env.API_BASE_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
});

// TODO: Implementar autenticação com interceptadores

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) return;

    return Promise.reject(error);
  }
);
