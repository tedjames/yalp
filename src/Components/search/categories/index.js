import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import CategoryButton from './categoryButton';

const styles = {
  feed: {
    backgroundColor: 'white',
    zIndex: 1,
    flex: 1,
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

export default class Categories extends Component {
  render() {
    const opacity = { opacity: this.props.opacity };
    const position = { transform: [{ translateY: this.props.position }] };
    return (
      <Animated.ScrollView
        style={[{ flex: 1 }, opacity, position]}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="always"
      >
        <Text style={styles.feedSection}>Top Categories</Text>
        <View style={styles.row}>
          <CategoryButton handleClose={this.props.handleClose} label="American" imageName="american" />
          <CategoryButton handleClose={this.props.handleClose} label="Asian" imageName="asian" />
        </View>
        <View style={styles.row}>
          <CategoryButton handleClose={this.props.handleClose} label="Barbeque" imageName="bbq" />
          <CategoryButton handleClose={this.props.handleClose} label="Breakfast" imageName="breakfast" />
        </View>
        <View style={styles.row}>
          <CategoryButton handleClose={this.props.handleClose} label="Coffee" imageName="coffee" />
          <CategoryButton handleClose={this.props.handleClose} label="Dessert" imageName="dessert" />
        </View>
        <View style={styles.row}>
          <CategoryButton handleClose={this.props.handleClose} label="Healthy" imageName="healthy" />
          <CategoryButton handleClose={this.props.handleClose} label="Ice Cream" imageName="iceCream" />
        </View>
        <Text style={styles.feedSection}>More Categories</Text>
        <View style={styles.row}>
          <CategoryButton handleClose={this.props.handleClose} label="Indian" imageName="indian" />
          <CategoryButton handleClose={this.props.handleClose} label="Mexican" imageName="mexican" />
        </View>
        <View style={styles.row}>
          <CategoryButton handleClose={this.props.handleClose} label="Pizza" imageName="pizza" />
          <CategoryButton handleClose={this.props.handleClose} label="Sandwich" imageName="sandwich" />
        </View>
        <View style={styles.row}>
          <CategoryButton handleClose={this.props.handleClose} label="Seafood" imageName="seafood" />
          <CategoryButton handleClose={this.props.handleClose} label="Smoothie" imageName="smoothie" />
        </View>
        <View style={styles.row}>
          <CategoryButton handleClose={this.props.handleClose} label="Sushi" imageName="sushi" />
          <CategoryButton handleClose={this.props.handleClose} label="Vegan" imageName="vegan" />
        </View>
      </Animated.ScrollView>
    );
  }
}
