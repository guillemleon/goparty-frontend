import React from 'react';
import Svg, {Path} from 'react-native-svg';

const FavoritesIcon = ({width = 20, height = 20, fill = '#000'}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M186,893.244 L174.962,891.56 L170,881 L165.038,891.56 L154,893.244 L161.985,901.42 L160.095,913 L170,907.53 L179.905,913 L178.015,901.42 L186,893.244"
      fill={fill}
      transform="translate(-154.000000, -881.000000)"
    />
  </Svg>
);

export default FavoritesIcon;
