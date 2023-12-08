import {
  getDefaultHeaderHeight,
  PlatformPressable,
} from '@react-navigation/elements';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { Box } from '@/theme';

type Props = {
  onGpsPress: () => void;
  onRoutePress: () => void;
};

export const DeliveryHeader = ({ onGpsPress, onRoutePress }: Props) => {
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);

  return (
    <Box
      height={headerHeight}
      paddingHorizontal="m"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      style={{
        paddingTop: insets.top,
      }}>
      <PlatformPressable
        onPress={() => router.back()}
        hitSlop={16}
        pressOpacity={0.7}
        style={styles.button}>
        <Image
          style={{
            width: 24,
            height: 24,
          }}
          source={require('@/assets/icons/svg/chevron-left.svg')}
          contentFit="contain"
        />
      </PlatformPressable>

      <Box gap="m" flexDirection="row" alignItems="center">
        <PlatformPressable
          onPress={onRoutePress}
          hitSlop={16}
          pressOpacity={0.7}
          style={styles.button}>
          <Image
            style={{
              width: 24,
              height: 24,
            }}
            source={require('@/assets/icons/svg/routing.svg')}
            contentFit="contain"
          />
        </PlatformPressable>
        <PlatformPressable
          onPress={onGpsPress}
          hitSlop={16}
          pressOpacity={0.7}
          style={styles.button}>
          <Image
            style={{
              width: 24,
              height: 24,
            }}
            source={require('@/assets/icons/svg/gps.svg')}
            contentFit="contain"
          />
        </PlatformPressable>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 5,
    shadowColor: '#E4E4E4',
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
  },
});
