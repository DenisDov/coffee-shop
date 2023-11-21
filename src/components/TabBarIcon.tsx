import { Image, ImageSource } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';

import { Box } from '@/theme';

interface TabBarIconProps {
  source: ImageSource;
  focused: boolean;
}

export function TabBarIcon({ source, focused }: TabBarIconProps) {
  return (
    <Box style={{ backgroundColor: 'transparent', gap: 7 }}>
      <Image
        style={{
          width: 24,
          height: 24,
          tintColor: focused ? '#C67C4E' : '#8D8D8D',
        }}
        source={source}
        contentFit="contain"
      />
      {focused && (
        <LinearGradient
          colors={['#EDAB81', '#C67C4E']}
          start={{ x: 0, y: 0.7 }}
          style={{
            width: 10,
            height: 5,
            borderRadius: 18,
            alignSelf: 'center',
          }}
        />
      )}
    </Box>
  );
}
