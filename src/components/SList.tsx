import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { COFFEES } from '@/utils/faker';

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
  const listItems = [
    'Item A',
    'Item B',
    'Item C',
    'Item D',
    'Item E',
    'Item F',
    'Item G',
    'Item H',
    'Item I',
    'Item J',
    'Item K',
    'Item L',
    'Item M',
    'Item N',
    'Item O',
    'Item P',
    'Item Q',
    'Item R',
    'Item S',
    'Item T',
    'Item U',
    'Item V',
    'Item W',
    'Item X',
    'Item Y',
    'Item Z',
  ];

  const renderHeader = () => (
    <View>
      <View
        style={{
          backgroundColor: 'lime',
          height: 300,
        }}>
        <Text>BANNER</Text>
      </View>

      <FlatList
        testID="row"
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
    />
  );
};

export default YourComponent;
