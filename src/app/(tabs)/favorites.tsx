import { CoffeeCard } from '@/components/CoffeeCard/CoffeeCard';
import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { Header } from '@/components/Header';
import { coffees } from '@/lib/data';
import { Box } from '@/theme';

export default function FavoritesScreen() {
  const item = coffees[0];
  return (
    <Box flex={1} backgroundColor="background">
      <FocusAwareStatusBar style="dark" />
      <Header title="Favorites" noBack />
      <Box flex={1} padding="m">
        <CoffeeCard {...item} />
      </Box>
    </Box>
  );
}
