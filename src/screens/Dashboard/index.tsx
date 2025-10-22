import { Button, Text } from '@components/ui';
import { useAuthentication } from '@hooks/auth';
import { View } from 'react-native';

export default function DashboardScreen() {
  const { unAuthenticate } = useAuthentication();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Dashboard</Text>
      <Button onPress={() => unAuthenticate()}>Sair</Button>
    </View>
  );
}
