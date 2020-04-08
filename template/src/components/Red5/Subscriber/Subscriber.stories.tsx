import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Subscriber } from './Subscriber';

storiesOf('Subscriber', module).add('default', () => <Subscriber streamName="stream1" />);
