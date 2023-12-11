import React from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Box, Text } from '@/theme';

interface CoffeeCategoryProps extends ViewProps {
  item: string;
  onPress: (item: string) => void;
  isActive: boolean;
}

export const CoffeeCategory = ({
  item,
  onPress,
  isActive,
  onLayout,
}: CoffeeCategoryProps) => {
  return (
    <RectButton
      onLayout={onLayout}
      onPress={() => onPress(item)}
      hitSlop={16}
      style={[
        styles.category,
        {
          backgroundColor: isActive ? '#C67C4E' : 'white',
        },
      ]}>
      <Box accessible accessibilityRole="button">
        <Text
          style={{
            fontFamily: isActive ? 'Sora_600SemiBold' : 'Sora_400Regular',
            color: isActive ? 'white' : '#1C1C1C',
            fontSize: 14,
          }}>
          {item}
        </Text>
      </Box>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  category: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 12,
  },
});
