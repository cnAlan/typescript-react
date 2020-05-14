import { Constants, HomeAction, HomeState } from './types';
const init: HomeState = {
  name: ''
}; 
export function homeReducer(state: HomeState = init, action: HomeAction): HomeState {
  switch (action.type) {
    case Constants.SET_NAME:
      return { ...state, name: action.payload.name}
    default:
      return {...state}
  }
}