import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { Header } from '@/components/Header';
import { Box, Text } from '@/theme';

export default function FavoritesScreen() {
  return (
    <Box flex={1} backgroundColor="background">
      <FocusAwareStatusBar style="dark" />
      <Header title="Favorites" noBack />
      <Box flex={1} padding="m">
        <Text>FavoritesScreen</Text>
      </Box>
    </Box>
  );
}
