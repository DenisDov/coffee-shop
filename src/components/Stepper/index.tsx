import { PlatformPressable } from '@react-navigation/elements';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { Box, Text } from '@/theme';

import { MinusSign } from './minus';
import { PlusSign } from './plus';

export const Stepper = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Box flexDirection="row" alignItems="center">
      <PlatformPressable
        onPress={handleDecrement}
        hitSlop={16}
        style={styles.button}>
        <MinusSign stroke={count < 2 ? '#AAADB0' : '#2F2D2C'} />
      </PlatformPressable>

      <Box width={30}>
        <Text
          fontVariant={['tabular-nums']}
          textAlign="center"
          variant="semiBold"
          fontSize={14}>
          {count}
        </Text>
      </Box>

      <PlatformPressable
        onPress={handleIncrement}
        hitSlop={16}
        style={styles.button}>
        <PlusSign stroke={count > 9 ? '#AAADB0' : '#2F2D2C'} />
      </PlatformPressable>
    </Box>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
});
