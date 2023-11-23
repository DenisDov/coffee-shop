import { ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ScrollViewBackgroundLayer } from '@/components/ScrollViewBackgroundLayer';
import { Box, Text } from '@/theme';

const data = Array.from({ length: 20 }, (_, index) => index + 1);
const promoHeight = 140;

export default function FavoritesScreen() {
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1} backgroundColor="background">
      <Box style={{ height: insets.top, backgroundColor: '#131313' }} />
      <ScrollViewBackgroundLayer
        topBounceColor="#131313"
        bottomBounceColor="white"
      />
      <ScrollView
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll
        style={{ flex: 1 }}>
        <Box style={{ backgroundColor: 'red' }} padding="m">
          <Text color="lightText">LOCATION</Text>
        </Box>
        <Box
          style={{ backgroundColor: 'blue', paddingBottom: promoHeight / 2 }}>
          <Box padding="m">
            <Text color="lightText">INPUT</Text>
          </Box>
        </Box>

        <Box style={{ backgroundColor: 'white' }}>
          <Box
            height={promoHeight}
            margin="m"
            overflow="hidden"
            borderRadius="m"
            style={{ marginTop: -(promoHeight / 2) }}>
            <ImageBackground
              style={styles.image}
              source={require('@/assets/images/promo.png')}>
              <Box paddingVertical="m" paddingHorizontal="l">
                <Text>promo</Text>
                <Text>Buy one get one FREE</Text>
              </Box>
            </ImageBackground>
          </Box>
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

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'center',
  },
});
