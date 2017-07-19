import Expo from 'expo';
import React, { Component } from 'react';
import Router from './src';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appReady: false,
    };
  }
  componentWillMount() {
    this.loadAssetsAsync();
  }
  async loadAssetsAsync() {
    const cacheImages = images => images.map(image => Expo.Asset.fromModule(image).downloadAsync());
    const cacheFonts = fonts => fonts.map(font => Expo.Font.loadAsync(font));
    const imageAssets = cacheImages([
      require('./assets/images/american.jpg'),
      require('./assets/images/asian.jpg'),
      require('./assets/images/bbq.jpg'),
      require('./assets/images/breakfast.jpg'),
      require('./assets/images/coffee.jpg'),
      require('./assets/images/dessert.jpg'),
      require('./assets/images/healthy.jpg'),
      require('./assets/images/iceCream.jpg'),
      require('./assets/images/indian.jpg'),
      require('./assets/images/mexican.jpg'),
      require('./assets/images/pizza.jpg'),
      require('./assets/images/sandwich.jpg'),
      require('./assets/images/seafood.jpg'),
      require('./assets/images/smoothie.jpg'),
      require('./assets/images/sushi.jpg'),
      require('./assets/images/vegan.jpg')
    ]);
    const fontAssets = cacheFonts([
      { 'open-sans': require('./assets/fonts/OpenSans-Regular.ttf') },
      { 'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf') },
      { 'rubik': require('./assets/fonts/Rubik-Regular.ttf') },
    ]);

    await Promise.all([
      ...imageAssets,
      ...fontAssets
    ]);

    this.setState({ appReady: true });
  }
  render() {
    if (!this.state.appReady) {
      return <Expo.AppLoading />;
    } return <Router />;
  }
}

Expo.registerRootComponent(Main);
