import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Container } from '../../../storybook/decorators';
import { Link } from './Link';

storiesOf('UI|Link', module)
  .addDecorator((story: any) => <Container>{story()}</Container>)
  .add('default', () => <Link>Link</Link>);
