import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import Arrow from './arrow';
import * as Animatable from 'react-native-animatable';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerText: 'Popular near you',
    };
  }
  render() {
    const { scrollY, sectionHeight } = this.props;
    const headerTextTop = scrollY.interpolate({
      inputRange: [10, sectionHeight * 0.65],
      outputRange: [85, 23],
      extrapolate: 'clamp',
      easing: Easing.ease.out
    });
    const headerTextLeft = scrollY.interpolate({
      inputRange: [0, sectionHeight * 0.3, sectionHeight * 0.65],
      outputRange: [15, 50, 65],
      extrapolate: 'clamp',
      easing: Easing.ease.out
    });
    const headerTextColor = scrollY.interpolate({
      inputRange: [0, 110],
      outputRange: ['#eee', '#ddd'],
      extrapolate: 'clamp',
      easing: Easing.ease.out
    });
    const headerFontSize = scrollY.interpolate({
      inputRange: [0, 110],
      outputRange: [28, 21],
      extrapolate: 'clamp'
    });
    const arrowScale = scrollY.interpolate({
      inputRange: [0, sectionHeight * 0.5],
      outputRange: [1, 0.825],
      extrapolate: 'clamp'
    });
    const arrowOpacity = scrollY.interpolate({
      inputRange: [0, sectionHeight * 0.9],
      outputRange: [1, 0.9],
      extrapolate: 'clamp'
    });
    const arrowRight = scrollY.interpolate({
      inputRange: [0, sectionHeight * 1],
      outputRange: [0, 11],
      extrapolate: 'clamp'
    });
    const arrowTop = scrollY.interpolate({
      inputRange: [0, sectionHeight * 0.9],
      outputRange: [0, 31],
      extrapolate: 'clamp'
    });
    const arrowRotate = scrollY.interpolate({
      inputRange: [0, sectionHeight * 0.9],
      outputRange: ['0deg', '90deg'],
      extrapolate: 'clamp'
    });
    const headerHeight = scrollY.interpolate({
      inputRange: [25, sectionHeight * 0.65],
      outputRange: [135, 65],
      extrapolate: 'clamp',
      easing: Easing.ease.out
    });
    const headerOpacity = scrollY.interpolate({
      inputRange: [0, sectionHeight * 1.25],
      outputRange: [1, 0],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    const headerOpacity2 = scrollY.interpolate({
      inputRange: [sectionHeight / 1.25, sectionHeight, sectionHeight * 2],
      outputRange: [0, 1, 0],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    const headerOpacity3 = scrollY.interpolate({
      inputRange: [(sectionHeight * 2) / 1.25, sectionHeight * 2, sectionHeight * 3],
      outputRange: [0, 1, 0],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    const headerOpacity4 = scrollY.interpolate({
      inputRange: [(sectionHeight * 3) / 1.25, sectionHeight * 3, sectionHeight * 4],
      outputRange: [0, 1, 0],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    const headerOpacity5 = scrollY.interpolate({
      inputRange: [(sectionHeight * 4) / 1.25, sectionHeight * 4],
      outputRange: [0, 1],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    return (
      <Animatable.View animation="fadeInUp" duration={1250} style={{ zIndex: 5 }}>
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <Arrow
            arrowRight={arrowRight}
            arrowScale={arrowScale}
            arrowRotate={arrowRotate}
            arrowTop={arrowTop}
            arrowOpacity={arrowOpacity}
          />
          <Animated.Text
            style={[styles.headerText,
              {
                top: headerTextTop,
                left: headerTextLeft,
                color: headerTextColor,
                fontSize: headerFontSize,
                opacity: headerOpacity
              }]}
          >
            Popular near you
          </Animated.Text>
          <Animated.Text
            style={[styles.headerText,
              {
                top: headerTextTop,
                left: headerTextLeft,
                color: headerTextColor,
                fontSize: headerFontSize,
                opacity: headerOpacity2
              }]}
          >
            Recommended
          </Animated.Text>
          <Animated.Text
            style={[styles.headerText,
              {
                top: headerTextTop,
                left: headerTextLeft,
                color: headerTextColor,
                fontSize: headerFontSize,
                opacity: headerOpacity3
              }]}
          >
            Delivery near you
          </Animated.Text>
          <Animated.Text
            style={[styles.headerText,
              {
                top: headerTextTop,
                left: headerTextLeft,
                color: headerTextColor,
                fontSize: headerFontSize,
                opacity: headerOpacity4
              }]}
          >
            Bookmarks
          </Animated.Text>
          <Animated.Text
            style={[styles.headerText,
              {
                top: headerTextTop,
                left: headerTextLeft,
                color: headerTextColor,
                fontSize: headerFontSize,
                opacity: headerOpacity5
              }]}
          >
            Top Categories
          </Animated.Text>
        </Animated.View>
      </Animatable.View>
    );
  }
}

const styles = {
  header: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    backgroundColor: '#0a0a0a',
    zIndex: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.65,
    shadowRadius: 14,
    elevation: 1,
  },
  headerText: {
    fontFamily: 'open-sans-light',
    fontSize: 28,
    position: 'absolute',
    backgroundColor: 'transparent'
  },
};
