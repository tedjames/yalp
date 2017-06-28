import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import SearchBar from './searchBar';
import ShortcutBar from './shortcutBar';
import GoogleMaps from './googleMaps';
import FilterModal from './filterModal';

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={this.props.showStatusBar} animated />
        <FilterModal />
        <GoogleMaps />
        <SearchBar />
        <ShortcutBar />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  showStatusBar: state.nav.showStatusBar
});

export default connect(mapStateToProps)(Home);
