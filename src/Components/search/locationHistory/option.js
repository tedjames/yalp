import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Option extends Component {
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
          <Text style={styles.label}>{this.props.label}</Text>
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
