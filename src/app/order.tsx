import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Box, Text } from '@/theme';

export default function OrderScreen() {
  const params = useLocalSearchParams();
  const insets = useSafeAreaInsets();

  return (
    <Box flex={1} backgroundColor="white">
      <Header title="Order" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: '#FFFFFF' }}
        contentContainerStyle={{ padding: 16, rowGap: 20 }}>
        <Box>
          <Text>{params?.id}</Text>
          <Text>{params?.title}</Text>
        </Box>
      </ScrollView>
      <Box
        style={{
          paddingBottom: insets.bottom,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}>
        <Box
          style={[
            styles.shadow,
            {
              padding: 16,
              paddingBottom: 8,
              backgroundColor: 'white',
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
            },
          ]}>
          <Box>
            <Button title="Order" onPress={() => null} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  shadow: {
    elevation: 5,
    shadowColor: '#E4E4E4',
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.25,
  },
});
