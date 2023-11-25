import React from 'react';
import { ImageBackground } from 'react-native';

import { Box, Text } from '@/theme';

export const Promo = () => {
  return (
    <Box height={150} overflow="hidden" borderRadius="m">
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode="cover"
        source={require('@/assets/images/promo.png')}>
        <Box
          flex={1}
          alignItems="flex-start"
          paddingVertical="m"
          paddingHorizontal="l"
          justifyContent="space-between">
          <Box backgroundColor="error" borderRadius="s">
            <Text
              fontSize={14}
              fontFamily="Sora_600SemiBold"
              color="white"
              textTransform="capitalize"
              paddingVertical="xs"
              paddingHorizontal="s">
              promo
            </Text>
          </Box>
          <Box>
            <Text>
              <Text
                style={{ backgroundColor: '#1C1C1C' }}
                fontSize={32}
                fontFamily="Sora_600SemiBold"
                color="white">
                {'Buy one get\none FREE'}
              </Text>
            </Text>
          </Box>
        </Box>
      </ImageBackground>
    </Box>
  );
};
