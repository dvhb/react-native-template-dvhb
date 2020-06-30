import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { EmbedVimeo } from './EmbedVimeo';
import { mockStreamIdVimeo } from '../../__mocks__';

storiesOf('components|EmbedVimeo', module).add('default', () => <EmbedVimeo streamId={mockStreamIdVimeo} />);
