import { ImageSource } from 'expo-image';

import { ImageBox, theme } from '@/theme';

interface TabBarIconProps {
  source: ImageSource;
  focused: boolean;
}

export function TabBarIcon({ source, focused }: TabBarIconProps) {
  const tintColor = focused ? theme.colors.primary : theme.colors.muted;
  return (
    <ImageBox
      width={24}
      height={24}
      style={{
        tintColor,
      }}
      source={source}
      contentFit="contain"
    />
  );
}
