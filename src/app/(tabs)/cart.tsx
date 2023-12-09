import { useRouter } from 'expo-router';

import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { Header } from '@/components/Header';
import { Box, Text } from '@/theme';

export default function CartScreen() {
  const router = useRouter();
  return (
    <Box flex={1} backgroundColor="background">
      <FocusAwareStatusBar style="dark" />
      <Header title="Cart" noBack />
      <Box flex={1} padding="m">
        <Text onPress={() => router.push(`/delivery/1`)}>item 1</Text>
        <Text onPress={() => router.push(`/delivery/2`)}>item 2</Text>
      </Box>
    </Box>
  );
}
