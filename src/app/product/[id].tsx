import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Shadow } from 'react-native-shadow-2';

import { Button } from '@/components/Button';
import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { Header } from '@/components/Header';
import { ReadMore } from '@/components/ReadMore';
import { Box, Text, theme } from '@/theme';
import { coffees } from '@/utils/data';

const cupSizes = ['S', 'M', 'L'];

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
        style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <Box flex={1} gap="ml" padding="m">
          <Box>
            <Image
              style={styles.image}
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
                <Image
                  style={{ width: 20, height: 20 }}
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
              <Box
                width={44}
                height={44}
                borderRadius="sm"
                backgroundColor="background"
                justifyContent="center"
                alignItems="center">
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require('@/assets/icons/png/icon-beans.png')}
                  contentFit="contain"
                />
              </Box>
              <Box
                width={44}
                height={44}
                borderRadius="sm"
                backgroundColor="background"
                justifyContent="center"
                alignItems="center">
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require('@/assets/icons/png/icon-milk.png')}
                  contentFit="contain"
                />
              </Box>
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
                  <RectButton
                    key={size}
                    onPress={() => setSelectedCupSize(size)}
                    hitSlop={16}
                    style={{
                      flex: 1,
                      borderRadius: 12,
                      backgroundColor: isSelected ? '#FFF5EE' : '#FFFFFF',
                    }}>
                    <Box
                      accessible
                      accessibilityRole="button"
                      style={{
                        flex: 1,
                        height: 43,
                        justifyContent: 'center',
                        borderColor: isSelected ? '#C67C4E' : '#DEDEDE',
                        borderWidth: 1,
                        borderRadius: 12,
                      }}>
                      <Text
                        textAlign="center"
                        style={{ color: isSelected ? '#C67C4E' : '#1C1C1C' }}>
                        {size}
                      </Text>
                    </Box>
                  </RectButton>
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
        style={{
          paddingBottom: insets.bottom,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          backgroundColor: 'white',
        }}>
        <Box
          style={{
            padding: 16,
            paddingBottom: 8,
          }}>
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
              <Button title="Buy Now" onPress={navTo} />
            </Box>
          </Box>
        </Box>
      </Shadow>
    </Box>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 226,
    width: '100%',
    borderRadius: 16,
  },
});
