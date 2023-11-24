import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

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
      {/* Top section with buttons */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            /* Handle button press */
          }}>
          <Text>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* Handle button press */
          }}>
          <Text>Button 2</Text>
        </TouchableOpacity>
        {/* Add more buttons as needed */}
      </View>

      {/* Middle horizontally scrollable view */}
      <FlatList
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
        <View style={{ padding: 15 }}>
          <Text>{item}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={renderHeader}
    />
  );
};

export default YourComponent;
