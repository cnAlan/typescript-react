import { Dispatch } from 'redux';
import * as actions from './actions';
import { HomeAction } from './types';
function sleep(timeout: number) {
    return new Promise((resolve) => setTimeout(() => resolve(), timeout));
}

export async function setName(dispatch: Dispatch<HomeAction>, item: string) {
  // dispatch(actions.setName(item))
  await sleep(1000);
  // dispatch(actions.addItemToList(item));
  // dispatch(actions.setLoading(false));
  dispatch(actions.setName(item))
}