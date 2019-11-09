import { StateType } from 'typesafe-actions';
import { combineReducers } from 'redux';
import { runtimeReducer } from './runtime/reducers';

export const rootReducer = combineReducers({
  runtime: runtimeReducer,
});

export type RootState = StateType<typeof rootReducer>;
