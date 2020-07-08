// tslint:disable;
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgCamera = (props: any) => (
  <Svg viewBox="0 0 32 32" width="1em" height="1em" fill="#0055FF" {...props}>
    <Path d="M29.2 7.7l-.5.4-.6.5-.1.1-2 1.7V10c0-1.7-1.3-3-3-3H5c-1.7 0-3 1.3-3 3v12c0 1.7 1.3 3 3 3h18c1.7 0 3-1.3 3-3v-.3l2 1.7.1.1.6.5.5.4c.3.3.8 0 .8-.4V8.1c0-.5-.5-.7-.8-.4zM24 12v10c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V10c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v2zm4 8.7L26 19v-6.1l2-1.7v9.5z" />
  </Svg>
);

export default SvgCamera;
