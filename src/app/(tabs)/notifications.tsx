import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import SList from '@/components/SList';
import { Box } from '@/theme';

export default function NotificationsScreen() {
  const { top } = useSafeAreaInsets();
  return (
    <Box flex={1}>
      <Box
        style={{
          height: top,
          backgroundColor: 'blue',
          zIndex: 2,
        }}
      />
      <SList />
    </Box>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     paddingTop: 50,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });
