import React, { Component } from 'react';
import { Animated, Text } from 'react-native';
import { Font } from 'expo';

const styles = {
  sectionHeader: {
    fontFamily: 'open-sans-regular',
    fontSize: 24,
    color: '#333',
    letterSpacing: 0.2,
    marginLeft: 15,
    marginBottom: 2.5,
    marginTop: 7.5
  },
};

export default class FilterSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-regular': require('../../../assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-semibold': require('../../../assets/fonts/OpenSans-SemiBold.ttf'),
      'open-sans-light': require('../../../assets/fonts/OpenSans-Light.ttf'),
      'open-sans-bold': require('../../../assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-extrabold': require('../../../assets/fonts/OpenSans-ExtraBold.ttf'),
      'rubik-light': require('../../../assets/fonts/Rubik-Light.ttf'),
      'rubik-medium': require('../../../assets/fonts/Rubik-Medium.ttf'),
      'rubik-regular': require('../../../assets/fonts/Rubik-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const { fontLoaded } = this.state;
    const { name, children, sectionPosition, sectionOpacity } = this.props;

    return (
      <Animated.View style={[sectionPosition, sectionOpacity]}>
        {fontLoaded ? <Text style={styles.sectionHeader}>{name}</Text> : null}
        {children}
      </Animated.View>
    );
  }
}
