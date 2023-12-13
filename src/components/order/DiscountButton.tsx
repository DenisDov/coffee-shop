import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

import { Box, ImageBox, Text } from '@/theme';

export const DiscountButton = () => {
  return (
    <RectButton
      onPress={() => null}
      hitSlop={16}
      style={{
        borderRadius: 14,
        backgroundColor: 'white',
      }}>
      <Box
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
          padding: 16,
          borderRadius: 14,
          borderWidth: 1,
          borderColor: '#EAEAEA',
        }}>
        <ImageBox
          width={24}
          height={24}
          source={require('@/assets/icons/png/discount-shape.png')}
          contentFit="cover"
        />
        <Box flex={1}>
          <Text variant="semiBold" fontSize={14}>
            1 Discount is applied
          </Text>
        </Box>
        <ImageBox
          width={20}
          height={20}
          source={require('@/assets/icons/png/arrow-right.png')}
          contentFit="cover"
        />
      </Box>
    </RectButton>
  );
};
