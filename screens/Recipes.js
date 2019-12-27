import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  Image,
  StyleSheet,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {getCategoryName} from '../mockapi';

const {width, height} = Dimensions.get('window');

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {activeSlide: 0};
  }

  _renderItem = () => {
    const {navigation} = this.props;
    const item = navigation.getParam('item');
    return (
      <TouchableHighlight>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: item.photo_url}} />
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    const {navigation} = this.props;
    const {activeSlide} = this.state;
    const item = navigation.getParam('item');
    console.log('item: ', item);
    return (
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View style={styles.crousel}>
            <Carousel
              ref={c => {
                this._carousel = c;
              }}
              data={item.photosArray}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              firstItem={0}
              loop={false}
              autoplay={true}
              onSnapToItem={index => this.setState({activeSlide: index})}
            />
            <Pagination
              dotsLength={item.photosArray.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotColor="rgba(255,255,255,0.92)"
              dotStyle={styles.paginationDot}
            />
          </View>
        </View>
        <View style={styles.infoRecipeContainer}>
          <Text style={styles.infoRecipeName}>{item.title}</Text>
          <View style={styles.infoContainer}>
            <TouchableHighlight>
              <Text style={styles.category}>
                {getCategoryName(item.categoryId).toUpperCase()}
              </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.infoContainer}>
            <Image
              style={styles.infoPhoto}
              source={require('../assets/icons/time.png')}
            />
            <Text style={styles.infoRecipe}>{item.time} minutes </Text>
          </View>
          <View style={styles.infoContainer}>
            <TouchableHighlight
              underlayColor="rgba(73,182,77,1,0.9)"
              onPress={() => {
                let ingredients = item.ingredients;
                let title = 'Ingredients for ' + item.title;
                navigation.navigate('IngredientDetails', {ingredients, title});
              }}>
              <View style={styles.brnContainer}>
                <Text style={styles.btntext}>View Ingredients</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  carouselContainer: {
    minHeight: 250,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    width,
    height: 250,
  },
  crousel: {
    width,
    height: 250,
  },
  image: {
    width: '100%',
    height: 350,
  },
  paginationContainer: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: 8,
    marginTop: 150,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0,
    backgroundColor: '#fff',
  },
  infoRecipeContainer: {
    flex: 1,
    margin: 25,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoRecipeName: {
    fontSize: 28,
    margin: 10,
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  category: {
    fontSize: 19,
    fontWeight: 'bold',
    margin: 10,
    color: '#2cd18a',
  },
  infoRecipe: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  infoPhoto: {
    height: 20,
    width: 20,
    marginRight: 0,
  },
  infoDescriptionRecipe: {
    fontSize: 19,
    textAlign: 'left',
    margin: 25,
  },
  brnContainer: {
    flex: 1,
    height: 50,
    width: 270,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 100,
    borderColor: '#2cd18a',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntext: {
    fontSize: 16,
    color: '#2cd18a',
  },
});
