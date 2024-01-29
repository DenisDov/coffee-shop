import {
  DarkTheme,
  ThemeProvider as NavigationThemeProvider,
} from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { render, RenderOptions } from '@testing-library/react-native';
import React, { ReactElement } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { theme } from '@/theme';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <NavigationThemeProvider value={DarkTheme}>
          {children}
        </NavigationThemeProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react-native';
export { customRender as render };
