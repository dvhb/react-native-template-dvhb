import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Text } from './Text';

storiesOf('UI|Text', module).add('default', () => (
  <>
    <Text size="subcaption">subcaption</Text>
    <Text size="caption">caption</Text>
    <Text size="body1">body1</Text>
    <Text size="body2">body2</Text>
    <Text size="headline">headline</Text>
    <Text size="title">title</Text>
    <Text size="large">large</Text>
    <Text weight="regular">regular</Text>
    <Text weight="semibold">semibold</Text>
    <Text weight="bold">bold</Text>
  </>
));
