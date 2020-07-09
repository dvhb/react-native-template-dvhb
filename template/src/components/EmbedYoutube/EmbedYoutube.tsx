import React, { FC } from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';

export type EmbedYoutubeProps = {
  streamId: string;
};

export const EmbedYoutube: FC<EmbedYoutubeProps> = ({ streamId }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <WebView
        style={{ flex: 1, backgroundColor: 'transparent' }}
        source={{
          uri: `https://www.youtube.com/embed/${streamId}?rel=0&showinfo=0&autoplay=1&modestbranding=1&controls=0&playsinline=1`,
        }}
        allowsInlineMediaPlayback
      />
    </View>
  );
};
