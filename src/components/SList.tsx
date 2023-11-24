import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { COFFEES } from '@/utils/faker';

const generateListItems = (startChar, endChar) => {
  const listItems = [];
  for (
    let charCode = startChar.charCodeAt(0);
    charCode <= endChar.charCodeAt(0);
    charCode++
  ) {
    const newItem = `Item ${String.fromCharCode(charCode)}`;
    listItems.push(newItem);
  }
  return listItems;
};

const YourComponent = () => {
  // Data for your horizontally scrollable view and list
  const scrollableItems = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
  ];
  const listItems = generateListItems('A', 'Z');

  const renderHeader = () => (
    <View>
      <View
        style={{
          backgroundColor: 'lime',
          height: 300,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        }}>
        <Text>BANNER</Text>
      </View>

      <FlatList
        style={{ backgroundColor: 'red' }}
        horizontal
        data={scrollableItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  return (
    <FlatList
      data={listItems}
      renderItem={({ item }) => (
        <View style={{ flex: 1, padding: 30, backgroundColor: 'tomato' }}>
          <Text>{item}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={renderHeader}
      numColumns={2}
      contentContainerStyle={{ gap: 8, paddingHorizontal: 8 }}
      columnWrapperStyle={{ gap: 8 }}
      stickyHeaderIndices={[0]}
      stickyHeaderHiddenOnScroll
    />
  );
};

export default YourComponent;
