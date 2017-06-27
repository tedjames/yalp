import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { MapView, Font } from 'expo';
import mapStyle from './mapStyle';

// Used to hide unneccsary warning message from MapView
console.ignoredYellowBox = ['Warning: View.propTypes'];

const styles = {
  container: {
    position: 'absolute',
    height: 57.5,
    width: '80%',
    alignSelf: 'center',
    top: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.285,
    shadowRadius: 30,
    elevation: 1,
  },
  searchText: {
    color: '#444',
    fontFamily: 'open-sans-light',
    fontSize: 19
  },
  divider: {
    width: 1,
    height: 35,
    alignSelf: 'center',
    backgroundColor: '#ddd'
  },
  squareIcon: {
    height: 6,
    width: 6,
    top: 1,
    marginRight: 16,
    marginLeft: 20,
    backgroundColor: '#333'
  }
};

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-light': require('../../../assets/fonts/OpenSans-Light.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
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
          <TouchableOpacity activeOpacity={0.6} style={{ flex: 4, flexDirection: 'row', alignItems: 'center', height: '100%' }}>
            <View style={styles.squareIcon} />
            {this.state.fontLoaded ? <Text style={styles.searchText}>What to eat?</Text> : null}
          </TouchableOpacity>


          <View style={styles.divider} />

          <TouchableOpacity style={{ flex: 1, top: 1.5, alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Octicons name="settings" size={22} color="#7a7a7a" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
