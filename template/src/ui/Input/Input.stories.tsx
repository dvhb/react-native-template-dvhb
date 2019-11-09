import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Input } from './Input';
import { Container } from '../../../storybook/decorators';

storiesOf('UI|Input', module)
  .addDecorator((story: any) => <Container>{story()}</Container>)
  .add('text', () => <Input placeholder="Enter text" />)
  .add('multiline', () => <Input multiline placeholder="Enter number" />)
  .add('error', () => <Input placeholder="Enter text" error="Error" />);
