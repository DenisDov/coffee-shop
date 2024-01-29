import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Shadow } from 'react-native-shadow-2';

import { Button } from '@/components/Button/Button';
import { CupSize } from '@/components/CupSize';
import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { Header } from '@/components/Header';
import { ReadMore } from '@/components/ReadMore';
import { coffees } from '@/lib/data';
import { Box, ImageBox, Text, theme } from '@/theme';

const cupSizes = ['S', 'M', 'L'];
const ingredients = [
  {
    id: 'beans',
    image: require('@/assets/icons/png/icon-beans.png'),
  },
  {
    id: 'milk',
    image: require('@/assets/icons/png/icon-milk.png'),
  },
];

export default function CoffeeDetailScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [selectedCupSize, setSelectedCupSize] = useState(cupSizes[1]);

  const product = coffees.find(c => c.id === id);

  const navTo = () => {
    router.push(`/order/${id}`);
  };

  return (
    <Box flex={1} backgroundColor="white">
      <FocusAwareStatusBar style="dark" animated />
      <Header title="Detail" iconRight />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <Box flex={1} gap="ml" padding="m">
          <Box>
            <ImageBox
              height={226}
              width="100%"
              borderRadius="m"
              source={product?.image.source}
              placeholder={{ thumbhash: product?.image.thumbhash as string }}
              contentFit="cover"
              transition={1000}
            />
          </Box>

          <Box
            borderBottomColor="stroke"
            borderBottomWidth={1}
            paddingBottom="m"
            flexDirection="row"
            alignItems="flex-end">
            <Box flex={1} gap="m">
              <Box>
                <Text variant="semiBold" fontSize={20} marginBottom="xs">
                  {product?.title}
                </Text>
                <Text fontSize={12} color="muted">
                  with {product?.extras}
                </Text>
              </Box>
              <Box flexDirection="row" alignItems="flex-end" gap="xs">
                <ImageBox
                  width={20}
                  height={20}
                  source={require('@/assets/icons/png/star.png')}
                  contentFit="contain"
                />
                <Text variant="semiBold">{product?.rating}</Text>
                <Text color="muted" fontSize={12} lineHeight={20}>
                  ({product?.reviewsCount})
                </Text>
              </Box>
            </Box>
            <Box flexDirection="row" alignItems="center" gap="sm">
              {ingredients.map(ingredient => {
                return (
                  <Box
                    key={ingredient.id}
                    width={44}
                    height={44}
                    borderRadius="sm"
                    backgroundColor="background"
                    justifyContent="center"
                    alignItems="center">
                    <ImageBox
                      width={24}
                      height={24}
                      source={ingredient.image}
                      contentFit="contain"
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Box>
            <Text variant="semiBold" marginBottom="sm">
              Description
            </Text>
            <ReadMore text={product?.description as string} maxLength={116} />
          </Box>

          <Box>
            <Text variant="semiBold" marginBottom="sm">
              Size
            </Text>

            <Box flexDirection="row" alignItems="center" gap="sm">
              {cupSizes?.map(size => {
                const isSelected = size === selectedCupSize;
                return (
                  <CupSize
                    key={size}
                    size={size}
                    onPress={() => setSelectedCupSize(size)}
                    isSelected={isSelected}
                  />
                );
              })}
            </Box>
          </Box>
        </Box>
      </ScrollView>
      {/* Footer */}

      <Shadow
        stretch
        distance={theme.spacing.tabShadow}
        startColor="#E4E4E450"
        offset={[0, -10]}
        style={[styles.footer, { paddingBottom: insets.bottom }]}>
        <Box padding="m">
          <Box flexDirection="row" alignItems="center" gap="xxl">
            <Box gap="s">
              <Text fontSize={14} color="muted">
                Price
              </Text>
              <Text fontSize={18} color="primary" variant="semiBold">
                $ {product?.price}
              </Text>
            </Box>
            <Box flex={1}>
              <Button text="Buy Now" onPress={navTo} />
            </Box>
          </Box>
        </Box>
      </Shadow>
    </Box>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  footer: {
    borderTopLeftRadius: theme.borderRadii.l,
    borderTopRightRadius: theme.borderRadii.l,
    backgroundColor: theme.colors.white,
  },
});
