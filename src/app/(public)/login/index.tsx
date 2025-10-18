import { PasswordIconButton } from '@features/auth';
import { AuthLayout } from '@shared/components/layouts/AuthLayout';
import { Button } from '@shared/components/ui/Button';
import { Input } from '@shared/components/ui/Input';
import { Controller } from 'react-hook-form';
import { View } from 'react-native';
import { useLoginViewModel } from './viewModel';

export default function Login() {
  const { control, formState, onSubmit, showPassword, toggleShowPassword } =
    useLoginViewModel();

  return (
    <AuthLayout
      link={{
        href: '/register',
        label: 'Criar uma conta',
      }}
      subtitle="Novo por aqui?"
      title="Entre em sua conta"
    >
      <View className="gap-2">
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
                  onClick={toggleShowPassword}
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
        <Button
          disabled={formState.isSubmitting}
          onPress={onSubmit}
          radius="small"
        >
          Entrar
        </Button>
      </View>
    </AuthLayout>
  );
}
