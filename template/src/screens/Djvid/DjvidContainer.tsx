import React, { Component } from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { TwilioVideo } from 'react-native-twilio-video-webrtc';
import Config from 'react-native-config';

import { Djvid } from './Djvid';
import { getUniqueIdentity } from '../../utils';

type Params = {};
type Props = {} & NavigationStackScreenProps<Params>;

export class DjvidContainer extends Component<Props> {
  private twilioRef: any;

  state = {
    status: 'disconnected',
    participants: new Map(),
    videoTracks: new Map(),
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

  setTwilioRef = (ref: any) => {
    this.twilioRef = ref;
  };

  componentDidMount(): void {
    fetch(`${Config.DJVID_API}/token?identity=${getUniqueIdentity()}&roomName=${Config.DJVID_ROOM}`).then(
      async response => {
        const accessToken = await response.text();
        if (accessToken) {
          try {
            this.twilioRef.connect({ accessToken, roomName: Config.DJVID_ROOM });
            this.setState({ status: 'connecting' });
          } catch (error) {
            console.info(error);
          }
        }
      },
    );
  }

  render() {
    const { status, videoTracks } = this.state;
    return (
      <>
        <Djvid status={status} onButtonFlipPress={this._onFlipButtonPress} videoTracks={videoTracks} />
        <TwilioVideo
          ref={this.setTwilioRef}
          onRoomDidConnect={this._onRoomDidConnect}
          onRoomDidDisconnect={this._onRoomDidDisconnect}
          onRoomDidFailToConnect={this._onRoomDidFailToConnect}
          onParticipantAddedVideoTrack={this._onParticipantAddedVideoTrack}
          onParticipantRemovedVideoTrack={this._onParticipantRemovedVideoTrack}
        />
      </>
    );
  }
}
