import { action } from 'typesafe-actions';
import { Constants } from './types';


export interface nameState {
    type: Constants.SET_NAME
}

export type homeActions = nameState


export function setName(name: string) {
    return action(Constants.SET_NAME, {
        name
    });
}