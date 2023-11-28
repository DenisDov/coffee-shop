import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Box, Text } from '@/theme';

export default function CoffeeDetailScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const params = useLocalSearchParams();
  // console.log('params: ', params);
  return (
    <Box flex={1} backgroundColor="background">
      <StatusBar style="dark" animated />
      <Box style={{ height: insets.top }} />
      <TouchableOpacity onPress={() => router.back()}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <Text>{params?.title}</Text>
      <Text>{params?.ingredients}</Text>
      <Text>{params?.description}</Text>
      <Text>{params?.rating}</Text>
      <Text>{params?.reviewsCount}</Text>
      <Text>{params?.price}</Text>
    </Box>
  );
}
