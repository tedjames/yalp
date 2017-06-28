import React, { Component } from 'react';
import { View } from 'react-native';
import SearchBar from './searchBar';
import ShortcutBar from './shortcutBar';
import GoogleMaps from './googleMaps';

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <GoogleMaps />
        <SearchBar />
        <ShortcutBar />
      </View>
    );
  }
}
