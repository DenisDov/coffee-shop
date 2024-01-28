import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Box, Text, theme } from '@/theme';

type Props = {
  onPress: () => void;
  title?: string;
};

export const Button = ({ onPress, title }: Props) => {
  return (
    <RectButton onPress={onPress} hitSlop={16} style={styles.button}>
      <Box accessible accessibilityRole="button">
        <Text variant="button">{title}</Text>
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
