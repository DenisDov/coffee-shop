import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useState } from 'react';
import { ActivityIndicator, RefreshControl, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Promo } from '@/components/Promo';
import { ScrollViewBackgroundLayer } from '@/components/ScrollViewBackgroundLayer';
import { Box, Text } from '@/theme';

const data = Array.from({ length: 20 }, (_, index) => index + 1);

export default function FavoritesScreen() {
  const insets = useSafeAreaInsets();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <Box flex={1}>
      <ScrollViewBackgroundLayer />
      <Box style={{ height: insets.top }} />
      <ScrollView
        stickyHeaderIndices={[0, 2]}
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="tomato"
          />
        }>
        <LinearGradient
          colors={['#313131', '#131313']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}>
          <Box padding="m">
            <Text color="white">LOCATION</Text>
          </Box>

          <Box padding="m">
            <Text color="white">INPUT</Text>
          </Box>
        </LinearGradient>

        <Box backgroundColor="background" padding="m">
          <Promo />
        </Box>
        <Box backgroundColor="debug">
          <Text>LIST_OF_COFFEE</Text>
        </Box>

        <Box backgroundColor="background">
          {refreshing ? (
            <Box padding="m">
              <ActivityIndicator />
            </Box>
          ) : (
            data.map(item => (
              <Box key={item} style={{ marginBottom: 10 }}>
                <Box
                  style={{
                    height: 50,
                  }}>
                  <Text>{`Text ${item}`}</Text>
                </Box>
              </Box>
            ))
          )}
        </Box>
      </ScrollView>
    </Box>
  );
}
