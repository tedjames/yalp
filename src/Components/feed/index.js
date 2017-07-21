import React, { Component } from 'react';
import { View, Animated } from 'react-native';

export default class Feed extends Component {
  render() {
    return (
      <Animated.View
        style={[styles.container, this.props.containerStyle]}
        {...this.props.pan}
      >
        <View style={styles.card} />
        <View style={styles.card2} />
      </Animated.View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    height: 2000,
    alignSelf: 'center',
    position: 'absolute',
  },
  card: {
    width: 65,
    height: 8,
    margin: 25,
    marginTop: 15,
    marginBottom: 0,
    backgroundColor: '#a1a1a1'
  },
  card2: {
    width: 90,
    height: 8,
    margin: 25,
    marginTop: 5,
    backgroundColor: '#858585'
  }
};
