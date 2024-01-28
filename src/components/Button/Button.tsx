import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Box, Text, theme } from '@/theme';

export type ButtonProps = {
  onPress: () => void;
  text?: string;
};

export const Button = ({ onPress, text }: ButtonProps) => {
  return (
    <RectButton onPress={onPress} hitSlop={16} style={styles.button}>
      <Box accessible accessibilityRole="button">
        <Text variant="button">{text}</Text>
      </Box>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.s,
    height: theme.spacing.xxl,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.borderRadii.m,
  },
});
