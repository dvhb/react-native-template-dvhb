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
    <TwilioVideoLocalView enabled style={styles.localVideo} />
  ) : (
    <View style={styles.remoteVideo}>
      <Text>fake local video</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  localVideo: {
    flex: 1,
    width: 125,
    height: 200,
    position: 'absolute',
    right: 0,
    bottom: 400,
    borderRadius: 2,
    borderColor: '#4e4e4e',
  },
});
