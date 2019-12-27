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
    backgroundColor:'#fff'
  },
});
