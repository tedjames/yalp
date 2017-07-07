import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { toggleFilter, toggleSearch } from '../../Actions';
import SearchBar from './searchBar';
import ShortcutBar from './shortcutBar';
import Maps from '../maps';
import FilterModal from '../filter';

class Home extends Component {
  render() {
    const { toggleFilter, toggleSearch } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={false} animated />
        <FilterModal toggle={toggleFilter} />
        <Maps />
        <SearchBar onFilterPress={toggleFilter} onSearchPress={toggleSearch} />
        <ShortcutBar />
      </View>
    );
  }
}

export default connect(null, { toggleFilter, toggleSearch })(Home);
