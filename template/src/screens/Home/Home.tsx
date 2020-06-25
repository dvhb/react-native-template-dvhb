import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, TouchableOpacity } from 'react-native';
import { TwilioVideoLocalView, TwilioVideoParticipantView, TwilioVideo } from 'react-native-twilio-video-webrtc';

import { Text, Input, Btn, Aligner, Spacer } from '../../ui';

type Props = {};
type State = {
  isAudioEnabled: boolean;
  isVideoEnabled: boolean;
  status: string;
  participants: Map<any, any>;
  videoTracks: Map<any, any>;
  roomName: string;
  token: string;
};

export class Home extends Component<Props, State> {
  private twilioRef: any;

  state = {
    isAudioEnabled: true,
    isVideoEnabled: true,
    status: 'disconnected',
    participants: new Map(),
    videoTracks: new Map(),
    roomName: '',
    token: '',
  };

  _onConnectButtonPress = () => {
    try {
      this.twilioRef.connect({
        roomName: this.state.roomName,
        accessToken: this.state.token,
      });
    } catch (error) {
      console.info(error);
    }

    this.setState({ status: 'connecting' });
  };

  _onEndButtonPress = () => {
    this.twilioRef.disconnect();
  };

  _onMuteButtonPress = () => {
    this.twilioRef
      .setLocalAudioEnabled(!this.state.isAudioEnabled)
      .then((isEnabled: any) => this.setState({ isAudioEnabled: isEnabled }));
  };

  _onFlipButtonPress = () => {
    this.twilioRef.flipCamera();
  };

  _onRoomDidConnect = () => {
    this.setState({ status: 'connected' });
  };

  _onRoomDidDisconnect = ({ error }: { error: any }) => {
    console.info('ERROR: ', error);
    this.setState({ status: 'disconnected' });
  };

  _onRoomDidFailToConnect = ({ error }: { error: any }) => {
    console.info('ERROR: ', error);
    this.setState({ status: 'disconnected' });
  };

  _onParticipantAddedVideoTrack = ({ participant, track }: { participant: any; track: any }) => {
    console.info('onParticipantAddedVideoTrack: ', participant, track);

    this.setState({
      videoTracks: new Map([
        ...this.state.videoTracks,
        [track.trackSid, { participantSid: participant.sid, videoTrackSid: track.trackSid }],
      ]),
    });
  };

  _onParticipantRemovedVideoTrack = ({ participant, track }: { participant: any; track: any }) => {
    console.info('onParticipantRemovedVideoTrack: ', participant, track);

    const videoTracks = this.state.videoTracks;
    videoTracks.delete(track.trackSid);

    this.setState({ videoTracks: new Map([...videoTracks]) });
  };

  _onChangeRoom = () => (roomName: string) => {
    this.setState({ roomName });
  };

  _onChangeToken = () => (token: string) => {
    this.setState({ token });
  };

  setTwilioRef = (ref: any) => {
    this.twilioRef = ref;
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.status === 'disconnected' && (
          <Aligner.Center>
            <Spacer margin="lg">
              <Text size="large">Twilio Webrtc</Text>
            </Spacer>
            <Spacer>
              <Input placeholder="room" onChange={this._onChangeRoom} value={this.state.roomName} />
            </Spacer>
            <Spacer>
              <Input placeholder="access token" onChange={this._onChangeToken} value={this.state.token} />
            </Spacer>
            <Btn onPress={this._onConnectButtonPress}>Connect</Btn>
          </Aligner.Center>
        )}

        {this.state.status === 'connected' || this.state.status === 'connecting' ? (
          <View style={styles.callContainer}>
            {this.state.status === 'connected' && (
              <View style={styles.remoteGrid}>
                {Array.from(this.state.videoTracks, ([trackSid, trackIdentifier]) => {
                  return (
                    <TwilioVideoParticipantView
                      style={styles.remoteVideo}
                      key={trackSid}
                      trackIdentifier={trackIdentifier}
                    />
                  );
                })}
              </View>
            )}
            <View style={styles.optionsContainer}>
              <TouchableOpacity style={styles.optionButton} onPress={this._onEndButtonPress}>
                <Text color="$black">End</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton} onPress={this._onMuteButtonPress}>
                <Text color="$black">{this.state.isAudioEnabled ? 'Mute' : 'Unmute'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton} onPress={this._onFlipButtonPress}>
                <Text color="$black">Flip</Text>
              </TouchableOpacity>
              <TwilioVideoLocalView enabled style={styles.localVideo} />
              <View />
            </View>
          </View>
        ) : null}

        <TwilioVideo
          ref={this.setTwilioRef}
          onRoomDidConnect={this._onRoomDidConnect}
          onRoomDidDisconnect={this._onRoomDidDisconnect}
          onRoomDidFailToConnect={this._onRoomDidFailToConnect}
          onParticipantAddedVideoTrack={this._onParticipantAddedVideoTrack}
          onParticipantRemovedVideoTrack={this._onParticipantRemovedVideoTrack}
        />
      </View>
    );
  }
}

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
  remoteGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  remoteVideo: {
    width: '100%',
    height: '100%',
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
