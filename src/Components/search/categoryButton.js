import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { Font } from 'expo';

export default class CategoryButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans': require('../../../assets/fonts/OpenSans-Regular.ttf'),
      'rubik': require('../../../assets/fonts/Rubik-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.imageContainer}>
        <Image style={styles.image} source={require('../../../assets/images/american.jpg')}>
          <View style={styles.imageBackdrop}>
            {this.state.fontLoaded ? <Text style={styles.categoryName}>American</Text> : null}
          </View>
        </Image>
      </TouchableOpacity>
    );
  }
}

const styles = {
  imageContainer: {
    width: '50%',
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 8
  },
  categoryName: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontFamily: 'open-sans',
    color: 'white',
    bottom: 5
  },
  image: {
    height: 165,
    width: '100%',
  },
  imageBackdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
};
