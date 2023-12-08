import BottomSheet from '@gorhom/bottom-sheet';
import { Image } from 'expo-image';
import { useMemo, useRef } from 'react';

import DeliveryStatusIndicator from '@/components/DeliveryStatusIndicator';
import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { Header } from '@/components/Header';
import { Box, Text } from '@/theme';

const statuses = [
  {
    id: 1,
    title: 'Order Placed',
    desc: 'Your order has been successfully placed.',
  },
  {
    id: 2,
    title: 'Order Processing',
    desc: 'We are currently processing your order.',
  },
  {
    id: 3,
    title: 'Order Shipped',
    desc: 'Your order has been shipped and is on its way to you.',
  },
  {
    id: 4,
    title: 'Order Delivered',
    desc: 'We have delivered your goods to you.',
  },
];

export default function DeliveryScreen() {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['40%', '80%'], []);
  return (
    <Box flex={1} backgroundColor="background">
      <FocusAwareStatusBar style="dark" />
      <Header title="Delivery" />
      <Box flex={1} padding="m" backgroundColor="debug">
        <Text>MAP HERE</Text>
      </Box>
      <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
        <Box padding="m" gap="ml">
          <Box alignItems="center" style={{ gap: 6 }}>
            <Text variant="semiBold">10 minutes left</Text>
            <Box flexDirection="row" alignItems="center" gap="xs">
              <Text fontSize={12} style={{ color: '#808080' }}>
                Delivery to
              </Text>
              <Text variant="semiBold" fontSize={12}>
                Jl. Kpg Sutoyo
              </Text>
            </Box>
          </Box>
          <DeliveryStatusIndicator statuses={statuses} currentStep={3} />
          {/* Courier */}
          <Box flexDirection="row" alignItems="center" gap="m">
            <Box flex={1}>
              <Box flexDirection="row" alignItems="center" gap="sm">
                <Image
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: 14,
                  }}
                  source="https://i.pravatar.cc/150?img=52"
                  placeholder={{
                    thumbhash: '0RcGDwSGeWT6c1qNesenSnxqyACILmAI',
                  }}
                  contentFit="cover"
                  transition={1000}
                />
                <Box gap="xs">
                  <Text variant="semiBold" textTransform="capitalize">
                    Johan Hawn
                  </Text>
                  <Text color="muted" fontSize={12}>
                    Personal Courier
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box width={100} alignItems="flex-end">
              <Box
                width={54}
                height={54}
                justifyContent="center"
                alignItems="center"
                style={{
                  borderWidth: 1,
                  borderColor: '#DEDEDE',
                  borderRadius: 14,
                }}>
                <Image
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  source={require('@/assets/icons/svg/phone.svg')}
                  contentFit="cover"
                  transition={1000}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </BottomSheet>
    </Box>
  );
}
