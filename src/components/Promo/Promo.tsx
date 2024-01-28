import React from 'react';

import { Box, ImageBackgroundBox, Text } from '@/theme';

export const Promo = () => {
  return (
    <ImageBackgroundBox
      flex={1}
      borderRadius="m"
      height={150}
      overflow="hidden"
      contentFit="cover"
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
              variant="semiBold"
              style={{ backgroundColor: '#1C1C1C' }}
              fontSize={32}
              color="white">
              {'Buy one get\none FREE'}
            </Text>
          </Text>
        </Box>
      </Box>
    </ImageBackgroundBox>
  );
};
