import {
  PlatformPressable, // getDefaultHeaderHeight,
} from '@react-navigation/elements';
import { Image } from 'expo-image';
// import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, TextInput } from 'react-native';
import {
  // useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { Box, Text } from '@/theme';

export default function HomeScreen() {
  // const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();

  // const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);
  // console.log('headerHeight: ', headerHeight);
  // console.log('insets.top: ', insets.top);
  return (
    <Box flex={1} backgroundColor="background">
      <StatusBar style="light" />

      {/* <LinearGradient colors={['#313131', '#131313']} start={{ x: 0, y: 0.7 }}> */}
      <ScrollView
        style={{ flex: 1, paddingTop: insets.top, backgroundColor: 'gray' }}
        stickyHeaderIndices={[0, 1]}>
        <Box
          // style={{ paddingTop: insets.top }}
          padding="m"
          gap="m"
          // backgroundColor="error"
        >
          <Box
            // backgroundColor="error"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Box>
              <Text color="white">Location</Text>
              <PlatformPressable
                onPress={() => console.log('SHOW BOTTOMSHEET')}
                hitSlop={16}
                // style={styles.button}
                pressOpacity={0.7}>
                <Box flexDirection="row" alignItems="center" gap="m">
                  <Text color="white">Bilzen, Tanjungbalai</Text>
                  <Image
                    style={{
                      width: 14,
                      height: 14,
                    }}
                    source={require('@/assets/icons/svg/chevron-down.svg')}
                    contentFit="contain"
                  />
                </Box>
              </PlatformPressable>
            </Box>
            <PlatformPressable
              onPress={() => console.log('SHOW BOTTOMSHEET')}
              hitSlop={16}
              pressOpacity={0.7}>
              <Image
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                }}
                source="https://picsum.photos/seed/696/3000/2000"
                contentFit="cover"
              />
            </PlatformPressable>
          </Box>
          <Box
            flexDirection="row"
            padding="m"
            alignItems="center"
            borderWidth={1}
            borderColor="error">
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={require('@/assets/icons/svg/search.svg')}
              contentFit="contain"
            />
            <TextInput
              placeholder="Search..."
              style={{
                flex: 1,
                // borderWidth: 1,
              }}
            />
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={require('@/assets/icons/svg/setting-4.svg')}
              contentFit="contain"
            />
          </Box>
        </Box>
        {/* </LinearGradient> */}

        <Box flex={1}>
          <Text textAlign="center">Body</Text>
        </Box>
      </ScrollView>

      {/* <Box
        height={headerHeight}
        backgroundColor="primary"
        paddingHorizontal="m"
        style={{
          paddingTop: insets.top,
        }}>
        <Box flex={1} justifyContent="center">
          <Text textAlign="center">Header</Text>
        </Box>
      </Box> */}
      {/* <Text>HomeScreen</Text> */}
    </Box>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: "80%",
//   },
// });
