import React, { FC } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TwilioVideoLocalView } from 'react-native-twilio-video-webrtc';

import { Text } from '../../ui';

type Props = {
  storybook?: boolean;
};

export const TwilioVideoLocal: FC<Props> = ({ storybook }) => {
  return !storybook ? (
    <TwilioVideoLocalView enabled style={styles.container} />
  ) : (
    <View style={styles.container}>
      <Text>fake local video</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
