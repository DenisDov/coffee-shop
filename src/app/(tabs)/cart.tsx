import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MySectionList from '@/components/SectionList';
import { Box, Text } from '@/theme';

export default function CartScreen() {
  const { top } = useSafeAreaInsets();
  return (
    <Box flex={1}>
      <Box style={{ height: top, backgroundColor: 'blue', zIndex: 2 }} />
      <MySectionList />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
});
