import React from 'react';
import Svg, {Circle, Line} from 'react-native-svg';

export const SearchIcon = ({width = 24, height = 25, stroke = 'black'}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={2}>
    <Circle cx="9.64" cy="9.64" r="8.64" stroke={stroke} />
    <Line x1="14.7935" y1="16.0064" x2="23.4335" y2="24.6464" stroke={stroke} />
  </Svg>
);

export default SearchIcon;
