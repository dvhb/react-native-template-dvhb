export type DjvidLive = {
  master?: Identity;
  slave?: Identity;
  selected?: string[];
  streamId?: Identity;
  streamType?: StreamType;
};

export type StreamType = 'youtube' | 'vimeo' | 'twitch';

export type Identity = string | null;
