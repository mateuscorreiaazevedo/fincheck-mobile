import { colors } from '@assets/styles/colors';
import { PasswordIconButton } from '@components/auth';
import { Button, Input, LeftIcon } from '@components/ui';
import type { RegisterFormStepArgs } from '@screens/Register/types';
import { Controller } from 'react-hook-form';
import { View } from 'react-native';
import {
  type StepAccessDataRegisterFormData,
  useRegisterStepAccessDataViewModel,
} from './viewModel';

type Props = RegisterFormStepArgs<StepAccessDataRegisterFormData> & {
  onPrevStep(): void;
  isLoading: boolean;
};

export function RegisterStepAccessData({
  onAction,
  onPrevStep,
  isLoading,
}: Props) {
  const {
    control,
    showPassword,
    togglePasswordVisibility,
    handleConfirmRegister,
  } = useRegisterStepAccessDataViewModel({ onAction });

  return (
    <View className="gap-6">
      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <Input
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            error={fieldState.error?.message}
            keyboardType="email-address"
            onChangeText={field.onChange}
            placeholder="E-mail"
            value={field.value}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => (
          <Input
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            endComponent={
              <PasswordIconButton
                onClick={togglePasswordVisibility}
                visible={showPassword}
              />
            }
            error={fieldState.error?.message}
            onChangeText={field.onChange}
            placeholder="Senha"
            secureTextEntry={!showPassword}
            value={field.value}
          />
        )}
      />
      <View className="flex-row gap-6">
        <Button
          className="pr-6 pl-5"
          disabled={isLoading}
          endIcon={<LeftIcon color={colors.gray[7]} height={24} width={24} />}
          onPress={onPrevStep}
          radius="small"
          variant="secondary"
        />
        <Button
          className="flex-1"
          isLoading={isLoading}
          onPress={handleConfirmRegister}
          radius="small"
        >
          Criar conta
        </Button>
      </View>
    </View>
  );
}
