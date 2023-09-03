import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import store from './Store/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <Router> {/* Wrap your entire app with the Router component */}
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
