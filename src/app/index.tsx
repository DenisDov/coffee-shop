import { router } from 'expo-router';

import { Button } from '@/components/Button/Button';
import { Box, ImageBackgroundBox, Text } from '@/theme';

export default function OnboardingScreen() {
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
        <Button title="Get Started" onPress={() => router.replace('/(tabs)')} />
      </Box>
    </ImageBackgroundBox>
  );
}
