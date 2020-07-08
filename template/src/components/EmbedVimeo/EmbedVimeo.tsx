import React, { FC, useCallback, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import WebView from 'react-native-webview';

export type EmbedVimeoProps = {
  streamId: string;
};

const injectedJavaScript = `
  var css = document.createElement('style');
  css.type = 'text/css';
  // doesn't works
  var styles = '#player { height: 100% !important; max-width: none !important; }';

  if (css.styleSheet) {
    css.styleSheet.cssText = styles;
  } else {
    css.appendChild(document.createTextNode(styles));
  };

  document.getElementsByTagName("head")[0].appendChild(css);
  
  true; // note: this is required, or you'll sometimes get silent failures
`;

/**
 * @see https://github.com/react-native-community/react-native-webview/issues/318
 */
export const EmbedVimeo: FC<EmbedVimeoProps> = ({ streamId }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <WebView
        style={{ flex: 1, backgroundColor: 'transparent' }}
        source={{ uri: `https://player.vimeo.com/video/${streamId}?autoplay=1&playsinline=1&controls=0` }}
        allowsInlineMediaPlayback
        injectedJavaScript={injectedJavaScript}
      />
    </View>
  );
};
