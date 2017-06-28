import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './Reducers';
import Home from './components/home';

export default class Router extends Component {
  render() {
    const store = createStore(Reducers);

    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
