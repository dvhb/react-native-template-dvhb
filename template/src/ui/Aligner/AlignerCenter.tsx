import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

export class Center extends React.Component {
  render() {
    const { children } = this.props;

    return <View style={styles.alignerCenter}>{children}</View>;
  }
}
