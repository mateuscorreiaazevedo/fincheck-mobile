import { Redirect } from 'expo-router';

export default function Index() {
  // Aqui você pode adicionar lógica para verificar se o usuário está logado
  const isLogged = false;

  if (isLogged) {
    return <Redirect href="/(private)" />;
  }

  return <Redirect href="/(public)/login" />;
}
