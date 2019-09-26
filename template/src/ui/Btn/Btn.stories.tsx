// tslint:disable:jsx-no-lambda

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Btn } from './Btn';

storiesOf('Button', module)
  .add('default', () => <Btn onPress={action('clicked-default')}>Default</Btn>)
  .add('with custom styles', () => (
    <Btn style={styles.custom} onPress={action('clicked-custom')}>
      Custom
    </Btn>
  ));

const styles = EStyleSheet.create({
  custom: {
    backgroundColor: 'red',
  },
});
