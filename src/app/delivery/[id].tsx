import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import * as Clipboard from 'expo-clipboard';
import * as Linking from 'expo-linking';
import { useCallback, useMemo, useRef } from 'react';
import { Alert, Platform, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DeliveryHeader } from '@/components/DeliveryHeader';
import { DeliveryStatusIndicator } from '@/components/DeliveryStatusIndicator';
import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { Box, ImageBox, Text } from '@/theme';

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
  const snapPoints = useMemo(() => ['80%'], []);

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
          style={styles.map}
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
              <ImageBox
                width={24}
                height={24}
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
              <ImageBox
                width={24}
                height={24}
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
        backdropComponent={renderBackdrop}
        ref={bottomSheetRef}
        index={0}
        bottomInset={bottom}
        snapPoints={snapPoints}
        enableDynamicSizing>
        <BottomSheetScrollView>
          <Box padding="m" gap="ml">
            <Box alignItems="center" gap="xs">
              <Text variant="semiBold">10 minutes left</Text>
              <Box flexDirection="row" alignItems="center" gap="xs">
                <Text fontSize={12} color="muted250">
                  Delivery to
                </Text>
                <Text variant="semiBold" fontSize={12}>
                  Jl. Kpg Sutoyo
                </Text>
              </Box>
            </Box>
            <DeliveryStatusIndicator statuses={statuses} currentStep={3} />
            <Box
              flexDirection="row"
              alignItems="center"
              gap="m"
              backgroundColor="white"
              paddingHorizontal="m">
              <Box flex={1}>
                <Box flexDirection="row" alignItems="center" gap="sm">
                  <ImageBox
                    width={54}
                    height={54}
                    borderRadius="smm"
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
                    <Text color="muted250" fontSize={12}>
                      Personal Courier
                    </Text>
                  </Box>
                </Box>
              </Box>

              <RectButton
                onPress={() => handlePhoneCall('+123456789')}
                hitSlop={16}
                style={{
                  borderRadius: 14,
                  backgroundColor: 'white',
                }}>
                <Box
                  style={{
                    width: 54,
                    height: 54,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: '#DEDEDE',
                  }}>
                  <ImageBox
                    width={24}
                    height={24}
                    source={require('@/assets/icons/png/calling.png')}
                    contentFit="cover"
                    transition={1000}
                  />
                </Box>
              </RectButton>
            </Box>
          </Box>
        </BottomSheetScrollView>
      </BottomSheet>
    </Box>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
