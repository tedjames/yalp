import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Shortcuts from './shortcuts';
import SearchBar from './searchBar';
import SearchModal from '../search';
import FilterModal from '../filter';
import Maps from './maps';

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={false} animated />
        <FilterModal />
        <SearchModal />
        <Maps />
        <SearchBar />
        <Shortcuts />
      </View>
    );
  }
}
