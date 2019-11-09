import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

export class Left extends React.Component {
  render() {
    const { children } = this.props;

    return <View style={styles.alignerLeft}>{children}</View>;
  }
}
