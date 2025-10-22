import { NUMBER_CONSTANTS as c } from '@constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

const MIN_LENGTH = c.MIN_LENGTH_NAME;

const schema = z.object({
  firstName: z
    .string()
    .nonempty('Nome é obrigatório.')
    .min(MIN_LENGTH, `O nome deve ter no mínimo ${MIN_LENGTH} caracteres.`),
  lastName: z
    .string()
    .nonempty('Sobrenome é obrigatório.')
    .min(
      MIN_LENGTH,
      `O sobrenome deve ter no mínimo ${MIN_LENGTH} caracteres.`
    ),
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

type RegisterFormData = z.infer<typeof schema>;

export function useRegisterScreenViewModel() {
  const [showPassword, setShowPassword] = useState(false);
  const { control, formState, handleSubmit } = useForm<RegisterFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  const handleRegister = handleSubmit(data => {
    // biome-ignore lint/suspicious/noConsole: test
    console.log(data);
  });

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(prevState => !prevState);
  }, []);

  return {
    control,
    formState,
    showPassword,
    handleRegister,
    togglePasswordVisibility,
  };
}
