import axiosInstance from "./axiosClient";
import Cookies from "js-cookie";

export const getHeader = () => {
  const token = Cookies.get("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const login = async (username: string, password: string) => {
  return axiosInstance.post("auth/token", {
    username,
    password,
  });
};

export const logout = async () => {
  const token = Cookies.get("token");
  return axiosInstance.post("auth/logout", {
    token,
  });
};

export const getProfile = async () => {
  return axiosInstance.get("v2/users/profile", getHeader());
};

export const refreshToken = async (token: string) => {
  return axiosInstance.post("auth/refresh", { token: token });
};
