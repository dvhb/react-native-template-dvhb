import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Red5Test1 } from './Red5Test1';

const props = {
  publisherStream: ['stream1'],
  subscriberStream: ['stream2'],
};

storiesOf('Screens|Red5Test1', module)
  .add('test1', () => <Red5Test1 publisherStream={['stream1']} />)
  .add('test2', () => <Red5Test1 subscriberStream={['stream1']} publisherStream={['stream2']} />)
  .add('test3', () => <Red5Test1 subscriberStream={['stream1', 'stream2']} publisherStream={[]} />)
  .add('with no permissions', () => <Red5Test1 {...props} hasPermissions={false} />);
