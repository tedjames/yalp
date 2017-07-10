import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { Font } from 'expo';

export default class CategoryButton extends Component {
  constructor(props) {
    super(props);
    this.fetchImage = this.fetchImage.bind(this);

    this.state = {
      fontLoaded: false,
      image: require('../../../assets/images/sushi.jpg')
    };
  }
  componentWillMount() {
    this.fetchImage(this.props.imageName);
  }
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans': require('../../../assets/fonts/OpenSans-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  fetchImage(imageName) {
    switch (imageName) {
      case 'american':
        return this.setState({ image: require('../../../assets/images/american.jpg') });
      case 'asian':
        return this.setState({ image: require('../../../assets/images/asian.jpg') });
      case 'bbq':
        return this.setState({ image: require('../../../assets/images/bbq.jpg') });
      case 'breakfast':
        return this.setState({ image: require('../../../assets/images/breakfast.jpg') });
      case 'coffee':
        return this.setState({ image: require('../../../assets/images/coffee.jpg') });
      case 'dessert':
        return this.setState({ image: require('../../../assets/images/dessert.jpg') });
      case 'healthy':
        return this.setState({ image: require('../../../assets/images/healthy.jpg') });
      case 'iceCream':
        return this.setState({ image: require('../../../assets/images/iceCream.jpg') });
      case 'indian':
        return this.setState({ image: require('../../../assets/images/indian.jpg') });
      default:
        return this.setState({ image: require('../../../assets/images/american.jpg') });
    }
  }
  render() {
    const { label } = this.props;
    const { image } = this.state;
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.imageContainer}>
        <Image style={styles.image} source={image}>
          <View style={styles.imageBackdrop}>
            {this.state.fontLoaded ? <Text style={styles.categoryName}>{label}</Text> : null}
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
