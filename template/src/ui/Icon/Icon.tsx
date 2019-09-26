import React, { Component, SVGAttributes } from 'react';
import EStyleSheet, { AnyObject } from 'react-native-extended-stylesheet';

import * as Svg from './components';

interface Props extends SVGAttributes<SVGElement> {
  name: string;
  width?: number;
  height?: number;
  style?: AnyObject;
}

export class Icon extends Component<Props> {
  static defaultProps = {
    width: 24,
    height: 24,
  };

  static capitalize = (s: string) => {
    return s && s[0].toUpperCase() + s.slice(1);
  };

  render() {
    const { name, width, height, style, ...rest } = this.props;

    // @ts-ignore
    const IconComponent = Svg[Icon.capitalize(name)];
    const viewBox = `0 0 ${width} ${height}`;

    if (!IconComponent) return null;

    return <IconComponent viewBox={viewBox} width={width} height={height} style={[styles.icon, style]} {...rest} />;
  }
}

const styles = EStyleSheet.create({
  icon: {
    color: '$black',
  },
});
