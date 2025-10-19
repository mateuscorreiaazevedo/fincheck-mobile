import { PasswordIconButton } from '@components/auth';
import { AuthLayout } from '@components/layouts';
import { Button, Input } from '@components/ui';
import { View } from 'react-native';

export default function RegisterScreen() {
  return (
    <AuthLayout
      link={{
        href: '/login',
        label: 'Cadastre-se',
      }}
      subtitle="Ainda não possui uma conta?"
      title="Acessar conta"
    >
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
