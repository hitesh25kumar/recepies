import React, {Component} from 'react';
import {View, Text, FlatList, TouchableHighlight, Image} from 'react-native';
import {getAllIngredients} from '../mockapi';

export default class IngredientDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderIngredient = ({item}) => {
    return (
      <TouchableHighlight>
        <View>
          <Image source={{uri: item[0].photo_url}} />
          <Text>{item[0].name}</Text>
          <Text>{item[1]}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    const {navigation} = this.props;
    const item = navigation.getParam('ingredients');
    const ingredientsArray = getAllIngredients(item);

    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={ingredientsArray}
          renderItem={this.renderIngredient}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}
