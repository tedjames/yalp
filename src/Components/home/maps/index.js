import React, { Component } from 'react';
import { Platform } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';
import mapStyle from './mapStyle';

// Used to hide unneccsary warning message from MapView
console.ignoredYellowBox = ['Warning: View.propTypes'];

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

export default class Maps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: { coords: { latitude: 0, longitude: 0 } },
      errorMessage: null,
      locationUpdating: false
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

  shouldComponentUpdate(nextProps, nextState) {
    // only re-render this component if new data is found
    // NOTE: NEED TO TEST LOCATION UPDATING W/ NEW RETURN STATEMENT BELOW
    // return nextState.location !== this.state.location;
    // return false; // < -- change this to "nextProps.data !== this.props.data" later
    return nextState.locationUpdating;
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
      latitudeDelta: 0.008,
      longitudeDelta: 0.0002,
    };
    this.setState({ location, region, locationUpdating: true });
    this.setState({ locationUpdating: false });
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
