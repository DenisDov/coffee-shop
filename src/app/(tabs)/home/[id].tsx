import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

// import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '@/components/Header';
import { Box, Text } from '@/theme';

// const blurhash = 'LHHx1n0M00tRpKZ~I;a}02WB~oi^';
// const imgURL =
//   'https://images.unsplash.com/photo-1444418185997-1145401101e0?q=80&w=3017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function CoffeeDetailScreen() {
  // const insets = useSafeAreaInsets();
  // const router = useRouter();
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
            placeholder={params.blurhash}
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
