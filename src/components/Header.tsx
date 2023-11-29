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

export const Header = ({ iconRight }) => {
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);

  return (
    <Box
      height={headerHeight}
      backgroundColor="background"
      paddingHorizontal="m"
      flexDirection="row"
      alignItems="center"
      // justifyContent="space-between"
      style={{
        paddingTop: insets.top,
        // borderBottomColor: '#000000',
        // borderBottomWidth: StyleSheet.hairlineWidth,
      }}>
      <Box width={24}>
        <PlatformPressable
          onPress={() => router.back()}
          hitSlop={16}
          style={
            {
              // width: 44,
              // height: 44,
              // backgroundColor: 'red',
              // justifyContent: 'center',
              // alignItems: 'center',
              // borderRadius: 14,
            }
          }
          pressOpacity={0.7}>
          <Image
            style={{
              width: 24,
              height: 24,
              // backgroundColor: 'tomato',
            }}
            source={require('@/assets/icons/svg/chevron-left.svg')}
            contentFit="contain"
          />
        </PlatformPressable>
      </Box>

      <Box flex={1}>
        <Text variant="semiBold" fontSize={18} textAlign="center">
          Detail
        </Text>
      </Box>

      <Box width={24} alignItems="flex-end">
        {iconRight && (
          <PlatformPressable
            onPress={() => null}
            hitSlop={16}
            style={
              {
                // backgroundColor: 'tomato',
                // width: 44,
                // height: 44,
                // backgroundColor: 'red',
                // justifyContent: 'center',
                // alignItems: 'center',
                // borderRadius: 14,
              }
            }
            pressOpacity={0.7}>
            <Image
              style={{
                width: 24,
                height: 24,
                // backgroundColor: 'tomato',
              }}
              source={require('@/assets/icons/svg/heart.svg')}
              contentFit="contain"
            />
          </PlatformPressable>
        )}
      </Box>

      {/* <Box height={insets.top} backgroundColor="error" />
      <Box
        height={headerHeight}
        backgroundColor="debug"
        paddingHorizontal="m"
        justifyContent="center"
        alignItems="center">
        <Text>Header</Text>
      </Box> */}
    </Box>
  );
};
