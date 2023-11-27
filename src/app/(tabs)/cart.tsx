import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MyList } from '@/components/FlashList';
import MySectionList from '@/components/SectionList';
import { Box } from '@/theme';

export default function CartScreen() {
  const { top } = useSafeAreaInsets();
  return (
    <Box flex={1}>
      <Box style={{ height: top, backgroundColor: 'blue', zIndex: 2 }} />
      <MySectionList />
      {/* <MyList /> */}
    </Box>
  );
}
