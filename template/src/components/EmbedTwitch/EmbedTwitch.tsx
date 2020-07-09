import React, { FC } from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';

export type EmbedTwitchProps = {
  streamId: string;
};

export const EmbedTwitch: FC<EmbedTwitchProps> = ({ streamId }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <WebView
        style={{ flex: 1, backgroundColor: 'transparent' }}
        source={{
          uri: `https://player.twitch.tv/?channel=${streamId}&parent=djvid.club&autoplay=true`,
        }}
        allowsInlineMediaPlayback
      />
    </View>
  );
};
