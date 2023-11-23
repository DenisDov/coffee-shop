import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import { Box, Text } from '@/theme';

export const Promo = ({ promoHeight = 150 }) => {
  return (
    <Box
      height={promoHeight}
      margin="m"
      overflow="hidden"
      borderRadius="m"
      style={{ marginTop: -(promoHeight / 2) }}>
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode="cover"
        source={require('@/assets/images/promo.png')}>
        <Box
          flex={1}
          paddingVertical="m"
          paddingHorizontal="l"
          justifyContent="space-between">
          <Box backgroundColor="error" alignSelf="flex-start" borderRadius="s">
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
          <Box alignSelf="flex-start">
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
