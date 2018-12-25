// modules
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
// system
import store from 'store';
// pages
import Users from 'pages/Users';

const App = () => (
  <Provider store={store}>
    <Router>
      <Users />
    </Router>
  </Provider>
);

export default App;
