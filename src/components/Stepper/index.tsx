import React, { useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Box, Text } from '@/theme';

import { MinusSign } from './minus';
import { PlusSign } from './plus';

type StepperProps = {
  handleIncrement: () => void;
  handleDecrement: () => void;
  minValue?: number;
  maxValue?: number;
  value: number;
};

const _colors = {
  disabled: '#AAADB0',
  primary: '#2F2D2C',
};

export const Stepper = ({
  value,
  minValue = 1,
  maxValue = 10,
  handleIncrement,
  handleDecrement,
}: StepperProps) => {
  const minIsDisabled = useMemo(() => value <= minValue, [minValue, value]);
  const maxIsDisabled = useMemo(() => value >= maxValue, [maxValue, value]);

  const increment = useCallback(() => {
    if (value < maxValue) {
      handleIncrement();
    }
  }, [handleIncrement, maxValue, value]);

  const decrement = useCallback(() => {
    if (value > minValue) {
      handleDecrement();
    }
  }, [handleDecrement, minValue, value]);

  return (
    <Box flexDirection="row" alignItems="center">
      <RectButton
        onPress={decrement}
        enabled={!minIsDisabled}
        hitSlop={16}
        style={styles.buttonContainer}>
        <Box style={styles.button}>
          <MinusSign
            stroke={minIsDisabled ? _colors.disabled : _colors.primary}
          />
        </Box>
      </RectButton>

      <Box width={30}>
        <Text
          fontVariant={['tabular-nums']}
          textAlign="center"
          variant="semiBold"
          fontSize={14}>
          {value}
        </Text>
      </Box>

      <RectButton
        onPress={increment}
        enabled={!maxIsDisabled}
        hitSlop={16}
        style={styles.buttonContainer}>
        <Box style={styles.button}>
          <PlusSign
            stroke={maxIsDisabled ? _colors.disabled : _colors.primary}
          />
        </Box>
      </RectButton>
    </Box>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 14,
    backgroundColor: 'white',
  },
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
