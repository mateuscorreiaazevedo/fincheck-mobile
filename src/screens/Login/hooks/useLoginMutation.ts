import { useAuthentication } from '@hooks/auth/useAuthentication';
import { authService, type HttpLoginRequestDto } from '@services/auth';
import { useMutation } from '@tanstack/react-query';
import { TokenHelper } from '@utils';

export function useLoginMutation() {
  const { authenticate } = useAuthentication();

  const mutation = useMutation({
    mutationFn: async (data: HttpLoginRequestDto) => {
      const response = await authService.login(data);

      return response;
    },
    async onSuccess(response) {
      const accessTokenHelper = TokenHelper.key('accessTokenKey');
      const refreshTokenHelper = TokenHelper.key('refreshTokenKey');

      await Promise.all([
        accessTokenHelper.set(response.accessToken),
        refreshTokenHelper.set(response.refreshToken),
      ]);

      authenticate();
    },
  });

  return {
    onLogin: mutation.mutateAsync,
    isLogging: mutation.isPending,
  };
}
