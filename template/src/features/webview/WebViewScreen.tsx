import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

type Props = {};

export class WebViewScreen extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView source={{ uri: 'https://dvhb.com' }} />
      </View>
    );
  }
}
