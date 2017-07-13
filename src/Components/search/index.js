import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Animated } from 'react-native';
import { toggleSearch } from '../../Actions';
import Categories from './categories';
import Header from './header';
import LocationHistory from './locationHistory';

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
      headerOpacity: new Animated.Value(0),
      locationHistoryVisible: false,
      locationHistoryOpacity: new Animated.Value(0),
      categoriesVisible: true,
      categoriesOpacity: new Animated.Value(0)
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
  // SearchModal animations
  handleOpen(props) {
    const { showSearchModal } = props;
    if (typeof showSearchModal === 'undefined') {
      return null;
    }
    return showSearchModal ? this.animateOpen() : this.animateClose();
  }
  handleClose() {
    Animated.timing(this.state.headerOpacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start(() => this.props.toggleSearch());
  }
  animateOpen() {
    this.setState({ categoriesVisible: true, locationHistoryVisible: false });
    Animated.parallel([
      Animated.timing(this.state.categoriesOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }),
      Animated.timing(this.state.headerOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      })
    ]).start();
  }
  animateClose() {
    Animated.timing(this.state.headerOpacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }

  // Feed's children animations
  showCategories() {
    Animated.timing(this.state.locationHistoryOpacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start(() => {
      this.setState({ categoriesVisible: true, locationHistoryVisible: false });
      Animated.timing(this.state.categoriesOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }).start();
    });
  }

  showLocationHistory() {
    Animated.timing(this.state.categoriesOpacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start(() => {
      this.setState({ categoriesVisible: false, locationHistoryVisible: true });
      Animated.timing(this.state.locationHistoryOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }).start();
    });
  }

  renderFeed() {
    const feedOpacity = { opacity: this.state.headerOpacity };
    const {
      locationHistoryVisible,
      locationHistoryOpacity,
      categoriesVisible,
      categoriesOpacity
    } = this.state;
    return (
      <Animated.View style={[styles.feed, feedOpacity]}>
        {locationHistoryVisible ? <LocationHistory opacity={locationHistoryOpacity} /> : null}
        {categoriesVisible ? <Categories opacity={categoriesOpacity} /> : null}
      </Animated.View>
    );
  }

  render() {
    const { showSearchModal } = this.props;

    if (showSearchModal) {
      const headerOpacity = { opacity: this.state.headerOpacity };
      return (
        <View style={styles.container}>
          <Header
            headerOpacity={headerOpacity}
            handleClose={this.handleClose}
            showCategories={this.showCategories}
            showLocationHistory={this.showLocationHistory}
          />
          {this.renderFeed()}
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
};

const mapStateToProps = state => ({
  showSearchModal: state.nav.showSearchModal
});

export default connect(mapStateToProps, { toggleSearch })(SearchModal);
