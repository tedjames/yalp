import React, { Component } from 'react';
import { Animated, Text } from 'react-native';

const styles = {
  sectionHeader: {
    fontFamily: 'open-sans',
    fontSize: 24,
    color: '#333',
    letterSpacing: 0.2,
    marginLeft: 15,
    marginBottom: 2.5,
    marginTop: 7.5
  },
};

export default class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }
  render() {
    const { name, children, sectionPosition, sectionOpacity } = this.props;

    return (
      <Animated.View style={[sectionPosition, sectionOpacity]}>
        <Text style={styles.sectionHeader}>{name}</Text>
        {children}
      </Animated.View>
    );
  }
}
