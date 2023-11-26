import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DATA = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  title: `Item ${index + 1}`,
}));

export const MyList = () => {
  const renderItem = ({ item, index, target, extraData }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );
  return (
    <FlashList
      data={DATA}
      renderItem={renderItem}
      estimatedItemSize={50}
      numColumns={2}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 8,
  },
  item: {
    flex: 1,
    margin: 8,
    backgroundColor: 'tomato',
    padding: 16,
  },
});
