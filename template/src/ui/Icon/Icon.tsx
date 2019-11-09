import React, { Component, SVGAttributes } from 'react';
import EStyleSheet, { AnyObject } from 'react-native-extended-stylesheet';

import { ColorsType } from '../../boot/stylesheetConfig';
import * as Svg from './components';

interface Props extends SVGAttributes<SVGElement> {
  name: string;
  width?: number;
  height?: number;
  style?: AnyObject;
  color?: ColorsType;
}

export class Icon extends Component<Props> {
  static defaultProps = {
    width: 24,
    height: 24,
    color: '$black',
  };

  static capitalize = (s: string) => {
    return s && s[0].toUpperCase() + s.slice(1);
  };

  render() {
    const { name, width, height, style, color, ...rest } = this.props;

    const iconColorStyle = EStyleSheet.create({
      color: EStyleSheet.value(color),
    });

    // @ts-ignore
    const IconComponent = Svg[Icon.capitalize(name)];

    if (!IconComponent) return null;

    return <IconComponent width={width} height={height} style={[iconColorStyle, style]} {...rest} />;
  }
}
