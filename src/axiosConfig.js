// axiosConfig.js
import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:7000", // Update with your backend base URL
  baseURL: "https://backend-fast-nu-career-development-portal-yw26-6ab691fsb.vercel.app",
  
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default axiosInstance;
