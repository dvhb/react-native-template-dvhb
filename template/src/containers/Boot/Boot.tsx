import React, { Component } from 'react';
import { NavigationScreenProp, NavigationParams, NavigationScreenOptions } from 'react-navigation';

import { Boot } from '../../screens';

type Props = {
  navigation: NavigationScreenProp<NavigationParams>;
};

export class BootContainer extends Component<Props> {
  static navigationOptions: NavigationScreenOptions = {
    header: null,
  };

  async componentDidMount() {
    this.props.navigation.navigate('home');
  }

  render() {
    return <Boot />;
  }
}
