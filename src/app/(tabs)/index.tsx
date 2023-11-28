import { PlatformPressable } from '@react-navigation/elements';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Coffee, CoffeeCard } from '@/components/CoffeeCard';
import { CoffeeCategory } from '@/components/CoffeeCategory';
import { Promo } from '@/components/Promo';
import { ScrollViewBackgroundLayer } from '@/components/ScrollViewBackgroundLayer';
import { SearchBar } from '@/components/SearchBar';
import { Box, Text } from '@/theme';

const categories: string[] = [
  'Black',
  'Espresso',
  'Cappucino',
  'Machiato',
  'Latte',
  'Americano',
  'Ristretto',
  'Flat white',
  'Doppio',
];

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

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const [refreshing, setRefreshing] = useState(false);
  const [aciveCategory, setActiveCategory] = useState(categories[0]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <Box flex={1}>
      <StatusBar style="light" />
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
            <Box
              // backgroundColor="error"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between">
              <Box>
                <Text color="white">Location</Text>
                <PlatformPressable
                  onPress={() => console.log('SHOW BOTTOMSHEET')}
                  hitSlop={16}
                  // style={styles.button}
                  pressOpacity={0.7}>
                  <Box flexDirection="row" alignItems="center" gap="m">
                    <Text color="white">Bilzen, Tanjungbalai</Text>
                    <Image
                      style={{
                        width: 14,
                        height: 14,
                      }}
                      source={require('@/assets/icons/svg/chevron-down.svg')}
                      contentFit="contain"
                    />
                  </Box>
                </PlatformPressable>
              </Box>
              <PlatformPressable
                onPress={() => console.log('SHOW BOTTOMSHEET')}
                hitSlop={16}
                pressOpacity={0.7}>
                <Image
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                  }}
                  source="https://picsum.photos/seed/696/3000/2000"
                  contentFit="cover"
                />
              </PlatformPressable>
            </Box>
          </Box>

          <Box padding="m">
            <SearchBar onChangeText={() => null} value="" />
          </Box>
        </LinearGradient>

        <Box paddingTop="m" paddingHorizontal="m" backgroundColor="background">
          <Promo />
        </Box>

        <Box backgroundColor="background">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8, padding: 16 }}>
            {categories?.map(item => {
              return (
                <CoffeeCategory
                  key={item}
                  item={item}
                  onPress={() => setActiveCategory(item)}
                  isActive={aciveCategory === item}
                />
              );
            })}
          </ScrollView>
        </Box>

        <Box
          paddingHorizontal="m"
          paddingBottom="m"
          backgroundColor="background"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent="space-between"
          gap="m">
          {data?.map(item => (
            <CoffeeCard
              key={item.id}
              {...item}
              onPress={() => console.log('nav to item', item.id)}
              onAddToCart={() => console.log('add to cart item', item.id)}
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}
