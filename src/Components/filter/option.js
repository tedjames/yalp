import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Ionicons, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';

const styles = {
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 15,
    height: 52.5
  },
  optionIcon: {
    marginRight: 5
  },
  optionName: {
    fontFamily: 'open-sans',
    fontSize: 14,
    color: '#222'
  },
  iconContainer: {
    width: 50,
    alignItems: 'center'
  },
  checkmark: {
    marginRight: 12
  }
};

export default class Option extends Component {
  constructor(props) {
    super(props);
    this.renderIcon = this.renderIcon.bind(this);
    this.handlePress = this.handlePress.bind(this);
    this.state = {
      fontLoaded: false,
    };
  }
  handlePress() {
    this.setState({ checked: !this.state.checked });
  }
  renderIcon() {
    const { iconType, iconName, iconSize, iconColor } = this.props;
    const defaultColor = '#888';
    switch (iconType) {
      case 'ionicons':
        return (
          <Ionicons
            style={styles.optionIcon}
            name={iconName || 'ios-warning-outline'}
            size={iconSize || 25}
            color={iconColor || defaultColor}
          />
        );
      case 'simplelineicons':
        return (
          <SimpleLineIcons
            style={styles.optionIcon}
            name={iconName || 'exclamation'}
            size={iconSize || 22}
            color={iconColor || defaultColor}
          />
        );
      case 'fontawesome':
        return (
          <FontAwesome
            style={styles.optionIcon}
            name={iconName || 'rocket'}
            size={iconSize || 25}
            color={iconColor || defaultColor}
          />
        );
      default:
        return (
          <Ionicons
            style={styles.optionIcon}
            name={iconName || 'ios-warning-outline'}
            size={iconSize || 25}
            color={iconColor || defaultColor}
          />
        );
    }
  }
  render() {
    const { checked } = this.state;
    const { name } = this.props;
    return (
      <TouchableHighlight activeOpacity={0.95} onPress={this.handlePress}>
        <View style={styles.option}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconContainer}>{this.renderIcon()}</View>
            <Text style={styles.optionName}>{name}</Text>
          </View>
          {checked ? <Ionicons name="ios-checkmark-outline" style={styles.checkmark} size={41} color="#60BA62" /> : null}
        </View>
      </TouchableHighlight>
    );
  }
}
