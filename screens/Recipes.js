import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  Image
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width, height} = Dimensions.get('window');

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {activeSlide:0};
  }

  _renderItem = () => {
    const {navigation} = this.props;
    const item = navigation.getParam('item');
    return (
      <TouchableHighlight>
        <View>
          <Image source={{uri: item.photo_url}} />
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    const {navigation} = this.props;
    const item = navigation.getParam('item');
    return (
      <ScrollView>
        <View>
          <View>
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
              autoplay={false}
              onSnapToItem={index => this.setState({activeSlide: index})}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
