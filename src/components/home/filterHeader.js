import React, { Component } from 'react';
import { Animated, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Font } from 'expo';

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
    fontFamily: 'rubik-regular',
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

export default class filterHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'rubik-regular': require('../../../assets/fonts/Rubik-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const { fontLoaded } = this.state;
    const { handleClose, headerOpacity, headerPosition } = this.props;
    return (
      <Animated.View style={[styles.filterHeader, headerOpacity, headerPosition]}>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <Ionicons style={styles.closeIcon} name="ios-close" size={42.5} color="#3A3A48" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton}>
          {fontLoaded ? <Text style={styles.resetText}>RESET</Text> : null}
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
