// @ts-nocheck
import React from 'react';
import { AppState, findNodeHandle, SafeAreaView, Text, View } from 'react-native';
import { R5VideoView, publish, unpublish, swapCamera } from 'react-native-red5pro';

import { styles } from './styles';
import { streamConfig } from '../../../services/red5pro';
import { Btn } from '../../../ui/Btn';

const isValidStatusMessage = value => {
  return value && typeof value !== 'undefined' && value !== 'undefined' && value !== 'null';
};

type Props = {
  streamName: string;
};

type State = {};

export class Publisher extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // Events.
    this.onMetaData = this.onMetaData.bind(this);
    this.onConfigured = this.onConfigured.bind(this);
    this.onPublisherStreamStatus = this.onPublisherStreamStatus.bind(this);
    this.onUnpublishNotification = this.onUnpublishNotification.bind(this);
    this.assignVideoRef = this.assignVideoRef.bind(this);
    this.assignToastRef = this.assignToastRef.bind(this);

    this.onSwapCamera = this.onSwapCamera.bind(this);

    this.state = {
      appState: AppState.currentState,
      isInErrorState: false,
      toastProps: {
        style: styles.toast,
        value: 'waiting...',
      },
      videoProps: {
        style: styles.videoView,
        onMetaData: this.onMetaData,
        onConfigured: this.onConfigured,
        onPublisherStreamStatus: this.onPublisherStreamStatus,
        onUnpublishNotification: this.onUnpublishNotification,
      },
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
    const nodeHandle = findNodeHandle(this.red5pro_video_publisher);
    const { streamName } = this.props;
    if (nodeHandle) {
      unpublish(nodeHandle, streamName);
    }
  }

  _handleAppStateChange = nextAppState => {
    console.info(`Publisher:AppState - ${nextAppState}`);
    // const nodeHandle = findNodeHandle(this.red5pro_video_publisher);
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.info('Publisher:AppState - App has come to the foreground.');
    } else if (nextAppState.match(/inactive|background/) && this.state.appState === 'active') {
      console.info('Publisher:AppState - App has gone to the background.');
      // if (!enableBackgroundStreaming) {
      console.info('Publisher:AppState - unpublish()');
      // unpublish(nodeHandle);
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

  onMetaData(event) {
    console.info(`Publisher:onMetadata :: ${event.nativeEvent.metadata}`);
  }

  onConfigured(event) {
    const { streamName } = this.props;

    console.info(`Publisher:onConfigured :: ${event.nativeEvent.key}`);
    publish(findNodeHandle(this.red5pro_video_publisher), streamName);
  }

  onPublisherStreamStatus(event) {
    console.info(`Publisher:onPublisherStreamStatus :: ${JSON.stringify(event.nativeEvent.status, null, 2)}`);
    const status = event.nativeEvent.status;
    const message = isValidStatusMessage(status.message) ? status.message : status.name;
    if (!this.state.inErrorState) {
      this.setState({
        toastProps: { ...this.state.toastProps, value: message },
        isInErrorState: status.code === 2,
      });
    }
  }

  onUnpublishNotification(event) {
    console.info(`Publisher:onUnpublishNotification:: ${JSON.stringify(event.nativeEvent.status, null, 2)}`);
    this.setState({
      isInErrorState: false,
      toastProps: { ...this.state.toastProps, value: 'Unpublished' },
    });
  }

  onSwapCamera() {
    console.info('Publisher:onSwapCamera()');
    swapCamera(findNodeHandle(this.red5pro_video_publisher));
  }

  render() {
    const { videoProps, toastProps } = this.state;
    const { streamName, actions } = this.props;
    const setup = Object.assign({}, streamConfig(streamName), videoProps);

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.subcontainer}>
          <R5VideoView {...setup} ref={this.assignVideoRef} style={styles.container} />
          {actions && (
            <View style={styles.buttonContainer}>
              <Text ref={this.assignToastRef} {...toastProps}>
                {toastProps.value}
              </Text>
              <Btn onPress={this.onSwapCamera} small bordered>
                Swap Camera
              </Btn>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}
