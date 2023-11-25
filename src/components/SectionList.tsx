import React from 'react';
import { SafeAreaView, SectionList, StatusBar, StyleSheet } from 'react-native';

import { Box, Text } from '@/theme';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const MySectionList = () => (
  <SectionList
    sections={DATA}
    keyExtractor={(item, index) => item + index}
    renderItem={({ item }) => (
      <Box>
        <Text>{item}</Text>
      </Box>
    )}
    renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
  />
);

export default MySectionList;
