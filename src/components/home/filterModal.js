import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Font, LinearGradient } from 'expo';
import { connect } from 'react-redux';
import { toggleFilterModal, toggleStatusBar } from '../../Actions';
import FilterSection from './filterSection';
import FilterOption from './filterOption';
import FilterHeader from './filterHeader';

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modal: {
    height: 365,
    width: '100%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.185,
    shadowRadius: 12,
    elevation: 1,
  },
  submitButton: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
    height: 50,
    justifyContent: 'center'
  },
  submitText: {
    alignSelf: 'center',
    fontFamily: 'rubik-regular',
    fontSize: 13,
    color: '#222',
    letterSpacing: 1
  },
};

class FilterModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-regular': require('../../../assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-semibold': require('../../../assets/fonts/OpenSans-SemiBold.ttf'),
      'open-sans-light': require('../../../assets/fonts/OpenSans-Light.ttf'),
      'open-sans-bold': require('../../../assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-extrabold': require('../../../assets/fonts/OpenSans-ExtraBold.ttf'),
      'rubik-light': require('../../../assets/fonts/Rubik-Light.ttf'),
      'rubik-medium': require('../../../assets/fonts/Rubik-Medium.ttf'),
      'rubik-regular': require('../../../assets/fonts/Rubik-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    const { fontLoaded } = this.state;
    if (this.props.showFilterModal) {
      return (
        <View style={styles.container}>
          <View style={styles.modal}>
            <ScrollView style={styles.scrollview}>
              <FilterHeader />
              <FilterSection name="Sort by">
                <FilterOption name="Best Match" iconType="simplelineicons" iconName="like" iconSize={20} />
                <FilterOption name="Distance" iconType="simplelineicons" iconName="compass" iconSize={20} />
                <FilterOption name="Rating" iconType="simplelineicons" iconName="badge" iconSize={20} />
                <FilterOption name="Most Reviewed" iconType="simplelineicons" iconName="fire" iconSize={20} />
              </FilterSection>
              <FilterSection name="Planning for">
                <FilterOption name="Delivery" iconName="ios-car-outline" />
                <FilterOption name="Pickup" iconName="ios-cart-outline" iconSize={26} />
                <FilterOption name="Reservations" iconName="ios-calendar-outline" />
              </FilterSection>
              <FilterSection name="Preferences">
                <FilterOption name="Accepts Credit Cards" iconName="ios-card-outline" />
                <FilterOption name="Free Wifi" iconName="ios-wifi-outline" />
                <FilterOption name="Live Music" iconName="ios-musical-notes-outline" />
                <FilterOption name="Happy Hour" iconName="ios-wine-outline" />
                <FilterOption name="Vegetarian Friendly" iconName="ios-nutrition-outline" />
                <FilterOption name="Wheelchair Accessible" iconType="fontawesome" iconName="wheelchair" iconSize={20} />
                <FilterOption name="Dogs Allowed" iconName="ios-paw-outline" />
                <FilterOption name="Military Discount" iconName="ios-jet-outline" />
              </FilterSection>
            </ScrollView>

            <View style={styles.submitButton}>
              <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={() => this.props.toggleStatusBar()}>
                {fontLoaded ? <Text style={styles.submitText}>DONE</Text> : null}
              </TouchableOpacity>
            </View>
          </View>

        </View>
      );
    } return null;
  }
}

const mapStateToProps = state => ({
  showFilterModal: state.nav
});

export default connect(mapStateToProps, { toggleFilterModal, toggleStatusBar })(FilterModal);
