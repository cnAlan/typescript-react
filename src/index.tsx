import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store'
import { Route } from 'react-router'
import store from './store';
import Home from './container/Home'
import About from './components/About'
 
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
