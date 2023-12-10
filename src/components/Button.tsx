import { PlatformPressable } from '@react-navigation/elements';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, theme } from '@/theme';

type Props = {
  onPress: () => void;
  title?: string;
};

export const Button = ({ onPress, title }: Props) => {
  return (
    <PlatformPressable onPress={onPress} hitSlop={16} style={styles.button}>
      <Text variant="button">{title}</Text>
    </PlatformPressable>
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
