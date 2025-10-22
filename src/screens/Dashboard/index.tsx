import { Button, Text } from '@components/ui';
import { useAuthentication } from '@hooks/auth';
import { View } from 'react-native';

export default function DashboardScreen() {
  const { logout } = useAuthentication();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Dashboard</Text>
      <Button onPress={() => logout()}>Sair</Button>
    </View>
  );
}
