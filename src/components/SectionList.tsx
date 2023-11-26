import React from 'react';
import { SafeAreaView, SectionList, StatusBar, StyleSheet } from 'react-native';

import { Box, Text } from '@/theme';

const items = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);

const MySectionList = () => (
  <SectionList
    sections={[{ data: items }]}
    ListHeaderComponent={() => (
      <Box height={300} backgroundColor="error">
        <Text>Banner</Text>
      </Box>
    )}
    keyExtractor={item => item}
    renderItem={({ item }) => (
      <Box>
        <Text>{item}</Text>
      </Box>
    )}
    renderSectionHeader={() => (
      <Box style={{ height: 40, backgroundColor: 'lime' }}>
        <Text>HORIZONTAL_FLATLIST</Text>
      </Box>
    )}
    stickySectionHeadersEnabled
  />
);

export default MySectionList;
