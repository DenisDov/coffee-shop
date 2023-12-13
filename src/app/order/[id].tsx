import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Shadow } from 'react-native-shadow-2';

import { Button } from '@/components/Button';
import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { Header } from '@/components/Header';
import { DeliveryAddress } from '@/components/order/DeliveryAddress';
import { DiscountButton } from '@/components/order/DiscountButton';
import { OrderControl } from '@/components/OrderControl';
import { Stepper } from '@/components/Stepper';
import { Box, ImageBox, Text, theme } from '@/theme';
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
        style={styles.scrollView}>
        <Box flex={1} gap="ml" paddingVertical="m">
          <Box paddingHorizontal="m">
            <OrderControl />
          </Box>
          <Box paddingHorizontal="m">
            <Box gap="m">
              <DeliveryAddress />
              <Box height={1} backgroundColor="stroke" />
            </Box>
          </Box>

          <Box paddingHorizontal="m">
            <Box flexDirection="row" alignItems="center" gap="m">
              <Box flex={1}>
                <Box flexDirection="row" alignItems="center" gap="sm">
                  <ImageBox
                    width={54}
                    height={54}
                    borderRadius="sm"
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
                    <Text color="muted250" fontSize={12}>
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
            <DiscountButton />

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
        style={[styles.footer, { paddingBottom: insets.bottom }]}>
        <Box padding="m">
          <Box gap="m">
            <Box flexDirection="row" alignItems="center" gap="m">
              <ImageBox
                width={24}
                height={24}
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
              <BorderlessButton
                onPress={() => null}
                hitSlop={16}
                rippleRadius={24}>
                <ImageBox
                  width={24}
                  height={24}
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
