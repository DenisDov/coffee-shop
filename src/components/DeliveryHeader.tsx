import { getDefaultHeaderHeight } from '@react-navigation/elements';
import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { Box, ImageBox } from '@/theme';

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
      <RectButton
        onPress={() => router.back()}
        hitSlop={16}
        style={styles.button}>
        <ImageBox
          width={24}
          height={24}
          source={require('@/assets/icons/png/arrow-left.png')}
          contentFit="contain"
        />
      </RectButton>

      <Box gap="m" flexDirection="row" alignItems="center">
        <RectButton onPress={onRoutePress} hitSlop={16} style={styles.button}>
          <ImageBox
            width={24}
            height={24}
            source={require('@/assets/icons/png/routing-2.png')}
            contentFit="contain"
          />
        </RectButton>
        <RectButton onPress={onGpsPress} hitSlop={16} style={styles.button}>
          <ImageBox
            width={24}
            height={24}
            source={require('@/assets/icons/png/gps.png')}
            contentFit="contain"
          />
        </RectButton>
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
