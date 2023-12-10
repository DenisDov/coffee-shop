import { PlatformPressable } from '@react-navigation/elements';
import React from 'react';
import { StyleSheet, ViewProps } from 'react-native';

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
    <Box
      onLayout={onLayout}
      style={{
        borderRadius: 12,
        overflow: 'hidden',
      }}>
      <PlatformPressable
        onPress={() => onPress(item)}
        style={[
          styles.category,
          {
            backgroundColor: isActive ? '#C67C4E' : 'white',
          },
        ]}
        pressOpacity={0.7}>
        <Text
          style={{
            fontFamily: isActive ? 'Sora_600SemiBold' : 'Sora_400Regular',
            color: isActive ? 'white' : '#1C1C1C',
            fontSize: 14,
          }}>
          {item}
        </Text>
      </PlatformPressable>
    </Box>
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
