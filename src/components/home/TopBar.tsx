import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Box, ImageBox, Text } from '@/theme';

export const TopBar = () => {
  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between">
      <BorderlessButton
        borderless={false}
        onPress={() => console.log('SHOW BOTTOMSHEET')}
        hitSlop={16}>
        <Text color="white">Location</Text>
        <Box flexDirection="row" alignItems="center" gap="s">
          <Text color="white">Bilzen, Tanjungbalai</Text>
          <ImageBox
            width={20}
            height={20}
            tintColor="white"
            source={require('@/assets/icons/png/arrow-down.png')}
            contentFit="contain"
          />
        </Box>
      </BorderlessButton>

      <BorderlessButton
        foreground
        onPress={() => console.log('SHOW BOTTOMSHEET')}
        hitSlop={16}>
        <ImageBox
          width={44}
          height={44}
          borderRadius="smm"
          source="https://i.pravatar.cc/150?img=11"
          placeholder={{
            thumbhash: '0RcGDwSGeWT6c1qNesenSnxqyACILmAI',
          }}
          contentFit="cover"
        />
      </BorderlessButton>
    </Box>
  );
};
