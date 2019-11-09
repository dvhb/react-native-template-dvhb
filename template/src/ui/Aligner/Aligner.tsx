import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { Left } from './AlignerLeft';
import { Right } from './AlignerRight';
import { Center } from './AlignerCenter';

interface Props {
  valign?: 'center' | 'top' | 'baseline' | 'bottom';
  wrap?: boolean;
}

export class Aligner extends React.Component<Props> {
  static Left = Left;
  static Right = Right;
  static Center = Center;

  static defaultProps = {
    valign: 'center',
  };

  render() {
    const { children, valign, wrap, ...rest } = this.props;

    const additionalStyles = [];
    if (wrap) {
      additionalStyles.push(styles.aligner_wrap);
    }

    // @ts-ignore
    const valignStyles = styles[`aligner_${valign}`];

    return (
      <View style={[styles.aligner, valignStyles, ...additionalStyles]} {...rest}>
        {children}
      </View>
    );
  }
}
