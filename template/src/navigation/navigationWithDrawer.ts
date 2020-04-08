import { FunctionComponent } from 'react';
import { Dimensions } from 'react-native';
import {
  CreateNavigatorConfig,
  createSwitchNavigator,
  NavigationSwitchProp,
  NavigationSwitchRouterConfig,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { DrawerContainer, Red5Test1Container } from '../screens';

export const navigationWithDrawer = (
  config: CreateNavigatorConfig<{}, NavigationSwitchRouterConfig, {}, NavigationSwitchProp>,
) =>
  createSwitchNavigator(
    {
      Root: createDrawerNavigator(
        {
          App: createStackNavigator(
            {
              red5test1: Red5Test1Container,
            },
            { headerMode: 'none' },
          ),
        },
        {
          contentComponent: (DrawerContainer as unknown) as FunctionComponent,
          overlayColor: 'rgba(0, 0, 0, 0.25)',
          drawerPosition: 'right',
          drawerWidth: Dimensions.get('screen').width * 0.8,
        },
      ),
    },
    config,
  );
