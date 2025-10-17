import '@src/assets/styles/global.css';

import {
  DMSans_300Light,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_600SemiBold,
  DMSans_700Bold,
  useFonts,
} from '@expo-google-fonts/dm-sans';
import { Stack } from 'expo-router';

import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

preventAutoHideAsync();

function InnerLayout() {
  const [fontsLoaded, fontsError] = useFonts({
    DMSans_300Light,
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_600SemiBold,
    DMSans_700Bold,
  });
  const isLogged = false;

  useEffect(() => {
    const isFontsReady = fontsLoaded || fontsError;
    if (isFontsReady) {
      hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!(fontsLoaded || fontsError)) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Protected guard={isLogged}>
        <Stack.Screen name="(private)" />
      </Stack.Protected>
      <Stack.Protected guard={!isLogged}>
        <Stack.Screen name="(public)" />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <InnerLayout />
    </SafeAreaProvider>
  );
}
