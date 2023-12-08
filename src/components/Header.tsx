import {
  getDefaultHeaderHeight,
  PlatformPressable,
} from '@react-navigation/elements';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { Box, Text } from '@/theme';

type Props = {
  title: string;
  iconRight?: boolean;
  noBack?: boolean;
};

export const Header = ({ title, iconRight, noBack }: Props) => {
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);

  return (
    <Box
      height={headerHeight}
      backgroundColor="white"
      paddingHorizontal="m"
      flexDirection="row"
      alignItems="center"
      style={{
        paddingTop: insets.top,
      }}>
      <Box width={24}>
        {!noBack && (
          <PlatformPressable onPress={() => router.back()} hitSlop={16}>
            <Image
              style={{
                width: 24,
                height: 24,
              }}
              source={require('@/assets/icons/svg/chevron-left.svg')}
              contentFit="contain"
            />
          </PlatformPressable>
        )}
      </Box>

      <Box flex={1}>
        <Text
          variant="semiBold"
          fontSize={18}
          textAlign="center"
          textTransform="capitalize">
          {title}
        </Text>
      </Box>

      <Box width={24} alignItems="flex-end">
        {iconRight && (
          <PlatformPressable onPress={() => null} hitSlop={16}>
            <Image
              style={{
                width: 24,
                height: 24,
              }}
              source={require('@/assets/icons/svg/heart.svg')}
              contentFit="contain"
            />
          </PlatformPressable>
        )}
      </Box>
    </Box>
  );
};
