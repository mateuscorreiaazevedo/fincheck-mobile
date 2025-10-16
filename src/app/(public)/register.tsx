import { AuthLayout } from '@shared/components/layouts/AuthLayout';
import { Text } from 'react-native';

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
      <Text className="text-5xl">Register</Text>
    </AuthLayout>
  );
}
