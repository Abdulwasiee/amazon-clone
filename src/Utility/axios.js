// Utility/axios.js
import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-e0ng.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosInstance };
