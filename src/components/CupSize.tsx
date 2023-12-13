import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Box, Text, theme } from '@/theme';

type Props = {
  size: string;
  onPress: () => void;
  isSelected: boolean;
};

export const CupSize = ({ size, onPress, isSelected }: Props) => {
  return (
    <RectButton
      onPress={onPress}
      hitSlop={16}
      style={[
        styles.container,
        { backgroundColor: isSelected ? theme.colors.cup : theme.colors.white },
      ]}>
      <Box
        style={[
          styles.button,
          {
            borderColor: isSelected
              ? theme.colors.primary
              : theme.colors.stroke,
          },
        ]}>
        <Text
          textAlign="center"
          style={{
            color: isSelected ? theme.colors.primary : theme.colors.dark,
          }}>
          {size}
        </Text>
      </Box>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: theme.borderRadii.sm,
  },
  button: {
    flex: 1,
    height: 43,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: theme.borderRadii.sm,
  },
});
