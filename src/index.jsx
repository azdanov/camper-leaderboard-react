// @flow

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './Components/App';

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('app'));
};
renderApp();

if (module.hot) {
  module.hot.accept('./Components/App', () => {
    renderApp();
  });
}
