import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
});

const refreshToken = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axiosInstance.post("/auth/refreshToken", token);
    localStorage.setItem("token", response.data.token);
    return response.data.token;
  } catch (error) {
    console.log(error);
    console.log("Failed to refresh token", error);
    localStorage.removeItem("token");
    window.location.href = "/"; // Redirect to login
    return null;
  }
};

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle 401 errors
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to an expired access token
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true; // Prevent infinite loop
      const newToken = await refreshToken();

      if (newToken) {
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest); // Retry the request with the new token
      }
    }

    return Promise.reject(error); // Reject if refresh token fails
  }
);

export default axiosInstance;
