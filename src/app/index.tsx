import 'react-native-gesture-handler';
import '@assets/styles/global.css';
import { AuthProvider } from '@contexts/AuthContext';
import {
  DMSans_300Light,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_600SemiBold,
  DMSans_700Bold,
  useFonts,
} from '@expo-google-fonts/dm-sans';
import { useAuthentication } from '@hooks/auth/useAuthentication';
import { NavigationContainer } from '@react-navigation/native';
import { RouterNavigation } from '@routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

preventAutoHideAsync();

const queryClient = new QueryClient();

export function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <InnerApp />
        </AuthProvider>
      </QueryClientProvider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

function InnerApp() {
  const { isAuthenticated, isLoading } = useAuthentication();
  const [fontsLoaded, fontsError] = useFonts({
    DMSans_300Light,
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_600SemiBold,
    DMSans_700Bold,
  });

  useEffect(() => {
    const isFontsReady = fontsLoaded || fontsError;
    const isLoadingReady = !isLoading;
    if (isFontsReady && isLoadingReady) {
      hideAsync();
    }
  }, [fontsLoaded, fontsError, isLoading]);

  if (!(fontsLoaded || fontsError)) {
    return null;
  }

  return (
    <NavigationContainer>
      <RouterNavigation isAuthenticated={isAuthenticated} />
    </NavigationContainer>
  );
}
