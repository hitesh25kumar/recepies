import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {getAllIngredients} from '../mockapi';

const {width, height} = Dimensions.get('window');

export default class IngredientDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderIngredient = ({item}) => {
    return (
      <TouchableHighlight>
        <View style={styles.container}>
          <Image style={styles.photo} source={{uri: item[0].photo_url}} />
          <Text style={styles.title}>{item[0].name}</Text>
          <Text style={{color: 'grey'}}>{item[1]}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    marginTop: 30,
    width: width / 3 - 30,
    height: 160,
  },
  photo: {
    width: width / 3 - 30,
    height: 100,
    borderRadius: 60,
  },
  title: {
    margin: 10,
    marginBottom: 5,
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
  },
});
