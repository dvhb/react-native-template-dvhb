import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { EmbedTwitch } from './EmbedTwitch';
import { mockStreamIdTwitch } from '../../__mocks__';

storiesOf('components|EmbedTwitch', module).add('default', () => <EmbedTwitch streamId={mockStreamIdTwitch} />);
