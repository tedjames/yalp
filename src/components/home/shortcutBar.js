import React, { Component } from 'react';
import { View } from 'react-native';
import Shortcut from './shortcut';

const styles = {
  bar: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '70%',
    bottom: 40,
    paddingTop: 20,
    paddingBottom: 20,
  }
};

export default class ShortcutBar extends Component {
  render() {
    return (
      <View style={styles.bar}>
        <Shortcut label="Breakfast" />
        <Shortcut label="Cafe" />
        <Shortcut label="Fast Food" />
      </View>
    );
  }
}
