import React, { FC } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TwilioVideoParticipantView } from 'react-native-twilio-video-webrtc';

import { Text } from '../../ui';

type Props = {
  storybook?: boolean;
  trackIdentifier?: {
    participantSid: string;
    videoTrackSid: string;
  };
};

export const TwilioVideoParticipant: FC<Props> = ({ storybook, trackIdentifier }) => {
  return !storybook && trackIdentifier ? (
    <TwilioVideoParticipantView style={styles.remoteVideo} trackIdentifier={trackIdentifier} />
  ) : (
    <View style={styles.remoteVideo}>
      <Text>fake participant video</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  remoteVideo: {
    width: '100%',
    height: '100%',
  },
});
