import React from 'react';
import { Provider } from 'react-redux';
import { Text } from 'react-native';
import { IntlProvider } from 'react-intl';
import 'intl';
import EStyleSheet from 'react-native-extended-stylesheet';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '../store/configureStore';
import en from '../messages/en.json';
import { reduceMessages } from '../helpers/locale';
import { stylesheetConfig } from './stylesheetConfig';
import { App } from '../App';
import { apiUser } from '../services/api';

const translations = {
  en: reduceMessages(en),
};

export class Setup extends React.Component {
  onBeforeLift() {
    apiUser.init();
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} onBeforeLift={this.onBeforeLift}>
          <IntlProvider locale="en" defaultLocale="en" messages={translations.en} textComponent={Text}>
            <App />
          </IntlProvider>
        </PersistGate>
      </Provider>
    );
  }
}

EStyleSheet.build(stylesheetConfig);
