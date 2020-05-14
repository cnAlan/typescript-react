import { combineReducers, createStore, applyMiddleware } from 'redux';
import { homeReducer } from './Home/reducer';
import { HomeState } from './Home/types';
import { connectRouter, RouterState, routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { composeEnhancers } from './utils'

export interface IRootState {
    router: RouterState,
    Home: HomeState
}

export const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);

const middlewares = [routerMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));
const initState = {}

const store = createStore(
    combineReducers({
        router: connectRouter(history),
        Home: homeReducer
    }),
    initState,
    enhancer
);


export default store; 