import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type Props = {
  stroke: string;
  props?: SvgProps;
};

export const PlusSign = ({ stroke = '#2F2D2C', ...props }: Props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 8h8m-4 4V4"
    />
  </Svg>
);
