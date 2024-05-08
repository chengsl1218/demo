import axios, {
    type AxiosInstance,
    type InternalAxiosRequestConfig,
    type AxiosError,
    type AxiosResponse,
    type Method,
    type AxiosRequestConfig
} from 'axios';

const service: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API, // url = base url + request url
    // timeout: 5000,
})


// 添加请求拦截器
service.interceptors.request.use(function (config: InternalAxiosRequestConfig) {
    // 在发送请求之前做些什么
    return config;
}, function (error: AxiosError) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response: AxiosResponse) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error: AxiosError) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

type DataType<T=any>={
    code:number,
    data:T,
    msg:string
}

const request = <T=any>(
    url: string,
    method: Method="GET",
    data?:object,
    options?:AxiosRequestConfig
)=>{
    return service.request<T,DataType<T>>({
        url,
        method,
        [method === 'GET' ? 'params' : 'data']:data,
        ...options,
    })
}


export const get = <T=any>(url: string, data:object)=>{
    return request<T>(url, 'GET', data)
}
export const post = <T=any>(url: string, data:object)=>{
    return request<T>(url, 'POST', data)
}
export const put = <T=any>(url: string, data:object)=>{
    return request<T>(url, 'PUT', data)
}
export const del = <T=any>(url: string, data:object)=>{
    return request<T>(url, 'DELETE', data)
}




export default request;


