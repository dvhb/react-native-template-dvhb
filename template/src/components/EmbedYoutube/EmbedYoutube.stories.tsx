import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { EmbedYoutube } from './EmbedYoutube';
import { mockStreamIdYoutube } from '../../__mocks__';

storiesOf('components|EmbedYoutube', module).add('default', () => <EmbedYoutube streamId={mockStreamIdYoutube} />);
