import { PlatformPressable } from '@react-navigation/elements';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, Text } from '@/theme';

interface CoffeeCategoryProps {
  item: string;
  onPress: () => void;
  isActive: boolean;
}

export const CoffeeCategory = ({
  item,
  onPress,
  isActive,
}: CoffeeCategoryProps) => {
  return (
    <PlatformPressable
      onPress={onPress}
      style={[
        styles.category,
        {
          backgroundColor: isActive ? '#C67C4E' : 'white',
        },
      ]}
      pressOpacity={0.7}>
      <Text
        variant="button"
        fontSize={14}
        style={{ color: isActive ? 'white' : '#1C1C1C' }}>
        {item}
      </Text>
    </PlatformPressable>
  );
};

const styles = StyleSheet.create({
  category: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
});
