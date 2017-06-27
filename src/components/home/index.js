import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { MapView } from 'expo';
import mapStyle from './mapStyle';

// Used to hide unneccsary warning message from MapView
console.ignoredYellowBox = ['Warning: View.propTypes'];

const styles = {
  container: {
    position: 'absolute',
    height: 60,
    width: '80%',
    alignSelf: 'center',
    top: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  searchText: {
    color: 'black'
  },
  divider: {
    width: 1,
    height: 35,
    alignSelf: 'center',
    backgroundColor: '#ccc'
  }
};

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
        <View style={styles.container}>
          <View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Octicons name="search" size={32} color="#333" />
              <Text style={styles.searchText}>What to eat?</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.divider} />

          <Octicons name="settings" size={32} color="#333" />
        </View>
      </View>
    );
  }
}
