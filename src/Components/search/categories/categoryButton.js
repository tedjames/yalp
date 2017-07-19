import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { updateQuery } from '../../../Actions';

class CategoryButton extends Component {
  constructor(props) {
    super(props);
    this.fetchImage = this.fetchImage.bind(this);

    this.state = {
      image: require('../../../../assets/images/sushi.jpg')
    };
  }
  componentWillMount() {
    this.fetchImage(this.props.imageName);
  }
  fetchImage(imageName) {
    switch (imageName) {
      case 'american':
        return this.setState({ image: require('../../../../assets/images/american.jpg') });
      case 'asian':
        return this.setState({ image: require('../../../../assets/images/asian.jpg') });
      case 'bbq':
        return this.setState({ image: require('../../../../assets/images/bbq.jpg') });
      case 'breakfast':
        return this.setState({ image: require('../../../../assets/images/breakfast.jpg') });
      case 'coffee':
        return this.setState({ image: require('../../../../assets/images/coffee.jpg') });
      case 'dessert':
        return this.setState({ image: require('../../../../assets/images/dessert.jpg') });
      case 'healthy':
        return this.setState({ image: require('../../../../assets/images/healthy.jpg') });
      case 'iceCream':
        return this.setState({ image: require('../../../../assets/images/iceCream.jpg') });
      case 'indian':
        return this.setState({ image: require('../../../../assets/images/indian.jpg') });
      case 'mexican':
        return this.setState({ image: require('../../../../assets/images/mexican.jpg') });
      case 'pizza':
        return this.setState({ image: require('../../../../assets/images/pizza.jpg') });
      case 'sandwich':
        return this.setState({ image: require('../../../../assets/images/sandwich.jpg') });
      case 'seafood':
        return this.setState({ image: require('../../../../assets/images/seafood.jpg') });
      case 'smoothie':
        return this.setState({ image: require('../../../../assets/images/smoothie.jpg') });
      case 'sushi':
        return this.setState({ image: require('../../../../assets/images/sushi.jpg') });
      case 'vegan':
        return this.setState({ image: require('../../../../assets/images/vegan.jpg') });
      default:
        return this.setState({ image: require('../../../../assets/images/american.jpg') });
    }
  }
  render() {
    const { label, updateQuery, handleClose } = this.props;
    const { image } = this.state;
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.imageContainer}
        onPress={() => {
          updateQuery(label);
          handleClose();
        }}
      >
        <Image style={styles.image} source={image}>
          <View style={styles.imageBackdrop}>
            <Text style={styles.categoryName}>{label}</Text>
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
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0,
    shadowRadius: 8,
    elevation: 1,
  },
  categoryName: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontFamily: 'open-sans',
    color: 'white',
  },
  image: {
    height: 165,
    width: '100%',
  },
  imageBackdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default connect(null, { updateQuery })(CategoryButton);
