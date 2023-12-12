import { getDefaultHeaderHeight } from '@react-navigation/elements';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { BorderlessButton } from 'react-native-gesture-handler';
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
      <Box width={24} alignItems="center" justifyContent="center">
        {!noBack && (
          <BorderlessButton
            onPress={() => router.back()}
            hitSlop={16}
            rippleRadius={24}>
            <Image
              style={{
                width: 24,
                height: 24,
              }}
              source={require('@/assets/icons/png/arrow-left.png')}
              contentFit="contain"
            />
          </BorderlessButton>
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

      <Box width={24} alignItems="center" justifyContent="center">
        {iconRight && (
          <BorderlessButton onPress={() => null} hitSlop={16} rippleRadius={24}>
            <Image
              style={{
                width: 24,
                height: 24,
              }}
              source={require('@/assets/icons/png/heart.png')}
              contentFit="contain"
            />
          </BorderlessButton>
        )}
      </Box>
    </Box>
  );
};
