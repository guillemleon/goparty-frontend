import React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const HomeIcon = ({
  width = 29,
  height = 23,
  fill = 'white',
  stroke = 'white',
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 29 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Rect
      x="7.03833"
      y="9.33032"
      width="15.6671"
      height="12.5162"
      rx="1"
      fill={fill}
      stroke={stroke}
    />
    <Path
      d="M14.139 1.0813C14.5347 0.654712 15.2096 0.654713 15.6053 1.08131L25.4071 11.6485C26.0008 12.2885 25.5469 13.3286 24.674 13.3286H5.07033C4.19742 13.3286 3.74355 12.2885 4.33717 11.6485L14.139 1.0813Z"
      fill={fill}
      stroke={stroke}
    />
  </Svg>
);

export default HomeIcon;
