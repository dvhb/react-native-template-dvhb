import React, { ReactNode, Component } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

import { styles } from './styles';

type Props = {
  children: ReactNode;
  topRadius?: boolean;
  bottomRadius?: boolean;
  style?: ViewStyle;
  withBorderBottom?: boolean;
} & ViewProps;

type PropsItem = {
  children: ReactNode;
  style?: ViewStyle;
  withBorderTop?: boolean;
} & ViewProps;

const PanelItem = ({ children, style, ...rest }: PropsItem) => (
  <View {...rest} style={[styles.panel__item, style]}>
    {children}
  </View>
);

export class Panel extends Component<Props> {
  static Item = PanelItem;

  renderChildren(child: any, index: number) {
    const withBorderTop = child.props.withBorderTop;
    return React.cloneElement(child, {
      style: [index !== 0 || withBorderTop ? styles.panel__item_withBorder : null, child.props.style],
    });
  }

  render() {
    const { children, topRadius, style, withBorderBottom, bottomRadius, ...rest } = this.props;
    return (
      <View
        style={[
          styles.panel,
          topRadius && styles.panel_topRadius,
          withBorderBottom && styles.panel_borderBottom,
          bottomRadius && styles.panel_bottomRadius,
          style,
        ]}
        {...rest}
      >
        {React.Children.map(children, (child, index) => this.renderChildren(child, index))}
      </View>
    );
  }
}
