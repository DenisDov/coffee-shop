import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

const items = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);

const INITIAL_LAYOUT_ITEMS = ['BANNER'];

const DATA = INITIAL_LAYOUT_ITEMS.concat(items);

// const { width } = Dimensions.get('screen');

export const MyList = () => {
  const { width } = useWindowDimensions();
  const renderItem = ({ item, index }) => {
    // Conditionally render different styles for items based on index
    if (index === 0) {
      // Render the first item as full width
      return (
        <View style={[styles.item, styles.fullWidthItem]}>
          {/* Render your full-width item content */}
          <Text style={styles.fullWidthText}>{item}</Text>
        </View>
      );
    } else {
      // Render other items as half width
      return (
        <View style={styles.item}>
          {/* Render your half-width item content */}
          <Text>{item}</Text>
        </View>
      );
    }
  };
  return (
    <FlashList
      data={DATA}
      renderItem={renderItem}
      //   stickyHeaderIndices={[0, 1]}
      estimatedItemSize={50}
      //   numColumns={2}
      contentContainerStyle={styles.list}
      //   renderHeader={() => (
      //     <View style={{ height: 100, backgroundColor: 'red' }}>
      //       <Text>PROMO</Text>
      //     </View>
      //   )}
      //   stickyHeaderIndices={[0]}
      ListHeaderComponent={
        <View style={{ height: 200, backgroundColor: 'lime' }}>
          <Text>INPUTS</Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidthItem: {
    flex: 2, // This will make the first item take the full width
  },
  fullWidthText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
});
