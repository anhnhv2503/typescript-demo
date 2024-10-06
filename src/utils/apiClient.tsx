import axiosInstance from "./axiosClient";

export const getHeader = () => {
  const token = localStorage.getItem("token");
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
  const token = localStorage.getItem("token");
  return axiosInstance.post("auth/logout", {
    token,
  });
};

export const getProfile = async () => {
  return axiosInstance.get("v2/users/profile", getHeader());
};
