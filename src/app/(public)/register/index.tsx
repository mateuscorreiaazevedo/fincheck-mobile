import { AuthLayout } from '@shared/components/layouts/AuthLayout';
import { Button } from '@shared/components/ui/Button';
import { Input } from '@shared/components/ui/Input';
import { View } from 'react-native';

export default function Register() {
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
        <Input placeholder="Senha" />
        <Button radius="small">Entrar</Button>
      </View>
    </AuthLayout>
  );
}
