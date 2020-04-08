import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Subscriber, Publisher } from '../../components';

type Props = {
  hasPermissions?: boolean;
  publisherStream?: string[];
  subscriberStream?: string[];
};

export class Red5Test1 extends React.Component<Props> {
  render() {
    const { publisherStream, subscriberStream, hasPermissions = true } = this.props;
    if (hasPermissions) {
      return publisherStream || subscriberStream ? (
        <View style={styles.container}>
          {subscriberStream &&
            subscriberStream.length > 0 &&
            subscriberStream.map((streamName, index) => <Subscriber key={index} streamName={streamName} />)}

          {publisherStream &&
            publisherStream.length > 0 &&
            publisherStream.map((streamName, index) => <Publisher key={index} streamName={streamName} />)}
        </View>
      ) : (
        <View style={styles.container}>
          <Publisher streamName="stream1" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {!hasPermissions && <Text style={{ color: 'white', backgroundColor: 'blue' }}>Waiting on permissions...</Text>}
      </View>
    );
  }
}
