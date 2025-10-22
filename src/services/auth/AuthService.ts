import { HttpClientService } from '@services/api';
import { httpResponseHandler } from '@utils';
import type {
  HttpLoginRequestDto,
  HttpLoginResponseDto,
} from './HttpLoginDtos';

class HttpAuthService extends HttpClientService {
  async login(data: HttpLoginRequestDto): Promise<HttpLoginResponseDto> {
    const response = await this.request<HttpLoginResponseDto>({
      url: '/auth/signin',
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
