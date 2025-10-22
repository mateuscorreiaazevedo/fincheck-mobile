import { useAuthentication } from '@hooks/auth';
import { authService, type HttpRegisterRequestDto } from '@services/auth';
import { useMutation } from '@tanstack/react-query';
import { TokenHelper } from '@utils';

export function useRegisterMutation() {
  const { authenticate } = useAuthentication();

  const mutation = useMutation({
    mutationFn: async (data: HttpRegisterRequestDto) =>
      authService.register(data),
    onSuccess: async response => {
      const accessTokenHelper = TokenHelper.setKey('accessTokenKey');
      const refreshTokenHelper = TokenHelper.setKey('refreshTokenKey');

      await Promise.all([
        accessTokenHelper.set(response.accessToken),
        refreshTokenHelper.set(response.refreshToken),
      ]);

      authenticate();
    },
  });

  return {
    onRegister: mutation.mutateAsync,
    isRegistering: mutation.isPending,
  };
}
