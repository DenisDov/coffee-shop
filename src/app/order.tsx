import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Box, Text } from '@/theme';

const controls = ['Deliver', 'Pick Up'];

export default function OrderScreen() {
  const params = useLocalSearchParams();
  const insets = useSafeAreaInsets();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(controls[0]);
  console.log('value: ', value);

  // const [controls] = ['deliver', 'pickup'];
  // const segmentIndex = controls.findIndex(el => el === language);

  const _onChange = (event: any) => {
    setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
  };

  const _onValueChange = (val: string) => {
    setValue(val);
  };

  return (
    <Box flex={1} backgroundColor="white">
      <Header title="Order" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: '#FFFFFF' }}
        contentContainerStyle={{ padding: 16, rowGap: 20 }}>
        <Box>
          <SegmentedControl
            values={['Deliver', 'Pick Up']}
            onChange={_onChange}
            onValueChange={_onValueChange}
            selectedIndex={selectedIndex}
            tintColor="#C67C4E"
            backgroundColor="#F2F2F2"
            fontStyle={{ fontSize: 16 }}
            activeFontStyle={{
              fontSize: 16,
              color: '#FFFFFF',
            }}
            style={{ height: 40 }}
          />
        </Box>
        <Box>
          <Text>{params?.id}</Text>
          <Text>{params?.title}</Text>
        </Box>
      </ScrollView>
      {/* Footer */}
      <Box
        style={{
          paddingBottom: insets.bottom,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}>
        <Box
          style={[
            styles.shadow,
            {
              padding: 16,
              paddingBottom: 8,
              backgroundColor: 'white',
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
            },
          ]}>
          <Box>
            <Button title="Order" onPress={() => null} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  shadow: {
    elevation: 5,
    shadowColor: '#E4E4E4',
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.25,
  },
});
