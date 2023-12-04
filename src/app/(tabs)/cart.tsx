import { StatusBar } from 'expo-status-bar';

import { Header } from '@/components/Header';
import { Box, Text } from '@/theme';

export default function CartScreen() {
  return (
    <Box flex={1} backgroundColor="background">
      <StatusBar style="dark" />
      <Header title="Cart" noBack />
      <Box flex={1} padding="m">
        <Text>CartScreen</Text>
      </Box>
    </Box>
  );
}
