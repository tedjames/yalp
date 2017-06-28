import React, { Component } from 'react';
import { View } from 'react-native';
import SearchBar from './searchBar';
import ShortcutBar from './shortcutBar';
import GoogleMaps from './googleMaps';
import FilterModal from './filterModal';

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FilterModal />
        <GoogleMaps />
        <SearchBar />
        <ShortcutBar />
      </View>
    );
  }
}
