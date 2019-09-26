// tslint:disable;
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgMenu = (props: any) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7ZM10 12C10 11.4477 10.4477 11 11 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H11C10.4477 13 10 12.5523 10 12ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H19C19.5523 18 20 17.5523 20 17C20 16.4477 19.5523 16 19 16H8Z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgMenu;
