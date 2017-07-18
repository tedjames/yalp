import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Animated, Dimensions, Easing } from 'react-native';
import { toggleSearch } from '../../Actions';
import Categories from './categories';
import Header from './header';
import LocationHistory from './locationHistory';

const { height } = Dimensions.get('window');

class SearchModal extends Component {
  constructor(props) {
    super(props);
    this.animateOpen = this.animateOpen.bind(this);
    this.animateClose = this.animateClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.renderFeed = this.renderFeed.bind(this);
    this.showCategories = this.showCategories.bind(this);
    this.showLocationHistory = this.showLocationHistory.bind(this);

    this.state = {
      locationHistoryVisible: false,
      locationHistoryOpacity: new Animated.Value(0),
      locationHistoryPosition: new Animated.Value(0),
      categoriesVisible: true,
      categoriesOpacity: new Animated.Value(0),
      categoriesPosition: new Animated.Value(0),
      feedPosition: new Animated.Value(height),
      headerOpacity: new Animated.Value(0),
      headerPosition: new Animated.Value(-135),
    };
  }
  componentWillReceiveProps(props) {
    console.log('SearchModal componentWillReceiveProps');
    if (this.props.showSearchModal !== props.showSearchModal) {
      this.handleOpen(props);
    }
  }
  // SearchModal animations
  handleOpen(props) {
    console.log('SearchModal: handleOpen');
    const { showSearchModal } = props;
    if (typeof showSearchModal === 'undefined') {
      return null;
    }
    return showSearchModal ? this.animateOpen() : this.animateClose();
  }
  handleClose() {
    console.log('SearchModal: handleClose');
    Animated.parallel([
      Animated.timing(this.state.categoriesOpacity, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true
      }),
      Animated.timing(this.state.feedPosition, {
        toValue: height,
        duration: 750,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true
      }),
      Animated.timing(this.state.headerOpacity, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true
      }),
      Animated.timing(this.state.headerPosition, {
        toValue: -135,
        duration: 350,
        easing: Easing.inOut(Easing.back(1.25)),
        useNativeDriver: true
      })
    ]).start(() => this.props.toggleSearch());
  }
  animateOpen() {
    console.log('SearchModal: animateOpen');
    this.setState({ categoriesVisible: true, locationHistoryVisible: false });
    Animated.parallel([
      Animated.timing(this.state.feedPosition, {
        toValue: 0,
        duration: 650,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true
      }),
      Animated.timing(this.state.headerOpacity, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true
      }),
      Animated.timing(this.state.headerPosition, {
        toValue: 0,
        duration: 500,
        easing: Easing.out(Easing.poly(3)),
        useNativeDriver: true
      }),
      Animated.timing(this.state.categoriesOpacity, {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true
      }),
      Animated.timing(this.state.categoriesPosition, {
        toValue: 0,
        duration: 500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true
      }),
      Animated.timing(this.state.locationHistoryPosition, {
        toValue: 0,
        duration: 500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true
      }),
    ]).start();
  }
  animateClose() {
    console.log('SearchModal: animateClose');
    Animated.parallel([
      Animated.timing(this.state.categoriesOpacity, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true
      }),
      Animated.timing(this.state.feedPosition, {
        toValue: height,
        duration: 750,
        easing: Easing.inOut(Easing.back(1.25)),
        useNativeDriver: true
      }),
      Animated.timing(this.state.headerOpacity, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true
      }),
      Animated.timing(this.state.headerPosition, {
        toValue: -height,
        duration: 650,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true
      })
    ]).start();
  }

  // Feed's children animations
  showCategories() {
    console.log('SearchModal: showCategories');
    Animated.parallel([
      Animated.timing(this.state.locationHistoryOpacity, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true
      }),
      Animated.timing(this.state.locationHistoryPosition, {
        toValue: height,
        duration: 500,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true
      }),
    ]).start(() => {
      this.setState({ categoriesVisible: true, locationHistoryVisible: false });
      Animated.parallel([
        Animated.timing(this.state.categoriesOpacity, {
          toValue: 1,
          duration: 500,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true
        }),
        Animated.timing(this.state.categoriesPosition, {
          toValue: 0,
          duration: 1,
          useNativeDriver: true
        })
      ]).start();
    });
  }

  showLocationHistory() {
    console.log('SearchModal: showLocationHistory');
    Animated.parallel([
      Animated.timing(this.state.categoriesOpacity, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true
      }),
      Animated.timing(this.state.categoriesPosition, {
        toValue: height,
        duration: 500,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true
      })
    ]).start(() => {
      this.setState({ categoriesVisible: false, locationHistoryVisible: true });
      Animated.parallel([
        Animated.timing(this.state.locationHistoryOpacity, {
          toValue: 1,
          duration: 550,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true
        }),
        Animated.timing(this.state.locationHistoryPosition, {
          toValue: 0,
          duration: 1,
          useNativeDriver: true
        })
      ]).start();
    });
  }

  renderFeed() {
    console.log('SearchModal: renderFeed');
    const feedOpacity = { opacity: this.state.headerOpacity };
    const feedPosition = { transform: [{ translateY: this.state.feedPosition }] };
    const {
      locationHistoryVisible,
      locationHistoryOpacity,
      locationHistoryPosition,
      categoriesVisible,
      categoriesOpacity,
      categoriesPosition
    } = this.state;
    return (
      <Animated.View style={[styles.feed, feedOpacity, feedPosition]}>
        {locationHistoryVisible ?
          <LocationHistory
            opacity={locationHistoryOpacity}
            position={locationHistoryPosition}
          /> : null
        }
        {categoriesVisible ?
          <Categories
            handleClose={this.handleClose}
            opacity={categoriesOpacity}
            position={categoriesPosition}
          /> : null
        }
      </Animated.View>
    );
  }

  render() {
    console.log('SearchModal: render');
    const { showSearchModal, searchQuery } = this.props;

    if (showSearchModal) {
      const headerOpacity = { opacity: this.state.headerOpacity };
      const headerPosition = { transform: [{ translateY: this.state.headerPosition }] };
      return (
        <View style={styles.container}>
          <Header
            searchQuery={searchQuery}
            headerOpacity={headerOpacity}
            headerPosition={headerPosition}
            handleClose={this.handleClose}
            showCategories={this.showCategories}
            showLocationHistory={this.showLocationHistory}
          />
          {this.renderFeed()}
        </View>
      );
    } return null;
  }
}

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'transparent',
    zIndex: 5
  },
  feed: {
    backgroundColor: 'white',
    zIndex: 1,
    flex: 1
  },
};

const mapStateToProps = state => ({
  showSearchModal: state.nav.showSearchModal
});

export default connect(mapStateToProps, { toggleSearch })(SearchModal);
