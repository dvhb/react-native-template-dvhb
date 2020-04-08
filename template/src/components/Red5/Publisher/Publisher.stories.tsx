import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Publisher } from './Publisher';

storiesOf('Publisher', module).add('default', () => <Publisher streamName="stream1" />);
