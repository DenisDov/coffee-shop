import { FlashList } from '@shopify/flash-list';

import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { Header } from '@/components/Header';
import { Box, Text } from '@/theme';
import { notifications } from '@/utils/data';

type Notification = {
  item: {
    id: string;
    title: string;
    content: string;
    timestamp: string;
    read: boolean;
  };
};

export default function NotificationsScreen() {
  const renderItem = ({ item }: Notification) => {
    const time = new Date(item.timestamp).toLocaleTimeString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
    return (
      <Box
        backgroundColor="white"
        borderRadius="m"
        padding="m"
        flexDirection="row"
        alignItems="center"
        gap="m">
        <Box flex={1}>
          <Text>{item.title}</Text>
          <Text variant="semiBold">{item.content}</Text>
          <Text color="muted" fontSize={14}>
            {time}
          </Text>
        </Box>

        <Box
          width={10}
          height={10}
          borderRadius="s"
          style={{ backgroundColor: item.read ? 'transparent' : '#C67C4E' }}
        />
      </Box>
    );
  };

  return (
    <Box flex={1} backgroundColor="background">
      <FocusAwareStatusBar style="dark" animated />
      <Header title="Notifications" noBack />

      <FlashList
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        estimatedItemSize={10}
        ItemSeparatorComponent={() => <Box height={16} />}
      />
    </Box>
  );
}
