import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Btn } from './Btn';
import { Container } from '../../../storybook/decorators';

const noop = () => {};

storiesOf('UI|Btn', module)
  .addDecorator((story: any) => <Container>{story()}</Container>)
  .add('default', () => <Btn onPress={noop}>Default</Btn>)
  .add('small', () => (
    <Btn small onPress={noop}>
      Small
    </Btn>
  ))
  .add('bordered', () => (
    <Btn bordered onPress={noop}>
      Bordered
    </Btn>
  ))
  .add('inverse', () => (
    <Btn inverse onPress={noop}>
      Inverse
    </Btn>
  ))
  .add('disabled', () => (
    <Btn disabled onPress={noop}>
      Disabled
    </Btn>
  ));
