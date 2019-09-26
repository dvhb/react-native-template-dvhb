import React, { Component, ReactNode } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import EStylesheet, { AnyObject } from 'react-native-extended-stylesheet';

type Props = {
  onPress?: () => void;
  children?: ReactNode;
  style?: AnyObject;
};

export class Btn extends Component<Props> {
  render() {
    const { onPress, style, children } = this.props;

    return (
      <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
        {typeof children === 'string' ? <Text style={styles.text}>{children}</Text> : children}
      </TouchableOpacity>
    );
  }
}

const styles = EStylesheet.create({
  btn: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
  },
});
