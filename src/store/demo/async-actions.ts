import { Dispatch } from 'redux';
import * as actions from './actions';
import { DemoActions } from './types';
function sleep(timeout: number) {
    return new Promise((resolve) => setTimeout(() => resolve(), timeout));
}
export async function addItemAsync(dispatch: Dispatch<DemoActions>, item: string) {
    dispatch(actions.setLoading(true));
    
    await sleep(1000);
    dispatch(actions.addItemToList(item));
    dispatch(actions.setLoading(false));
}

export interface IDemoState {
  list: string[]
  loading: boolean
}
export enum Constants {
  ADD_ITEM = 'ADD_ITEM',
  SET_LOADING = 'SET_LOADING',
}