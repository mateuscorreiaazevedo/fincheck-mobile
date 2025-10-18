import { AuthLayout } from '@shared/components/layouts/AuthLayout';
import { Button } from '@shared/components/ui/Button';
import { Input } from '@shared/components/ui/Input';
import { View } from 'react-native';

export default function Login() {
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
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
        <Button radius="small">Entrar</Button>
      </View>
    </AuthLayout>
  );
}
