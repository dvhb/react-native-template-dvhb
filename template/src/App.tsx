import React, { FunctionComponent, Component } from 'react';
import { Dimensions } from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  NavigationContainerComponent,
} from 'react-navigation';

import { HomeContainer, DrawerContainer } from './screens';
import { navigationService } from './services/navigation';

const appNavigator = createSwitchNavigator(
  {
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
    initialRouteName: 'Root',
  },
);

export class App extends Component {
  getRef = (navigatorRef: NavigationContainerComponent) => {
    navigationService.init(navigatorRef);
  };
  render() {
    const AppContainer = createAppContainer(appNavigator);
    return <AppContainer ref={this.getRef} />;
  }
}
