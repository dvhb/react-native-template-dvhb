import { ActionType } from 'typesafe-actions';
import * as runtimeActions from './runtime/actions';

export const actions = {
  runtime: runtimeActions,
};

export type RootAction = ActionType<typeof actions>;
