import React, { Component } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Arrow extends Component {
  constructor(props) {
    super(props);
    this.pulseArrows = this.pulseArrows.bind(this);

    this.state = {
      bottomArrowOpacity: new Animated.Value(0.55),
      midArrowOpacity: new Animated.Value(0.55),
      topArrowOpacity: new Animated.Value(0.55)
    };
  }
  componentDidMount() {
    this.pulseArrows();
  }
  pulseArrows() {
    const { topArrowOpacity, midArrowOpacity, bottomArrowOpacity } = this.state;
    Animated.sequence([
      Animated.timing(bottomArrowOpacity, {
        toValue: 0.99,
        duration: 130,
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
          toValue: 0.55,
          duration: 125,
          useNativeDriver: true
        }),
        Animated.timing(midArrowOpacity, {
          toValue: 0.65,
          duration: 115,
          useNativeDriver: true
        }),
        Animated.timing(topArrowOpacity, {
          toValue: 0.775,
          duration: 115,
          useNativeDriver: true
        })
      ]),
      Animated.parallel([
        Animated.timing(midArrowOpacity, {
          toValue: 0.55,
          duration: 105,
          useNativeDriver: true
        }),
        Animated.timing(topArrowOpacity, {
          toValue: 0.65,
          duration: 105,
          useNativeDriver: true
        })
      ]),
      Animated.timing(topArrowOpacity, {
        toValue: 0.55,
        duration: 120,
        useNativeDriver: true
      }),
      Animated.delay(800)
    ]).start(() => this.pulseArrows());
  }
  render() {
    const { topArrowOpacity, midArrowOpacity, bottomArrowOpacity } = this.state;
    return (
      <TouchableOpacity style={styles.iconContainer} activeOpacity={0.6}>
        <Animated.View style={{ flex: 1, opacity: topArrowOpacity }}>
          <Ionicons style={styles.backIcon} name="ios-arrow-up" size={25} />
        </Animated.View>
        <Animated.View style={{ flex: 1, opacity: midArrowOpacity }}>
          <Ionicons style={[styles.backIcon, { bottom: 21 }]} name="ios-arrow-up" size={25} />
        </Animated.View>
        <Animated.View style={{ flex: 1, opacity: bottomArrowOpacity }}>
          <Ionicons style={[styles.backIcon, { bottom: 42 }]} name="ios-arrow-up" size={25} />
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  backIcon: {
    flex: 1,
    color: '#e8e8e8',
    backgroundColor: 'transparent',
    transform: [{ scaleX: 1.11 }, { scaleY: 0.725 }]
  },
  iconContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    paddingLeft: 20,
    paddingTop: 20,
    opacity: 0.9
  }
};
