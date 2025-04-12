import { CreateUserRequest, LoginRequest, LoginResponse } from "@/components/types";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.API_BASE_URL || "https://localhost:7256/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    console.log("token", token);
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 errors (unauthorized)
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const authService = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("/Account/login", credentials);
    return response.data;
  },
};

export const accountService = {
  register: async (userInfo: CreateUserRequest) => {
    console.log(userInfo);
    const response = await api.post("UserAccount/create", userInfo);
    return response.data;
  },

  existingUser: async (username: string): Promise<boolean> => {
    const response = await api.get<boolean>("UserAccount/existinguser", {
      params: { username },
    });
    return response.data;
  },
};

export default api;
