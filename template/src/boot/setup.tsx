import React from 'react';
import { Text } from 'react-native';
import { IntlProvider } from 'react-intl';
import 'intl';
import EStyleSheet from 'react-native-extended-stylesheet';

import ru from '../messages/ru.json';
import { reduceMessages } from '../helpers/locale';

import { stylesheetConfig } from './stylesheetConfig';

import { App } from '../App';

const translations = {
  ru: reduceMessages(ru),
};

export class Setup extends React.Component {
  render() {
    return (
      <IntlProvider locale="ru" defaultLocale="ru" messages={translations.ru} textComponent={Text}>
        <App />
      </IntlProvider>
    );
  }
}

EStyleSheet.build(stylesheetConfig);
