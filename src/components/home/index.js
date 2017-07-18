import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StatusBar } from 'react-native';
import Shortcuts from './shortcuts';
import SearchBar from './searchBar';
import SearchModal from '../search';
import FilterModal from '../filter';
import Maps from './maps';

class Home extends Component {
  render() {
    const { searchQuery } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={false} animated />
        <FilterModal />
        <SearchModal searchQuery={searchQuery} />
        <Maps />
        <SearchBar searchQuery={searchQuery} />
        <Shortcuts />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  searchQuery: state.fields.searchQuery
});

export default connect(mapStateToProps)(Home);
