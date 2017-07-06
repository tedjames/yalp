import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { toggleFilterModal } from '../../Actions';
import SearchBar from './searchBar';
import ShortcutBar from './shortcutBar';
import GoogleMaps from './googleMaps';
import FilterModal from './filterModal';

class Home extends Component {
  render() {
    const { toggleFilterModal } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={false} animated />
        <FilterModal toggle={toggleFilterModal} />
        <GoogleMaps />
        <SearchBar onFilterPress={toggleFilterModal} />
        <ShortcutBar />
      </View>
    );
  }
}

export default connect(null, { toggleFilterModal })(Home);
