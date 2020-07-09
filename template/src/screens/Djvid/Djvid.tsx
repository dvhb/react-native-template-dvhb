import React, { FC } from 'react';

import { Text, Aligner } from '../../ui';
import { TwilioVideoParticipant, TwilioVideoLocal, EmbedVimeo, EmbedYoutube, EmbedTwitch } from '../../components';
import { useDjvidLive } from '../../hooks';
import { Layout } from '../../components/Layout';

export type DjvidProps = {
  status?: string;
  videoTracks?: Map<any, any>;
  onButtonFlipPress?: () => void;
  storybook?: boolean;
};

export const Djvid: FC<DjvidProps> = ({ storybook = false, status, videoTracks, onButtonFlipPress }) => {
  const live = useDjvidLive();
  const djView = live?.streamId ? (
    <>
      {live?.streamType === 'vimeo' && <EmbedVimeo streamId={live.streamId} />}
      {live?.streamType === 'youtube' && <EmbedYoutube streamId={live.streamId} />}
      {live?.streamType === 'twitch' && <EmbedTwitch streamId={live.streamId} />}
    </>
  ) : (
    undefined
  );

  const otherViews = videoTracks
    ? Array.from(videoTracks, ([trackSid, trackIdentifier]) => (
        <TwilioVideoParticipant storybook={storybook} key={trackSid} trackIdentifier={trackIdentifier} />
      ))
    : [];

  return (
    <>
      <Layout djView={djView} otherViews={otherViews} localView={<TwilioVideoLocal storybook={storybook} />} />
      {status === 'disconnected' && (
        <Aligner.Center>
          <Text>disconnected</Text>
        </Aligner.Center>
      )}
    </>
  );
};
