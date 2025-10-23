import { Button, Input } from '@components/ui';
import type { RegisterFormStepArgs } from '@screens/Register/types';
import { Controller } from 'react-hook-form';
import { View } from 'react-native';
import {
  type StepPersonalDataRegisterFormData,
  useRegisterStepPersonalDataViewModel,
} from './viewModel';

type Props = RegisterFormStepArgs<StepPersonalDataRegisterFormData>;

export function RegisterStepPersonalData(props: Props) {
  const { control, handleNextStep } =
    useRegisterStepPersonalDataViewModel(props);

  return (
    <View className="gap-4">
      <Controller
        control={control}
        name="firstName"
        render={({ field, fieldState }) => (
          <Input
            error={fieldState.error?.message}
            onChangeText={field.onChange}
            placeholder="Nome"
            value={field.value}
          />
        )}
      />
      <Controller
        control={control}
        name="lastName"
        render={({ field, fieldState }) => (
          <Input
            error={fieldState.error?.message}
            onChangeText={field.onChange}
            placeholder="Sobrenome"
            value={field.value}
          />
        )}
      />
      <Button onPress={handleNextStep} radius="small">
        Avançar
      </Button>
    </View>
  );
}
