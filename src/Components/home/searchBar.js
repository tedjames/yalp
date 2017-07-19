import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { toggleFilter, toggleSearch } from '../../Actions';

const styles = {
  container: {
    position: 'absolute',
    height: 57.5,
    width: '85%',
    alignSelf: 'center',
    top: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 23,
    elevation: 1,
    borderColor: '#eee',
    borderWidth: 0.5,
    borderRadius: 2
  },
  searchText: {
    color: '#535860',
    fontFamily: 'open-sans-light',
    fontSize: 19
  },
  divider: {
    width: 1,
    height: 35,
    alignSelf: 'center',
    backgroundColor: '#ddd'
  },
  squareIcon: {
    height: 6,
    width: 6,
    top: 1,
    marginRight: 16,
    marginLeft: 20,
    backgroundColor: '#333'
  }
};

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }
  render() {
    const { toggleSearch, toggleFilter, searchQuery } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => toggleSearch()}
          style={{ flex: 4, flexDirection: 'row', alignItems: 'center', height: '100%' }}
        >
          <View style={styles.squareIcon} />
          <Text style={styles.searchText}>{searchQuery === '' ? 'What to eat?' : searchQuery}</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => toggleFilter()}
          style={{ flex: 1, top: 1.5, alignItems: 'center', justifyContent: 'center', height: '100%' }}
        >
          <Octicons name="settings" size={22} color="#777" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null, { toggleFilter, toggleSearch })(SearchBar);
