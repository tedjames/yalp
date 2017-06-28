import React, { Component } from 'react';
import { Platform } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';
import mapStyle from './mapStyle';

// Used to hide unneccsary warning message from MapView
console.ignoredYellowBox = ['Warning: View.propTypes'];

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

export default class GoogleMaps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: { coords: { latitude: 0, longitude: 0 } },
      errorMessage: null
    };
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this.getLocationAsync();
    }
  }

  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
  };

  locationChanged = (location) => {
    const region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.05,
    };
    this.setState({ location, region });
  }

  render() {
    return (
      <MapView
        provider="google"
        customMapStyle={mapStyle}
        style={{ flex: 1 }}
        region={this.state.region}
        showsUserLocation
      />
    );
  }
}
