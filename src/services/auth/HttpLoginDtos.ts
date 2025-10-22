export interface HttpLoginRequestDto {
  email: string;
  password: string;
}

export interface HttpLoginResponseDto {
  accessToken: string;
  refreshToken: string;
}
