import axios, { AxiosError } from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3003/api',
});

type GetConfig = {
  url: string,
  params?: any
};

type PostConfig = {
  url: string,
  data?: any,
};

type ApiResult = {
  success: boolean,
  errorMessage?: string,
  data? : any;
};

export async function get(config: GetConfig): Promise<ApiResult> {
  try {
    const response = await api.get(config.url, {
      params: config.params
    });

    const { success, data, message } = response.data;
    const result: ApiResult = { success };
    if (success) {
      result.data = data;
    } else {
      result.errorMessage = message;
    }
    return result;
  } catch (err: any) {
    const result: ApiResult = {
      success: false,      
    };

    if (axios.isAxiosError(err)) {
      const serverErrror = err as AxiosError;
      if (serverErrror && serverErrror.response) {
        const { message } = serverErrror.response.data;
        result.errorMessage = message;
      }
    }
    return result;
  }
}

export async function post(config: PostConfig): Promise<ApiResult> {
  try {
    const response = await api.post(config.url, config.data);

    const { success, data, message } = response.data;
    const result: ApiResult = { success };
    if (success) {
      result.data = data;
    } else {
      result.errorMessage = message;
    }
    return result;
  } catch (err: any) {
    const result: ApiResult = {
      success: false,      
    };

    if (axios.isAxiosError(err)) {
      const serverErrror = err as AxiosError;
      if (serverErrror && serverErrror.response) {
        const { message } = serverErrror.response.data;
        result.errorMessage = message;
      }
    }
    return result;
  }
}

export function setAuthToken(token: string) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}