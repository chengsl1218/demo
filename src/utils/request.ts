// 引入axios
import { Delete } from "@element-plus/icons-vue";
import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
  type AxiosError,
  type AxiosResponse,
  type Method,
  type AxiosRequestConfig,
} from "axios";

// 创建axios实例对象
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000,
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log("response=>", response.data);
    return response.data;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

type DataType<T = any> = {
  code: number;
  message: string;
  data: T;
};

// 完整请求
const request = <T = any>(
  url: string,
  method: Method = "GET",
  data?: Object,
  options?: AxiosRequestConfig
) => {
  return service.request<T, DataType<T>>({
    url,
    method,
    [method === "GET" ? "params" : "data"]: data,
    ...options,
  });
};

// GET请求
export const get = <T = any>(url: string, data: Object) => {
  request<T>(url, "GET", data);
};

// POST请求
export const post = <T = any>(url: string, data: Object) => {
  request<T>(url, "POST", data);
};

// PUT请求
export const put = <T = any>(url: string, data: Object) => {
  request<T>(url, "PUT", data);
};

// DELETE请求
export const del = <T = any>(url: string, data: Object) => {
  request<T>(url, "DELETE", data);
};

export default request;
