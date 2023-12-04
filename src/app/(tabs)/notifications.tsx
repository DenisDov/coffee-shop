import { StatusBar } from 'expo-status-bar';

import { Header } from '@/components/Header';
import { Box, Text } from '@/theme';

export default function NotificationsScreen() {
  return (
    <Box flex={1} backgroundColor="background">
      <StatusBar style="dark" />
      <Header title="Notifications" noBack />
      <Box flex={1} padding="m">
        <Text>NotificationsScreen</Text>
      </Box>
    </Box>
  );
}
