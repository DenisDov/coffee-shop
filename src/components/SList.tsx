import React, { useRef, useState } from 'react';
import { Animated, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { COFFEES } from '@/utils/faker';

const rowHeight = 40;

const YourComponent = () => {
  const insets = useSafeAreaInsets();
  // console.log('top: ', insets.top);
  const [bannerHeight, setBannerHeight] = useState(0);
  console.log('bannerHeight: ', bannerHeight);

  const onLayout = event => {
    const { height } = event.nativeEvent.layout;
    setBannerHeight(height);
  };
  // Data for your horizontally scrollable view and list
  const scrollableItems = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
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

  const scrollY = useRef(new Animated.Value(0)).current;

  const translateY = scrollY.interpolate({
    inputRange: [0, bannerHeight - rowHeight],
    outputRange: [0, -bannerHeight + rowHeight],
    extrapolate: 'clamp',
  });

  console.log('translateY: ', translateY);
  const Banner = () => (
    <Animated.View
      onLayout={onLayout}
      style={{
        backgroundColor: 'lime',
        transform: [{ translateY }],
        zIndex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
      }}>
      <View>
        <Text style={{ fontSize: 36, fontWeight: '700' }}>DROPDOWN</Text>
        <Text style={{ fontSize: 36, fontWeight: '700' }}>INPUT</Text>
        <Text style={{ fontSize: 36, fontWeight: '700' }}>BOX</Text>
        <Text style={{ fontSize: 36, fontWeight: '700' }}>PROMO</Text>
      </View>
      <FlatList
        testID="row"
        data={scrollableItems}
        horizontal
        style={{ backgroundColor: 'blue', height: rowHeight }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}>
            <Text style={{ color: 'white' }}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </Animated.View>
  );

  return (
    <View>
      {/* <View
        style={{
          height: insets.top,
          backgroundColor: 'blue',
          // zIndex: 2,
        }}
      /> */}
      <View>
        <Banner />
        <Animated.FlatList
          data={listItems}
          renderItem={({ item }) => (
            <View style={{ flex: 1, padding: 30, backgroundColor: 'tomato' }}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={{
            gap: 8,
            paddingTop: bannerHeight + 8,
          }}
          columnWrapperStyle={{ gap: 8 }}
          // stickyHeaderIndices={[0]}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true },
          )}
          scrollEventThrottle={16}
        />
      </View>
    </View>
  );
};

export default YourComponent;
