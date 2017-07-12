import React, { Component } from 'react';
import { View, TextInput, Animated, Easing } from 'react-native';
import { Font } from 'expo';

export default class Field extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
      backgroundColor: new Animated.Value(0),
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans': require('../../../../assets/fonts/OpenSans-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  // Focus animation handlers
  animateFocus() {
    Animated.timing(this.state.backgroundColor, {
      toValue: 1,
      duration: 350,
      easing: Easing.in(Easing.poly(1))
    }).start();
  }
  animateUnfocus() {
    Animated.timing(this.state.backgroundColor, {
      toValue: 0,
      duration: 350,
      easing: Easing.in(Easing.poly(1))
    }).start();
  }

  render() {
    const {
      onChangeText,
      value,
      placeholder,
      placeholderTextColor,
      selectionColor
    } = this.props;
    const backgroundColor = this.state.backgroundColor.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(247, 247, 247)', 'rgb(235, 235, 235)']
    });

    if (this.state.fontLoaded) {
      return (
        <Animated.View style={[styles.fieldContainer, { backgroundColor }]}>
          <TextInput
            style={[styles.field, { fontFamily: 'open-sans' }]}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            selectionColor={selectionColor}
            onFocus={() => this.animateFocus()}
            onEndEditing={() => this.animateUnfocus()}
          />
        </Animated.View>
      );
    } return <View />;
  }
}

const styles = {
  fieldContainer: {
    backgroundColor: 'rgb(238, 238, 238)',
    height: 33,
    borderRadius: 3,
    justifyContent: 'center',
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: '#f6f6f6',
    paddingLeft: 7.5,
    marginRight: 20,
    right: 5
  },
  field: {
    height: 32.5,
    fontSize: 14
  },
};
