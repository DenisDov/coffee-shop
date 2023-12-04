import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { Header } from '@/components/Header';
import { Box, Text } from '@/theme';

export default function NotificationsScreen() {
  return (
    <Box flex={1} backgroundColor="background">
      <FocusAwareStatusBar style="dark" animated />
      <Header title="Notifications" noBack />
      <Box flex={1} padding="m">
        <Text>NotificationsScreen</Text>
      </Box>
    </Box>
  );
}
