import React from 'react';
import { MapView } from 'expo';
import mapStyle from './mapStyle';

// Used to hide unneccsary warning message from MapView
console.ignoredYellowBox = ['Warning: View.propTypes'];

const HomeMap = props => (
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
  >
    {props.children}
  </MapView>
);

export default HomeMap;
