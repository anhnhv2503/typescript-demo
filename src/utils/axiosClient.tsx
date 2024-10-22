import axios from "axios";
import Cookies from "js-cookie";
import { refreshToken } from "./apiClient";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const token = Cookies.get("token");
      if (!token) return Promise.reject(error);

      try {
        const refreshTokenRequest = await axiosInstance.post("auth/refresh", {
          token,
        });
        const newToken = refreshTokenRequest.data.result.token;
        Cookies.set("token", newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return axiosInstance(originalRequest);
      } catch (error) {
        Cookies.remove("token");
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
