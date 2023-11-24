import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Promo } from '@/components/Promo';
import { ScrollViewBackgroundLayer } from '@/components/ScrollViewBackgroundLayer';
import { Box, Text } from '@/theme';

const data = Array.from({ length: 20 }, (_, index) => index + 1);
const promoHeight = 150;

export default function FavoritesScreen() {
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1}>
      <ScrollViewBackgroundLayer />
      <Box style={{ height: insets.top }} />
      <ScrollView
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll
        style={{ flex: 1 }}>
        <LinearGradient
          colors={['#313131', '#131313']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={{ paddingBottom: promoHeight / 2 }}>
          <Box padding="m">
            <Text color="white">LOCATION</Text>
          </Box>

          <Box padding="m">
            <Text color="white">INPUT</Text>
          </Box>
        </LinearGradient>

        <Box backgroundColor="background">
          <Promo />
          <Box>
            <Text>LIST_OF_COFFEE</Text>
          </Box>
          <Box>
            {data.map(item => (
              <Box key={item} style={{ marginBottom: 10 }}>
                <Box
                  style={{
                    height: 50,
                    backgroundColor: 'lightblue',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <Text>{`Text ${item}`}</Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}
