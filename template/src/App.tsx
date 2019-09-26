import React, { FunctionComponent, Component } from 'react';
import { Dimensions } from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import { HomeContainer, BootContainer, DrawerContainer } from './containers';

const appNavigator = createSwitchNavigator(
  {
    // boot: BootContainer,
    Root: createDrawerNavigator(
      {
        App: createStackNavigator({
          home: HomeContainer,
        }),
      },
      {
        contentComponent: DrawerContainer as FunctionComponent,
        overlayColor: 'rgba(0, 0, 0, 0.25)',
        drawerPosition: 'right',
        drawerWidth: Dimensions.get('screen').width * 0.8,
      },
    ),
  },
  {
    initialRouteName: 'boot',
  },
);

export class App extends Component {
  render() {
    const AppContainer = createAppContainer(appNavigator);
    return <AppContainer />;
  }
}
