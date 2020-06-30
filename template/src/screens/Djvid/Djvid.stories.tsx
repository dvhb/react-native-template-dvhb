import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Djvid, DjvidProps } from './Djvid';

const props: DjvidProps = {
  storybook: true,
};

storiesOf('Screens|Djvid', module).add('default', () => <Djvid {...props} />);
