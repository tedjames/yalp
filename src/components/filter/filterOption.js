import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Font } from 'expo';
import { Ionicons, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';

const styles = {
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15,
    height: 52.5
  },
  optionIcon: {
    marginRight: 15
  },
  optionName: {
    fontFamily: 'open-sans-regular',
    fontSize: 14,
    color: '#222'
  },
  iconContainer: {
    width: 50,
    alignItems: 'center'
  },
  checkmark: {
    marginRight: 11
  }
};

export default class FilterOption extends Component {
  constructor(props) {
    super(props);
    this.renderIcon = this.renderIcon.bind(this);
    this.handlePress = this.handlePress.bind(this);
    this.state = {
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-regular': require('../../../assets/fonts/OpenSans-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
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
    const { fontLoaded, checked } = this.state;
    const { name } = this.props;
    return (
      <TouchableHighlight activeOpacity={0.95} onPress={this.handlePress}>
        <View style={styles.option}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconContainer}>{this.renderIcon()}</View>
            {fontLoaded ? <Text style={styles.optionName}>{name}</Text> : null}
          </View>
          {checked ? <Ionicons name="ios-checkmark-outline" style={styles.checkmark} size={40} color="#60BA62" /> : null}
        </View>
      </TouchableHighlight>
    );
  }
}