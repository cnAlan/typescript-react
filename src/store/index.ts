import { combineReducers, createStore, applyMiddleware } from 'redux';
import { demoReducer } from './demo/reducer';
import { IDemoState } from './demo/types';
import { connectRouter, RouterState, routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { composeEnhancers } from './utils'

export interface IRootState {
    router: RouterState,
    demo: IDemoState
}

export const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);

const middlewares = [routerMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));
const initState = {}

const store = createStore(
    combineReducers({
        router: connectRouter(history),
        demo: demoReducer
    }),
    initState,
    enhancer
);


export default store; 