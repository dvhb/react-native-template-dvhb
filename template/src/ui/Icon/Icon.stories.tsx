// tslint:disable:jsx-no-lambda

import React from 'react';
import { ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import { Icon } from './Icon';
import { Spacer } from '../Spacer';
import { Text } from '../Text';
import * as Icons from './components';
import { Container } from '../../../storybook/decorators';

const iconsArr: any = [];
for (const prop in Icons) {
  iconsArr.push(
    <Spacer>
      <Icon name={prop} />
      <Text>{prop}</Text>
    </Spacer>,
  );
}

storiesOf('UI|Icon', module)
  .addDecorator((story: any) => <Container>{story()}</Container>)
  .add('all', () => <ScrollView>{iconsArr}</ScrollView>);
