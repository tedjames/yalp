import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Font } from 'expo';
import { connect } from 'react-redux';
import { toggleFilterModal } from '../../Actions';

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modal: {
    backgroundColor: '#f5f5f5',
    height: 100,
    width: '100%'
  },
  submitButton: {
    backgroundColor: '#1a1a1a'
  },
  submitText: {
    alignSelf: 'center',
    fontFamily: 'open-sans-regular',
    fontSize: 13,
    color: '#f5f5f5',
    letterSpacing: 3.5,
    marginTop: 20,
    marginBottom: 20,
  }
};

class FilterModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-regular': require('../../../assets/fonts/OpenSans-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    const { fontLoaded } = this.state;
    if (this.props.showFilterModal) {
      return (
        <View style={styles.container}>
          <View style={styles.modal}>
            <ScrollView style={styles.scrollview}>
              <Text style={styles.sectionHeader}>Heading</Text>
            </ScrollView>

            <TouchableOpacity activeOpacity={0.95} style={styles.submitButton}>
              {fontLoaded ? <Text style={styles.submitText}>APPLY</Text> : null}
            </TouchableOpacity>
          </View>

        </View>
      );
    } return null;
  }
}

const mapStateToProps = state => ({
  showFilterModal: state.modals
});

export default connect(mapStateToProps, { toggleFilterModal })(FilterModal);
