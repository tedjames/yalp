import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Animated } from 'react-native';
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

    this.state = {
      headerOpacity: new Animated.Value(0),
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

  renderFeed() {
    const feedOpacity = { opacity: this.state.headerOpacity };
    return (
      <Animated.View style={[styles.feed, feedOpacity]}>
        {this.props.showLocationHistory ? <LocationHistory /> : <Categories />}
      </Animated.View>
    );
  }

  render() {
    const { showSearchModal, toggle } = this.props;

    if (showSearchModal) {
      const headerOpacity = { opacity: this.state.headerOpacity };
      return (
        <View style={styles.container}>
          <Header headerOpacity={headerOpacity} toggle={toggle} handleClose={this.handleClose} />
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
  showSearchModal: state.nav.showSearchModal,
  showLocationHistory: state.nav.showLocationHistory
});

export default connect(mapStateToProps)(SearchModal);
