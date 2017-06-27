import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Font } from 'expo';

const styles = {
  circle: {
    height: 60,
    width: 60,
    borderRadius: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 14,
    elevation: 1,
  },
  label: {
    alignSelf: 'center',
    marginTop: 12,
    fontFamily: 'open-sans-regular',
    color: '#333'
  }
};

const renderIcon = (label) => {
  switch (label) {
    case 'Breakfast':
      return <Ionicons name="md-restaurant" size={25} color="#888" />;
    case 'Cafe':
      return <Ionicons name="ios-cafe" size={23} color="#888" />;
    case 'Fast Food':
      return <MaterialCommunityIcons name="food-fork-drink" size={24} color="#888" />;
    default:
      return <Ionicons name="ios-cafe" size={23} color="#888" />;
  }
};

export default class Shortcut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-regular': require('../../../assets/fonts/OpenSans-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    const { label } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.5} style={{ backgroundColor: 'transparent' }}>
        <View style={styles.circle}>
          {renderIcon(label)}
        </View>
        {this.state.fontLoaded ? <Text style={styles.label}>{label}</Text> : null}
      </TouchableOpacity>
    );
  }
}
