import '../style/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore();
const rootElement = document.getElementById('main');

let element;

if (process.env.NODE_ENV !== 'production') {
  const DevTools = require('./containers/DevTools').default;

  // If using routes
  element = (
    <div>
      <Router history={browserHistory} routes={routes} />
      <DevTools />
    </div>
  );
} else {
  element = (
    <div>
      <Router history={browserHistory} routes={routes} />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    {element}
  </Provider>,
  rootElement
);
