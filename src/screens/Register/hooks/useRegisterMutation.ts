import { useAuthentication } from '@hooks/auth/useAuthentication';
import { authService, type HttpRegisterRequestDto } from '@services/auth';
import { useMutation } from '@tanstack/react-query';
import { TokenHelper } from '@utils';

export function useRegisterMutation() {
  const { authenticate } = useAuthentication();

  const mutation = useMutation({
    mutationFn: async (data: HttpRegisterRequestDto) =>
      authService.register(data),
    onSuccess: async response => {
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
    onRegister: mutation.mutate,
    isRegistering: mutation.isPending,
  };
}
