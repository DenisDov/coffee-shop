import React from 'react';
import { FlatList, Text, View } from 'react-native';

const items = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);

const INITIAL_LAYOUT_ITEMS = ['PROMO', 'HORIZONTAL_FLATLIST'];

const DATA = INITIAL_LAYOUT_ITEMS.concat(items);

const MyFlatList = () => (
  <FlatList
    data={DATA}
    stickyHeaderIndices={[0, 2]}
    renderItem={({ item }) => {
      if (item === 'PROMO') {
        return (
          <View style={{ height: 100, backgroundColor: 'tomato' }}>
            <Text>PROMO</Text>
          </View>
        );
      } else if (item === 'HORIZONTAL_FLATLIST')
        return (
          <View style={{ height: 40, backgroundColor: 'red' }}>
            <Text>HORIZONTAL_FLATLIST</Text>
          </View>
        );
      else {
        return <Text>{item}</Text>;
      }
    }}
    keyExtractor={item => item}
    ListHeaderComponent={
      <View style={{ height: 200, backgroundColor: 'lime' }}>
        <Text>INPUTS</Text>
      </View>
    }
  />
);

export default MyFlatList;
