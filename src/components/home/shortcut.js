import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

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
    marginTop: 10
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
  render() {
    const { label } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: 'transparent' }}>
        <View style={styles.circle}>
          {renderIcon(label)}
        </View>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    );
  }
}
