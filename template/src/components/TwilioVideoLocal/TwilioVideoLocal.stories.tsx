import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { TwilioVideoLocal } from './TwilioVideoLocal';

const props = {
  storybook: true,
};

storiesOf('components|TwilioVideoLocal', module).add('default', () => <TwilioVideoLocal {...props} />);
