import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
export type HomeAction = ActionType<typeof actions>;
 
export interface HomeState {
  name: string
}

export enum Constants {
  SET_NAME = 'SETNAME'
}
