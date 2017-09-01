import React, { Component } from 'react';
import { View, ScrollView, Text, Dimensions, StatusBar, Animated, Easing } from 'react-native';
import Header from './header';

const { width, height } = Dimensions.get('window');
const cardWidth = width / 1.1;
const cardHeight = height / 2.5;
const sectionHeight = height / 2;

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
      scrollPosition: 0
    };
  }
  render() {
    if (this.props.minimized) {
      return null;
    }
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, 110],
      outputRange: [135, 65],
      extrapolate: 'clamp',
      easing: Easing.ease.out
    });
    const sectionOpacity = this.state.scrollY.interpolate({
      inputRange: [0, sectionHeight * 0.9],
      outputRange: [1, 0],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    const sectionOpacity2 = this.state.scrollY.interpolate({
      inputRange: [sectionHeight * 1, sectionHeight * 1.9],
      outputRange: [1, 0],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    const sectionOpacity3 = this.state.scrollY.interpolate({
      inputRange: [sectionHeight * 2, sectionHeight * 2.9],
      outputRange: [1, 0],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    const sectionOpacity4 = this.state.scrollY.interpolate({
      inputRange: [sectionHeight * 3, sectionHeight * 3.9],
      outputRange: [1, 0],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    const sectionOpacity5 = this.state.scrollY.interpolate({
      inputRange: [sectionHeight * 4, sectionHeight * 4.9],
      outputRange: [1, 0],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    const sectionHeaderOpacity = this.state.scrollY.interpolate({
      inputRange: [0, sectionHeight * 1.05],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });
    const sectionHeaderOpacity2 = this.state.scrollY.interpolate({
      inputRange: [sectionHeight * 1.05, sectionHeight * 2.05],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });
    const sectionHeaderOpacity3 = this.state.scrollY.interpolate({
      inputRange: [sectionHeight * 2.05, sectionHeight * 3.05],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });
    const sectionHeaderOpacity4 = this.state.scrollY.interpolate({
      inputRange: [sectionHeight * 3.05, sectionHeight * 4.05],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });
    const sectionHeaderOpacity5 = this.state.scrollY.interpolate({
      inputRange: [sectionHeight * 4.05, sectionHeight * 5.05],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });
    const onScroll = Animated.event(
      [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
    );
    return (
      <View style={styles.container}>
      <Animatable.View animation="fadeIn" delay={delay} style={styles.container}>
        <StatusBar hidden animated />
        <View style={{ height: 65, position: 'absolute', top: 0, width: '100%', backgroundColor: '#0a0a0a' }} />
        <Header sectionHeight={sectionHeight} scrollY={this.state.scrollY} />
        <Animated.ScrollView
          style={[styles.scrollView, { top: headerHeight }]}
          snapToInterval={sectionHeight}
          decelerationRate={'fast'}
          scrollEventThrottle={16}
          onScroll={onScroll}
        >
          <View style={styles.feedSection}>
            <ScrollView indicatorStyle="white" snapToInterval={cardWidth} decelerationRate={'fast'} horizontal>
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
            </ScrollView>
          </View>
          <View style={styles.feedSection}>
            <Animated.Text style={[styles.sectionText, { opacity: sectionHeaderOpacity }]}>
              Recommended
            </Animated.Text>
            <ScrollView indicatorStyle="white" snapToInterval={cardWidth} decelerationRate={'fast'} horizontal>
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
            </ScrollView>
          </View>
          <View style={styles.feedSection}>
            <Animated.Text style={[styles.sectionText, { opacity: sectionHeaderOpacity2 }]}>
              Delivery near you
            </Animated.Text>
            <ScrollView indicatorStyle="white" snapToInterval={cardWidth} decelerationRate={'fast'} horizontal>
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
            </ScrollView>
          </View>
          <View style={styles.feedSection}>
            <Animated.Text style={[styles.sectionText, { opacity: sectionHeaderOpacity3 }]}>
              Bookmarks
            </Animated.Text>
            <ScrollView indicatorStyle="white" snapToInterval={cardWidth} decelerationRate={'fast'} horizontal>
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
            </ScrollView>
          </View>
          <View style={styles.feedSection}>
            <Animated.Text style={[styles.sectionText, { opacity: sectionHeaderOpacity4 }]}>
              Top Categories
            </Animated.Text>
            <ScrollView indicatorStyle="white" snapToInterval={cardWidth} decelerationRate={'fast'} horizontal>
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
            </ScrollView>
          </View>
          <View style={styles.feedSection}>
            <Text style={styles.sectionText}>More Categories</Text>
            <ScrollView indicatorStyle="white" snapToInterval={cardWidth} decelerationRate={'fast'} horizontal>
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
            </ScrollView>
          </View>
          <View style={styles.footer} />
        </Animated.ScrollView>
      </View>
      </Animatable.View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: '#252525',
    zIndex: 10
  },
  sectionText: {
    color: '#eee',
    fontFamily: 'open-sans-light',
    fontSize: 20,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 15,
    backgroundColor: 'transparent'
  },
  scrollView: {
    flex: 1,
    height: '100%'
  },
  feedSection: {
    marginTop: 25
  },
  card: {
    height: cardHeight,
    width: cardWidth,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
    alignSelf: 'center',
    backgroundColor: '#f5f5f5'
  },
  footer: {
    flex: 1,
    height: 150,
    width: '100%'
  }
};

export { Feed };
