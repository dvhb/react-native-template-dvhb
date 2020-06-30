import React, { FC } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, TouchableOpacity } from 'react-native';

import { Text, Aligner } from '../../ui';
import { TwilioVideoParticipant, TwilioVideoLocal } from '../../components';

export type DjvidProps = {
  status?: string;
  videoTracks?: Map<any, any>;
  onButtonFlipPress?: () => void;
  storybook?: boolean;
};

export const Djvid: FC<DjvidProps> = ({ storybook = false, status, videoTracks, onButtonFlipPress }) => {
  return (
    <View style={styles.container}>
      {status === 'disconnected' && (
        <Aligner.Center>
          <Text>disconnected</Text>
        </Aligner.Center>
      )}

      {status === 'connected' || status === 'connecting' ? (
        <View style={styles.callContainer}>
          {status === 'connected' && (
            <View style={styles.remoteGrid}>
              {videoTracks
                ? Array.from(videoTracks, ([trackSid, trackIdentifier]) => (
                    <TwilioVideoParticipant storybook={storybook} key={trackSid} trackIdentifier={trackIdentifier} />
                  ))
                : null}
            </View>
          )}
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionButton} onPress={onButtonFlipPress}>
              <Text color="$black">Flip</Text>
            </TouchableOpacity>
            <TwilioVideoLocal storybook={storybook} />
            <View />
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$white',
  },
  callContainer: {
    backgroundColor: '$black',
    flex: 1,
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  remoteGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  optionsContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionButton: {
    width: 60,
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 100 / 2,
    backgroundColor: '$white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
