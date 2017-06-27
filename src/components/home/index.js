import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import HomeMap from './homeMap';

const styles = {
  container: {
    width: '85%',
    height: 60,
    alignSelf: 'center',
    top: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  searchText: {
    color: 'black'
  }
};

const Home = () => (
  <HomeMap>
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.searchText}>Search</Text>
      </View>

      <View style={{ width: 1, height: 35, alignSelf: 'center', backgroundColor: '#ccc' }} />

      <Octicons name="settings" size={32} color="#333" />
    </View>
  </HomeMap>
);

export default Home;
