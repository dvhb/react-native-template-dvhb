// tslint:disable;
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgTransparancyCup = (props: any) => (
  <Svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      d="M25 9h-2V8H3v9c0 .6.4 1 1 1v1c0 2.8 2.2 5 5 5h8c2.8 0 5-2.2 5-5v-1c.6 0 1-.4 1-1h2c2.2 0 4-1.8 4-4s-1.8-4-4-4zm-5 10c0 1.7-1.3 3-3 3H9c-1.7 0-3-1.3-3-3v-1h14v1zm1-3H5v-6h16v6zm4-1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
      fill="#15171B"
    />
    <Path
      opacity={0.2}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 10h-6v6h6v-6zm-6 9l-4.5-1H20v1a3 3 0 01-3 3h-3c1 0 1-1 1-1v-2z"
      fill="#15171B"
    />
  </Svg>
);

export default SvgTransparancyCup;
