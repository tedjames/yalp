import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Animated, Easing, TouchableWithoutFeedback, StatusBar } from 'react-native';
import FilterSection from './filterSection';
import FilterOption from './filterOption';
import FilterHeader from './filterHeader';
import FilterSubmit from './filterSubmit';

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    zIndex: 1
  },
  modal: {
    height: 375,
    width: '100%',
    backgroundColor: '#fff',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5
  },
  backdrop: {
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
  }
};

const fadeDuration = 500;
const fadeOpacity = 0.5;
const sectionOffset = 15;

class FilterModal extends Component {
  constructor(props) {
    super(props);
    this.animateOpen = this.animateOpen.bind(this);
    this.animateClose = this.animateClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      fontLoaded: false,
      backdropOpacity: new Animated.Value(0),
      modalPosition: new Animated.Value(-375),
      sectionPosition: new Animated.Value(-5),
      sectionOpacity: new Animated.Value(0)
    };
  }
  componentWillMount() {
    console.log('componentWillMount');
    this.handleOpen(this.props);
  }
  componentWillReceiveProps(props) {
    if (this.props.showFilterModal !== props.showFilterModal) {
      this.handleOpen(props);
    }
  }

  animateOpen() {
    Animated.parallel([
      Animated.timing(this.state.backdropOpacity, {
        toValue: fadeOpacity,
        duration: fadeDuration,
        useNativeDriver: true
      }),
      Animated.timing(this.state.modalPosition, {
        toValue: 0,
        duration: 350,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true
      }),
      Animated.timing(this.state.sectionOpacity, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.sin),
        useNativeDriver: true
      }),
      Animated.timing(this.state.sectionPosition, {
        toValue: 0,
        duration: 550,
        delay: 50,
        easing: Easing.out(Easing.sin),
        useNativeDriver: true
      })
    ]).start();
  }
  animateClose() {
    Animated.parallel([
      Animated.timing(this.state.backdropOpacity, {
        toValue: 0,
        duration: fadeDuration,
        useNativeDriver: true
      }),
      Animated.timing(this.state.modalPosition, {
        toValue: -375,
        easing: Easing.poly(2),
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(this.state.sectionOpacity, {
        toValue: 0,
        duration: 700,
        easing: Easing.out(Easing.sin),
        useNativeDriver: true
      }),
      Animated.timing(this.state.sectionPosition, {
        toValue: -sectionOffset,
        duration: 650,
        delay: 50,
        easing: Easing.out(Easing.sin),
        useNativeDriver: true
      })
    ]).start();
  }

  handleOpen(props) {
    const { showFilterModal } = props;
    if (typeof showFilterModal === 'undefined') return null;
    return showFilterModal ? this.animateOpen() : this.animateClose();
  }

  handleClose() {
    Animated.parallel([
      Animated.timing(this.state.backdropOpacity, {
        toValue: 0,
        duration: 310,
        easing: Easing.out(Easing.sin),
        useNativeDriver: true
      }),
      Animated.timing(this.state.modalPosition, {
        toValue: -375,
        easing: Easing.inOut(Easing.back(1.25)),
        duration: 400,
        useNativeDriver: true
      }),
      Animated.timing(this.state.sectionOpacity, {
        toValue: 0,
        duration: 250,
        easing: Easing.out(Easing.sin),
        useNativeDriver: true
      }),
      Animated.timing(this.state.sectionPosition, {
        toValue: -sectionOffset,
        duration: 250,
        easing: Easing.out(Easing.back(2.5)),
        useNativeDriver: true
      })
    ]).start(() => this.props.toggle());
  }

  handleSubmit() {
    Animated.parallel([
      Animated.timing(this.state.backdropOpacity, {
        toValue: 0,
        duration: 310,
        easing: Easing.out(Easing.sin),
        useNativeDriver: true
      }),
      Animated.timing(this.state.modalPosition, {
        toValue: -375,
        easing: Easing.inOut(Easing.back(1.25)),
        duration: 400,
        useNativeDriver: true
      }),
      Animated.timing(this.state.sectionOpacity, {
        toValue: 0,
        duration: 250,
        easing: Easing.out(Easing.sin),
        useNativeDriver: true
      }),
      Animated.timing(this.state.sectionPosition, {
        toValue: -sectionOffset,
        duration: 250,
        easing: Easing.out(Easing.back(2.5)),
        useNativeDriver: true
      })
    ]).start(() => this.props.toggle());
  }

  render() {
    const { sectionPosition, sectionOpacity } = this.state;
    const { showFilterModal } = this.props;
    const backdropOpacity = { opacity: this.state.backdropOpacity };
    const modalPosition = { position: 'absolute', top: 0, transform: [{ translateY: this.state.modalPosition }] };

    if (showFilterModal) {
      return (
        <View style={styles.container}>
          <StatusBar hidden animated />
          <TouchableWithoutFeedback onPress={this.handleClose} style={{ position: 'absolute' }}>
            <Animated.View style={[styles.backdrop, backdropOpacity]} />
          </TouchableWithoutFeedback>
          <Animated.View style={[styles.modal, modalPosition]}>
            <ScrollView style={styles.scrollview}>
              <FilterHeader
                handleClose={this.handleClose}
              />
              <FilterSection name="Sort by" sectionPosition={sectionPosition} sectionOpacity={sectionOpacity}>
                <FilterOption name="Best Match" iconType="simplelineicons" iconName="like" iconSize={20} />
                <FilterOption name="Distance" iconType="simplelineicons" iconName="compass" iconSize={20} />
                <FilterOption name="Rating" iconType="simplelineicons" iconName="badge" iconSize={20} />
                <FilterOption name="Most Reviewed" iconType="simplelineicons" iconName="fire" iconSize={20} />
              </FilterSection>
              <FilterSection name="Planning for" sectionPosition={sectionPosition} sectionOpacity={sectionOpacity}>
                <FilterOption name="Delivery" iconName="ios-car-outline" />
                <FilterOption name="Pickup" iconName="ios-cart-outline" iconSize={26} />
                <FilterOption name="Reservations" iconName="ios-calendar-outline" />
              </FilterSection>
              <FilterSection name="Preferences" sectionPosition={sectionPosition} sectionOpacity={sectionOpacity}>
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

            <FilterSubmit onSubmit={this.handleSubmit} />
          </Animated.View>

        </View>
      );
    } return <View />;
  }
}

const mapStateToProps = state => ({
  showFilterModal: state.nav.showFilterModal
});

export default connect(mapStateToProps)(FilterModal);
