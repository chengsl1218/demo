import axios from "axios";

const request = axios.create({
  //   baseURL: "/dev-api",
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000,
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
