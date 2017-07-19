import React, { Component } from 'react';
import { Animated, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = {
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  resetButton: {
    paddingTop: 20,
    paddingRight: 15,
    paddingLeft: 20
  },
  resetText: {
    fontFamily: 'rubik',
    color: '#333',
    letterSpacing: 0.5,
    fontSize: 12
  },
  closeButton: {
    paddingTop: 20,
    paddingRight: 50,
    paddingLeft: 15
  }
};

export default class Header extends Component {
  render() {
    const { handleClose, headerOpacity, headerPosition } = this.props;
    return (
      <Animated.View style={[styles.filterHeader, headerOpacity, headerPosition]}>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <Ionicons style={styles.closeIcon} name="ios-close" size={42.5} color="#3A3A48" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.resetText}>RESET</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
