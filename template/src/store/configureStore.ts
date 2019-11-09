import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers';
import { apiMiddleware } from './middleware/api';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  version: 0,
};

const composeEnhancers = process.env.NODE_ENV === 'development' ? composeWithDevTools({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(apiMiddleware));
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
