import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useRef, useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CoffeeCard } from '@/components/CoffeeCard';
import { CoffeeCategory } from '@/components/CoffeeCategory';
import { Promo } from '@/components/Promo';
import { ScrollViewBackgroundLayer } from '@/components/ScrollViewBackgroundLayer';
import { SearchBar } from '@/components/SearchBar';
import { Box, ImageBox, Text, theme } from '@/theme';
import { categories, coffees } from '@/utils/data';

type CategoryCoords = { [key: string]: number };

const contentPadding = theme.spacing.tabShadow + theme.spacing.m;

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const categoriesRef = useRef<ScrollView>(null);

  const [refreshing, setRefreshing] = useState(false);
  const [aciveCategory, setActiveCategory] = useState(categories[0]);
  const [categoriesCoords, setCategoriesCoords] = useState<CategoryCoords>({});

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handleCategoryPress = (item: any) => {
    setActiveCategory(item);
    const pos = categoriesCoords[item] - 16;
    categoriesRef.current?.scrollTo({ x: pos });
  };

  return (
    <Box flex={1}>
      <ScrollViewBackgroundLayer />
      <Box style={{ height: insets.top }} />
      <ScrollView
        removeClippedSubviews
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
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between">
              <BorderlessButton
                borderless={false}
                onPress={() => console.log('SHOW BOTTOMSHEET')}
                hitSlop={16}>
                <Text color="white">Location</Text>
                <Box flexDirection="row" alignItems="center" gap="s">
                  <Text color="white">Bilzen, Tanjungbalai</Text>
                  <ImageBox
                    width={20}
                    height={20}
                    tintColor="white"
                    source={require('@/assets/icons/png/arrow-down.png')}
                    contentFit="contain"
                  />
                </Box>
              </BorderlessButton>

              <BorderlessButton
                foreground
                onPress={() => console.log('SHOW BOTTOMSHEET')}
                hitSlop={16}>
                <ImageBox
                  width={44}
                  height={44}
                  borderRadius="smm"
                  source="https://i.pravatar.cc/150?img=11"
                  placeholder={{
                    thumbhash: '0RcGDwSGeWT6c1qNesenSnxqyACILmAI',
                  }}
                  contentFit="cover"
                />
              </BorderlessButton>
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
            ref={categoriesRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8, padding: 16 }}>
            {categories?.map(item => {
              return (
                <CoffeeCategory
                  key={item}
                  item={item}
                  onPress={index => handleCategoryPress(index)}
                  isActive={aciveCategory === item}
                  onLayout={({ nativeEvent }) => {
                    const {
                      layout: { x },
                    } = nativeEvent;
                    setCategoriesCoords({ ...categoriesCoords, [item]: x });
                  }}
                />
              );
            })}
          </ScrollView>
        </Box>

        <Box
          paddingHorizontal="m"
          backgroundColor="background"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent="space-between"
          gap="m"
          style={{ paddingBottom: contentPadding }}>
          {coffees?.map(item => {
            return <CoffeeCard key={item.id} {...item} />;
          })}
        </Box>
      </ScrollView>
    </Box>
  );
}
