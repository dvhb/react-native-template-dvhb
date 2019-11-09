import React, { ReactNode } from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleProp, TextStyle } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ColorsType } from '../../boot/stylesheetConfig';

import { styles } from './styles';

export type TextProps = {
  children?: ReactNode;
  size?: 'subcaption' | 'caption' | 'body1' | 'body2' | 'headline' | 'title' | 'large';
  weight?: 'regular' | 'semibold' | 'bold';
  style?: StyleProp<TextStyle>;
  color?: ColorsType;
} & RNTextProps;

export function Text({ children, style, size = 'body1', weight = 'regular', color = '$black', ...props }: TextProps) {
  const textColorStyle = EStyleSheet.create({
    color: { color },
  });

  return (
    <RNText style={[styles.text, styles[size], styles[weight], textColorStyle.color, style]} {...props}>
      {children}
    </RNText>
  );
}
