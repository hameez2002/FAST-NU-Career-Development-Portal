// axiosConfig.js
import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:7000", // Update with your backend base URL
  baseURL: "https://cdp-kappa.vercel.app",
  
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default axiosInstance;
