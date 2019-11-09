import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

export class Right extends React.Component {
  render() {
    const { children } = this.props;

    return <View style={styles.alignerRight}>{children}</View>;
  }
}
