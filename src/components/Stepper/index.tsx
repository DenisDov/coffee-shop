import React, { useMemo } from 'react';
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

export const Stepper = ({
  value,
  minValue = 1,
  maxValue = 10,
  handleIncrement,
  handleDecrement,
}: StepperProps) => {
  const minIsDisabled = useMemo(() => value <= minValue, [minValue, value]);
  const maxIsDisabled = useMemo(() => value >= maxValue, [maxValue, value]);

  return (
    <Box flexDirection="row" alignItems="center">
      <RectButton
        onPress={handleDecrement}
        enabled={!minIsDisabled}
        hitSlop={16}
        style={{
          borderRadius: 14,
          backgroundColor: 'white',
        }}>
        <Box style={styles.button}>
          <MinusSign stroke={minIsDisabled ? '#AAADB0' : '#2F2D2C'} />
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
        onPress={handleIncrement}
        enabled={!maxIsDisabled}
        hitSlop={16}
        style={{
          borderRadius: 14,
          backgroundColor: 'white',
        }}>
        <Box style={styles.button}>
          <PlusSign stroke={maxIsDisabled ? '#AAADB0' : '#2F2D2C'} />
        </Box>
      </RectButton>
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
