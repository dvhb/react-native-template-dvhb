import React, { Component } from 'react';
import { createAppContainer, NavigationContainerComponent } from 'react-navigation';

import { navigationService } from './services/navigation';
import { navigationWithDrawer } from './navigation';

export class App extends Component {
  getRef = (navigatorRef: NavigationContainerComponent) => {
    navigationService.init(navigatorRef);
  };

  render() {
    const Navigator = navigationWithDrawer({ initialRouteName: 'Root' });
    const App = createAppContainer(Navigator);
    return <App ref={this.getRef} />;
  }
}
