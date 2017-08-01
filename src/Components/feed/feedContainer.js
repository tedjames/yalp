import React from 'react';
import { Animated, TouchableOpacity } from 'react-native';

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

const FeedContainer = ({ pan, containerStyle, forceExpand }) => (
  <Animated.View
    style={[styles.container, containerStyle]}
    {...pan}
  >
    <TouchableOpacity style={{ flex: 1, height: '100%' }} onPress={forceExpand} activeOpacity={1} />
  </Animated.View>
);

export { FeedContainer };
