import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Shadow } from 'react-native-shadow-2';

import { Button } from '@/components/Button';
import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { Header } from '@/components/Header';
import { OrderControl } from '@/components/OrderControl';
import { Stepper } from '@/components/Stepper';
import { Box, Text, theme } from '@/theme';
import { coffees } from '@/utils/data';

export default function OrderScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [value, setValue] = useState(1);

  const product = coffees.find(c => c.id === id);

  return (
    <Box flex={1} backgroundColor="white">
      <FocusAwareStatusBar style="dark" />
      <Header title="Order" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <Box flex={1} gap="ml" paddingVertical="m">
          <Box paddingHorizontal="m">
            <OrderControl />
          </Box>
          <Box paddingHorizontal="m">
            <Box gap="m">
              <Box>
                <Text variant="semiBold" marginBottom="m">
                  Delivery Address
                </Text>
                <Text variant="semiBold" fontSize={14} marginBottom="s">
                  Jl. Kpg Sutoyo
                </Text>
                <Text fontSize={12} style={{ color: '#808080' }}>
                  Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
                </Text>
              </Box>
              <Box flexDirection="row" alignItems="center" gap="s">
                <RectButton
                  onPress={() => null}
                  hitSlop={16}
                  style={{
                    borderRadius: 16,
                    backgroundColor: 'white',
                  }}>
                  <Box
                    accessible
                    accessibilityRole="button"
                    style={{
                      paddingVertical: 6,
                      paddingHorizontal: 12,
                      flexDirection: 'row',
                      gap: 4,
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#DEDEDE',
                      borderRadius: 16,
                    }}>
                    <Image
                      style={{ width: 14, height: 14 }}
                      source={require('@/assets/icons/png/edit.png')}
                      contentFit="contain"
                    />
                    <Text fontSize={12} textTransform="capitalize">
                      Edit Address
                    </Text>
                  </Box>
                </RectButton>

                <RectButton
                  onPress={() => null}
                  hitSlop={16}
                  style={{
                    borderRadius: 16,
                    backgroundColor: 'white',
                  }}>
                  <Box
                    accessible
                    accessibilityRole="button"
                    style={{
                      paddingVertical: 6,
                      paddingHorizontal: 12,
                      flexDirection: 'row',
                      gap: 4,
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#DEDEDE',
                      borderRadius: 16,
                    }}>
                    <Image
                      style={{ width: 14, height: 14 }}
                      source={require('@/assets/icons/png/document-text.png')}
                      contentFit="contain"
                    />
                    <Text fontSize={12} textTransform="capitalize">
                      Add Note
                    </Text>
                  </Box>
                </RectButton>
              </Box>
              <Box height={1} backgroundColor="stroke" />
            </Box>
          </Box>

          <Box paddingHorizontal="m">
            <Box flexDirection="row" alignItems="center" gap="m">
              <Box flex={1}>
                <Box flexDirection="row" alignItems="center" gap="sm">
                  <Image
                    style={{ width: 54, height: 54, borderRadius: 12 }}
                    source={product?.image.source}
                    placeholder={{
                      thumbhash: product?.image.thumbhash as string,
                    }}
                    contentFit="cover"
                    transition={1000}
                  />
                  <Box gap="xs">
                    <Text variant="semiBold" textTransform="capitalize">
                      {product?.title}
                    </Text>
                    <Text color="muted" fontSize={12}>
                      with {product?.extras}
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box width={100} alignItems="flex-end">
                <Stepper
                  value={value}
                  minValue={1}
                  maxValue={10}
                  handleIncrement={() => setValue(value + 1)}
                  handleDecrement={() => setValue(value - 1)}
                />
              </Box>
            </Box>
          </Box>

          <Box height={4} style={{ backgroundColor: '#F4F4F4' }} />

          <Box paddingHorizontal="m" gap="ml">
            <RectButton
              onPress={() => null}
              hitSlop={16}
              style={{
                borderRadius: 14,
                backgroundColor: 'white',
              }}>
              <Box
                accessible
                accessibilityRole="button"
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 12,
                  padding: 16,
                  borderRadius: 14,
                  borderWidth: 1,
                  borderColor: '#EAEAEA',
                }}>
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require('@/assets/icons/png/discount-shape.png')}
                  contentFit="cover"
                />
                <Box flex={1}>
                  <Text variant="semiBold" fontSize={14}>
                    1 Discount is applied
                  </Text>
                </Box>
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require('@/assets/icons/png/arrow-right.png')}
                  contentFit="cover"
                />
              </Box>
            </RectButton>

            <Box gap="m">
              <Text variant="semiBold">Payment Summary</Text>
              <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                gap="m">
                <Text fontSize={14}>Price</Text>
                <Text fontSize={14} variant="semiBold">
                  $ {product?.price}
                </Text>
              </Box>
              <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                gap="m">
                <Text fontSize={14}>Delivery Fee</Text>
                <Box flexDirection="row" alignItems="center" gap="s">
                  <Text fontSize={14} textDecorationLine="line-through">
                    $ 2.0
                  </Text>
                  <Text fontSize={14} variant="semiBold">
                    $ 1.0
                  </Text>
                </Box>
              </Box>
              <Box height={1} backgroundColor="stroke" />
              <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                gap="m">
                <Text fontSize={14}>Total Payment</Text>
                <Text fontSize={14} variant="semiBold">
                  $ 5.99
                </Text>
              </Box>
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
          <Box gap="m">
            <Box flexDirection="row" alignItems="center" gap="m">
              <Image
                style={{ width: 24, height: 24 }}
                source={require('@/assets/icons/png/moneys.png')}
                contentFit="contain"
              />
              <Box flex={1}>
                <Box
                  alignSelf="flex-start"
                  borderRadius="m"
                  flexDirection="row"
                  alignItems="center"
                  backgroundColor="stroke">
                  <Box
                    borderRadius="m"
                    backgroundColor="primary"
                    paddingVertical="xs"
                    paddingHorizontal="sm">
                    <Text fontSize={12} color="white">
                      Cash
                    </Text>
                  </Box>
                  <Box
                    borderRadius="m"
                    paddingVertical="xs"
                    paddingLeft="sm"
                    paddingRight="m">
                    <Text fontSize={12}>$ 5.99</Text>
                  </Box>
                </Box>
              </Box>
              <BorderlessButton onPress={() => null} hitSlop={16}>
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require('@/assets/icons/png/more.png')}
                  contentFit="contain"
                />
              </BorderlessButton>
            </Box>
            <Button title="Order" onPress={() => router.push('/delivery/2')} />
          </Box>
        </Box>
      </Shadow>
    </Box>
  );
}
