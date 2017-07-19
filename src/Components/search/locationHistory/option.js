import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableHighlight, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { updateDestination } from '../../../Actions';

class Option extends Component {
  render() {
    const { label, updateDestination } = this.props;
    return (
      <TouchableHighlight activeOpacity={0.95} onPress={() => updateDestination(label)}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            style={styles.icon}
            name={'history'}
            size={17}
            color="#888"
          />
          <Text style={styles.label}>{label}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
  },
  icon: {
    marginLeft: 23,
    marginRight: 23
  },
  label: {
    flex: 1,
    fontFamily: 'open-sans',
    color: '#222',
    fontSize: 14,
    bottom: 1,
    marginTop: 17,
    marginBottom: 17,
  }
};

export default connect(null, { updateDestination })(Option);
