import axiosInstance from "./axiosClient";

export const login = async (username: string, password: string) => {
  return axiosInstance.post("/auth/token", {
    username,
    password,
  });
};
