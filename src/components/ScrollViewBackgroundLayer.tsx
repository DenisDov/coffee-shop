import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

import { Box } from '@/theme';

export const ScrollViewBackgroundLayer = () => (
  <Box
    style={{
      ...StyleSheet.absoluteFillObject,
      zIndex: -1, // appear under the scrollview
    }}>
    <LinearGradient
      style={{ flex: 1 }}
      colors={['#313131', '#131313']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
    />
    <Box flex={1} backgroundColor="background" />
  </Box>
);
