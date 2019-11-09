import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Text, TextProps } from '../Text';

type Props = {
  onPress?: () => void;
} & TextProps;

export function Link({ children, style, onPress = () => {}, color = '$blue', ...props }: Props) {
  const textColorStyle = EStyleSheet.create({
    color: { color },
  });

  return (
    <Text style={[textColorStyle.color, style]} onPress={onPress} {...props}>
      {children}
    </Text>
  );
}
