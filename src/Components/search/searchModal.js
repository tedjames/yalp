import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Animated, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Font } from 'expo';
import Field from './field';
import CategoryButton from './categoryButton';

class SearchModal extends Component {
  constructor(props) {
    super(props);
    this.animateOpen = this.animateOpen.bind(this);
    this.animateClose = this.animateClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      fontLoaded: false,
      headerOpacity: new Animated.Value(0),
      locationField: '',
      searchField: ''
    };
  }

  componentWillMount() {
    this.handleOpen(this.props);
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans': require('../../../assets/fonts/OpenSans-Regular.ttf'),
      'rubik': require('../../../assets/fonts/Rubik-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
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
    Animated.timing(this.state.headerOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }

  animateClose() {
    Animated.timing(this.state.headerOpacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }

  handleClose() {
    Animated.timing(this.state.headerOpacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start(() => this.props.toggle());
  }

  render() {
    const { showSearchModal } = this.props;

    if (showSearchModal) {
      console.log('showing search modal!');
      const headerOpacity = { opacity: this.state.headerOpacity };
      const { fontLoaded } = this.state;
      return (
        <View style={styles.container}>
          <Animated.View style={[styles.header, headerOpacity]}>
            <View style={styles.icons}>
              <TouchableOpacity onPress={this.handleClose} style={styles.backButton}>
                <Ionicons name="ios-arrow-round-back" size={37} color="#111" />
              </TouchableOpacity>
              <View style={styles.circleIcon} />
              <View style={styles.line} />
              <View style={styles.squareIcon} />
            </View>

            <View style={{ flex: 1, marginTop: 40 }}>
              <Field
                onChangeText={text => this.setState({ locationField: text })}
                value={this.state.locationField}
                placeholder="Current Location"
                placeholderTextColor="#29aadb"
                selectionColor="#32b2e3"
              />
              <Field
                onChangeText={text => this.setState({ searchField: text })}
                value={this.state.searchField}
                placeholder="What to eat?"
                placeholderTextColor="#7b7c82"
                selectionColor="#32b2e3"
              />
            </View>
          </Animated.View>

          <Animated.View style={[styles.feed, headerOpacity]}>
            <Animated.ScrollView>
              {fontLoaded ? <Text style={styles.feedSection}>Top Categories</Text> : null}
              <View style={styles.row}>
                <CategoryButton />
                <CategoryButton />
              </View>
              <View style={styles.row}>
                <CategoryButton />
                <CategoryButton />
              </View>
              <View style={styles.row}>
                <CategoryButton />
                <CategoryButton />
              </View>
              <View style={styles.row}>
                <CategoryButton />
                <CategoryButton />
              </View>
            </Animated.ScrollView>
          </Animated.View>
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
    shadowOpacity: 0.125,
    shadowRadius: 8,
    elevation: 1,
    zIndex: 2
  },
  icons: {
    alignItems: 'center',
    marginLeft: 2.5
  },
  backButton: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20
  },
  circleIcon: {
    height: 6,
    width: 6,
    borderRadius: 50,
    backgroundColor: '#43A0C4',
    marginTop: 3
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
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    zIndex: 1
  },
  feedSection: {
    fontSize: 15,
    color: '#555',
    fontFamily: 'open-sans',
    marginLeft: 15,
    marginTop: 25,
    marginBottom: 15
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  }
};

const mapStateToProps = state => ({
  showSearchModal: state.nav.showSearchModal
});

export default connect(mapStateToProps)(SearchModal);
