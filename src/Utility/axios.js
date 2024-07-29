import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL:'http://localhost:4146',
  // baseURL: "https://amazon-api-deploy-e0ng.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosInstance };
