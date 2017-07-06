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
    fontFamily: 'rubik-regular',
    fontSize: 13,
    color: '#222',
    letterSpacing: 1
  },
};

export default class FilterSubmit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'rubik-regular': require('../../../assets/fonts/Rubik-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const { fontLoaded } = this.state;
    const { onSubmit } = this.props;
    return (
      <View style={styles.submitButton}>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={() => onSubmit()}>
          {fontLoaded ? <Text style={styles.submitText}>DONE</Text> : null}
        </TouchableOpacity>
      </View>
    );
  }
}
