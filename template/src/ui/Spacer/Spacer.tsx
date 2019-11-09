import React from 'react';
import { View, StyleSheet } from 'react-native';

import { styles } from './styles';

export interface SpacerProps {
  margin: 'none' | 'default' | 'xxs' | 'xs' | 'sm' | 'lg';
  marginRight?: 'none' | 'default' | 'xxs' | 'xs' | 'sm' | 'lg';
  customMargin?: number;
  customMarginRight?: number;
}

export class Spacer extends React.Component<SpacerProps> {
  static defaultProps = { margin: 'default', marginRight: 'none' };

  render() {
    const { margin, marginRight, customMargin, customMarginRight, children, ...rest } = this.props;
    let customMarginStyle = null;
    let customMarginRightStyle = null;

    // @ts-ignore
    const marginStyle = styles[`spacer_${margin}`];
    // @ts-ignore
    const marginRightStyle = styles[`spacerInline_${marginRight}`];

    if (customMargin) {
      customMarginStyle = StyleSheet.create({
        margin: {
          marginBottom: customMargin,
        },
      });
    }

    if (customMarginRight) {
      customMarginRightStyle = StyleSheet.create({
        margin: {
          marginRight: customMarginRight,
        },
      });
    }

    return (
      <View
        style={[
          marginStyle,
          marginRightStyle,
          customMarginStyle && customMarginStyle.margin,
          customMarginRightStyle && customMarginRightStyle.margin,
        ]}
        {...rest}
      >
        {children}
      </View>
    );
  }
}
