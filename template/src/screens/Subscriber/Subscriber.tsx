// tslint:disable:max-file-line-count
// @ts-nocheck
import React from 'react';
import { AppState, findNodeHandle, Button, Image, StyleSheet, Text, View } from 'react-native';
import {
  R5VideoView,
  R5ScaleMode,
  subscribe,
  unsubscribe,
  updateScaleMode,
  setPlaybackVolume,
} from 'react-native-red5pro';

const isValidStatusMessage = (value: any) => {
  return value && typeof value !== 'undefined' && value !== 'undefined' && value !== 'null';
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  videoView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  button: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 40,
    backgroundColor: 'blue',
    color: 'white',
  },
  toast: {
    color: 'white',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 1.0)',
  },
  muteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 6,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 26,
    backgroundColor: 'white',
  },
  muteIconToggled: {
    backgroundColor: '#2089dc',
  },
});

export class Subscriber extends React.Component<any, any> {
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

    this.state = {
      appState: AppState.currentState,
      scaleMode: R5ScaleMode.SCALE_TO_FILL,
      audioMuted: false,
      isInErrorState: false,
      isConnecting: false,
      isDisconnected: true,
      buttonProps: {
        style: styles.button,
      },
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

  componentWillMount() {
    console.info('Subscriber:componentWillMount()');
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    console.info('Subscriber:componentWillUnmount()');
    this.stopRetry();
    AppState.removeEventListener('change', this._handleAppStateChange);
    this.doUnsubscribe();
  }

  _handleAppStateChange = (nextAppState: any) => {
    console.info(`Subscriber:AppState - ${nextAppState}`);
    const {
      streamProps: { enableBackgroundStreaming },
    } = this.props;
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.info('Subscriber:AppState - App has come to the foreground.');
    } else if (nextAppState === 'inactive') {
      console.info('Subscriber:AppState - App has gone to the background.');
      if (!enableBackgroundStreaming) {
        console.info('Subscriber:AppState - unpublish()');
        this.doUnsubscribe();
      }
    }
    this.setState({
      appState: nextAppState,
    });
  };

  render() {
    const { videoProps, toastProps, buttonProps, audioMuted, isDisconnected } = this.state;

    const { onStop, streamProps } = this.props;

    const setup = Object.assign({}, streamProps, videoProps);

    const displayVideo = setup.subscribeVideo;

    const audioIconColor = audioMuted ? '#fff' : '#000';
    const audioIconStyle = audioMuted ? [styles.muteIcon, styles.muteIconToggled] : styles.muteIcon;

    const assignVideoRef = (video: any) => {
      this.red5proVideoSubscriber = video;
    };
    const assignToastRef = (toast: any) => {
      this.toastField = toast;
    };

    return (
      <View style={styles.container}>
        {/* tslint:disable-next-line:jsx-no-bind */}
        <R5VideoView {...setup} ref={assignVideoRef.bind(this)} />
        {!displayVideo && (
          <View style={styles.imageContainer}>
            <Image
              style={{ width: 69, height: 68 }}
              source={{ uri: 'https://www.red5pro.com/images/red5pro_icon1.png' }}
            />
          </View>
        )}
        {/*<Icon*/}
        {/*  name={audioMuted ? 'md-volume-off' : 'md-volume-high'}*/}
        {/*  type="ionicon"*/}
        {/*  size={26}*/}
        {/*  color={audioIconColor}*/}
        {/*  hitSlop={{ left: 10, top: 10, right: 10, bottom: 10 }}*/}
        {/*  onPress={this.onToggleAudioMute}*/}
        {/*  containerStyle={audioIconStyle}*/}
        {/*/>*/}
        {/* tslint:disable-next-line:jsx-no-bind */}
        <Text ref={assignToastRef.bind(this)} {...toastProps}>
          {toastProps.value}
        </Text>
        {isDisconnected && (
          <Button {...buttonProps} onPress={this.startRetry} title="Resubscribe" accessibilityLabel="Resubscribe" />
        )}
        <Button {...buttonProps} onPress={onStop} title="Stop" accessibilityLabel="Stop" />
        <Button {...buttonProps} onPress={this.onScaleMode} title="Swap Scale" accessibilityLabel="Swap Scale" />
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
    const {
      streamProps: {
        configuration: { streamName },
      },
    } = this.props;
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
    const {
      streamProps: {
        configuration: { streamName },
      },
    } = this.props;

    console.info(`attempting retry for stream name :: ${streamName}`);
    subscribe(findNodeHandle(this.red5proVideoSubscriber), streamName);
  }
}
