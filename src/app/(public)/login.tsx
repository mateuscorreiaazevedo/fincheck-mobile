import { AuthLayout } from '@shared/components/layouts/AuthLayout';
import { Text } from 'react-native';

export default function Login() {
  return (
    <AuthLayout
      link={{
        href: '/register',
        label: 'Cadastre-se',
      }}
      subtitle="Ainda não possui uma conta?"
      title="Acessar conta"
    >
      <Text className="text-5xl">Login</Text>
    </AuthLayout>
  );
}
