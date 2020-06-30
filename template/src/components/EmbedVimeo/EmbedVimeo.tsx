import React, { FC } from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';

export type EmbedVimeoProps = {
  streamId: string;
};

export const EmbedVimeo: FC<EmbedVimeoProps> = ({ streamId }) => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: `https://player.vimeo.com/video/${streamId}?autoplay=1&playsinline=1&controls=0` }}
        allowsInlineMediaPlayback
      />
    </View>
  );
};
