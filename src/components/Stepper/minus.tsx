import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type Props = {
  stroke: string;
  props?: SvgProps;
};

export const MinusSign = ({
  stroke = '#2F2D2C',
  ...props
}: Props): JSX.Element => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 8h8"
    />
  </Svg>
);
