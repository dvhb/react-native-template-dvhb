import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { TwilioVideoParticipant } from './TwilioVideoParticipant';

const props = {
  storybook: true,
};

storiesOf('components|TwilioVideoParticipant', module).add('default', () => <TwilioVideoParticipant {...props} />);
