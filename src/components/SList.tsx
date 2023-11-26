import React, { useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const rowHeight = 40;

const YourComponent = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(0);

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
  const listItems = Array.from({ length: 50 }, (_, index) => index + 1);

  const scrollY = useRef(new Animated.Value(0)).current;

  const translateY = scrollY.interpolate({
    inputRange: [0, Math.max(0, bannerHeight - rowHeight)],
    outputRange: [0, -Math.max(0, bannerHeight - rowHeight)],
    extrapolate: 'clamp',
  });

  const onRefresh = () => {
    setRefreshing(true);

    // Simulated data fetching delay, replace this with your actual data fetching logic
    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // Simulated 2-second delay, change as needed
  };

  const Banner = () => (
    <Animated.View
      onLayout={onLayout}
      style={{
        transform: [{ translateY }],
        zIndex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
      }}>
      <View style={{ backgroundColor: 'lime' }}>
        <Text style={{ fontSize: 36, fontWeight: '700' }}>DROPDOWN</Text>
        <Text style={{ fontSize: 36, fontWeight: '700' }}>INPUT</Text>
        <Text style={{ fontSize: 36, fontWeight: '700' }}>BOX</Text>
        <Text style={{ fontSize: 36, fontWeight: '700' }}>PROMO</Text>
      </View>
      <FlatList
        testID="row"
        data={scrollableItems}
        horizontal
        style={{
          backgroundColor: 'blue',
          height: rowHeight,
        }}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          columnGap: 16,
          paddingHorizontal: 8,
        }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={{ color: 'white' }}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </Animated.View>
  );

  return (
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
          paddingBottom: 60,
          paddingHorizontal: 8,
        }}
        columnWrapperStyle={{ gap: 8 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="red"
            progressViewOffset={bannerHeight + 8}
          />
        }
      />
    </View>
  );
};

export default YourComponent;
