import React, { Component } from 'react';
import { Animated } from 'react-native';
import Option from './option';

export default class LocationHistory extends Component {
  render() {
    return (
      <Animated.ScrollView style={{ flex: 1 }}>
        <Option label="295 5th avenue, New York, NY 10016" />
        <Option label="72 Monroe avenue, Edison, NJ 08820" />
        <Option label="295 5th avenue, New York, NY 10016 123 1234 12345 123456 1234567" />
        <Option label="295 5th avenue, Suite 1714, New York, NY 10016" />
        <Option label="5 Truman Drive South, Edison, NJ 08817" />
      </Animated.ScrollView>
    );
  }
}
