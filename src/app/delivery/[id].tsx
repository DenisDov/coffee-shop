import BottomSheet, {
  BottomSheetFooter,
  BottomSheetFooterProps,
} from '@gorhom/bottom-sheet';
import { PlatformPressable } from '@react-navigation/elements';
import * as Clipboard from 'expo-clipboard';
import { Image } from 'expo-image';
import * as Linking from 'expo-linking';
import { useCallback, useMemo, useRef } from 'react';
import { Alert } from 'react-native';
import MapView from 'react-native-maps';

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

  const handlePhoneCall = async () => {
    const phone = '+123456789';
    try {
      await Linking.openURL(`tel:${phone}`);
    } catch (error) {
      if (error instanceof Error) {
        await Clipboard.setStringAsync(phone);
        Alert.alert(phone, 'Phone number copied to clipboard.', [
          { text: 'OK' },
        ]);
        console.log(error.message);
      } else {
        console.log('An unknown error occurred');
      }
    }
  };

  const renderFooter = useCallback(
    (props: BottomSheetFooterProps) => (
      <BottomSheetFooter {...props} bottomInset={40}>
        <Box
          flexDirection="row"
          alignItems="center"
          gap="m"
          backgroundColor="white"
          paddingHorizontal="m">
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
            <PlatformPressable onPress={handlePhoneCall}>
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
            </PlatformPressable>
          </Box>
        </Box>
      </BottomSheetFooter>
    ),
    [],
  );

  return (
    <Box flex={1} backgroundColor="background">
      <FocusAwareStatusBar style="dark" />
      <Header title="Delivery" />
      <Box flex={1} backgroundColor="debug">
        <MapView
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        footerComponent={renderFooter}>
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
        </Box>
      </BottomSheet>
    </Box>
  );
}
