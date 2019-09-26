import React, { Component } from 'react';
import { NavigationScreenOptions, NavigationScreenProp, NavigationParams, DrawerActions } from 'react-navigation';

import { Home } from '../../screens';

type Props = {
  navigation: NavigationScreenProp<NavigationParams>;
};

export class HomeContainer extends Component<Props> {
  static navigationOptions: NavigationScreenOptions = {
    header: null,
  };

  render() {
    return <Home />;
  }
}
