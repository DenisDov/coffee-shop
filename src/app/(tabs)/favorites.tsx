import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useState } from 'react';
import { ActivityIndicator, RefreshControl, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Coffee, CoffeeCard } from '@/components/CoffeeCard';
import { Promo } from '@/components/Promo';
import { ScrollViewBackgroundLayer } from '@/components/ScrollViewBackgroundLayer';
import { Box, Text } from '@/theme';

// const data = Array.from({ length: 20 }, (_, index) => index + 1);

const data: Coffee[] = [
  {
    id: 1,
    title: 'Cappucino',
    description: 'with Chocolate',
    price: 4.53,
    thumbnail: require('@/components/CoffeeCard/images/coffee1.png'),
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Machiato',
    description: 'with Oat Milk',
    price: 4.53,
    thumbnail: require('@/components/CoffeeCard/images/coffee2.png'),
    rating: 4.9,
  },
  {
    id: 3,
    title: 'Latte',
    description: 'with Chocolate',
    price: 4.53,
    thumbnail: require('@/components/CoffeeCard/images/coffee3.png'),
    rating: 4.8,
  },
  {
    id: 4,
    title: 'Americano',
    description: 'with Oat Milk',
    price: 4.53,
    thumbnail: require('@/components/CoffeeCard/images/coffee4.png'),
    rating: 4.9,
  },
  {
    id: 5,
    title: 'Cappucino',
    description: 'with Chocolate',
    price: 4.53,
    thumbnail: require('@/components/CoffeeCard/images/coffee1.png'),
    rating: 4.8,
  },
  {
    id: 6,
    title: 'Machiato',
    description: 'with Oat Milk',
    price: 4.53,
    thumbnail: require('@/components/CoffeeCard/images/coffee2.png'),
    rating: 4.9,
  },
];

export default function FavoritesScreen() {
  const insets = useSafeAreaInsets();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <Box flex={1}>
      <ScrollViewBackgroundLayer />
      <Box style={{ height: insets.top }} />
      <ScrollView
        removeClippedSubviews // TODO: test performance with https://github.com/Shopify/react-native-performance
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0, 2]}
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="tomato"
          />
        }>
        <LinearGradient
          colors={['#313131', '#131313']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}>
          <Box padding="m">
            <Text color="white">LOCATION</Text>
          </Box>

          <Box padding="m">
            <Text color="white">INPUT</Text>
          </Box>
        </LinearGradient>

        <Box padding="m" backgroundColor="background">
          <Promo />
        </Box>

        <Box backgroundColor="debug">
          <Text>LIST_OF_COFFEE</Text>
        </Box>

        <Box
          padding="m"
          backgroundColor="background"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent="space-between"
          gap="m">
          {data?.map(item => <CoffeeCard key={item.id} {...item} />)}
        </Box>
      </ScrollView>
    </Box>
  );
}
