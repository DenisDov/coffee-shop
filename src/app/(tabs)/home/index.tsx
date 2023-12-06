import { PlatformPressable } from '@react-navigation/elements';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CoffeeCard } from '@/components/CoffeeCard';
import { CoffeeCategory } from '@/components/CoffeeCategory';
import { Promo } from '@/components/Promo';
import { ScrollViewBackgroundLayer } from '@/components/ScrollViewBackgroundLayer';
import { SearchBar } from '@/components/SearchBar';
import { Box, Text } from '@/theme';
import { categories, coffees } from '@/utils/data';

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

  const handleCategoryPress = useCallback((item: any) => {
    // TODO: fix item any type
    console.log('category:', item);
    setActiveCategory(item);
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
                  source="https://i.pravatar.cc/150?img=11"
                  placeholder={{
                    thumbhash: '0RcGDwSGeWT6c1qNesenSnxqyACILmAI',
                  }}
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
                  onPress={handleCategoryPress}
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
          {coffees?.map(item => {
            return <CoffeeCard key={item.id} {...item} />;
          })}
        </Box>
      </ScrollView>
    </Box>
  );
}
