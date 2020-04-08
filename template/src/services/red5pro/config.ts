import Config from 'react-native-config';
// @ts-ignore
import { R5LogLevel } from 'react-native-red5pro';

export const streamConfig = (streamName = 'stream1') => ({
  collapsable: false,
  configuration: {
    streamName,
    host: Config.RED5PRO_HOST,
    licenseKey: Config.RED5PRO_LICENSE,
    port: 8554,
    contextName: 'live',
    bufferTime: 0.5,
    streamBufferTime: 2.0,
    bundleID: 'com.dvhbapp',
    parameters: '',
    key: Math.floor(Math.random() * 0x10000).toString(16),
  },
  subscribeVideo: true,
  showDebugView: true,
  logLevel: R5LogLevel.DEBUG,
  useBackfacingCamera: false,
  enableBackgroundStreaming: true,
});
