import { NUMBER_CONSTANTS as c } from '@constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthentication } from '@hooks/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useLogin } from './hooks/useLogin';

const schema = z.object({
  email: z
    .string()
    .nonempty('E-mail é obrigatório.')
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'E-mail inválido.'),
  password: z
    .string()
    .nonempty('Senha é obrigatória.')
    .min(c.MIN_LENGTH_PASSWORD, {
      error: 'A senha deve ter no mínimo 8 caracteres',
    })
    .regex(/[A-Z]/, {
      error: 'A senha deve conter no mínimo 1 caractere maiúsculo',
    })
    .regex(/[a-z]/, {
      error: 'A senha deve conter no mínimo 1 caractere minúsculo',
    })
    .regex(/[0-9]/, {
      error: 'A senha deve conter no mínimo 1 número',
    })
    .regex(/[^a-zA-Z0-9]/, {
      error: 'A senha deve conter no mínimo 1 caractere especial',
    }),
});

type LoginFormData = z.infer<typeof schema>;

export function useLoginScreenViewModel() {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuthentication();
  const { isPending, onLogin } = useLogin();
  const { control, handleSubmit, formState, setError } = useForm<LoginFormData>(
    {
      resolver: zodResolver(schema),
      defaultValues: {
        email: '',
        password: '',
      },
    }
  );

  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const onSubmit = handleSubmit(async data => {
    await onLogin(data, {
      onSuccess() {
        login();
      },
      onError(error) {
        setError('root', {
          message: error.message || 'Erro ao realizar login. Tente novamente.',
        });
      },
    });
  });

  return {
    control,
    formState,
    onSubmit,
    showPassword,
    isPending,
    toggleShowPassword,
  };
}
