import { PlatformPressable } from '@react-navigation/elements';
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { OrderControl } from '@/components/OrderControl';
import Stepper from '@/components/Stepper';
import { Box, Text } from '@/theme';

export default function OrderScreen() {
  const params = useLocalSearchParams();
  const insets = useSafeAreaInsets();

  return (
    <Box flex={1} backgroundColor="white">
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
                <PlatformPressable
                  // onPress={handlePress}
                  hitSlop={16}
                  style={{
                    paddingVertical: 6,
                    paddingHorizontal: 12,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#DEDEDE',
                    borderRadius: 16,
                    gap: 1,
                  }}
                  pressOpacity={0.7}>
                  <Image
                    style={{ width: 14, height: 14 }}
                    source={require('@/assets/icons/svg/icon-edit.svg')}
                    contentFit="contain"
                  />
                  <Text fontSize={12} textTransform="capitalize">
                    Edit Address
                  </Text>
                </PlatformPressable>
                <PlatformPressable
                  // onPress={handlePress}
                  hitSlop={16}
                  style={{
                    paddingVertical: 6,
                    paddingHorizontal: 12,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#DEDEDE',
                    borderRadius: 16,
                    gap: 1,
                  }}
                  pressOpacity={0.7}>
                  <Image
                    style={{ width: 14, height: 14 }}
                    source={require('@/assets/icons/svg/icon-note.svg')}
                    contentFit="contain"
                  />
                  <Text fontSize={12} textTransform="capitalize">
                    Add Note
                  </Text>
                </PlatformPressable>
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
                    source={params.source}
                    placeholder={{ thumbhash: params.thumbhash as string }}
                    contentFit="cover"
                    transition={1000}
                  />
                  <Box gap="xs">
                    <Text variant="semiBold" textTransform="capitalize">
                      {params?.title}
                    </Text>
                    <Text color="muted" fontSize={12}>
                      with {params?.extras}
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box width={100} alignItems="flex-end">
                <Stepper />
              </Box>
            </Box>
          </Box>

          <Box height={4} style={{ backgroundColor: '#F4F4F4' }} />

          <Box paddingHorizontal="m" gap="ml">
            <PlatformPressable
              onPress={() => null}
              hitSlop={16}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
                padding: 16,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: '#EAEAEA',
              }}
              pressOpacity={0.7}>
              <Image
                style={{ width: 24, height: 24 }}
                source={require('@/assets/icons/svg/discount.svg')}
                contentFit="cover"
              />
              <Box flex={1}>
                <Text variant="semiBold" fontSize={14}>
                  1 Discount is applied
                </Text>
              </Box>
              <Image
                style={{ width: 20, height: 20 }}
                source={require('@/assets/icons/svg/chevron-right.svg')}
                contentFit="cover"
              />
            </PlatformPressable>

            <Box gap="m">
              <Text variant="semiBold">Payment Summary</Text>
              <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                gap="m">
                <Text fontSize={14}>Price</Text>
                <Text fontSize={14} variant="semiBold">
                  $ {params?.price}
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
      <Box
        style={{
          paddingBottom: insets.bottom,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}>
        <Box
          style={[
            styles.shadow,
            {
              padding: 16,
              paddingBottom: 8,
              backgroundColor: 'white',
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
            },
          ]}>
          <Box gap="m">
            <Box>
              {/* <Image
                style={{ width: 24, height: 24 }}
                source={require('@/assets/icons/svg/cash.svg')}
                contentFit="contain"
              /> */}
            </Box>
            <Button title="Order" onPress={() => null} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  shadow: {
    elevation: 5,
    shadowColor: '#E4E4E4',
    shadowRadius: 24,
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.5,
  },
});
