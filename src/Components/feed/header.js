import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import Arrow from './arrow';

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
      inputRange: [0, 110],
      outputRange: [85, 23],
      extrapolate: 'clamp',
      easing: Easing.ease.out
    });
    const headerTextLeft = scrollY.interpolate({
      inputRange: [0, 110],
      outputRange: [15, 65],
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
      inputRange: [0, 110],
      outputRange: [1, 0.8],
      extrapolate: 'clamp'
    });
    const arrowRight = scrollY.interpolate({
      inputRange: [0, 110],
      outputRange: [0, 25],
      extrapolate: 'clamp'
    });
    const headerHeight = scrollY.interpolate({
      inputRange: [0, 110],
      outputRange: [135, 65],
      extrapolate: 'clamp',
      easing: Easing.ease.out
    });
    const sectionOpacity1 = scrollY.interpolate({
      inputRange: [0, sectionHeight * 0.5],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });
    const sectionOpacity2 = scrollY.interpolate({
      inputRange: [sectionHeight / 1.25, sectionHeight, sectionHeight * 2],
      outputRange: [0, 1, 0],
      extrapolate: 'clamp'
    });
    const sectionOpacity3 = scrollY.interpolate({
      inputRange: [(sectionHeight * 2) / 1.25, sectionHeight * 2, sectionHeight * 3],
      outputRange: [0, 1, 0],
      extrapolate: 'clamp'
    });
    const sectionOpacity4 = scrollY.interpolate({
      inputRange: [(sectionHeight * 3) / 1.25, sectionHeight * 3, sectionHeight * 4],
      outputRange: [0, 1, 0],
      extrapolate: 'clamp'
    });
    const sectionOpacity5 = scrollY.interpolate({
      inputRange: [(sectionHeight * 4) / 1.25, sectionHeight * 4],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });
    return (
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <Arrow arrowRight={arrowRight} arrowScale={arrowScale} />
        <Animated.Text
          style={[styles.headerText,
            {
              top: headerTextTop,
              left: headerTextLeft,
              color: headerTextColor,
              fontSize: headerFontSize,
              opacity: sectionOpacity1
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
              opacity: sectionOpacity2
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
              opacity: sectionOpacity3
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
              opacity: sectionOpacity4
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
              opacity: sectionOpacity5
            }]}
        >
          Top Categories
        </Animated.Text>
      </Animated.View>
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
