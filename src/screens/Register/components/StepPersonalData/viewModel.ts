import { NUMBER_CONSTANTS as c } from '@constants';
import { zodResolver } from '@hookform/resolvers/zod';
import type { RegisterFormStepArgs } from '@screens/Register/types';
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
});

export type StepPersonalDataRegisterFormData = z.infer<typeof schema>;

export function useRegisterStepPersonalDataViewModel({
  onAction,
}: RegisterFormStepArgs<StepPersonalDataRegisterFormData>) {
  const { control, handleSubmit } = useForm<StepPersonalDataRegisterFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  const handleNextStep = handleSubmit(onAction);

  return {
    control,
    handleNextStep,
  };
}
