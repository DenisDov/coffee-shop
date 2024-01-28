import { router } from 'expo-router';

import { Button } from '@/components/Button/Button';
import { Box, ImageBackgroundBox, Text } from '@/theme';

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

const Index = () => {
  return (
    <ImageBackgroundBox
      flex={1}
      contentFit="cover"
      backgroundColor="black"
      source={require('@/assets/images/onboarding.png')}>
      <Box flex={1} padding="l" justifyContent="flex-end">
        <Text
          color="white"
          fontSize={34}
          variant="semiBold"
          textAlign="center"
          marginBottom="s">
          Coffee so good, your taste buds will love it.
        </Text>
        <Text color="muted" textAlign="center" marginBottom="l">
          The best grain, the finest roast, the powerful flavor.
        </Text>
        <Button text="Get Started" onPress={() => router.replace('/(tabs)')} />
      </Box>
    </ImageBackgroundBox>
  );
};

let EntryPoint = Index;

if (storybookEnabled) {
  const StorybookUI = require('../../.storybook').default;
  EntryPoint = () => {
    return (
      <Box style={{ flex: 1 }}>
        <StorybookUI />
      </Box>
    );
  };
}

export default EntryPoint;
