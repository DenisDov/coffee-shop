import {
  Sora_400Regular,
  Sora_600SemiBold,
  useFonts,
} from '@expo-google-fonts/sora';
import {
  DarkTheme,
  ThemeProvider as NavigationThemeProvider,
} from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { theme } from '@/theme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Sora_400Regular,
    Sora_600SemiBold,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <NavigationThemeProvider value={DarkTheme}>
          <StatusBar style="light" />
          <Stack screenOptions={{ headerShown: false }} />
        </NavigationThemeProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
