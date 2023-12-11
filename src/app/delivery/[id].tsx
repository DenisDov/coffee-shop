import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetFooter,
  BottomSheetFooterProps,
} from '@gorhom/bottom-sheet';
import * as Clipboard from 'expo-clipboard';
import { Image } from 'expo-image';
import * as Linking from 'expo-linking';
import { useCallback, useMemo, useRef } from 'react';
import { Alert, Platform, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DeliveryHeader } from '@/components/DeliveryHeader';
import { DeliveryStatusIndicator } from '@/components/DeliveryStatusIndicator';
import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { Box, Text } from '@/theme';

const initialRegion = {
  latitude: 37.792746711281175,
  longitude: -122.42665282046873,
  latitudeDelta: 3,
  longitudeDelta: 3,
};

const DUMMY_COORDS_FROM_SERVER = [
  { latitude: 37.79787087428356, longitude: -122.43537529505565 },
  { latitude: 37.797682538637964, longitude: -122.43563771164742 },
  { latitude: 37.7952261997371, longitude: -122.43513622014946 },
  { latitude: 37.79607514757963, longitude: -122.42857541016531 },
];

const origin = DUMMY_COORDS_FROM_SERVER[0];
const destination = DUMMY_COORDS_FROM_SERVER[3];

const edgePaddingValue = 32;
const edgePadding = {
  top: edgePaddingValue,
  right: edgePaddingValue,
  bottom: edgePaddingValue,
  left: edgePaddingValue,
};

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
  const { bottom } = useSafeAreaInsets();
  const mapRef = useRef<MapView>(null);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['40%', '80%'], []);
  const bottomInset = useMemo(() => (Platform.OS === 'ios' ? bottom : 16), []);

  const handleShowMyLocation = async () => {
    mapRef.current?.animateToRegion({
      latitude: 37.792746711281175, // initialRegion
      longitude: -122.42665282046873, // initialRegion
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  const handleShowRoute = async () => {
    mapRef.current?.fitToCoordinates([origin, destination], { edgePadding });
  };

  const handlePhoneCall = async (phone: string) => {
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

  const renderFooter = useCallback((props: BottomSheetFooterProps) => {
    return (
      <BottomSheetFooter {...props} bottomInset={bottomInset}>
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

          <Box
            style={{
              borderWidth: 1,
              borderColor: '#DEDEDE',
              borderRadius: 14,
            }}>
            <RectButton
              onPress={() => handlePhoneCall('+123456789')}
              hitSlop={16}
              style={{
                width: 54,
                height: 54,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 14,
              }}>
              <Box accessible accessibilityRole="button">
                <Image
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  source={require('@/assets/icons/png/calling.png')}
                  contentFit="cover"
                  transition={1000}
                />
              </Box>
            </RectButton>
          </Box>
        </Box>
      </BottomSheetFooter>
    );
  }, []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} pressBehavior="collapse" />
    ),
    [],
  );

  return (
    <Box flex={1} backgroundColor="background">
      <FocusAwareStatusBar style="dark" />
      <Box flex={0.7}>
        <MapView
          ref={mapRef}
          style={{ ...StyleSheet.absoluteFillObject }}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}
          showsUserLocation>
          <Marker
            coordinate={DUMMY_COORDS_FROM_SERVER[0]}
            anchor={{ x: 0.5, y: 0.5 }}>
            <Box
              padding="s"
              backgroundColor="white"
              borderRadius="xl"
              borderWidth={1}
              borderColor="primary">
              <Image
                style={{
                  width: 24,
                  height: 24,
                }}
                source={require('@/assets/icons/png/location.png')}
                contentFit="cover"
              />
            </Box>
          </Marker>
          <Marker
            coordinate={DUMMY_COORDS_FROM_SERVER[3]}
            anchor={{ x: 0.5, y: 0.5 }}>
            <Box
              padding="s"
              backgroundColor="white"
              borderRadius="xl"
              borderWidth={1}
              borderColor="primary">
              <Image
                style={{
                  width: 24,
                  height: 24,
                }}
                source={require('@/assets/icons/png/truck.png')}
                contentFit="cover"
              />
            </Box>
          </Marker>
          <Polyline
            coordinates={DUMMY_COORDS_FROM_SERVER}
            strokeWidth={5}
            strokeColor="#C67C4E"
          />
        </MapView>
        <DeliveryHeader
          onGpsPress={handleShowMyLocation}
          onRoutePress={handleShowRoute}
        />
      </Box>
      <BottomSheet
        // animateOnMount={false}
        backdropComponent={renderBackdrop}
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        footerComponent={renderFooter}
        handleIndicatorStyle={{
          width: 44,
          height: 5,
          borderRadius: 2.5,
          backgroundColor: '#EAEAEA',
        }}>
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

const styles = StyleSheet.create({
  shadow: {},
});
