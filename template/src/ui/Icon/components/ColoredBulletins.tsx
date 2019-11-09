// tslint:disable;
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgColoredBulletins = (props: any) => (
  <Svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      d="M26 3H11C9.3 3 8 4.3 8 6v23h18c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zM15 23h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm9 12h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4h-7V9h7v2z"
      fill="#34DBAE"
    />
    <Path d="M3 18a3 3 0 013-3h2v14H6a3 3 0 01-3-3v-8z" fill="#00CC96" />
  </Svg>
);

export default SvgColoredBulletins;
