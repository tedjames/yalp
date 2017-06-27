import React, { Component } from 'react';
import { LinearGradient } from 'expo';
import Shortcut from './shortcut';

const styles = {
  gradientBar: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '100%',
    bottom: 0,
    paddingBottom: 40,
    paddingTop: 5,
    paddingRight: 60,
    paddingLeft: 60
  }
};

export default class ShortcutBar extends Component {
  render() {
    return (
      <LinearGradient style={styles.gradientBar} colors={['rgba(238, 238, 238, 0)', 'rgba(238, 238, 238, 0.925)']} locations={[0, 0.75]}>
        <Shortcut label="Breakfast" />
        <Shortcut label="Cafe" />
        <Shortcut label="Fast Food" />
      </LinearGradient>
    );
  }
}
