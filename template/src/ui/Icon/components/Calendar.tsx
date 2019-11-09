// tslint:disable;
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgCalendar = (props: any) => (
  <Svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 4a1 1 0 012 0v1h6V4a1 1 0 112 0v1h1a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h1V4zM6 7v3h12V7H6zm0 5v6h12v-6H6z"
      fill="#15171B"
    />
  </Svg>
);

export default SvgCalendar;
