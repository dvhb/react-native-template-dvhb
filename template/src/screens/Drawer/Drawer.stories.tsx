import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { Drawer } from './Drawer';

storiesOf('Drawer', module).add('Drawer', () => <Drawer onRegister={action('drawer.onRegister')} />);
