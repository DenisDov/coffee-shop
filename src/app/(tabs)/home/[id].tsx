import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet } from 'react-native';

import { Header } from '@/components/Header';
import { Box, Text } from '@/theme';

export default function CoffeeDetailScreen() {
  const params = useLocalSearchParams();
  return (
    <>
      <Header iconRight />
      <StatusBar style="dark" animated />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: '#F9F9F9' }}
        contentContainerStyle={{ padding: 16, rowGap: 20 }}>
        <Box>
          <Image
            style={styles.image}
            source={params.source}
            placeholder={{ thumbhash: params.thumbhash }}
            contentFit="cover"
            transition={1000}
          />
        </Box>

        <Box>
          <Text variant="semiBold" fontSize={20} marginBottom="xs">
            {params?.title}
          </Text>
          <Text fontSize={12} color="muted">
            with {params?.ingredients}
          </Text>
          <Text>{params?.reviewsCount}</Text>
          <Text>{params?.price}</Text>
        </Box>

        <Box>
          <Text variant="semiBold" marginBottom="sm">
            Description
          </Text>
          <Text fontSize={14} color="muted">
            {params?.description}
          </Text>
          <Text>{params?.rating}</Text>
        </Box>

        <Box>
          <Text variant="semiBold" marginBottom="sm">
            Size
          </Text>
          <Text>S, M, L</Text>
        </Box>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // flex: 1,
    height: 226,
    width: '100%',
    borderRadius: 16,
  },
});
