// tslint:disable;
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgColoredCalendar = (props: any) => (
  <Svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" {...props}>
    <Path d="M3 8a3 3 0 013-3h20a3 3 0 013 3v6H3V8z" fill="#188CD9" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 4a1 1 0 012 0v4a1 1 0 11-2 0V4zm12 0a1 1 0 112 0v4a1 1 0 11-2 0V4zm8 10H3v12a3 3 0 003 3h20a3 3 0 003-3V14z"
      fill="#1DA4FE"
    />
  </Svg>
);

export default SvgColoredCalendar;
