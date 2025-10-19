import 'react-native-gesture-handler';
import '@assets/styles/global.css';

import {
  DMSans_300Light,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_600SemiBold,
  DMSans_700Bold,
  useFonts,
} from '@expo-google-fonts/dm-sans';
import { NavigationContainer } from '@react-navigation/native';
import { RouterNavigation } from '@routes';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

preventAutoHideAsync();

export function App() {
  const [fontsLoaded, fontsError] = useFonts({
    DMSans_300Light,
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_600SemiBold,
    DMSans_700Bold,
  });

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
    <SafeAreaProvider>
      <NavigationContainer>
        <RouterNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
