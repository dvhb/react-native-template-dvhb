// tslint:disable:max-file-line-count
// @ts-nocheck
import React from 'react';
import { AppState, findNodeHandle, Text, View } from 'react-native';
import {
  R5VideoView,
  R5ScaleMode,
  subscribe,
  unsubscribe,
  updateScaleMode,
  setPlaybackVolume,
} from 'react-native-red5pro';

import { styles } from './styles';
import { streamConfig } from '../../../services/red5pro';
import { Btn } from '../../../ui';

const isValidStatusMessage = (value: any) => {
  return value && typeof value !== 'undefined' && value !== 'undefined' && value !== 'null';
};

type Props = {
  streamName: string;
};

type State = {};

export class Subscriber extends React.Component<Props, State> {
  private red5proVideoSubscriber: any;
  private toastField: any;
  private retryTimer: any;
  constructor(props: any) {
    super(props);

    // Events.
    this.onMetaData = this.onMetaData.bind(this);
    this.onConfigured = this.onConfigured.bind(this);
    this.onSubscriberStreamStatus = this.onSubscriberStreamStatus.bind(this);
    this.onUnsubscribeNotification = this.onUnsubscribeNotification.bind(this);

    this.onScaleMode = this.onScaleMode.bind(this);
    this.onToggleAudioMute = this.onToggleAudioMute.bind(this);

    this.doSubscribe = this.doSubscribe.bind(this);
    this.doUnsubscribe = this.doUnsubscribe.bind(this);
    this.retry = this.retry.bind(this);
    this.startRetry = this.startRetry.bind(this);
    this.stopRetry = this.stopRetry.bind(this);

    this.assignVideoRef = this.assignVideoRef.bind(this);
    this.assignToastRef = this.assignToastRef.bind(this);

    this.state = {
      appState: AppState.currentState,
      scaleMode: R5ScaleMode.SCALE_TO_FILL,
      audioMuted: false,
      isInErrorState: false,
      isConnecting: false,
      isDisconnected: true,
      toastProps: {
        style: styles.toast,
        value: 'waiting...',
      },
      videoProps: {
        style: styles.videoView,
        onMetaData: this.onMetaData,
        onConfigured: this.onConfigured,
        onSubscriberStreamStatus: this.onSubscriberStreamStatus,
        onUnSubscribeNotification: this.onUnsubscribeNotification,
      },
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    this.stopRetry();
    AppState.removeEventListener('change', this._handleAppStateChange);
    this.doUnsubscribe();
  }

  _handleAppStateChange = (nextAppState: any) => {
    console.info(`Subscriber:AppState - ${nextAppState}`);
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.info('Subscriber:AppState - App has come to the foreground.');
    } else if (nextAppState === 'inactive') {
      console.info('Subscriber:AppState - App has gone to the background.');
      // if (!enableBackgroundStreaming) {
      console.info('Subscriber:AppState - unpublish()');
      this.doUnsubscribe();
      // }
    }
    this.setState({
      appState: nextAppState,
    });
  };

  assignVideoRef(video) {
    this.red5pro_video_publisher = video;
  }
  assignToastRef(toast) {
    this.toast_field = toast;
  }

  render() {
    const { videoProps, toastProps, isDisconnected } = this.state;
    const { streamName, actions } = this.props;
    const setup = Object.assign({}, streamConfig(streamName), videoProps);

    return (
      <View style={styles.container}>
        <R5VideoView {...setup} ref={this.assignVideoRef} />
        {actions && (
          <View style={styles.buttonContainer}>
            <Text ref={this.assignToastRef} {...toastProps}>
              {toastProps.value}
            </Text>
            {isDisconnected && (
              <Btn onPress={this.startRetry} small bordered>
                Resubscribe
              </Btn>
            )}
          </View>
        )}
      </View>
    );
  }

  onMetaData(event: any) {
    console.info(`Subscriber:onMetadata :: ${event.nativeEvent.metadata}`);
  }

  onConfigured(event: any) {
    console.info(`Subscriber:onConfigured :: ${event.nativeEvent.key}`);
    this.doSubscribe();
  }

  onSubscriberStreamStatus(event: any) {
    console.info(`Subscriber:onSubscriberStreamStatus :: ${JSON.stringify(event.nativeEvent.status, null, 2)}`);
    const status = event.nativeEvent.status;
    const message = isValidStatusMessage(status.message) ? status.message : status.name;
    if (status.name.toLowerCase() === 'error' || message.toLowerCase() === 'disconnected') {
      this.doUnsubscribe();
      this.setState({
        isDisconnected: true,
        isConnecting: false,
      });
    } else if (message.toLowerCase() === 'connected') {
      this.setState({
        isDisconnected: false,
        isConnecting: false,
      });
    }
    if (!this.state.inErrorState) {
      this.setState({
        toastProps: { ...this.state.toastProps, value: message },
        isInErrorState: status.code === 2,
      });
    }
  }

  onUnsubscribeNotification(event: any) {
    console.info(`Subscriber:onUnsubscribeNotification:: ${JSON.stringify(event.nativeEvent.status, null, 2)}`);
    this.setState({
      isInErrorState: false,
      toastProps: { ...this.state.toastProps, value: 'waiting...' },
    });
  }

  onScaleMode() {
    console.info('Subscriber:onScaleMode()');
    const { scaleMode } = this.state;
    let scale = scaleMode + 1;
    if (scale > 2) {
      scale = 0;
    }
    updateScaleMode(findNodeHandle(this.red5proVideoSubscriber), scale);
    this.setState({
      scaleMode: scale,
    });
  }

  onToggleAudioMute() {
    console.info('Subscriber:onToggleAudioMute()');
    const { audioMuted } = this.state;
    if (audioMuted) {
      setPlaybackVolume(findNodeHandle(this.red5proVideoSubscriber), 100);
    } else {
      setPlaybackVolume(findNodeHandle(this.red5proVideoSubscriber), 0);
    }
    this.setState({
      audioMuted: !audioMuted,
    });
  }

  doSubscribe() {
    const { streamName } = this.props;
    const nodeHandle = findNodeHandle(this.red5proVideoSubscriber);
    if (nodeHandle) {
      subscribe(findNodeHandle(this.red5proVideoSubscriber), streamName);
      setPlaybackVolume(findNodeHandle(this.red5proVideoSubscriber), 100);
    }
  }

  doUnsubscribe() {
    const nodeHandle = findNodeHandle(this.red5proVideoSubscriber);
    if (nodeHandle) {
      unsubscribe(nodeHandle);
    }
  }

  startRetry() {
    this.stopRetry();
    this.retryTimer = setTimeout(() => {
      this.retry();
    }, 1000);
  }

  stopRetry() {
    clearTimeout(this.retryTimer);
  }

  retry() {
    const { streamName } = this.props;

    console.info(`attempting retry for stream name :: ${streamName}`);
    subscribe(findNodeHandle(this.red5proVideoSubscriber), streamName);
  }
}
