import Expo from 'expo';
import React from 'react';
import App from './src';

class Main extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

Expo.registerRootComponent(Main);
