import SegmentedControl from '@react-native-segmented-control/segmented-control';
import React, { useState } from 'react';

const controls = ['Deliver', 'Pick Up'];

export const OrderControl = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(controls[0]);
  console.log('value: ', value);

  const _onChange = (event: any) => {
    setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
  };

  const _onValueChange = (val: string) => {
    setValue(val);
  };
  return (
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
  );
};
