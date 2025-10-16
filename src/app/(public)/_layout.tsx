import { Stack } from 'expo-router';

export default function PublicLayout() {
  return (
    <Stack initialRouteName="login" screenOptions={{ headerShown: false }} />
  );
}
