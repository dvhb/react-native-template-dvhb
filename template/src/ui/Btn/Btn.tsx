import React, { ReactNode } from 'react';
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';

import { Text } from '../Text';
import { ColorsType } from '../../boot/stylesheetConfig';
import { styles } from './styles';

type Props = {
  onPress?: () => void;
  bordered?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  inverse?: boolean;
  small?: boolean;
  transparent?: boolean;
  danger?: boolean;
  style?: StyleProp<ViewStyle>;
  textColor?: ColorsType;
};

export function Btn({
  bordered,
  children,
  disabled,
  inverse,
  onPress,
  small,
  transparent,
  danger,
  style,
  textColor = '$white',
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        bordered && styles.btnBordered,
        disabled && styles.btnDisabled,
        inverse && styles.btnInverse,
        small && styles.btnSmall,
        transparent && styles.btnTransparent,
        danger && styles.btnDanger,
        style,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      {typeof children === 'string' ? (
        <Text
          color={bordered ? '$black' : textColor}
          size={small ? 'body1' : 'body2'}
          weight="bold"
          style={[styles.text, bordered && styles.textBordered, inverse && styles.textInverse]}
          numberOfLines={1}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}
