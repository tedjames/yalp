import React, { Component } from 'react';
import { View, StatusBar, Animated, PanResponder, Dimensions } from 'react-native';
import Shortcuts from './shortcuts';
import SearchBar from './searchBar';
import SearchModal from '../search';
import FilterModal from '../filter';
import Maps from './maps';
import Feed from '../feed';

const { height } = Dimensions.get('window');
const MINIMIZED_POSITION = height / 1.085;
const MAXIMIZED_POSITION = 0;
const VELOCITY_THRESHOLD = 1.5;
const SWIPE_THRESHOLD = 220;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.forceMinimize = this.forceMinimize.bind(this);
    this.forceExpand = this.forceExpand.bind(this);

    const position = new Animated.Value(MINIMIZED_POSITION);
    const translateY = new Animated.Value(0);

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
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

    this.state = { panResponder, position, translateY, minimized: true };
  }
  // componentWillReceiveProps(props) {
  //   if (this.props.showSearchModal !== props.showSearchModal) {
  //     props.showSearchModal ? this.forceHide() : this.forceShow();
  //   }
  // }
  forceMinimize() {
    this.setState({ minimized: true });
    Animated.spring(this.state.position, {
      toValue: MINIMIZED_POSITION
    }).start();
  }
  forceExpand() {
    this.setState({ minimized: false });
    Animated.spring(this.state.position, {
      toValue: 0
    }).start();
  }
  forceHide() {
    Animated.timing(this.state.translateY, {
      toValue: 100
    }).start();
  }
  forceShow() {
    Animated.timing(this.state.translateY, {
      toValue: 0
    }).start();
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
      zIndex: this.state.minimized ? -5 : 3
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
        <Feed containerStyle={containerStyle} pan={this.state.panResponder.panHandlers} />
      </View>
    );
  }
}
