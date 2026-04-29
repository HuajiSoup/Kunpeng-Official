import axios, { AxiosRequestConfig } from "axios";

type HttpInfoSuccess<Data> = {
  success: true;
  data: Data;
  message?: string;
}

type HttpInfoError = {
  success: false;
  error: {
    code: number;
    message: string;
    details?: any;
  }
}

type HttpInfo<Data> = HttpInfoSuccess<Data> | HttpInfoError;

export default async function request<Data>(
  config: AxiosRequestConfig
): Promise<Data | null> {
  // 浏览器请求rewrite，后端直接请求
  const baseURL = typeof window !== "undefined"
    ? "/api"
    : process.env.NEXT_PUBLIC_SERVER_BASE_URL;

  const instance = axios.create({
    // baseURL: process.env.SERVER_BASE_URL,
    baseURL,
    timeout: 60000,
  });

  // client side, no token needed
  try {
    const response = await instance.request<HttpInfo<Data>>(config);
    if (response.status === 200 && response.data.success) {
      return response.data.data;
    } else {
      const errorMsg = !response.data.success 
        ? response.data.error.message 
        : "Uncaught error";
      throw new Error(errorMsg);
    }
  } catch (error) {
    console.error("Request failed:", error);
    return null;
  }
}