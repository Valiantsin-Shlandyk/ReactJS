import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './containers/App';

import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './store/reducers/cardsReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = () => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching: ', action);
      return next(action);
    }
  }
}

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
