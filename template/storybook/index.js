import React from 'react';
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import SplashScreen from 'react-native-splash-screen';

import { loadStories } from './storyLoader';
import './rn-addons';
import { stylesheetConfig } from '../src/boot/stylesheetConfig';

// import stories
configure(() => loadStories(), module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUI = getStorybookUI({});

export class StorybookUIRoot extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <StorybookUI />;
  }
}

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('DvhbApp', () => StorybookUIRoot);

EStyleSheet.build(stylesheetConfig);

export default StorybookUIRoot;
