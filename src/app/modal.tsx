import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { Box, Text } from '@/theme';

export default function ModalScreen() {
  return (
    <Box style={styles.container}>
      <Text style={styles.title}>Modal</Text>

      <StatusBar style="auto" />
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
