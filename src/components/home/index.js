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
    color: '#444',
    fontFamily: 'open-sans-light',
    fontSize: 20
  },
  divider: {
    width: 1,
    height: 35,
    alignSelf: 'center',
    backgroundColor: '#ccc'
  },
  searchIcon: {
    paddingRight: 15,
    paddingLeft: 15
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
          <View>
            <TouchableOpacity activeOpacity={0.65} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Octicons style={styles.searchIcon} name="search" size={22} color="#333" />
              {this.state.fontLoaded ? <Text style={styles.searchText}>What to eat?</Text> : null}
            </TouchableOpacity>
          </View>


          <View style={styles.divider} />

          <Octicons name="settings" size={32} color="#333" />
        </View>
      </View>
    );
  }
}
