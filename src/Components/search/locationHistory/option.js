import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Font } from 'expo';

export default class Option extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans': require('../../../../assets/fonts/OpenSans-Light.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <TouchableHighlight activeOpacity={0.95} onPress={() => null}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            style={styles.icon}
            name={'history'}
            size={17}
            color="#888"
          />
          {this.state.fontLoaded ? <Text style={styles.label}>{this.props.label}</Text> : null}
        </View>
      </TouchableHighlight>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
  },
  icon: {
    marginLeft: 23,
    marginRight: 23
  },
  label: {
    flex: 1,
    fontFamily: 'open-sans',
    color: '#222',
    fontSize: 14,
    bottom: 1,
    marginTop: 17,
    marginBottom: 17,
  }
};
