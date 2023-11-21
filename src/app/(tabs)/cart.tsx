import { StyleSheet } from 'react-native';

import { Box, Text } from '@/theme';

export default function CartScreen() {
  return (
    <Box style={styles.container}>
      <Text style={styles.title}>CartScreen</Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
