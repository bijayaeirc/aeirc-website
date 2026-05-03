import axios from "axios";

const api = axios.create({
  baseURL: "/admin",
  withCredentials: true,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export default api;
