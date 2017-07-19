import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Font } from 'expo';

const styles = {
  submitButton: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
    height: 50,
    justifyContent: 'center',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    shadowColor: 'white',
    shadowOpacity: 0.7,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -15 },
    zIndex: 3
  },
  submitText: {
    alignSelf: 'center',
    fontFamily: 'rubik',
    fontSize: 13,
    color: '#222',
    letterSpacing: 1
  },
};

export default class Submit extends Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <View style={styles.submitButton}>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={() => onSubmit()}>
          <Text style={styles.submitText}>DONE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
