import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Animated, TouchableOpacity, TextInput, Easing } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { updateQuery, updateDestination } from '../../../Actions'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationField: '',
      searchField: '',
      searchBackgroundColor: new Animated.Value(0),
      destinationBackgroundColor: new Animated.Value(0)
    };
  }
  // Focus animation handlers
  animateSearchFocus() {
    Animated.timing(this.state.searchBackgroundColor, {
      toValue: 1,
      duration: 350,
      easing: Easing.in(Easing.poly(1))
    }).start();
  }
  animateSearchUnfocus() {
    Animated.timing(this.state.searchBackgroundColor, {
      toValue: 0,
      duration: 350,
      easing: Easing.in(Easing.poly(1))
    }).start();
  }
  animateDestinationFocus() {
    Animated.timing(this.state.destinationBackgroundColor, {
      toValue: 1,
      duration: 350,
      easing: Easing.in(Easing.poly(1))
    }).start();
  }
  animateDestinationUnfocus() {
    Animated.timing(this.state.destinationBackgroundColor, {
      toValue: 0,
      duration: 350,
      easing: Easing.in(Easing.poly(1))
    }).start();
  }

  render() {
    const {
      headerOpacity,
      handleClose,
      showLocationHistory,
      showCategories,
      headerPosition,
      updateQuery,
      searchQuery,
      updateDestination,
      destination
    } = this.props;
    const destinationBackgroundColor = this.state.destinationBackgroundColor.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(247, 247, 247)', 'rgb(235, 235, 235)']
    });
    const searchBackgroundColor = this.state.searchBackgroundColor.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(247, 247, 247)', 'rgb(235, 235, 235)']
    });
    const focusSearch = textInput => textInput.focus();
    return (
      <Animated.View style={[styles.header, headerOpacity, headerPosition]}>
        <View style={styles.icons}>
          <TouchableOpacity onPress={handleClose} style={styles.backButton}>
            <Ionicons name="ios-arrow-round-back" size={37} color="#111" />
          </TouchableOpacity>
          <View style={styles.circleIcon} />
          <View style={styles.line} />
          <View style={styles.squareIcon} />
        </View>

        <View style={{ flex: 1, marginTop: 40 }}>
          <Animated.View
            style={[styles.fieldContainer, { backgroundColor: destinationBackgroundColor }]}
          >
            <TextInput
              ref={component => this.destinationField = component}
              style={[styles.field, { fontFamily: 'open-sans' }]}
              onChangeText={destination => updateDestination(destination)}
              value={destination}
              placeholder="Current Location"
              placeholderTextColor="#29aadb"
              selectionColor="#32b2e3"
              onFocus={() => {
                this.animateDestinationFocus();
                showLocationHistory();
              }}
              onEndEditing={() => this.animateDestinationUnfocus()}
              clearButtonMode="while-editing"
              returnKeyType="done"
              onSubmitEditing={() => this.searchField.focus()}
            />
          </Animated.View>
          <Animated.View
            style={[styles.fieldContainer, { backgroundColor: searchBackgroundColor }]}
          >
            <TextInput
              ref={component => this.searchField = component}
              style={[styles.field, { fontFamily: 'open-sans' }]}
              onChangeText={text => updateQuery(text)}
              value={searchQuery}
              placeholder="What to eat?"
              placeholderTextColor="#7b7c82"
              selectionColor="#32b2e3"
              onFocus={() => {
                this.animateSearchFocus();
                showCategories();
              }}
              onEndEditing={() => this.animateSearchUnfocus()}
              clearButtonMode="while-editing"
              returnKeyType="search"
              onSubmitEditing={handleClose}
            />
          </Animated.View>
        </View>
      </Animated.View>
    );
  }
}

const styles = {
  header: {
    height: 135,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.125,
    shadowRadius: 12,
    elevation: 1,
    zIndex: 2
  },
  icons: {
    alignItems: 'center',
    marginLeft: 2.5
  },
  backButton: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20
  },
  circleIcon: {
    height: 6,
    width: 6,
    borderRadius: 50,
    backgroundColor: '#43A0C4',
    marginTop: 3
  },
  line: {
    backgroundColor: '#bbb',
    height: 30,
    width: 1,
    marginTop: 4,
    marginBottom: 4
  },
  squareIcon: {
    height: 6,
    width: 6,
    backgroundColor: '#333'
  },
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

const mapStateToProps = state => ({
  searchQuery: state.forms.searchQuery,
  destination: state.forms.destination
});

export default connect(mapStateToProps, { updateQuery, updateDestination })(Header);
