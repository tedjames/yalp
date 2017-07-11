import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Animated, Text } from 'react-native';
import { Font } from 'expo';
import CategoryButton from './categoryButton';
import Header from './header';

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
    };
  }

  componentWillMount() {
    this.handleOpen(this.props);
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans': require('../../../assets/fonts/OpenSans-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  componentWillReceiveProps(props) {
    if (this.props.showSearchModal !== props.showSearchModal) {
      this.handleOpen(props);
    }
  }
  handleClose() {
    Animated.timing(this.state.headerOpacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start(() => this.props.toggle());
  }
  handleOpen(props) {
    const { showSearchModal } = props;
    if (typeof showSearchModal === 'undefined') {
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

  render() {
    const { showSearchModal, toggle } = this.props;

    if (showSearchModal) {
      console.log('showing search modal!');
      const headerOpacity = { opacity: this.state.headerOpacity };
      const { fontLoaded } = this.state;
      return (
        <View style={styles.container}>
          <Header headerOpacity={headerOpacity} toggle={toggle} handleClose={this.handleClose} />
          { /* Feed View: conditionally renders locationHistory or categories */ }
          <Animated.View style={[styles.feed, headerOpacity]}>
            <Animated.ScrollView style={{ height: '100%' }}>
              {fontLoaded ? <Text style={styles.feedSection}>Top Categories</Text> : null}
              <View style={styles.row}>
                <CategoryButton label="American" imageName="american" />
                <CategoryButton label="Asian" imageName="asian" />
              </View>
              <View style={styles.row}>
                <CategoryButton label="Barbeque" imageName="bbq" />
                <CategoryButton label="Breakfast" imageName="breakfast" />
              </View>
              <View style={styles.row}>
                <CategoryButton label="Coffee" imageName="coffee" />
                <CategoryButton label="Dessert" imageName="dessert" />
              </View>
              <View style={styles.row}>
                <CategoryButton label="Healthy" imageName="healthy" />
                <CategoryButton label="Ice Cream" imageName="iceCream" />
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
  feed: {
    backgroundColor: 'white',
    zIndex: 1,
    flex: 1
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
