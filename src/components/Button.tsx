import * as Haptics from "expo-haptics";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

import { Text, theme } from "@/theme";

type Props = {
  onPress: () => void;
  title?: string;
};

const RIPPLE_CONFIG = {
  color: theme.colors.primary,
  borderless: true,
};

export const Button = ({ onPress, title }: Props) => {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };
  return (
    <Pressable
      onPress={handlePress}
      hitSlop={16}
      android_ripple={RIPPLE_CONFIG}
      style={({ pressed }) => [
        styles.button,
        {
          opacity: pressed ? 0.7 : 1,
        },
      ]}
    >
      <Text variant="button">{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.s,
    height: theme.spacing.xxl,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.borderRadii.m,
  },
});
