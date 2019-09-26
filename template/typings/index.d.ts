declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';
  const content: React.StatelessComponent<SvgProps>;
  export default content;
}

declare module 'react-native-config' {
  export interface NativeConfig {
    GOOGLE_MAPS_SDK_IOS_API_KEY: string;
    [name: string]: any;
  }
  export const Config: NativeConfig;
  export default Config;
}

declare module '@storybook/client-api' {
  export interface ClientApi {}
  export interface StoryStore {}
}
