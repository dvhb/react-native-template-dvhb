import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { Home } from './Home';

storiesOf('Home', module).add('Home', () => <Home onMenuPress={action('Home.menuPress')} />);
