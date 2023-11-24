import { StyleSheet } from 'react-native';

import SList from '@/components/SList';
import { Box } from '@/theme';

export default function NotificationsScreen() {
  return (
    <Box style={styles.container}>
      <SList />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
