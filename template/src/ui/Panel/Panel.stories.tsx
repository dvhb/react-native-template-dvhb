import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Container } from '../../../storybook/decorators';
import { Panel } from './Panel';
import { Text } from '../Text';

storiesOf('UI|Panel', module)
  .addDecorator((story: any) => <Container style={{ backgroundColor: '#ccc' }}>{story()}</Container>)
  .add('default', () => (
    <Panel topRadius>
      <Panel.Item>
        <Text>1</Text>
      </Panel.Item>
      <Panel.Item>
        <Text>2</Text>
      </Panel.Item>
      <Panel.Item>
        <Text>3</Text>
      </Panel.Item>
    </Panel>
  ));
