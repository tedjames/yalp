import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Arrow from './arrow';

class Feed extends Component {
  render() {
    if (this.props.minimized) {
      return null;
    }
    return (
      <View style={styles.container}>
        <ScrollView>
          <Arrow />
          <Text style={styles.headerText}>Popular near you</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    height: 2000,
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: '#222',
    zIndex: 10
  },
  headerText: {
    color: '#fff',
    fontFamily: 'open-sans-light',
    fontSize: 28,
    marginTop: 0,
    marginLeft: 20
  }
};

export { Feed };
