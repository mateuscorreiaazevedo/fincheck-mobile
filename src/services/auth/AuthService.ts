import { HttpClientService } from '@services/api';
import { httpResponseHandler } from '@utils';
import type { HttpAuthResponseDto } from './types/HttpAuthResponseDto';
import type { HttpLoginRequestDto } from './types/HttpLoginRequestDto';
import type { HttpRegisterRequestDto } from './types/HttpRegisterRequestDto';

class HttpAuthService extends HttpClientService {
  async login(data: HttpLoginRequestDto): Promise<HttpAuthResponseDto> {
    const response = await this.request<HttpAuthResponseDto>({
      url: '/auth/signin',
      method: 'POST',
      body: data,
      headers: {
        'x-client-type': 'mobile',
      },
    });

    return httpResponseHandler(response);
  }
  async register(data: HttpRegisterRequestDto): Promise<HttpAuthResponseDto> {
    const response = await this.request<HttpAuthResponseDto>({
      url: '/auth/signup',
      method: 'POST',
      body: data,
      headers: {
        'x-client-type': 'mobile',
      },
    });

    return httpResponseHandler(response);
  }
}

export const authService = new HttpAuthService();
