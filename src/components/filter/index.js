import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Animated, Easing, TouchableWithoutFeedback, StatusBar } from 'react-native';
import { toggleFilter } from '../../Actions';
import Section from './section';
import Option from './option';
import Header from './header';
import Submit from './submit';

const fadeDuration = 500;
const fadeOpacity = 0.5;
const sectionOffset = 20;
const modalHeight = 395;

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    zIndex: 1
  },
  modal: {
    height: modalHeight,
    width: '100%',
    backgroundColor: '#fff',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    paddingTop: 20
  },
  backdrop: {
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
  }
};

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
      modalPosition: new Animated.Value(-modalHeight),
      sectionPosition: new Animated.Value(-5),
      sectionOpacity: new Animated.Value(0)
    };
  }
  componentWillMount() {
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
        toValue: -20,
        duration: 350,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true
      }),
      Animated.timing(this.state.sectionOpacity, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.poly(1)),
        useNativeDriver: true
      }),
      Animated.timing(this.state.sectionPosition, {
        toValue: 0,
        duration: 500,
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
        duration: 310,
        easing: Easing.out(Easing.sin),
        useNativeDriver: true
      }),
      Animated.timing(this.state.modalPosition, {
        toValue: -modalHeight,
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
        toValue: -modalHeight,
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
    ]).start(() => this.props.toggleFilter());
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
        toValue: -modalHeight,
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
    ]).start(() => this.props.toggleFilter());
  }

  render() {
    const { showFilterModal } = this.props;
    const backdropOpacity = { opacity: this.state.backdropOpacity };
    const modalPosition = { position: 'absolute', top: 0, transform: [{ translateY: this.state.modalPosition }] };
    const sectionPosition = { transform: [{ translateY: this.state.sectionPosition }] };
    const sectionOpacity = { opacity: this.state.sectionOpacity };

    if (showFilterModal) {
      return (
        <View style={styles.container}>
          <StatusBar hidden animated />
          <TouchableWithoutFeedback onPress={this.handleClose} style={{ position: 'absolute' }}>
            <Animated.View style={[styles.backdrop, backdropOpacity]} />
          </TouchableWithoutFeedback>
          <Animated.View style={[styles.modal, modalPosition]}>
            <ScrollView style={styles.scrollview}>
              <Header
                handleClose={this.handleClose}
                headerOpacity={sectionOpacity}
                headerPosition={sectionPosition}
              />
              <Section name="Sort by" sectionPosition={sectionPosition} sectionOpacity={sectionOpacity}>
                <Option name="Best Match" iconType="simplelineicons" iconName="like" iconSize={20} />
                <Option name="Distance" iconType="simplelineicons" iconName="compass" iconSize={20} />
                <Option name="Rating" iconType="simplelineicons" iconName="badge" iconSize={20} />
                <Option name="Most Reviewed" iconType="simplelineicons" iconName="fire" iconSize={20} />
              </Section>
              <Section name="Planning for" sectionPosition={sectionPosition} sectionOpacity={sectionOpacity}>
                <Option name="Delivery" iconName="ios-car-outline" />
                <Option name="Pickup" iconName="ios-cart-outline" iconSize={26} />
                <Option name="Reservations" iconName="ios-calendar-outline" />
              </Section>
              <Section name="Preferences" sectionPosition={sectionPosition} sectionOpacity={sectionOpacity}>
                <Option name="Accepts Credit Cards" iconName="ios-card-outline" />
                <Option name="Free Wifi" iconName="ios-wifi-outline" />
                <Option name="Live Music" iconName="ios-musical-notes-outline" />
                <Option name="Happy Hour" iconName="ios-wine-outline" />
                <Option name="Vegetarian Friendly" iconName="ios-nutrition-outline" />
                <Option name="Wheelchair Accessible" iconType="fontawesome" iconName="wheelchair" iconSize={20} />
                <Option name="Dogs Allowed" iconName="ios-paw-outline" />
                <Option name="Military Discount" iconName="ios-jet-outline" />
              </Section>
            </ScrollView>

            <Submit onSubmit={this.handleSubmit} />
          </Animated.View>

        </View>
      );
    } return <View />;
  }
}

const mapStateToProps = state => ({
  showFilterModal: state.nav.showFilterModal
});

export default connect(mapStateToProps, { toggleFilter })(FilterModal);
