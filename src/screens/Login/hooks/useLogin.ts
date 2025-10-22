import { useAuthentication } from '@hooks/auth';
import { authService, type HttpLoginRequestDto } from '@services/auth';
import { useMutation } from '@tanstack/react-query';
import { TokenHelper } from '@utils';

export function useLogin() {
  const { login } = useAuthentication();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: HttpLoginRequestDto) => {
      const response = await authService.login(data);

      return response;
    },
    async onSuccess(response) {
      const accessTokenHelper = TokenHelper.setKey('accessTokenKey');
      const refreshTokenHelper = TokenHelper.setKey('refreshTokenKey');

      await Promise.all([
        accessTokenHelper.set(response.accessToken),
        refreshTokenHelper.set(response.refreshToken),
      ]);

      login();
    },
  });

  return {
    onLogin: mutateAsync,
    isPending,
  };
}
