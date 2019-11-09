import React, { Component } from 'react';
import { NavigationScreenOptions, NavigationScreenProp, NavigationParams } from 'react-navigation';

import { Home } from './Home';

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
