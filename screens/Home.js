import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {recipes} from '../data';
import {getCategoryName} from '../mockapi';

const {width, height} = Dimensions.get('window');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipes', {item});
  };

  renderRecipes = ({item}) => {
    return (
      <TouchableHighlight
        style={styles.card}
        onPress={() => this.onPressRecipe(item)}>
        <View>
          <Image source={{uri: item.photo_url}} style={styles.photo} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.categoryName}>
            {getCategoryName(item.categoryId)}
          </Text>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          vertical
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={recipes}
          renderItem={this.renderRecipes}
          keyExtractor={item => item.recipeId}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    padding: '3%',
    flex: 1,
  },
  card: {
    width: '45%',
    margin: '2.5%',
    height: height / 3,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 12,
    backgroundColor: '#fff',
    marginBottom: '5%',
  },
  photo: {
    width: '100%',
    height: '60%',
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    color: '#000',
    fontSize: 20,
    paddingTop: 10,
    textAlign: 'center',
    height: 60,
  },
  categoryName: {
    fontSize: 15,
    paddingTop: 10,
    textAlign: 'center',
  },
});
