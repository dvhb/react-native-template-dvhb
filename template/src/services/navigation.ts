import { Dimensions } from 'react-native';
import { NavigationActions, NavigationContainerComponent, NavigationParams } from 'react-navigation';

class NavigationService {
  private navigator?: NavigationContainerComponent;

  init(navigatorRef: NavigationContainerComponent) {
    this.navigator = navigatorRef;
  }

  navigate(routeName: string, params: NavigationParams) {
    this.navigator && this.navigator.dispatch(NavigationActions.navigate({ routeName, params }));
  }
}

const navigationService = new NavigationService();

export { navigationService };
