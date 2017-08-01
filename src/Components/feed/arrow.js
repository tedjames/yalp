import React, { Component } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Arrow extends Component {
  constructor(props) {
    super(props);
    this.pulseArrows = this.pulseArrows.bind(this);

    this.state = {
      bottomArrowOpacity: new Animated.Value(0.4),
      midArrowOpacity: new Animated.Value(0.4),
      topArrowOpacity: new Animated.Value(0.4)
    };
  }
  componentDidMount() {
    this.pulseArrows();
  }
  pulseArrows() {
    const { topArrowOpacity, midArrowOpacity, bottomArrowOpacity } = this.state;
    Animated.sequence([
      Animated.timing(bottomArrowOpacity, {
        toValue: 0.85,
        duration: 140,
        useNativeDriver: true
      }),
      Animated.parallel([
        Animated.timing(bottomArrowOpacity, {
          toValue: 0.65,
          duration: 125,
          useNativeDriver: true
        }),
        Animated.timing(midArrowOpacity, {
          toValue: 0.9,
          duration: 125,
          useNativeDriver: true
        })
      ]),
      Animated.parallel([
        Animated.timing(bottomArrowOpacity, {
          toValue: 0.4,
          duration: 125,
          useNativeDriver: true
        }),
        Animated.timing(midArrowOpacity, {
          toValue: 0.65,
          duration: 115,
          useNativeDriver: true
        }),
        Animated.timing(topArrowOpacity, {
          toValue: 0.625,
          duration: 115,
          useNativeDriver: true
        })
      ]),
      Animated.parallel([
        Animated.timing(midArrowOpacity, {
          toValue: 0.4,
          duration: 110,
          useNativeDriver: true
        }),
        Animated.timing(topArrowOpacity, {
          toValue: 0.55,
          duration: 110,
          useNativeDriver: true
        })
      ]),
      Animated.timing(topArrowOpacity, {
        toValue: 0.4,
        duration: 150,
        useNativeDriver: true
      }),
      Animated.delay(800)
    ]).start(() => this.pulseArrows());
  }
  render() {
    const { topArrowOpacity, midArrowOpacity, bottomArrowOpacity } = this.state;
    const iconSize = 24;
    return (
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
    opacity: 0.9,
    height: 60,
    width: 60,
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
};
