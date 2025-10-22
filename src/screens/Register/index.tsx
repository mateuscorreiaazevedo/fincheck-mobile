import { PasswordIconButton } from '@components/auth';
import { AuthLayout } from '@components/layouts';
import { Button, FieldError, Input } from '@components/ui';
import { Controller } from 'react-hook-form';
import { View } from 'react-native';
import { useRegisterScreenViewModel } from './viewModel';

export default function RegisterScreen() {
  const {
    control,
    togglePasswordVisibility,
    showPassword,
    handleRegister,
    formState,
    isRegistering,
  } = useRegisterScreenViewModel();

  return (
    <AuthLayout>
      <AuthLayout.Header
        link={{
          href: 'Login',
          label: 'Fazer login',
        }}
        subtitle="Já possui uma conta?"
        title="Crie sua conta"
      />
      <View className="gap-4">
        {!!formState.errors.root?.message && (
          <FieldError error={formState.errors.root.message} />
        )}
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
        <Button
          isLoading={isRegistering}
          onPress={handleRegister}
          radius="small"
        >
          Criar conta
        </Button>
      </View>
    </AuthLayout>
  );
}
