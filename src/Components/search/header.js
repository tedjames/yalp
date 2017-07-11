import React, { Component } from 'react';
import { View, Animated, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Field from './field';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationField: '',
      searchField: ''
    };
  }
  render() {
    const { headerOpacity, handleClose } = this.props;
    return (
      <Animated.View style={[styles.header, headerOpacity]}>
        <View style={styles.icons}>
          <TouchableOpacity onPress={handleClose} style={styles.backButton}>
            <Ionicons name="ios-arrow-round-back" size={37} color="#111" />
          </TouchableOpacity>
          <View style={styles.circleIcon} />
          <View style={styles.line} />
          <View style={styles.squareIcon} />
        </View>

        <View style={{ flex: 1, marginTop: 40 }}>
          <Field
            onChangeText={text => this.setState({ locationField: text })}
            value={this.state.locationField}
            placeholder="Current Location"
            placeholderTextColor="#29aadb"
            selectionColor="#32b2e3"
          />
          <Field
            onChangeText={text => this.setState({ searchField: text })}
            value={this.state.searchField}
            placeholder="What to eat?"
            placeholderTextColor="#7b7c82"
            selectionColor="#32b2e3"
          />
        </View>
      </Animated.View>
    );
  }
}

const styles = {
  header: {
    height: 135,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.125,
    shadowRadius: 8,
    elevation: 1,
    zIndex: 2
  },
  icons: {
    alignItems: 'center',
    marginLeft: 2.5
  },
  backButton: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20
  },
  circleIcon: {
    height: 6,
    width: 6,
    borderRadius: 50,
    backgroundColor: '#43A0C4',
    marginTop: 3
  },
  line: {
    backgroundColor: '#bbb',
    height: 30,
    width: 1,
    marginTop: 4,
    marginBottom: 4
  },
  squareIcon: {
    height: 6,
    width: 6,
    backgroundColor: '#333'
  },
};
