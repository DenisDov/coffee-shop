import { ReactElement } from 'react';
import { View } from 'react-native';

interface IScrollViewBackgroundLayer {
  topBounceColor: string;
  bottomBounceColor: string;
}

export const ScrollViewBackgroundLayer = ({
  topBounceColor,
  bottomBounceColor,
}: IScrollViewBackgroundLayer): ReactElement => (
  <View
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1, // appear under the scrollview
    }}>
    <View style={{ flex: 1, backgroundColor: topBounceColor }} />
    <View style={{ flex: 1, backgroundColor: bottomBounceColor }} />
  </View>
);
