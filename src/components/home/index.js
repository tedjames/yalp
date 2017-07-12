import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { toggleFilter, toggleSearch } from '../../Actions';
import ShortcutBar from './shortcutBar';
import SearchBar from './searchBar';
import SearchModal from '../search';
import FilterModal from '../filter';
import Maps from './maps';

class Home extends Component {
  render() {
    const { toggleFilter, toggleSearch } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={false} animated />
        <FilterModal toggle={toggleFilter} />
        <SearchModal toggle={toggleSearch} />
        <Maps />
        <SearchBar />
        <ShortcutBar />
      </View>
    );
  }
}

export default connect(null, { toggleFilter, toggleSearch })(Home);
