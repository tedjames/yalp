import React from 'react';
import { View, TouchableOpacity, StatusBar } from 'react-native';
import { MapView } from 'expo';
import { SimpleLineIcons, FontAwesome } from '@expo/vector-icons';

// Used to hide unneccsary warning message from MapView
console.ignoredYellowBox = ['Warning: View.propTypes'];

const App = () => (
  <MapView
    provider="google"
    style={{ flex: 1 }}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
    <StatusBar />
    <View style={styles.header}>
      <TouchableOpacity style={styles.menuButton}>
        <SimpleLineIcons name="menu" size={19} color="#333" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuButton}>
        <FontAwesome name="bookmark-o" size={24} color="#333" style={{ backgroundColor: 'transparent' }} />
      </TouchableOpacity>
    </View>
  </MapView>
);

const styles = {
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 15
  },
  menuButton: {
    backgroundColor: 'transparent',
    padding: 20,
  },
  faveButton: {
    backgroundColor: 'transparent',
    height: 45,
    width: 45,
    borderRadius: 70,
  },
};

export default App;
