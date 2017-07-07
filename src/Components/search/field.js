import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Font } from 'expo';

export default class Field extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans': require('../../../assets/fonts/OpenSans-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    const {
      style,
      onChangeText,
      value,
      placeholder,
      placeholderTextColor,
      selectionColor
    } = this.props;
    if (this.state.fontLoaded) {
      return (
        <TextInput
          style={[style, { fontFamily: 'open-sans' }]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          selectionColor={selectionColor}
        />
      );
    } return <View />;
  }
}
