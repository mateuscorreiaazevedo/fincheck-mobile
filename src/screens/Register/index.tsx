import { PasswordIconButton } from '@components/auth';
import { AuthLayout } from '@components/layouts';
import { Button, Input } from '@components/ui';
import { View } from 'react-native';

export default function RegisterScreen() {
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
      <View className="gap-2">
        <Input placeholder="Nome" />
        <Input placeholder="Sobrenome" />
        <Input placeholder="E-mail" />
        <Input endComponent={<PasswordIconButton />} placeholder="Senha" />
        <Button radius="small">Entrar</Button>
      </View>
    </AuthLayout>
  );
}
