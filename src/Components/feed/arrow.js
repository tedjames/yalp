import React, { Component } from 'react';
import { Animated, TouchableOpacity, Easing } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Arrow extends Component {
  constructor(props) {
    super(props);
    this.pulseArrows = this.pulseArrows.bind(this);

    this.state = {
      bottomArrowOpacity: new Animated.Value(0.175),
      midArrowOpacity: new Animated.Value(0.25),
      topArrowOpacity: new Animated.Value(0.275)
    };
  }
  componentDidMount() {
    this.pulseArrows();
  }
  pulseArrows() {
    const { topArrowOpacity, midArrowOpacity, bottomArrowOpacity } = this.state;
    Animated.sequence([
      Animated.timing(bottomArrowOpacity, {
        toValue: 0.65,
        duration: 140,
        useNativeDriver: true
      }),
      Animated.parallel([
        Animated.timing(bottomArrowOpacity, {
          toValue: 0.45,
          duration: 125,
          useNativeDriver: true
        }),
        Animated.timing(midArrowOpacity, {
          toValue: 0.7,
          duration: 125,
          useNativeDriver: true
        })
      ]),
      Animated.parallel([
        Animated.timing(bottomArrowOpacity, {
          toValue: 0.175,
          duration: 115,
          useNativeDriver: true
        }),
        Animated.timing(midArrowOpacity, {
          toValue: 0.4,
          duration: 115,
          useNativeDriver: true
        }),
        Animated.timing(topArrowOpacity, {
          toValue: 0.6,
          duration: 115,
          useNativeDriver: true
        })
      ]),
      Animated.parallel([
        Animated.timing(midArrowOpacity, {
          toValue: 0.25,
          duration: 120,
          useNativeDriver: true
        }),
        Animated.timing(topArrowOpacity, {
          toValue: 0.35,
          duration: 120,
          useNativeDriver: true
        })
      ]),
      Animated.timing(topArrowOpacity, {
        toValue: 0.275,
        duration: 150,
        easing: Easing.ease.out,
        useNativeDriver: true
      }),
      Animated.delay(800)
    ]).start(() => this.pulseArrows());
  }
  render() {
    const { topArrowOpacity, midArrowOpacity, bottomArrowOpacity } = this.state;
    const { arrowScale, arrowRight, arrowRotate, arrowTop, arrowOpacity } = this.props;
    const iconSize = 23;
    return (
      <Animated.View style={[{ width: 100, opacity: arrowOpacity, right: arrowRight, top: arrowTop, transform: [{ scale: arrowScale }, { rotate: arrowRotate }] }]}>
        <TouchableOpacity style={styles.iconContainer} activeOpacity={0.6}>
          <Animated.View style={{ flex: 1, opacity: topArrowOpacity }}>
            <Ionicons style={styles.backIcon} name="ios-arrow-up" size={iconSize} />
          </Animated.View>
          <Animated.View style={{ flex: 1, opacity: midArrowOpacity }}>
            <Ionicons style={[styles.backIcon, { bottom: 0 }]} name="ios-arrow-up" size={iconSize} />
          </Animated.View>
          <Animated.View style={{ flex: 1, opacity: bottomArrowOpacity }}>
            <Ionicons style={[styles.backIcon, { bottom: 0 }]} name="ios-arrow-up" size={iconSize} />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styles = {
  backIcon: {
    color: '#e8e8e8',
    backgroundColor: 'transparent',
    transform: [{ scaleX: 1.12 }, { scaleY: 0.725 }]
  },
  iconContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    right: 5,
    opacity: 0.9,
    height: 60,
    width: 60,
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
};
