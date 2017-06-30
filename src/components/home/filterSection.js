import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Font } from 'expo';

const styles = {
  sectionHeader: {
    fontFamily: 'open-sans-regular',
    fontSize: 24,
    color: '#333',
    letterSpacing: 0.2,
    marginLeft: 15,
    marginBottom: 2.5,
    marginTop: 5
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
      'open-sans-regular': require('../../../assets/fonts/OpenSans-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const { fontLoaded } = this.state;
    const { name, children } = this.props;

    return (
      <View>
        {fontLoaded ? <Text style={styles.sectionHeader}>{name}</Text> : null}
        {children}
      </View>
    );
  }
}
