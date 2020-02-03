import React, { Component } from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { Home } from './Home';

type Params = {};
type Props = {} & NavigationStackScreenProps<Params>;

export class HomeContainer extends Component<Props> {
  render() {
    return <Home />;
  }
}
