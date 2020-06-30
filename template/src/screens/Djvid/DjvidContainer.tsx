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

  _onConnect = (roomName: string, accessToken: string) => {
    try {
      this.twilioRef.connect({ roomName, accessToken });
      this.setState({ status: 'connecting' });
    } catch (error) {
      console.info(error);
    }
  };

  componentDidMount(): void {
    console.info(Config);
    fetch(`${Config.DJVID_API}/token?identity=${getUniqueIdentity()}&roomName=${Config.DJVID_ROOM}`).then(response => {
      const accessToken = response.text();
      if (accessToken) {
        this._onConnect(
          Config.DJVID_ROOM,
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2NhYzMwN2FmZjM1M2YyOTNiZmM4YmFmMDk1N2YxYjhjLTE1OTM1MjQyNTgiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJhc3UiLCJ2aWRlbyI6eyJyb29tIjoiZGp2aWQifX0sImlhdCI6MTU5MzUyNDI1OCwiZXhwIjoxNTkzNTM4NjU4LCJpc3MiOiJTS2NhYzMwN2FmZjM1M2YyOTNiZmM4YmFmMDk1N2YxYjhjIiwic3ViIjoiQUM4NjNkNmNiNmIxMTJjNWI1Y2M0Y2Y5MjNjOTM5MzFhNiJ9.QCDvJI9aSseowPaVqVszccwcOBEk82pQMRuK1xrpcuY',
        );
      }
    });
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
