import { ImageBackground } from 'expo-image';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { Button } from '@/components/Button';
import { Box, Text } from '@/theme';

export default function Onboarding() {
  return (
    <ImageBackground
      style={styles.image}
      source={require('@/assets/images/onboarding.png')}>
      <StatusBar style="light" />

      <Box flex={1} padding="l" justifyContent="flex-end">
        <Text style={styles.title}>
          Coffee so good, your taste buds will love it.
        </Text>
        <Text style={styles.subTitle}>
          The best grain, the finest roast, the powerful flavor.
        </Text>
        <Button
          title="Get Started"
          onPress={() => router.replace('/(tabs)/home')}
        />
      </Box>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 34,
    fontFamily: 'Sora_600SemiBold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subTitle: {
    color: '#A9A9A9',
    textAlign: 'center',
    marginBottom: 24,
  },
});
