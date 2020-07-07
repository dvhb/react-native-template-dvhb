import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Layout } from '../Layout';
import { mockStreamIdVimeo } from '../../__mocks__';
import { EmbedVimeo } from '../EmbedVimeo';
import { TwilioVideoParticipant } from '../TwilioVideoParticipant';
import { TwilioVideoLocal } from '../TwilioVideoLocal';

storiesOf('components|Layout', module)
  .add('default', () => <Layout djView={<EmbedVimeo streamId={mockStreamIdVimeo} />} />)
  .add('withOneParticipant', () => (
    <Layout
      djView={<EmbedVimeo streamId={mockStreamIdVimeo} />}
      otherViews={[<TwilioVideoParticipant key={1} storybook />]}
    />
  ))
  .add('withTwoParticipant', () => (
    <Layout
      djView={<EmbedVimeo streamId={mockStreamIdVimeo} />}
      otherViews={[<TwilioVideoParticipant key={1} storybook />, <TwilioVideoParticipant key={2} storybook />]}
    />
  ))
  .add('withParticipantAndLocal', () => (
    <Layout
      djView={<EmbedVimeo streamId={mockStreamIdVimeo} />}
      otherViews={[<TwilioVideoParticipant key={1} storybook />]}
      localView={<TwilioVideoLocal storybook />}
    />
  ));
