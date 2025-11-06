import { env } from '@config/env';
import type { HttpAuthResponseDto } from '@services/auth';
import { httpResponseHandler, TokenHelper } from '@utils';
import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios';
import {
  type HttpFailedQueue,
  type HttpInstance,
  type HttpRequest,
  type HttpResponse,
  HttpStatusCode,
} from './types';

export class HttpClientService {
  private instance: AxiosInstance;
  private isRefreshing = false;
  private failedQueue: HttpFailedQueue[] = [];

  constructor(args: HttpInstance = {}) {
    const { baseUrl = env.BASE_URL } = args;

    this.instance = axios.create({
      baseURL: baseUrl,
    });

    this.instance.interceptors.request.use(
      async config => {
        const tokenHelper = TokenHelper.key('accessTokenKey');
        const accessToken = await tokenHelper.get();

        if (accessToken) {
          config.headers = config.headers ?? {};
          config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
      },
      error => Promise.reject(error)
    );

    this.instance.interceptors.response.use(
      response => response,
      async error => {
        const originalRequest = error.config as AxiosRequestConfig & {
          _retry?: boolean;
        };

        if (originalRequest.url?.startsWith('/auth')) {
          return Promise.reject(error);
        }

        if (
          error.response?.status === HttpStatusCode.UNAUTHORIZED &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;

          if (this.isRefreshing) {
            return new Promise((resolve, reject) => {
              this.failedQueue.push({
                config: originalRequest,
                reject,
                resolve,
              });
            });
          }

          this.isRefreshing = true;

          try {
            const accessTokenHelper = TokenHelper.key('accessTokenKey');
            const refreshTokenHelper = TokenHelper.key('refreshTokenKey');
            const refreshToken = await refreshTokenHelper.get();

            if (!refreshToken) {
              throw new Error('No refresh token available');
            }

            const { accessToken, refreshToken: newRefreshToken } =
              await this.refreshToken(refreshToken);

            await Promise.all([
              accessTokenHelper.set(accessToken),
              refreshTokenHelper.set(newRefreshToken),
            ]);

            this.failedQueue.forEach(({ config, resolve }) => {
              resolve(this.instance(config));
            });
            this.failedQueue = [];

            return this.instance(originalRequest);
          } catch (refreshError) {
            this.failedQueue.forEach(({ reject }) => {
              reject(refreshError);
            });
            this.failedQueue = [];

            return Promise.reject(refreshError);
          } finally {
            this.isRefreshing = false;
          }
        }
      }
    );
  }

  protected async request<TData = unknown, TBody = unknown>(
    request: HttpRequest<TBody>
  ): Promise<HttpResponse<TData>> {
    const { url, method = 'GET', body, headers, params } = request;
    let response: AxiosResponse;

    try {
      response = await this.instance.request<TData>({
        url,
        method,
        data: body,
        headers: {
          'x-client-type': 'mobile',
          ...headers,
        },
        params,
      });
    } catch (err) {
      const error = (err as AxiosError).response;

      if (error) {
        response = error;
      } else {
        throw err;
      }
    }

    return {
      statusCode: response.status,
      data: response.data,
    };
  }

  private async refreshToken(
    refreshToken: string
  ): Promise<HttpAuthResponseDto> {
    const response = await this.request<HttpAuthResponseDto>({
      url: '/auth/refresh',
      method: 'POST',
      body: {
        refreshToken,
      },
    });

    return httpResponseHandler(response);
  }
}
