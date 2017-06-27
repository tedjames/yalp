import React, { Component } from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';
import mapStyle from './mapStyle';
import SearchBar from './searchBar';
import ShortcutBar from './shortcutBar';

// Used to hide unneccsary warning message from MapView
console.ignoredYellowBox = ['Warning: View.propTypes'];

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          provider="google"
          customMapStyle={mapStyle}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <SearchBar />
        <ShortcutBar />
      </View>
    );
  }
}
