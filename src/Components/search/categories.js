import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Font } from 'expo';
import CategoryButton from './categoryButton';

export default class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans': require('../../../assets/fonts/OpenSans-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}

const styles = {
  container: {
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
