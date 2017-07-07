import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Animated, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class SearchModal extends Component {
  constructor(props) {
    super(props);
    this.animateOpen = this.animateOpen.bind(this);
    this.animateClose = this.animateClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);

    this.state = {
      fontLoaded: false,
      headerOpacity: new Animated.Value(0)
    };
  }
  componentWillMount() {
    this.handleOpen(this.props);
  }
  componentWillReceiveProps(props) {
    if (this.props.showSearchModal !== props.showSearchModal) {
      this.handleOpen(props);
    }
  }

  handleOpen(props) {
    console.log('handleOpen');
    const { showSearchModal } = props;
    if (typeof showSearchModal === 'undefined') {
      console.log('showSearchModal is UNDEFINED !!!');
      return null;
    }
    return showSearchModal ? this.animateOpen() : this.animateClose();
  }

  animateOpen() {
    console.log('animateOpen');
    Animated.timing(this.state.headerOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }

  animateClose() {
    console.log('animateClose');
    Animated.timing(this.state.headerOpacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }

  render() {
    const { showSearchModal } = this.props;

    if (showSearchModal) {
      console.log('showing search modal!');
      const headerOpacity = { opacity: this.state.headerOpacity };
      return (
        <View style={styles.container}>
          <Animated.View style={[styles.header, headerOpacity]}>
            <View style={styles.icons}>
              <TouchableOpacity style={styles.backButton}>
                <Ionicons name="ios-arrow-round-back" size={37} color="#111" />
              </TouchableOpacity>
              <View style={styles.circleIcon} />
              <View style={styles.line} />
              <View style={styles.squareIcon} />
            </View>
            <View style={styles.fields}>
              <View style={styles.field}>
                <Text style={styles.location}>Current Location</Text>
              </View>
              <View style={styles.field}>
                <Text style={styles.searchTerm}>What to eat?</Text>
              </View>
            </View>
          </Animated.View>
          <Animated.ScrollView style={[styles.feed, headerOpacity]}>
            <Text>Feed!</Text>
          </Animated.ScrollView>
        </View>
      );
    } return <View />;
  }
}

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    zIndex: 5
  },
  header: {
    height: 135,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 1,
  },
  icons: {
    alignItems: 'center',
    marginLeft: 2.5
  },
  backButton: {
    paddingRight: 20,
    paddingLeft: 22.5,
    paddingTop: 20
  },
  circleIcon: {
    height: 6,
    width: 6,
    borderRadius: 50,
    backgroundColor: '#43A0C4',
    marginTop: 5
  },
  line: {
    backgroundColor: '#bbb',
    height: 30,
    width: 1,
    marginTop: 4,
    marginBottom: 4
  },
  squareIcon: {
    height: 6,
    width: 6,
    backgroundColor: '#333'
  },
  feed: {
    flex: 4.20,
  },
};

const mapStateToProps = state => ({
  showSearchModal: state.nav.showSearchModal
});

export default connect(mapStateToProps)(SearchModal);
