import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Box, ImageBox, Text } from '@/theme';

export const DeliveryFooter = ({ onPress }: { onPress: () => void }) => {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      gap="m"
      backgroundColor="white"
      paddingHorizontal="m">
      <Box flex={1}>
        <Box flexDirection="row" alignItems="center" gap="sm">
          <ImageBox
            width={54}
            height={54}
            borderRadius="smm"
            source="https://i.pravatar.cc/150?img=52"
            placeholder={{
              thumbhash: '0RcGDwSGeWT6c1qNesenSnxqyACILmAI',
            }}
            contentFit="cover"
            transition={1000}
          />
          <Box gap="xs">
            <Text variant="semiBold" textTransform="capitalize">
              Johan Hawn
            </Text>
            <Text color="muted250" fontSize={12}>
              Personal Courier
            </Text>
          </Box>
        </Box>
      </Box>

      <RectButton onPress={onPress} hitSlop={16} style={styles.rectButton}>
        <Box style={styles.rectBox}>
          <ImageBox
            width={24}
            height={24}
            source={require('@/assets/icons/png/calling.png')}
            contentFit="cover"
            transition={1000}
          />
        </Box>
      </RectButton>
    </Box>
  );
};

const styles = StyleSheet.create({
  rectButton: {
    borderRadius: 14,
    backgroundColor: 'white',
  },
  rectBox: {
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#DEDEDE',
  },
});
