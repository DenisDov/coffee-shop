import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Box, ImageBox, Text } from '@/theme';

const buttons = [
  {
    action: 'Edit Address',
    image: require('@/assets/icons/png/edit.png'),
  },
  {
    action: 'Add Note',
    image: require('@/assets/icons/png/document-text.png'),
  },
];

export const DeliveryAddress = () => {
  return (
    <>
      <Box>
        <Text variant="semiBold" marginBottom="m">
          Delivery Address
        </Text>
        <Text variant="semiBold" fontSize={14} marginBottom="s">
          Jl. Kpg Sutoyo
        </Text>
        <Text fontSize={12} color="muted250">
          Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
        </Text>
      </Box>
      <Box flexDirection="row" alignItems="center" gap="s">
        {buttons.map(button => {
          return (
            <RectButton
              key={button.action}
              onPress={() => null}
              hitSlop={16}
              style={styles.container}>
              <Box style={styles.button}>
                <ImageBox
                  width={14}
                  height={14}
                  source={button.image}
                  contentFit="contain"
                />
                <Text fontSize={12} textTransform="capitalize">
                  Edit Address
                </Text>
              </Box>
            </RectButton>
          );
        })}
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: 'white',
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 16,
  },
});
