import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware /*compose*/ } from 'redux';
import reducers from './reducers';
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
