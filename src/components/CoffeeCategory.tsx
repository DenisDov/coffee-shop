import { PlatformPressable } from '@react-navigation/elements';
import React from 'react';
import { StyleSheet, ViewProps } from 'react-native';

import { Text } from '@/theme';

interface CoffeeCategoryProps extends ViewProps {
  item: string;
  onPress: (item: string) => void;
  isActive: boolean;
}

export const CoffeeCategory = ({
  item,
  onPress,
  isActive,
  ...props
}: CoffeeCategoryProps) => {
  return (
    <PlatformPressable
      onPress={() => onPress(item)}
      style={[
        styles.category,
        {
          backgroundColor: isActive ? '#C67C4E' : 'white',
        },
      ]}
      pressOpacity={0.7}
      {...props}>
      <Text
        style={{
          fontFamily: isActive ? 'Sora_600SemiBold' : 'Sora_400Regular',
          color: isActive ? 'white' : '#1C1C1C',
          fontSize: 14,
        }}>
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
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    // elevation: 3,
  },
});
