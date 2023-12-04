import { useIsFocused } from '@react-navigation/native';
import { StatusBar, StatusBarProps } from 'expo-status-bar';
import React from 'react';

export const FocusAwareStatusBar = (props: StatusBarProps) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
};
