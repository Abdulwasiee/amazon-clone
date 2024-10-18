import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-e0ng.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosInstance };
