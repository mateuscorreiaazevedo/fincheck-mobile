import { NUMBER_CONSTANTS as c } from '@constants';
import { zodResolver } from '@hookform/resolvers/zod';
import type { RegisterFormStepArgs } from '@screens/Register/types';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

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

export type StepAccessDataRegisterFormData = z.infer<typeof schema>;

export function useRegisterStepAccessDataViewModel({
  onAction,
}: RegisterFormStepArgs<StepAccessDataRegisterFormData>) {
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit } = useForm<StepAccessDataRegisterFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(prevState => !prevState);
  }, []);

  const handleConfirmRegister = handleSubmit(onAction);

  return {
    control,
    showPassword,
    handleConfirmRegister,
    togglePasswordVisibility,
  };
}
