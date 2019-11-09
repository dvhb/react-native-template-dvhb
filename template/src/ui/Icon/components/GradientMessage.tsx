// tslint:disable;
import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const SvgGradientMessage = (props: any) => (
  <Svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" {...props}>
    <Path d="M3 8a4 4 0 014-4h18a4 4 0 014 4v10a4 4 0 01-4 4H3V8z" fill="url(#gradientMessage_svg__paint0_linear)" />
    <Path d="M3 22h8l-8 8v-8z" fill="url(#gradientMessage_svg__paint1_linear)" />
    <Defs>
      <LinearGradient
        id="gradientMessage_svg__paint0_linear"
        x1={16}
        y1={4}
        x2={16}
        y2={22}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1DA4FE" />
        <Stop offset={1} stopColor="#1A94E6" />
      </LinearGradient>
      <LinearGradient
        id="gradientMessage_svg__paint1_linear"
        x1={7}
        y1={22}
        x2={7}
        y2={30}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1784CC" />
        <Stop offset={1} stopColor="#198CD9" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgGradientMessage;
