import React, { Component } from 'react';
import { View, ScrollView, Text, Dimensions } from 'react-native';
import Arrow from './arrow';

const { width } = Dimensions.get('window');
const cardWidth = width / 1.1;

class Feed extends Component {
  render() {
    if (this.props.minimized) {
      return null;
    }
    return (
      <View style={styles.container}>
        <StatusBar hidden animated />
        <View style={styles.header}>
          <Arrow />
          <Text style={styles.headerText}>Popular near you</Text>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.feedSection}>
            <ScrollView indicatorStyle="white" snapToInterval={cardWidth} horizontal>
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
            </ScrollView>
          </View>
          <View style={styles.feedSection}>
            <Text style={styles.sectionText}>Recommended</Text>
            <ScrollView indicatorStyle="white" snapToInterval={cardWidth} horizontal>
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
            </ScrollView>
          </View>
          <View style={styles.feedSection}>
            <Text style={styles.sectionText}>Recommended</Text>
            <ScrollView indicatorStyle="white" snapToInterval={cardWidth} horizontal>
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
              <View style={styles.card} />
            </ScrollView>
          </View>
          <View style={styles.footer} />
        </ScrollView>
      </View>
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
    backgroundColor: '#1a1a1a',
    zIndex: 10
  },
  header: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: 135,
    backgroundColor: '#0a0a0a'
  },
  headerText: {
    color: '#fff',
    fontFamily: 'open-sans-light',
    fontSize: 28,
    position: 'absolute',
    top: 85,
    left: 20,
    backgroundColor: 'transparent'
  },
  sectionText: {
    color: '#fff',
    fontFamily: 'open-sans-light',
    fontSize: 28,
    marginTop: 5,
    marginBottom: 15,
    marginLeft: 20,
    backgroundColor: 'transparent'
  },
  scrollView: {
    flex: 1,
    top: 135,
    height: '100%'
  },
  feedSection: {
    marginTop: 25
  },
  card: {
    height: 275,
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
