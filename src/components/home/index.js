import React, { Component } from 'react';
import { View, StatusBar, Animated, PanResponder, Dimensions, Easing } from 'react-native';
import Shortcuts from './shortcuts';
import SearchBar from './searchBar';
import SearchModal from '../search';
import FilterModal from '../filter';
import Maps from './maps';
import { FeedContainer, Feed } from '../feed';

const { height } = Dimensions.get('window');
const MINIMIZED_POSITION = height / 1.085;
const MAXIMIZED_POSITION = 0;
const VELOCITY_THRESHOLD = 1.5;
const SWIPE_THRESHOLD = 220;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.forceMinimize = this.forceMinimize.bind(this);
    this.forceMinimizePress = this.forceMinimizePress.bind(this);
    this.forceExpand = this.forceExpand.bind(this);
    this.forceExpandPress = this.forceExpandPress.bind(this);

    const position = new Animated.Value(MINIMIZED_POSITION);
    const translateY = new Animated.Value(0);

    // returns false if a gesture was a tap/press and true if it's a swipe in any direction
    const verifySwipe = ({ dx, dy }) => dx !== 0 && dy !== 0;

    const panResponder = PanResponder.create({
      // These 3 lifecycle functions disable panResponder on tap/press (fixes TouchableOpacity bug)
      onStartShouldSetPanResponder: (event, gesture) => verifySwipe(gesture),
      onStartShouldSetPanResponderCapture: (event, gesture) => verifySwipe(gesture),
      onMoveShouldSetPanResponderCapture: (event, gesture) => verifySwipe(gesture),
      onPanResponderMove: (event, gesture) => {
        this.setState({ showBackdrop: true });
        if (this.state.minimized) {
          position.setValue(MINIMIZED_POSITION + gesture.dy);
        } else {
          position.setValue(MAXIMIZED_POSITION + gesture.dy);
        }
      },
      onPanResponderRelease: (event, gesture) => {
        const { minimized } = this.state;
        console.log('gesture detected: ', gesture);
        if (minimized) {
          // if gesture is past the velocity or swipe thresholds...
          gesture.dy < -SWIPE_THRESHOLD || gesture.vy < -VELOCITY_THRESHOLD ?
          this.forceExpand() : this.forceMinimize();
        } else {
          gesture.dy > SWIPE_THRESHOLD || gesture.vy > VELOCITY_THRESHOLD ?
          this.forceMinimize() : this.forceExpand();
        }
      }
    });

    this.state = {
      panResponder,
      position,
      translateY,
      minimized: true,
      showBackdrop: false,
      delay: 265
    };
  }

  forceMinimize() {
    this.setState({ minimized: true });
    Animated.spring(this.state.position, {
      toValue: MINIMIZED_POSITION
    }).start(this.setState({ showBackdrop: false }));
  }
  forceMinimizePress() {
    this.setState({ minimized: true });
    Animated.spring(this.state.position, {
      toValue: MINIMIZED_POSITION,
      duration: 300,
      easing: Easing.in(Easing.poly(4))
    }).start(this.setState({ showBackdrop: false }));
  }
  forceExpand() {
    this.setState({ showBackdrop: true, delay: 15 });
    Animated.spring(this.state.position, {
      toValue: 0,
      duration: 100
    }).start(this.setState({ minimized: false }));
  }
  forceExpandPress() {
    this.setState({ showBackdrop: true, delay: 265 });
    Animated.timing(this.state.position, {
      toValue: 0,
      duration: 1000,
      easing: Easing.out(Easing.poly(4))
    }).start(this.setState({ minimized: false }));
  }
  render() {
    const borderRadius = this.state.position.interpolate({
      inputRange: [0, MINIMIZED_POSITION],
      outputRange: [0, 6],
      extrapolate: 'clamp'
    });
    const containerWidth = this.state.position.interpolate({
      inputRange: [0, MINIMIZED_POSITION],
      outputRange: ['100%', '95%'],
      extrapolate: 'clamp'
    });
    const containerColor = this.state.position.interpolate({
      inputRange: [0, MINIMIZED_POSITION],
      outputRange: ['#000', '#cfcfcf'],
      extrapolate: 'clamp'
    });
    const containerStyle = {
      top: this.state.position,
      borderTopRightRadius: borderRadius,
      borderTopLeftRadius: borderRadius,
      width: containerWidth,
      zIndex: 4,
      backgroundColor: containerColor,
      transform: [{ translateY: this.state.translateY }]
    };
    const backdropColor = this.state.position.interpolate({
      inputRange: [0, MINIMIZED_POSITION],
      outputRange: ['#000', 'rgba(0, 0, 0, 0)'],
      extrapolate: 'clamp'
    });
    const backdropStyle = {
      backgroundColor: backdropColor,
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: 0,
      zIndex: this.state.showBackdrop ? 3 : -5
    };
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={false} animated />
        <FilterModal />
        <SearchModal />
        <Animated.View style={backdropStyle} />
        <Maps />
        <SearchBar />
        <Shortcuts />
        <FeedContainer
          containerStyle={containerStyle}
          pan={this.state.panResponder.panHandlers}
          forceMinimize={this.forceMinimize}
          forceExpand={this.forceExpandPress}
        />
        <Feed
          delay={this.state.delay}
          minimized={this.state.minimized}
          forceMinimize={this.forceMinimizePress}
        />
      </View>
    );
  }
}
